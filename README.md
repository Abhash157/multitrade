# Western Computer Multi Trade Link Website

A modern, responsive website for Western Computer Multi Trade Link, offering maintenance services and parts sales for computers, printers, laptops, and related equipment.

## Features

- **Modern UI/UX**: Clean, responsive design with dark/light mode support
- **Service Management**: Comprehensive service booking and tracking system
- **Parts Catalog**: Detailed parts catalog with search and filter functionality
- **Blog & News**: Dynamic content management for company updates and tech tips
- **Support System**: Integrated messaging tool and complaint tracking
- **User Dashboard**: Personalized user experience with order history and status tracking
- **Admin Panel**: Complete administrative control over services and content

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Forms**: React Hook Form
- **Authentication**: NextAuth.js
- **Database**: Prisma with PostgreSQL
- **Maps**: React Map GL
- **Notifications**: React Hot Toast

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/WC.git
   cd WC
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```
   DATABASE_URL="your-database-url"
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
WC/
├── src/                    # Source code
│   ├── app/               # App router pages
│   │   ├── page.tsx      # Page components
│   │   └── api/          # API routes
│   ├── components/        # Reusable components
│   │   ├── layout/       # Layout components
│   │   ├── ui/          # UI components
│   │   ├── forms/       # Form components
│   │   ├── products/    # Product-related components
│   │   ├── services/    # Service-related components
│   │   ├── blog/        # Blog components
│   │   └── auth/        # Authentication components
│   ├── lib/             # Utility functions and configurations
│   ├── types/           # TypeScript type definitions
│   ├── hooks/           # Custom React hooks
│   └── styles/          # Global styles
├── public/               # Static assets
├── .next/               # Next.js build output
├── node_modules/        # Dependencies
└── package.json         # Project configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@wcmultitrade.com or visit our [support page](https://wcmultitrade.com/support).
