"use client"

import { useState } from 'react'
import { FaSearch, FaFilter, FaShoppingCart } from 'react-icons/fa'
import { useApp } from '@/context/AppContext'

const categories = [
  {
    name: 'Computer Parts',
    items: [
      { id: '1', name: 'Processors', count: 24, price: 299.99, category: 'Computer Parts' },
      { id: '2', name: 'Motherboards', count: 18, price: 199.99, category: 'Computer Parts' },
      { id: '3', name: 'RAM', count: 32, price: 89.99, category: 'Computer Parts' },
      { id: '4', name: 'Storage', count: 45, price: 149.99, category: 'Computer Parts' },
      { id: '5', name: 'Graphics Cards', count: 15, price: 499.99, category: 'Computer Parts' },
    ],
  },
  {
    name: 'Printer Parts',
    items: [
      { id: '6', name: 'Print Heads', count: 12, price: 79.99, category: 'Printer Parts' },
      { id: '7', name: 'Toner Cartridges', count: 28, price: 49.99, category: 'Printer Parts' },
      { id: '8', name: 'Fusers', count: 8, price: 129.99, category: 'Printer Parts' },
      { id: '9', name: 'Rollers', count: 15, price: 39.99, category: 'Printer Parts' },
    ],
  },
  {
    name: 'Laptop Parts',
    items: [
      { id: '10', name: 'Screens', count: 20, price: 199.99, category: 'Laptop Parts' },
      { id: '11', name: 'Keyboards', count: 25, price: 59.99, category: 'Laptop Parts' },
      { id: '12', name: 'Batteries', count: 30, price: 89.99, category: 'Laptop Parts' },
      { id: '13', name: 'Chargers', count: 15, price: 49.99, category: 'Laptop Parts' },
    ],
  },
  {
    name: 'Projector Parts',
    items: [
      { id: '14', name: 'Lamps', count: 10, price: 149.99, category: 'Projector Parts' },
      { id: '15', name: 'Lenses', count: 8, price: 299.99, category: 'Projector Parts' },
      { id: '16', name: 'Filters', count: 12, price: 29.99, category: 'Projector Parts' },
    ],
  },
]

export default function PartsPage() {
  const { addToCart, cart } = useApp()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showFilter, setShowFilter] = useState(false)

  const allItems = categories.flatMap(category => category.items)

  const filteredItems = allItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleAddToCart = (item: any) => {
    addToCart(item)
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Parts Catalog</h1>
          <p className="text-xl text-gray-600">
            Browse our extensive collection of quality parts and accessories
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search parts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50"
          >
            <FaFilter className="mr-2" />
            Filter
          </button>
        </div>

        {/* Filter Options */}
        {showFilter && (
          <div className="mb-8 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === null
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Parts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mb-4">Available: {item.count}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
            <div className="space-y-2">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between items-center font-semibold">
                  <span>Total</span>
                  <span>
                    ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Can't Find What You Need?</h2>
          <p className="text-gray-600 mb-8">
            Contact us for custom parts or special orders
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            Request Custom Part
          </button>
        </div>
      </div>
    </div>
  )
} 