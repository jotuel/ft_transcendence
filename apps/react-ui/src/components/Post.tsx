import { apiQuery } from '../api/query-client'
import { Link } from 'react-router-dom'

export interface PostProps {
  postId: string
}

export function Post({ postId }: PostProps): JSX.Element {
  //const navigate = useNavigate()

  const { data, error, isLoading } = apiQuery.getPost.useQuery(
    [`post-${postId}`],
    {
      params: { id: postId },
    },
    {
      networkMode: 'offlineFirst',
      enabled: postId !== undefined,
      onSettled: () => {
        console.log('tried')
      },
      staleTime: 1000 * 60 * 30,
    },
  )

  // not implemented for this example
  const { mutate: deletePost } = apiQuery.deletePost.useMutation({
    onSuccess: () => {
      //navigate('/')
    },
  })

  if (error) {
    return (
      <div className="prose w-full h-full flex flex-row justify-center items-center">
        <div>
          <h1>Post not found!</h1>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="prose w-full h-full flex flex-row justify-center items-center">
        <div>
          <h1>Loading...</h1>
          <progress className="progress w-56"></progress>
        </div>
      </div>
    )
  }

  const post = data.body

  return (
    <div>
      {post ? (
        <div className="prose max-w-none mx-auto px-2 sm:px-0">
          <div className="flex flex-col gap-4 sm:flex-row mb-10">
            <div className="flex flex-col">
              <h1 className="text-3xl mb-2 font-bold tracking-tighter">{post.title}</h1>
              <h3 className="text-xl font-medium tracking-tight">{post.description}</h3>
            </div>
          </div>
          <p>{post.content}</p>
          <div className="flex flex-row gap-2 mt-8">
            <button
              className="bg-slate-800 text-white px-3 py-2 rounded-md"
              onClick={() => deletePost({ params: { id: post.id } })}
            >
              Delete
            </button>

            {/* Inline editing can be implemented by navigating to an edit route or by showing an inline form.
                For simplicity here we programmatically navigate to the edit page. If you prefer react-router
                programmatic navigation, uncomment the useNavigate at the top of this file and use navigate(`/post/${post.id}/edit`).
                For an inline form you'd add useState hooks for title/description/content and call apiQuery.updatePost.useMutation
                at the top of this component to submit changes. */}
            <button
              className="bg-blue-600 text-white px-3 py-2 rounded-md"
              onClick={() => {
                // Navigate to the edit page for this post.
                // If you want to keep it client-side with react-router use:
                // const navigate = useNavigate(); navigate(`/post/${post.id}/edit`);
                window.location.href = `/post/${post.id}/edit`
              }}
            >
              Open Editor
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
