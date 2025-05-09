import Image from 'next/image'
import { FaAward, FaUsers, FaHandshake, FaTools } from 'react-icons/fa'

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO & Founder',
    image: '/team/john-doe.jpg',
    bio: 'With over 20 years of experience in the tech industry, John leads our company with vision and expertise.',
  },
  {
    name: 'Jane Smith',
    position: 'Technical Director',
    image: '/team/jane-smith.jpg',
    bio: 'Jane oversees all technical operations and ensures the highest quality of service delivery.',
  },
  {
    name: 'Mike Johnson',
    position: 'Service Manager',
    image: '/team/mike-johnson.jpg',
    bio: 'Mike manages our service team and ensures efficient operations across all maintenance services.',
  },
  {
    name: 'Sarah Williams',
    position: 'Customer Relations',
    image: '/team/sarah-williams.jpg',
    bio: 'Sarah leads our customer service team, ensuring excellent client satisfaction.',
  },
]

const values = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in every service we provide.',
    icon: FaAward,
  },
  {
    title: 'Teamwork',
    description: 'Our success is built on collaboration and mutual support.',
    icon: FaUsers,
  },
  {
    title: 'Integrity',
    description: 'We conduct our business with honesty and transparency.',
    icon: FaHandshake,
  },
  {
    title: 'Innovation',
    description: 'We continuously improve our services and embrace new technologies.',
    icon: FaTools,
  },
]

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Your trusted partner in computer maintenance and parts since 2010
            </p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Western Computer Multi Trade Link has grown from a small repair shop
                to a comprehensive technology service provider. Our journey has been marked by
                continuous learning, adaptation, and a commitment to excellence.
              </p>
              <p className="text-gray-600">
                Today, we serve thousands of customers across the region, providing top-quality
                maintenance services and parts for computers, printers, laptops, and more. Our
                success is built on our dedication to customer satisfaction and technical expertise.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/about/company.jpg"
                alt="Our Company"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8">
            Join our growing list of satisfied customers and experience the difference
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  )
} 