import Image from 'next/image'
import Link from 'next/link'
import { FaCalendar, FaUser, FaTag } from 'react-icons/fa'

const categories = [
  'All Posts',
  'Tech Tips',
  'Company News',
  'Industry Updates',
  'Maintenance Guides',
  'Product Reviews',
]

const posts = [
  {
    title: 'Essential Computer Maintenance Tips for 2024',
    excerpt: 'Learn the most important maintenance practices to keep your computer running smoothly in 2024.',
    image: '/blog/computer-maintenance.jpg',
    category: 'Tech Tips',
    author: 'John Doe',
    date: 'March 15, 2024',
    slug: 'essential-computer-maintenance-tips-2024',
  },
  {
    title: 'New Printer Parts Collection Available',
    excerpt: 'We are excited to announce our expanded collection of printer parts and accessories.',
    image: '/blog/printer-parts.jpg',
    category: 'Company News',
    author: 'Jane Smith',
    date: 'March 10, 2024',
    slug: 'new-printer-parts-collection',
  },
  {
    title: 'Understanding Laptop Battery Life',
    excerpt: 'A comprehensive guide to maximizing your laptop battery life and performance.',
    image: '/blog/laptop-battery.jpg',
    category: 'Tech Tips',
    author: 'Mike Johnson',
    date: 'March 5, 2024',
    slug: 'understanding-laptop-battery-life',
  },
  {
    title: 'Latest Trends in Computer Hardware',
    excerpt: 'Stay updated with the latest developments in computer hardware technology.',
    image: '/blog/hardware-trends.jpg',
    category: 'Industry Updates',
    author: 'Sarah Williams',
    date: 'February 28, 2024',
    slug: 'latest-trends-computer-hardware',
  },
]

export default function BlogPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & News</h1>
          <p className="text-xl text-gray-600">
            Stay updated with the latest tech tips, company news, and industry insights
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FaCalendar className="mr-2" />
                  <span>{post.date}</span>
                  <FaUser className="ml-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    <FaTag className="mr-2" />
                    {post.category}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6">Get the latest updates and tech tips delivered to your inbox</p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 