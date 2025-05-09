"use client"

import { useState } from 'react'
import Link from 'next/link'
import { FaTools, FaLaptop, FaPrint, FaServer, FaNetworkWired, FaShieldAlt } from 'react-icons/fa'
import { useApp } from '@/context/AppContext'

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
  const { createMaintenanceRequest } = useApp()
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [showRequestForm, setShowRequestForm] = useState(false)
  const [requestDescription, setRequestDescription] = useState('')

  const handleServiceClick = (service: string) => {
    setSelectedService(service)
    setShowRequestForm(true)
  }

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedService && requestDescription) {
      createMaintenanceRequest(selectedService, requestDescription)
      setShowRequestForm(false)
      setRequestDescription('')
      setSelectedService(null)
    }
  }

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
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button
                onClick={() => handleServiceClick(service.title)}
                className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Request Service
              </button>
            </div>
          ))}
        </div>

        {/* Service Request Form Modal */}
        {showRequestForm && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Request {selectedService}
              </h2>
              <form onSubmit={handleSubmitRequest}>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Describe your service needs
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    value={requestDescription}
                    onChange={(e) => setRequestDescription(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Please provide details about your service requirements..."
                    required
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowRequestForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

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