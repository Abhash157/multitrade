import Link from 'next/link'
import { FaTools, FaShoppingCart, FaComments } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Western Computer Multi Trade Link
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Your trusted partner for computer maintenance and parts
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link 
                href="/services/maintenance"
                className="bg-white text-blue-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all flex flex-col items-center"
              >
                <FaTools className="text-4xl mb-4" />
                <span className="font-semibold">Request Maintenance</span>
              </Link>
              <Link 
                href="/parts"
                className="bg-white text-blue-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all flex flex-col items-center"
              >
                <FaShoppingCart className="text-4xl mb-4" />
                <span className="font-semibold">Order Parts</span>
              </Link>
              <Link 
                href="/support"
                className="bg-white text-blue-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all flex flex-col items-center"
              >
                <FaComments className="text-4xl mb-4" />
                <span className="font-semibold">Live Chat</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Computer Maintenance</h3>
              <p className="text-gray-600">Professional maintenance and repair services for all types of computers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Printer Services</h3>
              <p className="text-gray-600">Expert printer maintenance, repair, and parts replacement.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Parts Sales</h3>
              <p className="text-gray-600">Quality parts for computers, printers, laptops, and projectors.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
