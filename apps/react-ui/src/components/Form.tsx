import { useForm } from 'react-hook-form'

// TODO: implement hashing, salting, and secure transmission/storage of sensitive data
type FormData = {
  name: string
  email: string
}

export interface FormProps {
  onSubmit: (data: FormData) => void
}

export function Form({ onSubmit }: FormProps): JSX.Element {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          {...register('name', { required: true, maxLength: 20 })}
          type="text"
          className="w-full border border-slate-300 rounded-md px-3 py-2"
        />
        {errors.name && <span className="text-red-500 text-sm">This field is required and max length is 20.</span>}
      </div>
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          {...register('email', {
            pattern: /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i,
          })}
          type="email"
          className="w-full border border-slate-300 rounded-md px-3 py-2"
        />
        {errors.email && <span className="text-red-500 text-sm">Please enter a valid email address.</span>}
      </div>
      <button type="submit" className="bg-slate-800 text-white px-4 py-2 rounded-md">
        Submit
      </button>
    </form>
  )
}
