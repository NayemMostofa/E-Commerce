import { useState } from 'react'
import { FiMail, FiPhone } from 'react-icons/fi'
import BreadCrumb from '../Common/BreadCrumb'
import Container from '../Common/Container'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const message = formData.get('message')
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`

    window.location.href = `mailto:customer@exclusive.com?subject=${encodeURIComponent('Contact form message')}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <Container>
      <BreadCrumb />

      <section className="mb-20 grid grid-cols-1 gap-7.5 md:grid-cols-[1fr_2.2fr]">
        <div className="rounded-sm bg-white px-8 py-10 shadow-[0_1px_13px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              <FiPhone aria-hidden="true" />
            </span>
            <h1 className="font-medium">Call To Us</h1>
          </div>
          <p className="mt-6 text-sm leading-6">
            We are available 24/7, 7 days a week.
          </p>
          <a className="mt-3 block text-sm hover:text-primary" href="tel:+880161112222">
            Phone: +880161112222
          </a>

          <hr className="my-7 border-gray-300" />

          <div className="flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              <FiMail aria-hidden="true" />
            </span>
            <h2 className="font-medium">Write To Us</h2>
          </div>
          <p className="mt-6 text-sm leading-6">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <a className="mt-3 block text-sm hover:text-primary" href="mailto:customer@exclusive.com">
            Emails: customer@exclusive.com
          </a>
          <a className="mt-3 block text-sm hover:text-primary" href="mailto:support@exclusive.com">
            Emails: support@exclusive.com
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          onChange={() => setSubmitted(false)}
          className="rounded-sm bg-white px-6 py-8 shadow-[0_1px_13px_rgba(0,0,0,0.05)] sm:px-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <input
              className="min-w-0 rounded-sm bg-[#f5f5f5] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-primary"
              type="text"
              name="name"
              placeholder="Your Name *"
              aria-label="Your Name"
              required
            />
            <input
              className="min-w-0 rounded-sm bg-[#f5f5f5] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-primary"
              type="email"
              name="email"
              placeholder="Your Email *"
              aria-label="Your Email"
              required
            />
            <input
              className="min-w-0 rounded-sm bg-[#f5f5f5] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-primary"
              type="tel"
              name="phone"
              placeholder="Your Phone *"
              aria-label="Your Phone"
              required
            />
          </div>
          <textarea
            className="mt-4 min-h-40 w-full resize-y rounded-sm bg-[#f5f5f5] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-primary"
            name="message"
            placeholder="Your Message"
            aria-label="Your Message"
            required
          />
          <div className="mt-5 flex flex-col items-end gap-3 sm:flex-row sm:justify-end">
            {submitted && (
              <p className="text-sm text-green-700" role="status">
                Your email app should open with your message ready to send.
              </p>
            )}
            <button
              className="rounded-sm bg-primary px-8 py-4 text-sm text-white transition-colors hover:bg-red-600"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </Container>
  )
}

export default Contact