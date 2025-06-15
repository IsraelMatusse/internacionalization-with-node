export const rawUserData = {
  id: "user123",
  name: "João Silva",
  email: "joao@example.com",
  balance: 15000.5,
  monthlyIncome: 45000.0,
  createdAt: new Date("2024-01-15T10:30:00Z"),
  lastLogin: new Date("2024-06-10T14:20:00Z"),
  transactions: [
    {
      id: "tx1",
      amount: 2500.75,
      date: new Date("2024-06-01T09:00:00Z"),
      type: "deposit",
    },
    {
      id: "tx2",
      amount: -1200.3,
      date: new Date("2024-06-05T16:45:00Z"),
      type: "withdrawal",
    },
  ],
  settings: {
    notifications: true,
    currency: "auto",
  },
};

export const rawProductData = {
  id: "prod456",
  name: "Premium Subscription",
  price: 2999.99,
  originalPrice: 3999.99,
  discount: 25.0,
  validUntil: new Date("2024-12-31T23:59:59Z"),
  features: ["Advanced Analytics", "Priority Support", "Custom Integrations"],
  stats: {
    users: 15420,
    growth: 12.5,
    rating: 4.8,
  },
};
