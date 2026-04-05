# 💸 Finance Dashboard UI

A clean and minimal finance dashboard built to help users understand their financial activity in a simple and intuitive way.

🔗 **Live Demo**  
https://zorvyn-task-seven.vercel.app/

---

## 🧠 The Idea

Managing finances can get confusing when too much data is thrown at the user.

The goal of this project was to design and build a dashboard that:
- feels simple
- looks clean
- and makes financial data easy to understand at a glance

Instead of adding more features, the focus was on **clarity and usability**.

---

## 🚀 Features

### 📊 Dashboard Overview
- Summary cards for:
  - Total Balance
  - Income
  - Expenses
- 📈 Time-based chart to show balance trends
- 🥧 Category-based chart to show spending breakdown

---

### 💳 Transactions Section
- Clean table with:
  - Date
  - Amount
  - Category
  - Type (Income / Expense)
- 🔍 Search functionality
- 🎯 Filter by transaction type
- Smooth row hover interaction

---

### 👥 Role-Based UI
- Switch between:
  - 👀 Viewer (read-only)
  - 🛠 Admin (can add/edit transactions)
- Helps demonstrate different user behaviors without backend

---

### 💡 Insights Section
- Simple and useful observations like:
  - Highest spending category
  - Monthly comparison
- Presented in a clear and readable way

---

### 📱 Responsive Design
- Works across:
  - Desktop
  - Tablet
  - Mobile
- Sidebar adapts for smaller screens

---

## 🛠 Tech Stack

- ⚛️ React (Vite)
- 🎨 Tailwind CSS
- 📊 Chart library (for visualizations)

---

## ⚙️ How It Works

The project uses **mock data** to simulate real financial activity.

State is managed on the frontend to handle:
- transactions
- filters and search
- role switching (Viewer/Admin)

No backend is used — everything is handled in the UI.

---

## 🎨 Design Approach

- Kept the UI minimal and distraction-free  
- Avoided shadows and heavy effects  
- Used spacing and borders for structure  
- Focused on readability over decoration  

The idea was to make the dashboard feel **natural and usable**, not overdesigned.

---

## 🧩 Challenges

One of the main challenges was balancing simplicity with functionality.

It required deciding:
- what to include
- what to remove  
without affecting the user experience.

---

## ✅ What I Focused On

- Clean UI and layout  
- Smooth interactions  
- Logical component structure  
- Making the dashboard feel real and usable  

---

## 📦 Setup

```bash
npm install
npm run dev
