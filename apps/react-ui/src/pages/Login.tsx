import { Form } from '../components/Form'

export function Login(): JSX.Element {
  const handleLogin = (data: any) => {
    console.log('Login data:', data)
    // Implement login logic here
  }

  return (
    <>
      <h1 className="text-4xl tracking-tight font-bold mb-8">Login</h1>
      <Form onSubmit={handleLogin} />
    </>
  )
}
