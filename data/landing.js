import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "50K+",
    label: "Active Users",
  },
  {
    value: "$2B+",
    label: "Transactions Tracked",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "4.9/5",
    label: "User Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your spending patterns with AI-powered analytics",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Smart Receipt Scanner",
    description:
      "Extract data automatically from receipts using advanced AI technology",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Budget Planning",
    description: "Create and manage budgets with intelligent recommendations",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Multi-Account Support",
    description: "Manage multiple accounts and credit cards in one place",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Multi-Currency",
    description: "Support for multiple currencies with real-time conversion",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Automated Insights",
    description: "Get automated financial insights and recommendations",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Sign Up Instantly",
    description:
      "Register with your email in seconds and start managing your finances right away",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Link Your Accounts",
    description:
      "Connect your bank accounts and cards to see all your transactions in one place",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Optimize Your Budget",
    description:
      "Get smart recommendations and visualize your spending patterns to build better financial habits",
  },
];

// Reviews Data
export const reviewsData = [
  {
    name: "Priya Sharma",
    role: "E-commerce Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    quote:
      "Credex has revolutionized my financial management! The dashboard gives me real-time insights into my business performance and helps me make better decisions.",
  },
  {
    name: "Rajesh Patel",
    role: "Freelance Developer",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    quote:
      "The invoice tracking and automatic receipt scanning is a game-changer. I've saved countless hours on bookkeeping and can now focus purely on development work.",
  },
  {
    name: "Ananya Desai",
    role: "Business Consultant",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    quote:
      "I recommend Credex to all my clients. The budget tracking and detailed analytics have helped them optimize expenses and increase profitability significantly.",
  },
];
