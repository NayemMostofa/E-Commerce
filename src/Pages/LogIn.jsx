import { useState } from 'react'
import { NavLink } from 'react-router'
import Container from '../Common/Container'
import img from '../assets/Side Image.png'

const LogIn = () => {
  const [notice, setNotice] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setNotice('Login is not connected yet. Please try again later.')
  }

  return (
    <Container>
      <section className="grid min-h-[calc(100vh-5rem)] items-center gap-10 pb-16 pt-8 md:grid-cols-[1.2fr_0.8fr] md:gap-14 lg:gap-24">
        <div className="relative flex min-h-72 items-center justify-center overflow-hidden rounded-sm bg-[#cbe7eb] sm:min-h-96 md:min-h-[34rem]">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={img}
            alt="A customer shopping in a store"
          />
        </div>

        <div className="mx-auto w-full max-w-96">
          <h1 className="font-Inter text-3xl font-medium tracking-wide sm:text-4xl">
            Log in to Exclusive
          </h1>
          <p className="mt-4 text-sm">Enter your details below</p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="login-identifier">
              Email or phone number
            </label>
            <input
              className="w-full border-b border-gray-300 px-1 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-primary"
              id="login-identifier"
              name="identifier"
              type="text"
              autoComplete="username"
              placeholder="Email or Phone Number"
              required
            />

            <label className="sr-only" htmlFor="login-password">Password</label>
            <input
              className="w-full border-b border-gray-300 px-1 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-primary"
              id="login-password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              required
            />

            <div className="flex items-center justify-between gap-4 pt-1">
              <button
                className="rounded-sm bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-red-600"
                type="submit"
              >
                Log In
              </button>
              <button
                className="text-sm text-primary hover:underline"
                type="button"
                onClick={() => setNotice('Password recovery is not available yet.')}
              >
                Forgot Password?
              </button>
            </div>
          </form>

          {notice && (
            <p className="mt-5 text-sm text-primary" role="status">
              {notice}
            </p>
          )}

          <p className="mt-7 text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <NavLink className="border-b border-gray-500 pb-0.5 text-black hover:text-primary" to="/signup">
              Sign up
            </NavLink>
          </p>
        </div>
      </section>
    </Container>
  )
}

export default LogIn