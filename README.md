# 🌿 Paradise Nursery - E-Commerce Plant Shop

A modern, responsive e-commerce web application for Paradise Nursery, your go-to destination for beautiful houseplants. Browse our curated collection of air-purifying plants, succulents, and flowering plants with an intuitive shopping experience.

![Paradise Nursery](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.0.1-764ABC?style=flat-square&logo=redux)
![React Router](https://img.shields.io/badge/React_Router-6.21.1-CA4245?style=flat-square&logo=react-router)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

### 🛒 Shopping Experience
- **Browse by Categories**: Air Purifying Plants, Succulents, Flowering Plants
- **Product Details**: High-quality images, descriptions, and pricing
- **Smart Cart Management**: Add, remove, and update item quantities
- **Real-time Calculations**: Automatic total and shipping cost updates
- **Persistent State**: Cart contents saved using Redux

### 🎨 User Interface
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Accessibility**: ARIA labels and keyboard navigation support
- **Image Fallbacks**: Graceful handling of missing product images

### 🚀 Performance
- **Fast Loading**: Optimized React components with efficient rendering
- **Build Ready**: Production build with minified assets
- **Error Boundaries**: Robust error handling for better user experience

## 🛠️ Technologies Used

- **Frontend Framework**: React 18.2.0
- **State Management**: Redux Toolkit 2.0.1
- **Routing**: React Router DOM 6.21.1
- **Styling**: CSS3 with modern layouts
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/danuwarisman/e-plantShopping.git
   cd e-plantShopping
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📜 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## 🏗️ Project Structure

```
e-plantShopping/
├── public/
│   ├── index.html          # Main HTML template
│   └── images/             # Static images
├── src/
│   ├── components/         # React components
│   │   ├── LandingPage.jsx # Home page
│   │   ├── ProductList.jsx # Product catalog
│   │   ├── CartItem.jsx    # Shopping cart
│   │   ├── Navbar.jsx      # Navigation component
│   │   └── AboutUs.jsx     # About page
│   ├── store/              # Redux store
│   │   ├── CartSlice.jsx   # Cart state management
│   │   └── index.js        # Store configuration
│   ├── images/             # Component images
│   ├── App.js              # Main app component
│   ├── App.css             # Global styles
│   ├── index.js            # App entry point
│   └── index.css           # Base styles
├── build/                  # Production build output
└── package.json            # Dependencies and scripts
```

## 🌟 Key Components

### Cart Management
- **Add to Cart**: One-click addition with duplicate prevention
- **Quantity Controls**: Increment/decrement with auto-removal at zero
- **Cart Summary**: Real-time total calculation with shipping logic
- **Clear Cart**: Bulk removal functionality

### Product Display
- **Grid Layout**: Responsive product cards
- **Image Handling**: Fallback system for missing images
- **Category Organization**: Logical grouping of plant types

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Plant images sourced from various free stock photo collections
- Icons and UI inspiration from modern web design trends
- Special thanks to the React and Redux communities

## 📞 Contact

**Paradise Nursery**
- Website: [Coming Soon]
- Email: contact@paradisenursery.com
- GitHub: [@danuwarisman](https://github.com/danuwarisman)

---

**Made with ❤️ for plant lovers everywhere** 🌱