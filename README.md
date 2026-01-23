# 🎬 Movie-Site – Full Stack Movie Watchlist Platform

Movie-Site is a full-stack web application that allows users to explore movies, view detailed information, and manage a personal watchlist.  
The project features a modern dark-themed UI and a scalable backend architecture built using industry-standard technologies.

---

## 🚀 Features

- Browse movies in a card-based grid layout
- View detailed movie information (rating, genre, storyline)
- Add and remove movies from a personal watchlist
- Clean and responsive dark UI inspired by real streaming platforms
- RESTful backend APIs for user and watchlist management

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- TypeScript
- React Router
- CSS (Custom dark theme styling)

### Backend
- Node.js
- Express.js
- PostgreSQL
- bcrypt (Password hashing)
- REST APIs

---

## 📂 Project Structure

movies-site/
│
├── frontend/
├── backend/
└── README.md

---

## 🗄️ Database Schema

### Users Table
- id (Primary Key)
- username
- email (Unique)
- password (Hashed)

### Watchlist Table
- id (Primary Key)
- user_id (Foreign Key → users)
- movie_id
- title
- poster
- created_at

---

## 🔗 API Endpoints

### Authentication
- POST /api/auth/register

### Watchlist
- POST /api/watchlist
- GET /api/watchlist/:userId
- DELETE /api/watchlist/:id

---

## ⚙️ How to Run Locally

### Frontend
```bash
cd frontend
npm install
npm run dev

### Backend
cd backend
npm install
npm run dev
