# Credex - Financial Dashboard UI

A modern frontend-based financial dashboard built with Next.js 16, React 19, Tailwind CSS, and Recharts.

## ✨ Features

- Dashboard with account balances and transactions
- Transaction management and creation
- Budget tracking with visual progress
- Responsive design
- Mock data (no backend required)

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit **http://localhost:3000**

## 📁 Project Structure

```
├── app/              # Pages & routes
├── components/       # UI components
├── data/            # Mock data files
├── hooks/           # Custom hooks
├── lib/             # Utilities
└── public/          # Static assets
```

## 🎨 Tech Stack

- Next.js 16.2.2 (Turbopack)
- React 19.0.0-rc
- Tailwind CSS 3.4.1
- Recharts 2.14.1
- Shadcn UI

## 📝 Routes

- `/` - Landing page
- `/dashboard` - Dashboard overview
- `/account/[id]` - Account details
- `/transaction/create` - Add transaction

## 🔧 API Routes (Mock)

- `GET /api/dashboard` - Accounts
- `GET /api/dashboard/data` - Statistics
- `GET /api/transaction` - Transactions
- `GET /api/budget` - Budget info
- `GET /api/account/[id]` - Account details

---

**Frontend-only showcase with mock data. No backend or environment variables required.**
"# Credex" 
