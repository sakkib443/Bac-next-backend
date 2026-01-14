# BD Calling Academy Backend

Welcome to the **BD Calling Academy Backend**, a robust and scalable server-side application built with **Node.js**, **Express**, and **TypeScript**. This system manages courses, students, mentors, blogs, and overall site settings for the BD Calling Academy platform.

## 🚀 Features

- **Authentication & Authorization**: Secure login system using JWT and password hashing with Bcrypt.
- **User Management**: Role-based access control (Admin, Student, etc.).
- **Course Management**: Complete CRUD operations for courses and course categories.
- **Student & Mentor Management**: Track student enrollments and manage mentor profiles.
- **Blog System**: Dynamic blog posting and management system.
- **Site Settings**: Centralized control for global site data like contact info, social links, and hero section content.
- **Validation**: Strict request validation using **Zod**.
- **Security**: Implementation of CORS, security headers, and best practices.
- **Error Handling**: Centralized global error handler for consistent API responses.

## 🛠️ Technologies Used

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Validation**: Zod
- **Security**: JWT (jsonwebtoken), Bcryptjs, CORS
- **Dev Tools**: ESLint, Prettier, Ts-node-dev

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
PORT=5000
DATABASE_URL=your_mongodb_connection_string
BCRYPT_SALT_ROUNDS=12
JWT_SECRET=your_super_secret_jwt_key
NODE_ENV=development
```

## 🏃 How to Run Locally

### 1. Clone the repository
```bash
git clone <repository-url>
cd bac-ts-backend-main
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run in Development Mode
```bash
npm run start:dev
```

### 4. Build for Production
```bash
npm run build
```

### 5. Start Production Server
```bash
npm run start:prod
```

## 📁 Project Structure

```text
src/
├── app/
│   ├── config/             # Environment configurations
│   ├── middlewares/        # Custom middlewares (Auth, Error handling)
│   ├── modules/            # Domain-driven feature modules
│   │   ├── auth/           # Login and Authentication
│   │   ├── user/           # User logic
│   │   ├── courses/        # Course management
│   │   ├── settings/       # Global site settings
│   │   └── ...             # Other modules
│   └── utils/              # Utility functions (DB connection, etc.)
├── server.ts               # Application entry point
└── app.ts                  # App initialization
```

## 📜 Scripts

| Script | Description |
| :--- | :--- |
| `npm run start:dev` | Runs the app in development mode with auto-reload |
| `npm run start:prod` | Runs the compiled production build from `/dist` |
| `npm run build` | Compiles TypeScript files to JavaScript |
| `npm run lint` | Checks for code style and errors |
| `npm run prettier:fix` | Automatically formats the code |

## 🌐 Deployment

This backend is optimized for deployment on **Vercel**. It includes a `vercel.json` configuration file for seamless integration.

---
Developed by **BD Calling Academy Team**
