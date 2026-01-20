# 🛒 Shopping Cart Application

A **Shopping Cart web application** built with **React** to learn and practice **React Hooks**, **dynamic routing**, and **component testing**.
Product data is fetched from an external API, and the application is fully tested using **React Testing Library (RTL)**.

---

## 🚀 Features

* Fetches product data from an external API
* Product listing and detail pages
* Add/remove items from cart
* Cart state management using React Hooks
* Dynamic routing with React Router
* Fully tested UI components
* Responsive and user-friendly interface

---

## 🛠 Tech Stack

* **Frontend:** React
* **Routing:** React Router
* **State Management:** React Hooks (`useState`, `useEffect`, `useContext`)
* **API:** External product API
* **Testing:** React Testing Library (RTL), Jest
* **Styling:** CSS / Module CSS *(adjust if needed)*

---

## 📂 Project Structure

```
src/
├── components/
│   ├── ProductCard.jsx
│   ├── CartItem.jsx
├── pages/
│   ├── Home.jsx
│   ├── Product.jsx
│   └── Cart.jsx
├── context/
│   └── CartContext.jsx
├── routes/
├── tests/
│   └── cart.test.jsx
├── App.jsx
└── main.jsx
```

---

## 🔁 Routing

* `/` → Product listing
* `/product/:id` → Dynamic product details page
* `/cart` → Shopping cart

---

## 🧪 Testing

* Component testing using **React Testing Library**
* User interaction testing (add/remove items)
* Routing behavior tested
* Cart logic and UI fully covered

---

## 🧑‍💻 Getting Started

### Prerequisites

* Node.js (v16+ recommended)
* npm or yarn

### Installation

```bash
git clone https://github.com/your-username/shopping-cart.git
cd shopping-cart
npm install
npm run dev
```

---

## 📌 Learning Outcomes

* Understanding React Hooks in real-world scenarios
* Handling API data fetching
* Implementing dynamic routes
* Writing maintainable component tests
* Building scalable React project structure

---

## 🔮 Future Improvements

* Persist cart data using localStorage
* Add quantity management
* Improve UI/UX
* Add checkout flow
* Backend integration

---

## 📜 License

This project is open-source and available under the **MIT License**.
