# AntCloud Token-Based Authentication System

A minimal backend system built using Node.js and Express.js that supports JWT-based user authentication with access and refresh tokens.

---

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT (jsonwebtoken)
- Bcrypt
- Dotenv

---

## 🚀 Features

- User Signup & Login
- Secure password hashing with bcrypt
- Access Tokens (10 min expiry)
- Refresh Tokens (60 min expiry)
- Protected Routes
- Refresh token reuse prevention
- Logout functionality
- Token rotation-ready structure

---

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/antcloud-auth.git
cd antcloud-auth
```

### 2. Install dependencies

- npm install

### 3. Setup Environment Variables

- Create a .env file in the root:

- PORT=5000
- MONGO_URI=mongodb://localhost:27017/antcloud-auth
- ACCESS_TOKEN_SECRET=yourAccessTokenSecret
- REFRESH_TOKEN_SECRET=yourRefreshTokenSecret

- Replace secrets with secure random strings.

- Running the Server
- local

```bash
  npm run dev
```

- Production

```bash
  node app.js
```
