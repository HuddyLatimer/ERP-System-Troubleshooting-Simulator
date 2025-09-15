# ERP Troubleshooting Simulator

A training tool that simulates common ERP system errors and provides troubleshooting guidance. Built with Node.js, Express, and vanilla JavaScript.

## Features

- 🔐 Dummy authentication system
- 📊 Interactive ERP dashboard
- 🔄 Random error simulation
- 📚 Real-time troubleshooting guide
- 🎯 Multiple module simulation (Inventory, Finance, HR)
- 💡 Knowledge base with solution steps

## Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/HuddyLatimer/ERP-System-Troubleshooting-Simulator.git
cd erp-troubleshooting-simulator
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

1. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

2. Access the application at `http://localhost:3000`

## Usage Guide

### Login
- Access the login page at `http://localhost:3000`
- Enter any non-empty username and password (dummy authentication)

### Dashboard Navigation
- Use the menu buttons on the left to switch between modules:
  - Inventory Management
  - Financial Management
  - Human Resources
- Click "Perform Random Action" to manually trigger error simulations
- Random errors will also occur automatically every 10-30 seconds

### Error Simulation
The system simulates common ERP errors such as:
- Transaction code errors
- Authorization issues
- Posting period problems
- Master data validation errors

### Troubleshooting Panel
- View error details and solution steps in the right-side panel
- Each error includes:
  - Error code
  - Error message
  - Step-by-step troubleshooting guide

## Project Structure

```
/
├── server.js              # Express server and API routes
├── package.json          # Project dependencies
├── public/              # Static files
    ├── index.html       # Login page
    ├── dashboard.html   # Main dashboard
    ├── css/
    │   └── style.css    # Styles for all pages
    └── js/
        ├── login.js     # Login page functionality
        └── dashboard.js # Dashboard functionality
```

## API Endpoints

- `POST /api/login` - Authentication endpoint
- `GET /api/errors` - Fetch random error simulation
- `GET /api/logout` - End user session
- `GET /dashboard` - Serve dashboard page (protected route)

## Development

### Adding New Error Types
To add new error scenarios, modify the errors array in `server.js`:

```javascript
const errors = [
    {
        code: 'ERR001',
        message: 'Your error message',
        solution: 'Troubleshooting steps'
    }
    // Add more errors here
];
```

### Adding New Modules
To add new modules, update the `moduleContent` object in `public/js/dashboard.js`:

```javascript
const moduleContent = {
    newModule: {
        title: 'Module Title',
        description: 'Module description'
    }
};
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built for ERP system training and troubleshooting practice
- Inspired by real-world ERP system error scenarios
- Uses modern web development best practices

