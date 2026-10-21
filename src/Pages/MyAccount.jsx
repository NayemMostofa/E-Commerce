import { useState } from 'react'
import { NavLink } from 'react-router'
import BreadCrumb from '../Common/BreadCrumb'
import Container from '../Common/Container'

const initialProfile = {
  firstName: 'Md',
  lastName: 'Rimel',
  email: 'rimel@gmail.com',
  address: 'Kingston, 5236, United State',
}

const MyAccount = () => {
  const [profile, setProfile] = useState(initialProfile)
  const [notice, setNotice] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    setProfile({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      address: formData.get('address'),
    })
    setNotice('Profile changes saved for this session.')
  }

  const handleCancel = () => {
    setProfile(initialProfile)
    setNotice('')
  }

  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between gap-2 pt-8 text-sm">
        <BreadCrumb />
        <p>
          Welcome! <span className="text-primary">Md Rimel</span>
        </p>
      </div>

      <section className="grid gap-8 pb-20 pt-4 md:grid-cols-[190px_1fr] lg:grid-cols-[220px_1fr] lg:gap-20">
        <aside aria-label="Account navigation">
          <h1 className="font-medium">Manage My Account</h1>
          <ul className="ml-4 mt-4 space-y-3 text-sm">
            <li>
              <a className="text-primary" href="#profile">My Profile</a>
            </li>
            <li>
              <button
                className="text-gray-500 hover:text-primary"
                type="button"
                onClick={() => setNotice('Address book is not available yet.')}
              >
                Address Book
              </button>
            </li>
            <li>
              <button
                className="text-gray-500 hover:text-primary"
                type="button"
                onClick={() => setNotice('Payment options are not available yet.')}
              >
                My Payment Options
              </button>
            </li>
          </ul>

          <h2 className="mt-7 font-medium">My Orders</h2>
          <ul className="ml-4 mt-4 space-y-3 text-sm text-gray-500">
            <li>
              <NavLink className="hover:text-primary" to="/cartPages">My Returns</NavLink>
            </li>
            <li>
              <button
                className="hover:text-primary"
                type="button"
                onClick={() => setNotice('Order cancellations are not available yet.')}
              >
                My Cancellations
              </button>
            </li>
          </ul>

          <h2 className="mt-7 font-medium">
            <NavLink className="hover:text-primary" to="/Wishlist">My WishList</NavLink>
          </h2>
        </aside>

        <form
          id="profile"
          className="rounded-sm bg-white px-5 py-6 shadow-[0_1px_13px_rgba(0,0,0,0.05)] sm:px-8 sm:py-8 lg:px-12"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-6 text-lg font-medium text-primary">Edit Your Profile</h2>

          <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            <label className="text-sm">
              First Name
              <input
                className="mt-2 block w-full rounded-sm bg-[#f5f5f5] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-primary"
                name="firstName"
                type="text"
                autoComplete="given-name"
                value={profile.firstName}
                onChange={(event) => {
                  setProfile({ ...profile, firstName: event.target.value })
                  setNotice('')
                }}
                required
              />
            </label>

            <label className="text-sm">
              Last Name
              <input
                className="mt-2 block w-full rounded-sm bg-[#f5f5f5] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-primary"
                name="lastName"
                type="text"
                autoComplete="family-name"
                value={profile.lastName}
                onChange={(event) => {
                  setProfile({ ...profile, lastName: event.target.value })
                  setNotice('')
                }}
                required
              />
            </label>

            <label className="text-sm">
              Email
              <input
                className="mt-2 block w-full rounded-sm bg-[#f5f5f5] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-primary"
                name="email"
                type="email"
                autoComplete="email"
                value={profile.email}
                onChange={(event) => {
                  setProfile({ ...profile, email: event.target.value })
                  setNotice('')
                }}
                required
              />
            </label>

            <label className="text-sm">
              Address
              <input
                className="mt-2 block w-full rounded-sm bg-[#f5f5f5] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-primary"
                name="address"
                type="text"
                autoComplete="street-address"
                value={profile.address}
                onChange={(event) => {
                  setProfile({ ...profile, address: event.target.value })
                  setNotice('')
                }}
                required
              />
            </label>
          </div>

          <fieldset className="mt-7 space-y-3">
            <legend className="mb-3 text-sm">Password Changes</legend>
            <label className="sr-only" htmlFor="current-password">Current Password</label>
            <input
              className="block w-full rounded-sm bg-[#f5f5f5] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-primary"
              id="current-password"
              type="password"
              autoComplete="current-password"
              placeholder="Current Password"
            />
            <label className="sr-only" htmlFor="new-password">New Password</label>
            <input
              className="block w-full rounded-sm bg-[#f5f5f5] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-primary"
              id="new-password"
              type="password"
              autoComplete="new-password"
              placeholder="New Password"
            />
            <label className="sr-only" htmlFor="confirm-password">Confirm New Password</label>
            <input
              className="block w-full rounded-sm bg-[#f5f5f5] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-primary"
              id="confirm-password"
              type="password"
              autoComplete="new-password"
              placeholder="Confirm New Password"
            />
          </fieldset>

          <div className="mt-6 flex flex-wrap items-center justify-end gap-5">
            {notice && <p className="mr-auto text-sm text-primary" role="status">{notice}</p>}
            <button className="text-sm hover:text-primary" type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button
              className="rounded-sm bg-primary px-8 py-3 text-sm text-white transition-colors hover:bg-red-600"
              type="submit"
            >
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </Container>
  )
}

export default MyAccount