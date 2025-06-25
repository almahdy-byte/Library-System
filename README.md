# 📚 Library Management System - Backend (GraphQL Only)

This is the backend for a **Library Management System** built entirely using **GraphQL**. The system allows users to borrow books, manage accounts, and for admins/librarians to manage inventory, users, and borrow/return records.

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **GraphQL** (Apollo Server or similar)
- **MongoDB** + **Mongoose**
- **JWT** (Authentication)
- **Bcrypt** (Password Hashing)
- **CORS**, **Helmet**, **Rate Limiter** (Security)

---

## 🌟 Features

### 👨‍🎓 Users
- Register and log in securely
- View available books and details
- Borrow and return books
- View personal borrow history

### 👩‍💼 Admin / Librarian
- Add, edit, or remove books
- Manage user accounts and permissions
- View all borrow/return transactions
- Monitor overdue books

---

## 🔐 Authentication & Security

- **JWT** used for token-based authentication
- **Bcrypt** for password hashing
- **Role-based authorization** (user vs. admin)
- API protected with **CORS**, **Helmet**, and **Rate Limiting**

---

## 📦 GraphQL API

All interactions with the backend are done through a **GraphQL schema**. This includes:

- 📖 `books` – Query for books and search by title, author, etc.  
- 👤 `users` – Register, log in, and get profile data  
- 📚 `borrowBook`, `returnBook` – Mutations to borrow and return books  
- 📑 `transactions` – Admin query to view system-wide borrow records  
- 🔒 `login`, `logout`, `me` – Authentication and session management
