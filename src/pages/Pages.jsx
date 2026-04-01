const Wrapper = ({ children }) => (
  <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-200 text-center max-w-2xl mx-auto mt-10">
    {children}
  </div>
);

const Title = ({ children }) => (
  <h1 className="text-2xl font-bold text-slate-800 mb-4">{children}</h1>
);

const Text = ({ children }) => (
  <p className="text-slate-600 text-base leading-relaxed mb-2">{children}</p>
);

export function CryptoPage() {
  return (
    <Wrapper>
      <Title>Crypto Dashboard Route</Title>
      <Text>You have successfully routed to <strong className="text-indigo-600">/crypto</strong>.</Text>
      <Text>This section is designed to handle cryptocurrency tracking, charts, and market data.</Text>
    </Wrapper>
  );
}

export function AnalyticsPage() {
  return (
    <Wrapper>
      <Title>Analytics Route</Title>
      <Text>You have successfully routed to <strong className="text-indigo-600">/analytics</strong>.</Text>
      <Text>This page will display user traffic, bounce rates, and active session data.</Text>
    </Wrapper>
  );
}

export function ECommercePage() {
  return (
    <Wrapper>
      <Title>E-Commerce Route</Title>
      <Text>You have successfully routed to <strong className="text-indigo-600">/ecommerce</strong>.</Text>
      <Text>This area handles product listings, recent orders, and revenue tracking.</Text>
    </Wrapper>
  );
}

export function ProfilePage() {
  return (
    <Wrapper>
      <Title>User Profile Route</Title>
      <Text>You have successfully routed to <strong className="text-indigo-600">/profile</strong>.</Text>
      <Text>Manage account settings, bio, and password updates here.</Text>
    </Wrapper>
  );
}

export function InvoicePage() {
  return (
    <Wrapper>
      <Title>Invoices Route</Title>
      <Text>You have successfully routed to <strong className="text-indigo-600">/invoice</strong>.</Text>
      <Text>Billing history, pending invoices, and paid receipts are managed on this page.</Text>
    </Wrapper>
  );
}

export function TasksPage() {
  return (
    <Wrapper>
      <Title>Tasks Kanban Route</Title>
      <Text>You have successfully routed to <strong className="text-indigo-600">/tasks</strong>.</Text>
      <Text>Project management board featuring To-Do, In-Progress, and Completed columns.</Text>
    </Wrapper>
  );
}

export function CalendarPage() {
  return (
    <Wrapper>
      <Title>Calendar Route</Title>
      <Text>You have successfully routed to <strong className="text-indigo-600">/calendar</strong>.</Text>
      <Text>Schedule events, meetings, and view monthly timelines.</Text>
    </Wrapper>
  );
}

export function AuthPage({ mode }) {
  return (
    <Wrapper>
      <Title>Auth Route ({mode})</Title>
      <Text>You have successfully routed to <strong className="text-indigo-600">/auth/{mode}</strong>.</Text>
      <Text>This handles user authentication workflows.</Text>
    </Wrapper>
  );
}

export function UIPage({ sub }) {
  return (
    <Wrapper>
      <Title>UI Components Route ({sub})</Title>
      <Text>You have successfully routed to <strong className="text-indigo-600">/ui/{sub}</strong>.</Text>
      <Text>Design system reference for {sub}.</Text>
    </Wrapper>
  );
}

export function IconsPage() {
  return (
    <Wrapper>
      <Title>Icons Library Route</Title>
      <Text>You have successfully routed to <strong className="text-indigo-600">/icons</strong>.</Text>
      <Text>Browse the 1,500+ available icons.</Text>
    </Wrapper>
  );
}

export function NotFoundPage() {
  return (
    <Wrapper>
      <h1 className="text-7xl font-black text-slate-200 mb-4">404</h1>
      <Title>Page Not Found</Title>
      <Text>The URL you entered doesn't match any route.</Text>
    </Wrapper>
  );
}