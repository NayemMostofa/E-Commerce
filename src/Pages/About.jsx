import BreadCrumb from '../Common/BreadCrumb'
import Container from '../Common/Container'
import deliveryIcon from '../assets/icon-delivery.png'
import customerServiceIcon from '../assets/Icon-Customer service.png'
import secureIcon from '../assets/Icon-secure.png'
import { FiDollarSign, FiShoppingBag, FiShoppingCart, FiUsers } from 'react-icons/fi'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const stats = [
  { icon: FiUsers, value: '10.5k', label: 'Sellers active our site' },
  { icon: FiDollarSign, value: '33k', label: 'Monthly Product Sale', featured: true },
  { icon: FiShoppingBag, value: '45.5k', label: 'Customer active in our site' },
  { icon: FiShoppingCart, value: '25k', label: 'Annual gross sale in our site' },
]

const team = [
  {
    name: 'Tom Cruise',
    role: 'Founder & Chairman',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=720&q=85',
    imageAlt: 'Portrait of Tom Cruise',
  },
  {
    name: 'Emma Watson',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=85',
    imageAlt: 'Portrait of Emma Watson',
  },
  {
    name: 'Will Smith',
    role: 'Product Designer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=720&q=85',
    imageAlt: 'Portrait of Will Smith',
  },
]

const services = [
  {
    image: deliveryIcon,
    title: 'FREE AND FAST DELIVERY',
    description: 'Free delivery for all orders over $140',
  },
  {
    image: customerServiceIcon,
    title: '24/7 CUSTOMER SERVICE',
    description: 'Friendly 24/7 customer support',
  },
  {
    image: secureIcon,
    title: 'MONEY BACK GUARANTEE',
    description: 'We return money within 30 days',
  },
]

const socialLinks = [
  { label: 'Twitter', Icon: FaTwitter },
  { label: 'Instagram', Icon: FaInstagram },
  { label: 'LinkedIn', Icon: FaLinkedinIn },
]

const About = () => {
  return (
    <Container>
      <BreadCrumb />

      <section className="grid items-center gap-10 pb-20 md:grid-cols-2 md:gap-12 lg:gap-18">
        <div>
          <h1 className="font-Inter text-3xl font-semibold tracking-wide sm:text-4xl">
            Our Story
          </h1>
          <p className="mt-8 text-sm leading-6">
            Launched in 2015, Exclusive is South Asia&apos;s premier online
            shopping marketplace with an active presence in Bangladesh.
            Supported by a wide range of tailored marketing, data and service
            solutions, Exclusive has 10,500 sellers and 300 brands and serves
            3 million customers across the region.
          </p>
          <p className="mt-5 text-sm leading-6">
            Exclusive has more than 1 million products to offer, growing at a
            very fast rate. Exclusive offers a diverse assortment in categories
            ranging from consumer goods to fashion.
          </p>
        </div>
        <img
          className="h-72 w-full rounded-sm object-cover sm:h-96"
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=90"
          alt="Women enjoying a shopping trip"
        />
      </section>

      <section
        className="grid grid-cols-2 gap-5 pb-20 lg:grid-cols-4"
        aria-label="Exclusive at a glance"
      >
        {stats.map(({ icon: Icon, value, label, featured }) => (
          <div
            key={label}
            className={`flex min-h-40 flex-col items-center justify-center rounded-sm border px-3 py-6 text-center transition-colors ${
              featured
                ? 'border-primary bg-primary text-white'
                : 'border-black/20 bg-white text-black hover:border-primary hover:bg-primary hover:text-white'
            }`}
          >
            <span
              className={`mb-3 flex h-14 w-14 items-center justify-center rounded-full ${
                featured ? 'bg-white/25' : 'bg-black/10'
              }`}
            >
              <Icon className="text-2xl" aria-hidden="true" />
            </span>
            <strong className="font-Inter text-xl font-bold">{value}</strong>
            <span className="mt-1 text-xs sm:text-sm">{label}</span>
          </div>
        ))}
      </section>

      <section className="pb-16" aria-label="Our team">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7.5">
          {team.map((member) => (
            <article key={member.name} className="min-w-0">
              <div className="flex h-72 items-end justify-center overflow-hidden rounded-sm bg-[#f5f5f5] sm:h-80">
                <img
                  className="h-full w-full object-cover object-top"
                  src={member.image}
                  alt={member.imageAlt}
                  loading="lazy"
                />
              </div>
              <h2 className="mt-6 font-Inter text-2xl font-medium">{member.name}</h2>
              <p className="mt-1 text-sm">{member.role}</p>
              <ul className="mt-3 flex items-center gap-4" aria-label={`${member.name} social links`}>
                {socialLinks.map(({ label, Icon }) => (
                  <li key={label}>
                    <span className="text-base" aria-label={label} title={label}>
                      <Icon aria-hidden="true" />
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2" aria-label="Team member page 1 of 5">
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
        </div>
      </section>

      <section
        className="mb-20 grid gap-8 rounded-sm border border-primary px-5 py-8 sm:grid-cols-3 sm:gap-4 sm:px-6 lg:px-10"
        aria-label="Our customer services"
      >
        {services.map(({ image, title, description }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black p-4 ring-8 ring-gray-300">
              <img className="h-full w-full object-contain" src={image} alt="" />
            </div>
            <h2 className="mt-5 text-sm font-semibold sm:text-base">{title}</h2>
            <p className="mt-2 text-xs sm:text-sm">{description}</p>
          </div>
        ))}
      </section>
    </Container>
  )
}

export default About