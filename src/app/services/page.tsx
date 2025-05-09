import Link from 'next/link'
import { FaTools, FaLaptop, FaPrint, FaServer, FaNetworkWired, FaShieldAlt } from 'react-icons/fa'

const services = [
  {
    title: 'Computer Maintenance',
    description: 'Professional maintenance and repair services for all types of computers.',
    icon: FaLaptop,
    href: '/services/computer-maintenance',
  },
  {
    title: 'Printer Services',
    description: 'Expert printer maintenance, repair, and parts replacement.',
    icon: FaPrint,
    href: '/services/printer-services',
  },
  {
    title: 'Network Solutions',
    description: 'Complete network setup, maintenance, and troubleshooting services.',
    icon: FaNetworkWired,
    href: '/services/network-solutions',
  },
  {
    title: 'Server Maintenance',
    description: 'Professional server maintenance and optimization services.',
    icon: FaServer,
    href: '/services/server-maintenance',
  },
  {
    title: 'Security Services',
    description: 'Comprehensive security solutions and maintenance.',
    icon: FaShieldAlt,
    href: '/services/security-services',
  },
  {
    title: 'General Maintenance',
    description: 'Regular maintenance and check-up services for all equipment.',
    icon: FaTools,
    href: '/services/general-maintenance',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 mb-12">
            Comprehensive maintenance and repair services for all your technical needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-8">
            Contact us for specialized services tailored to your specific needs
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
} 