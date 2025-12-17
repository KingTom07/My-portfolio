# Tom Sammon - Portfolio

An immersive, story-driven portfolio featuring interactive typewriter animations, seamless keyboard navigation, and dynamic theme switching. Built with modern web technologies and optimized for performance.

## Features

- **Interactive Typewriter Animations** - Engaging text animations that guide visitors through your story
- **Keyboard-First Navigation** - Press `Enter` to advance, `Space` to go back
- **Theme Toggle** - Dark/Light mode with `T` keyboard shortcut
- **3D Elements** - Interactive visuals powered by Three.js
- **Responsive Design** - Optimized for all screen sizes
- **LinkedIn Post Embeds** - Showcase your professional content directly on your portfolio
- **Contact Form** - Express backend with Nodemailer integration

## Tech Stack

### Frontend
- **React** - UI component library
- **Vite** - Fast build tool and dev server
- **Three.js** - 3D graphics and animations
- **CSS Variables** - Theme system with dark/light modes

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **Nodemailer** - Email sending for contact form
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/KingTom07/My-portfolio.git
cd My-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory for email configuration
```env
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-app-password
EMAIL_TO=recipient@example.com
```

### Running Locally

1. Start the backend server
```bash
npm run server:dev
```

2. Start the frontend development server (in a new terminal)
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

The backend API will be running on `http://localhost:3001`

## Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Start Express server
- `npm run server:dev` - Start Express server with hot reload

## Navigation Guide

- **Enter** - Navigate to the next section
- **Space** - Navigate to the previous section
- **T** - Toggle between dark and light themes

## Project Structure

```
portfolio/
├── public/          # Static assets
├── server/          # Express backend
│   └── index.js     # Server entry point
├── src/
│   ├── components/  # React components
│   │   ├── Contact.jsx
│   │   ├── LinkedInEmbed.jsx
│   │   ├── Projects.jsx
│   │   ├── WorkExperience.jsx
│   │   └── ...
│   ├── hooks/       # Custom React hooks
│   ├── App.jsx      # Main app component
│   ├── main.jsx     # Entry point
│   └── styles.css   # Global styles
└── package.json
```

## Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready to deploy to any static hosting service.

### Backend Deployment
Deploy the `server/` directory to a Node.js hosting platform (e.g., Heroku, Railway, Render).

## Contact

**Tom Sammon**
- LinkedIn: [Tom Sammon](https://www.linkedin.com/in/tom-sammon-9a0863209/)
- GitHub: [@KingTom07](https://github.com/KingTom07)

## License

This project is open source and available under the MIT License.

---

Built with ❤️ by Tom Sammon
