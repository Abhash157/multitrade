import { FaSearch, FaFilter } from 'react-icons/fa'

const categories = [
  {
    name: 'Computer Parts',
    items: [
      { name: 'Processors', count: 24 },
      { name: 'Motherboards', count: 18 },
      { name: 'RAM', count: 32 },
      { name: 'Storage', count: 45 },
      { name: 'Graphics Cards', count: 15 },
    ],
  },
  {
    name: 'Printer Parts',
    items: [
      { name: 'Print Heads', count: 12 },
      { name: 'Toner Cartridges', count: 28 },
      { name: 'Fusers', count: 8 },
      { name: 'Rollers', count: 15 },
    ],
  },
  {
    name: 'Laptop Parts',
    items: [
      { name: 'Screens', count: 20 },
      { name: 'Keyboards', count: 25 },
      { name: 'Batteries', count: 30 },
      { name: 'Chargers', count: 15 },
    ],
  },
  {
    name: 'Projector Parts',
    items: [
      { name: 'Lamps', count: 10 },
      { name: 'Lenses', count: 8 },
      { name: 'Filters', count: 12 },
    ],
  },
]

export default function PartsPage() {
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50">
            <FaFilter className="mr-2" />
            Filter
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{category.name}</h2>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item.name} className="flex justify-between items-center">
                    <span className="text-gray-600">{item.name}</span>
                    <span className="text-sm text-gray-500">({item.count})</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

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