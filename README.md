# NexusVibe

## Overview

This project is a sophisticated full-stack application serving as a portfolio and service showcase for a digital design and development studio. It features a dynamic React frontend powered by Vite, offering a rich user interface, and a Node.js Express backend that handles contact inquiries and tracks user engagement.

### Key Features

*   **Dynamic Service Showcase:** Pages dedicated to various services like Neural Design, Core Dev, Mobile Force, with dynamic routing and interactive elements.
*   **Interactive Portfolio/Gallery:** A visually appealing section to display creative works with smooth animations.
*   **User Analytics Tracking:** Captures anonymized page visits and user interactions, storing them in `analytics.json` for insights into user engagement.
*   **Contact Management System:** An API endpoint to receive and store user messages securely in `messages.json`.
*   **Responsive & Animated UI:** Built with Tailwind CSS and Framer Motion for a smooth, modern, and engaging user experience across all devices.
*   **Modular Architecture:** Well-organized frontend components and backend routes designed for maintainability, scalability, and ease of future expansion.

### Backend Details

The backend, built with Node.js and Express, acts as a dedicated API server. It efficiently manages incoming contact form submissions and aggregates anonymized user analytics data. Data is currently persisted in local JSON files (`messages.json` and `analytics.json`). While Mongoose is listed as a dependency, the current `Server.js` implementation utilizes direct file system operations for data storage.

### Frontend Details

The frontend leverages React with Vite for a fast and efficient development experience. It features client-side routing using `react-router-dom`, interactive UI elements with `framer-motion`, and integrates seamlessly with the backend APIs for contact submissions and analytics reporting.

## Technologies Used

### Frontend Stack
*   **React:** A JavaScript library for building dynamic user interfaces.
*   **Vite:** A fast build tool that significantly improves the frontend development experience.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
*   **Framer Motion:** A production-ready animation library for React to create smooth and interactive UI animations.
*   **React Router DOM v6:** For declarative client-side routing and navigation within the application.
*   **Lucide React:** A collection of beautiful, pixel-perfect SVG icons for React projects.
*   **React Google reCAPTCHA:** (Integrated for potential spam protection on forms).

### Backend Stack
*   **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
*   **Express.js:** A minimal and flexible Node.js web application framework providing robust features for API development.
*   **CORS:** Middleware for enabling Cross-Origin Resource Sharing, allowing frontend and backend communication.
*   **Dotenv:** For loading environment variables from a `.env` file, enhancing security and configuration flexibility.
*   **Express Rate Limit:** Middleware to prevent brute-force attacks and mitigate denial-of-service (DoS) attacks by limiting repeated requests to public APIs.
*   **Mongoose:** (Installed dependency, providing MongoDB object data modeling capabilities for future database integration).
*   **File System (fs):** Node.js built-in module for local JSON file-based data storage (`messages.json`, `analytics.json`).

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

*   **Node.js:** v18.x or higher (LTS recommended)
*   **npm** or **yarn:** For package management (npm is used in `package.json` scripts).
*   **Git:** For cloning the repository.

### Installation

1.  **Clone the repository:**
    
    git clone https://github.com/anafibnshahibul/NexusVibe.git
    cd digital-canvas-studio
    

2.  **Backend Setup:**
    
    cd backend
    npm install
    # If you need environment variables (e.g., for future MongoDB connection), create a .env file:
    # touch .env
    # Add your variables (e.g., PORT=5000, MONGO_URI=...)
    cd ..
    

3.  **Frontend Setup:**
    
    cd frontend
    npm install
    cd ..
    

### Running the Application

1.  **Start the Backend Server:**
    
    cd backend
    node Server.js
    # The backend will typically run on http://localhost:5000
    cd ..
    

2.  **Start the Frontend Development Server:**
    
    cd frontend
    npm run dev
    # The frontend will typically open in your browser at http://localhost:5173 (Vite default)
    cd ..
    
You should now be able to access the application in your web browser.

## API Endpoints

The backend exposes the following API endpoints:

### `POST /api/contact`
*   **Description**: Submits a new contact message from the frontend. Stores the message content along with metadata like sender's IP address and user agent in `messages.json`.
*   **Request Body**:
    
    {
        "name": "string",
        "email": "string",
        "message": "string",
        "recaptchaToken": "string"  // Optional, if reCAPTCHA is implemented on the client-side
    }
    
*   **Response**:
    *   `201 Created`: `{ "success": true }` on successful message storage.
    *   `500 Internal Server Error`: `{ "success": false }` if an error occurs during file write.

### `POST /api/analytics`
*   **Description**: Records user page visits and interactions. Stores a timestamp, user's IP, device information, and the visited page in `analytics.json`. This helps in understanding user flow and popular content.
*   **Request Body**:
    
    {
        "page": "string" // e.g., "/", "/services", "/gallery"
    }
    
*   **Response**:
    *   `200 OK`: `{ "success": true }` on successful analytics data logging.
    *   `500 Internal Server Error`: `{ "success": false }` if an error occurs during file write.

## Project Structure


```
├── backend/                  # Node.js Express API server
│   ├── analytics.json        # Stores user analytics data (created on first write if not exists)
│   ├── messages.json         # Stores contact form submissions (created on first write if not exists)
│   ├── node_modules/         # Backend dependencies
│   ├── package.json          # Backend project metadata and dependencies
│   ├── package-lock.json     # Lock file for backend dependencies
│   └── Server.js             # Main backend application file (API routes and server logic)
├── frontend/                 # React Vite client application
│   ├── public/               # Static assets (e.g., favicon.svg, icons.svg)
│   ├── src/                  # Frontend source code
│   │   ├── assets/           # Static assets (e.g., vite.svg)
│   │   ├── components/       # Reusable React components (e.g., Header, Footer, ScrollToTop)
│   │   ├── hooks/            # Custom React hooks (e.g., AnalyticsTracker, ServiceDetail)
│   │   ├── pages/            # Application pages (e.g., Home, Services, Contact, Gallery, About)
│   │   │   └── error/        # Error pages (e.g., NotFound.jsx)
│   │   ├── App.jsx           # Main application component, sets up React Router
│   │   ├── index.css         # Global CSS styles (Tailwind base styles)
│   │   └── main.jsx          # Entry point for the React application
│   ├── eslint.config.js      # ESLint configuration for code quality
│   ├── package.json          # Frontend project metadata and dependencies
│   ├── package-lock.json     # Lock file for frontend dependencies
│   ├── postcss.config.js     # PostCSS configuration (used by Tailwind CSS)
│   ├── tailwind.config.js    # Tailwind CSS custom configuration
│   └── vite.config.js        # Vite build configuration
├── LICENSE                   # Project license information
└── README.md                 # This README file
```

## Contributing

We welcome contributions to enhance this project! Please follow these steps:

1.  **Fork the repository.**
2.  **Create a new branch** for your feature or bug fix: `git checkout -b feature/your-feature-name`
3.  **Make your changes.**
4.  **Commit your changes** with a descriptive message: `git commit -m 'feat: Add new feature for X'`
5.  **Push to the branch:** `git push origin feature/your-feature-name`
6.  **Open a Pull Request** explaining your changes and their benefits.

Please ensure your code adheres to the project's coding standards and includes appropriate tests if applicable.

## License

This project is licensed under the [MIT License](LICENSE) - see the `LICENSE` file for details.
