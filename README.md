# The Digital Diner 🍽️

A full-stack web application built as part of the *Eatoes Internship Assessment*. The Digital Diner allows users to browse a menu, add items to a cart, and place simplified pickup orders.

---

## 📦 Tech Stack

- *Frontend*: React + Vite
- *Backend*: Node.js + Express
- *Databases*:
  - *MongoDB*: Stores flexible menu item data (images, descriptions, categories)
  - *PostgreSQL*: Stores structured relational data like users and orders
- *ORMs*:
  - *Mongoose* for MongoDB
  - *Sequelize* for PostgreSQL

---

## ⚙️ Features

### ✅ Menu Display
- Menu items fetched from *MongoDB*
- Categorized views (optional)
- Image, description, and price display

### ✅ Shopping Cart
- Add/remove items to/from the cart
- Total price calculation

### ✅ Order Placement
- Collects user name and phone number
- Submits cart to backend and stores it in *PostgreSQL*

### ✅ Order Confirmation & History
- Displays a success message upon order
- Allows users to search previous orders using phone number (limit to last 5 orders)

---

## 🧠 Database Design Rationale

| Data             | DB Used     | Reason                                                                 |
|------------------|-------------|------------------------------------------------------------------------|
| Menu Items       | MongoDB     | Schema flexibility, easy to add nested fields like ingredients, etc. |
| User & Orders    | PostgreSQL  | Structured, relational data; users and orders have clear relationships |

---

## 🔌 API Endpoints

### Menu (MongoDB)
- GET /menu — fetch all menu items
- POST /menu — add a menu item (admin use)

### Orders (PostgreSQL)
- POST /orders — create a new order
- GET /orders/history/:phone — fetch last 5 orders for a user

---
