export const navConfig = [
  {
    section: "Pages",
    items: [
      {
        label: "Dashboards",
        icon: "⊞",
        expandable: true,
        defaultOpen: true,
        children: [
          { label: "Analytics", path: "/analytics" },
          { label: "E-Commerce", path: "/ecommerce", pro: true },
          { label: "Crypto", path: "/crypto", pro: true },
        ],
      },
      { label: "Profile", icon: "👤", path: "/profile" },
      { label: "Invoice", icon: "🗂", path: "/invoice" },
      { label: "Tasks", icon: "☰", path: "/tasks", pro: true },
      { label: "Calendar", icon: "📅", path: "/calendar", pro: true },
      {
        label: "Auth",
        icon: "👥",
        expandable: true,
        defaultOpen: false,
        children: [
          { label: "Login", path: "/auth/login" },
          { label: "Register", path: "/auth/register" },
        ],
      },
    ],
  },
  {
    section: "Components",
    items: [
      {
        label: "UI Elements",
        icon: "💼",
        expandable: true,
        defaultOpen: false,
        children: [
          { label: "Buttons", path: "/ui/buttons" },
          { label: "Grid", path: "/ui/grid" },
        ],
      },
      { label: "Icons", icon: "☕", path: "/icons", badge: "1,500+" },
    ],
  },
];