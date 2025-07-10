# Wealth - AI-Powered Full Stack Finance Platform

Welcome to **Wealth**, a cutting-edge AI-powered full stack finance platform designed to revolutionize your personal budget management and financial health tracking. This project showcases advanced features and modern technologies, making it an excellent addition to your portfolio and resume—especially if you're targeting roles involving AI, finance, or full stack development.

---

## 🚀 Project Overview

Wealth helps users track their income and expenses across multiple accounts with intelligent AI-driven features such as:

- **Smart Categorization & Receipt Scanning:** Upload receipts and let AI automatically extract transaction details like amount, date, category, and description.
- **Budget Management:** Set monthly budgets, monitor spending progress with visual alerts when approaching limits.
- **Transaction Management:** Add, edit, delete, and bulk delete transactions, with support for recurring transactions such as subscriptions or salaries.
- **Comprehensive Analytics:** Interactive charts and visualizations to analyze daily transactions and long-term financial health.
- **Personalized Monthly Reports:** AI-generated monthly insights emailed directly to users, highlighting spending patterns and saving tips.
- **Advanced Security:** Bot protection, rate limiting, and shield features powered by Arcjet to secure APIs and backend services.
- **User Authentication:** Seamless login/signup flows using Clerk, supporting Google and email authentication.
- **Background Jobs:** Scheduled tasks using Ingest to process recurring transactions, send budget alerts, and monthly reports.

---

## 📱 Key Features

- **Modern, Responsive UI:** Built with Next.js and ShadCN UI for a polished, professional look.
- **AI Receipt Scanner:** Easily scan and auto-fill transaction forms from receipt images using Google Gemini AI.
- **Budget Alerts:** Receive email notifications when spending nears or exceeds your budget.
- **Recurring Transaction Automation:** Automatically adds recurring transactions on their due dates.
- **Dashboard Overview:** View recent transactions, monthly expense breakdowns (pie charts), and manage multiple accounts.
- **Robust Backend:** Powered by Prisma ORM with a PostgreSQL database hosted on Supabase.
- **Rate Limiting & Security:** Prevent abuse with Arcjet integration, including bot detection and request throttling.
- **Comprehensive API Layer:** Server actions in Next.js 13 provide clean, maintainable backend logic.
- **Deployment Ready:** Fully configured for Vercel deployment with environment variables and continuous integration.

---

## 🛠️ Technologies Used

- **Frontend:** Next.js 13, React, Tailwind CSS, ShadCN UI, React Hook Form, Zod for validation
- **Backend:** Node.js, Prisma ORM, Supabase (PostgreSQL)
- **AI & ML:** Google Gemini API for receipt scanning and generating financial insights
- **Email:** React Email + Resend for transactional and report emails
- **Security:** Arcjet (rate limiting, bot protection, shielding)
- **Background Jobs:** Ingest for cron jobs, scheduling, and event batching
- **Authentication:** Clerk for user management and OAuth (Google Sign-In)

---

## 📁 Project Structure

/app/ → Next.js app routes and components
/components/ → Reusable UI components (forms, drawers, cards, tables, charts)
/lib/ → Utility files including Prisma client, Zod schemas, and API clients (Arcjet, Ingest)
/actions/ → Server actions handling business logic and database operations
/emails/ → React Email templates for budget alerts and monthly reports
/api/injest/ → API routes for Ingest background jobs
/public/ → Static assets like logo and banner images
/data/ → Static data for landing page and categories
/injest/functions.js → Background job functions for recurring transactions and monthly reports


Create a .env file and add all required keys:

dotenv
Copy
Edit
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...

CLERK_API_KEY=sk_test_...
CLERK_SECRET_KEY=sk_test_...
CLERK_API_VERSION=2

DATABASE_URL=postgresql://postgres:yourpassword@yourdb.supabase.co:5432/postgres
DATABASE_DIRECT_URL=postgresql://postgres:yourpassword@yourdb.supabase.co:5432/postgres

GEMINI_API_KEY=AIzaSy...

RESEND_API_KEY=re_...

ARCJET_API_KEY=ajkey_...

INJEST_API_KEY=inj_test_...

NEXT_PUBLIC_APP_URL=https://your-deployed-app-url.com
NEXTAUTH_URL=http://localhost:3000
Note: Don’t commit your .env file to version control.

4. Run local development server
bash
Copy
Edit
npm run dev
5. Start Ingest for background jobs
bash
Copy
Edit
npx ingest client@latest dev
6. Access the app
Visit:

arduino
Copy
Edit
http://localhost:3000
🖥️ Usage Highlights
Landing Page: Engaging hero section with animated graphics, feature highlights, testimonials, and call-to-action buttons.

Authentication: Login/sign up via Google or email, with protected routes ensuring secure access.

Dashboard: Overview of accounts, budgets, recent transactions, and analytics.

Add/Edit Transactions: Intuitive forms with AI-powered receipt scanning and validation.

Recurring Transactions: Automatically processed in the background, with visibility in the UI.

Monthly Reports: AI-generated insights emailed automatically every month.

Security & Performance: Bot protection, rate limiting, and API throttling ensure reliability.

📧 Email Notifications
Budget Alerts: Sent when spending reaches 80% or more of the monthly budget.

Monthly Financial Reports: Detailed income, expenses, category breakdowns, and AI-generated personalized tips.