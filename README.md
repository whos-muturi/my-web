# SecondChance - Second-Hand Marketplace

A modern e-commerce platform for buying and selling second-hand items, built with React, Express.js, and MongoDB.

## Features

### 🛍️ Core Marketplace Features
- **Product Listings**: Browse and search through thousands of second-hand items
- **Advanced Filtering**: Filter by category, condition, price range, and location
- **Real-time Search**: Instant search results with autocomplete
- **Product Details**: Comprehensive product pages with multiple images and seller information

### 🔐 User Management
- **Authentication**: Secure user registration and login with JWT
- **User Profiles**: Customizable profiles with ratings and reviews
- **Dashboard**: Personal dashboard for managing listings and orders
- **Favorites**: Save items to wishlist for later

### 💰 E-commerce Features
- **Secure Payments**: Stripe integration for safe transactions
- **Order Management**: Track orders from purchase to delivery
- **Inventory Management**: Real-time stock updates
- **Shipping Options**: Multiple shipping methods and cost calculation

### 📱 Modern UI/UX
- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **Dark/Light Mode**: Theme switching capability
- **Intuitive Navigation**: Easy-to-use interface

### 🔧 Admin Features
- **Admin Dashboard**: Comprehensive admin panel for platform management
- **User Management**: Manage users, products, and orders
- **Analytics**: Sales and user analytics
- **Content Moderation**: Review and approve listings

### ⚡ Real-time Features
- **Live Updates**: Socket.io for real-time notifications
- **Instant Messaging**: Chat between buyers and sellers
- **Live Inventory**: Real-time stock updates
- **Notifications**: Push notifications for important events

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Zustand** for state management
- **React Router** for navigation
- **Axios** for API calls
- **React Hook Form** for form handling

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose
- **Socket.io** for real-time features
- **JWT** for authentication
- **Stripe** for payments
- **Cloudinary** for image storage
- **Nodemailer** for email notifications

### Development Tools
- **Vite** for fast development
- **ESLint** for code linting
- **Prettier** for code formatting
- **Concurrently** for running multiple scripts

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Stripe account for payments
- Cloudinary account for image storage

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/secondhand-marketplace.git
   cd secondhand-marketplace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your environment variables:
   ```env
   MONGODB_URI=mongodb://localhost:27017/secondhand-marketplace
   JWT_SECRET=your-super-secret-jwt-key
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start both the frontend (http://localhost:5173) and backend (http://localhost:5000) servers.

### Database Setup

1. **Install MongoDB** locally or use MongoDB Atlas
2. **Create a database** named `secondhand-marketplace`
3. The application will automatically create the necessary collections

### Stripe Setup

1. Create a Stripe account at https://stripe.com
2. Get your test API keys from the Stripe dashboard
3. Add the keys to your `.env` file
4. Set up webhooks for payment events

## Project Structure

```
├── server/                 # Backend code
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── index.js          # Server entry point
├── src/                   # Frontend code
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── store/            # Zustand stores
│   └── App.tsx           # Main app component
├── public/               # Static assets
└── package.json         # Dependencies and scripts
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile

### Products
- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (auth required)
- `PUT /api/products/:id` - Update product (auth required)
- `DELETE /api/products/:id` - Delete product (auth required)
- `POST /api/products/:id/favorite` - Toggle favorite (auth required)

### Orders
- `POST /api/orders` - Create order (auth required)
- `GET /api/orders/my-orders` - Get user orders (auth required)
- `GET /api/orders/my-sales` - Get user sales (auth required)
- `PUT /api/orders/:id/status` - Update order status (auth required)

### Payments
- `POST /api/payments/create-payment-intent` - Create payment intent
- `POST /api/payments/confirm-payment` - Confirm payment
- `POST /api/payments/webhook` - Stripe webhook

### Admin
- `GET /api/admin/stats` - Get dashboard stats (admin only)
- `GET /api/admin/users` - Get all users (admin only)
- `GET /api/admin/products` - Get all products (admin only)

## Features in Detail

### Product Management
- **Image Upload**: Multiple image support with Cloudinary
- **Categories**: Organized product categories
- **Conditions**: Item condition ratings (Like New, Good, Fair, Poor)
- **Location**: Seller location for local pickup options
- **Shipping**: Configurable shipping options and costs

### Order System
- **Order Tracking**: Complete order lifecycle management
- **Status Updates**: Real-time order status notifications
- **Payment Integration**: Secure Stripe payment processing
- **Shipping Integration**: Multiple shipping providers support

### User Experience
- **Search & Filter**: Advanced search with multiple filters
- **Responsive Design**: Mobile-first responsive design
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessibility**: WCAG compliant accessibility features

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@secondchance.com or join our Slack channel.

## Acknowledgments

- Thanks to all contributors who helped build this platform
- Inspired by modern e-commerce platforms like eBay and Facebook Marketplace
- Built with love for the second-hand community ♻️