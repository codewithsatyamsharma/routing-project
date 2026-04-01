import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import {
  CryptoPage,
  AnalyticsPage,
  ECommercePage,
  ProfilePage,
  InvoicePage,
  TasksPage,
  CalendarPage,
  AuthPage,
  UIPage,
  IconsPage,
  NotFoundPage
} from "./pages/Pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/crypto" replace />} />
          
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="ecommerce" element={<ECommercePage />} />
          <Route path="crypto" element={<CryptoPage />} />
          
          <Route path="profile" element={<ProfilePage />} />
          <Route path="invoice" element={<InvoicePage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          
          <Route path="auth/login" element={<AuthPage mode="login" />} />
          <Route path="auth/register" element={<AuthPage mode="register" />} />
          
          <Route path="ui/buttons" element={<UIPage sub="buttons" />} />
          <Route path="ui/grid" element={<UIPage sub="grid" />} />
          <Route path="icons" element={<IconsPage />} />
          
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}