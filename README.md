# 🛒 goBucket - AI-Powered Multi-Vendor E-commerce SaaS

**goBucket** is a modern, scalable, and feature-rich multi-vendor e-commerce platform. It leverages AI to empower sellers and provides a seamless shopping experience for users with a robust membership system.

---

## 🚀 Key Features

### 🛠 Multi-Vendor Ecosystem
* **User Role:** Browse products, manage cart, apply coupons, and track orders.
* **Seller Role:** Dedicated dashboard to manage products, view real-time analytics, and handle store orders.
* **Admin Role:** Global control over the platform, managing users, verifying sellers, and monitoring transactions.

### 🤖 Gemini AI Integration
* **Smart Listing Assistant:** AI-powered suggestions during product creation to optimize titles and descriptions for better SEO.
* **Seller Insights:** Gemini-driven recommendations in the seller dashboard to help scale their business.

### 💳 Membership & Tiered Logic
* **Plans:** Tiered system with **Free** and **Plus** plans.
* **Paddle Integration:** Secure checkout for one-time purchases and plan upgrades.
* **Exclusive Benefits:** Plus members get **Zero Shipping Fees** and access to **Member-Only Coupons**.

### ⚡ Technical Highlights
* **Real-time Processing:** Uses **Inngest** for background jobs and reliable webhook synchronization.
* **Optimized Media:** High-performance image transformation and hosting via **ImageKit**.
* **Global State:** Efficient state management using **Redux Toolkit**.

---

## 🛠 Tech Stack

| Category           | Technology                                     |
| :----------------- | :--------------------------------------------- |
| **Framework** | Next.js 14 (App Router)                        |
| **Authentication** | Clerk                                          |
| **Database** | Neon DB (Serverless PostgreSQL)                |
| **ORM** | Prisma                                         |
| **AI Engine** | Google Gemini API                              |
| **Payments** | Paddle                                         |
| **Styling** | Tailwind CSS / ShadCN UI                       |
| **State Management**| Redux Toolkit                                  |
| **Queues/Workflows**| Inngest                                        |
| **Image Hosting** | ImageKit                                       |

---

## 🏗 Database Architecture

The project uses a structured PostgreSQL schema managed by Prisma:
* **User:** Profiles, relationships, and membership tracking (`free`/`plus`).
* **Product:** Multi-vendor inventory with category and rating relations.
* **Order:** Purchase records with `isPaid` verification.
* **Coupon:** Logic-based discount codes (Restricted by membership tier).
* **Store:** Seller-specific entities linked to products and orders.

---

## 🚦 Getting Started

1. **Clone the repository:**
   
git clone [https://github.com/your-username/gobucket.git](https://github.com/your-username/gobucket.git)
cd gobucket
   

2. **Install dependencies:**

npm install

3. **Setup Environment Variables:**

Create a .env file in the root directory and add your keys:

DATABASE_URL=your_neon_db_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=your_paddle_token
GEMINI_API_KEY=your_gemini_key
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_imagekit_key

4. **Sync Database & Generate Client:**

npx prisma db push
npx prisma generate

5. **Launch Application:**

npm run dev

📄 License
This project is licensed under the MIT License.

Developed with ❤️ by Abdul Salam Wahab