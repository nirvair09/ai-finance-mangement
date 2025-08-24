import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// 📊 Stats Data (new)
export const statsData = [
  {
    value: "75K+",
    label: "Finance Goals Achieved",
  },
  {
    value: "$3.5B+",
    label: "Expenses Analyzed",
  },
  {
    value: "100%",
    label: "Data Privacy Commitment",
  },
  {
    value: "4.95/5",
    label: "Customer Satisfaction",
  },
];

// 🚀 Features Data (new)
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-green-600" />,
    title: "Personalized Dashboards",
    description:
      "Customize your dashboard with widgets that highlight what matters most to you.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-green-600" />,
    title: "AI-Powered Expense Tracking",
    description:
      "Upload any receipt or bill and let AI categorize and record it automatically.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-green-600" />,
    title: "Smart Budgeting",
    description:
      "Set financial goals and let our system guide you with adaptive budget suggestions.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-green-600" />,
    title: "Unified Account View",
    description: "Link your bank accounts, wallets, and credit cards seamlessly.",
  },
  {
    icon: <Globe className="h-8 w-8 text-green-600" />,
    title: "Global Ready",
    description:
      "Plan and track spending in over 50 currencies with real-time FX rates.",
  },
  {
    icon: <Zap className="h-8 w-8 text-green-600" />,
    title: "Predictive Insights",
    description:
      "AI forecasts your spending trends to help you stay ahead financially.",
  },
];

// ⚙️ How It Works Data (new)
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-green-600" />,
    title: "1. Sign Up Instantly",
    description:
      "Join with just your email or social login and start in under a minute.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-green-600" />,
    title: "2. Connect Your Finances",
    description:
      "Securely link accounts or add transactions manually — it’s your choice.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-green-600" />,
    title: "3. Gain Clarity",
    description:
      "View simple, clear insights that help you understand and optimize spending.",
  },
];

// 💬 Testimonials Data (new)
export const testimonialsData = [
  {
    name: "Ananya Patel",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "This platform gave me financial clarity during my startup journey. The AI projections kept my business cash flow healthy.",
  },
  {
    name: "David Williams",
    role: "Remote Worker",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "Managing multiple currencies was always a headache. Now I see all my accounts in one place, converted instantly. Game-changer!",
  },
  {
    name: "Sophia Kim",
    role: "Graduate Student",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    quote:
      "As a student, budgeting was tough. The automatic alerts kept me from overspending on non-essentials every month.",
  },
];
