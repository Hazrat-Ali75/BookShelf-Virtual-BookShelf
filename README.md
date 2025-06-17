# 📚 Virtual Bookshelf

A full-stack web application built with the MERN stack where users can create a personalized digital bookshelf. Users can catalog books, write reviews, upvote popular titles, and track their reading progress — all in one place.

---

## 🚀 Live Site

**Client:** (https://bookshelf-webapp-45d65.web.app/)  
**Server:** (https://book-shelf-app-server.vercel.app/)

---

## 🎯 Project Purpose

This project helps book lovers:
- Organize their reading journey with custom bookshelves.
- Discover books through community reviews and upvotes.
- Stay motivated through visual progress tracking.

It solves the common problem of scattered reading lists and unstructured review sharing by providing a centralized, beautiful interface.

---

## 🧰 Tech Stack

### Frontend:
- **React.js**
- **Tailwind CSS** for responsive UI
- **Framer Motion** for animations
- **React Router DOM** for routing
- **Axios** for API calls

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB** for database
- **Firebase Admin SDK** for JWT-based auth verification

### Authentication:
- Firebase Authentication (Email/Password + Google Login)

### Deployment:
- **Client:** Vercel / Netlify
- **Server:** Vercel

---

## ✨ Key Features

### 🔐 Authentication
- Firebase-based login and registration with Google or email/password.
- Secure JWT token integration for protected API access.
- Conditional route protection and UI rendering.

### 📚 Bookshelf Management
- Add books with details (title, author, category, etc.)
- Automatically associate books with the current user.
- Update/Delete your own books.
- Search/filter books by title, author, and reading status.

### 💬 Reviews & Upvotes
- Authenticated users can review books.
- One review per book per user (edit/delete allowed).
- Users can upvote books (except their own).
- Display most upvoted books on the Home page.

### 📊 Reading Progress & Profile
- Pie chart to visualize books by category.
- Profile page shows name, email, and stats.
- Users can update reading status from "Want-to-Read" → "Reading" → "Read".

### 🌐 Pages

- Home (Banner, Popular Books, Featured Categories, Extra Sections)
- Bookshelf (Public book grid with filters)
- Book Details (with review + reading tracker)
- Add Book 🔒
- Update Book 🔒
- My Books 🔒
- Profile 🔒 (with chart)
- Login/Register
- Contact / About
- 404 Error Page
- Loading Page

---

## 🧪 JWT Security

- JWT token is generated on login via Firebase.
- All secure API routes are protected using Firebase Admin token verification.
- Email is verified server-side to ensure ownership before update/delete.

---

## 🗂️ Folder Structure

virtual-bookshelf/
│
├── client/                      # React Frontend
│   ├── public/
│   └── src/
│       ├── api/                 # Axios & API function hooks (e.g., useMyBooksApi.js)
│       ├── assets/              # Images, icons, etc.
│       ├── components/          # Reusable UI components (e.g., BookCard, Navbar, Footer)
│       ├── context/             # AuthContext for Firebase
│       ├── hooks/               # Custom React hooks (e.g., useAxiosSecure)
│       ├── layouts/             # Layout components (MainLayout, PrivateRoute, etc.)
│       ├── pages/               # Page-level components (e.g., Home.jsx, Bookshelf.jsx)
│       │   ├── Auth/            # Login, Register
│       │   ├── Book/            # BookDetails, AddBook, UpdateBook, MyBooks
│       │   ├── Profile/         # ProfilePage with chart
│       │   ├── Extra/           # Contact, About, 404, Loading
│       ├── router/              # React Router configuration
│       ├── styles/              # Global CSS/Tailwind config (if any)
│       ├── App.jsx
│       ├── main.jsx
│       └── .env.local           # Firebase config (keep secure)
│
├── server/                      # Express Backend
│   ├── controllers/             # Logic for each route (bookController.js, reviewController.js)
│   ├── middleware/              # Middleware (JWT verification, error handling)
│   ├── routes/                  # API route files (books.js, reviews.js, auth.js)
│   ├── utils/                   # Helper functions (e.g., connectToMongo.js)
│   ├── .env                     # MongoDB credentials, JWT secret
│   ├── server.js                # Main Express app
│   └── package.json
│
├── README.md
├── package.json
├── .gitignore

