import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { NavLink } from 'react-router'
import Container from '../Common/Container'
import img from '../assets/Side Image.png'

const SignUp = () => {
  const [notice, setNotice] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setNotice('Account creation is not connected yet. Please try again later.')
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
            Create an account
          </h1>
          <p className="mt-4 text-sm">Enter your details below</p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="signup-name">Name</label>
            <input
              className="w-full border-b border-gray-300 px-1 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-primary"
              id="signup-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Name"
              required
            />

            <label className="sr-only" htmlFor="signup-email">Email or phone number</label>
            <input
              className="w-full border-b border-gray-300 px-1 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-primary"
              id="signup-email"
              name="email"
              type="text"
              autoComplete="username"
              placeholder="Email or Phone Number"
              required
            />

            <label className="sr-only" htmlFor="signup-password">Password</label>
            <input
              className="w-full border-b border-gray-300 px-1 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-primary"
              id="signup-password"
              name="password"
              type="password"
              autoComplete="new-password"
              minLength={8}
              placeholder="Password"
              required
            />

            <button
              className="w-full rounded-sm bg-primary py-3.5 text-sm font-medium text-white transition-colors hover:bg-red-600"
              type="submit"
            >
              Create Account
            </button>
          </form>

          <button
            className="mt-4 flex w-full items-center justify-center gap-3 rounded-sm border border-black/25 py-3 text-sm transition-colors hover:bg-gray-50"
            type="button"
            onClick={() => setNotice('Google sign-up is not connected yet.')}
          >
            <FcGoogle className="text-xl" aria-hidden="true" />
            Sign up with Google
          </button>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-1 text-sm text-gray-600">
            <span>Already have an account?</span>
            <NavLink
              className="ml-2 border-b border-gray-500 pb-0.5 text-black hover:text-primary"
              to="/login"
            >
              Log in
            </NavLink>
          </div>

          {notice && (
            <p className="mt-4 text-center text-sm text-primary" role="status">
              {notice}
            </p>
          )}
        </div>
      </section>
    </Container>
  )
}

export default SignUp