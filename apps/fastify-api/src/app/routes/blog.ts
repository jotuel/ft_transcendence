import { FastifyInstance } from 'fastify'
import { initServer } from '@ts-rest/fastify'

import { apiBlog, type Post } from '@rfx/common-contracts'
import { date } from 'zod'

const bytes = new Uint8Array(20)

function encodeHex(data: Uint8Array): string {
  let result = ''
  for (let i = 0; i < 2; i++) {
    result += data[i]!.toString(10).padStart(2, '0')
  }
  return result
}

export const mockPostFixtureFactory = (partial: Partial<Post>): Post => ({
  id: 'mock-id',
  title: `Score`,
  content: `Content`,
  description: encodeHex(crypto.getRandomValues(bytes)),
  published: true,
  tags: ['today'],
  ...partial,
})

/**
 * Implement the blog contract as a router using mock data.
 */
export default async function (fastify: FastifyInstance): Promise<void> {
  const s = initServer()
  const router = s.router(apiBlog, {
    getPost: async ({ params: { id } }) => {
      const post = mockPostFixtureFactory({ id })

      if (!post) {
        return {
          status: 404,
          body: null,
        }
      }

      return {
        status: 200,
        body: post,
      }
    },
    getPosts: async ({ query }) => {
      const posts = [mockPostFixtureFactory({ id: '1' }), mockPostFixtureFactory({ id: '2' })]

      return {
        status: 200,
        body: {
          posts,
          count: 0,
          skip: query.skip,
          take: query.take,
        },
      }
    },
    createPost: async ({ body }) => {
      const post = mockPostFixtureFactory(body)

      return {
        status: 201,
        body: post,
      }
    },
    updatePost: async ({ body }) => {
      const post = mockPostFixtureFactory(body)

      return {
        status: 200,
        body: post,
      }
    },
    deletePost: async () => {
      return {
        status: 200,
        body: { message: 'Post deleted' },
      }
    },
    testPathParams: async ({ params }) => {
      return {
        status: 200,
        body: params,
      }
    },
  })

  fastify.register(s.plugin(router))
}
