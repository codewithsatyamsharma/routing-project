import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const pathName = location.pathname.split("/").pop();
  const title = pathName ? pathName.charAt(0).toUpperCase() + pathName.slice(1) : "Dashboard";

  return (
    <div className="h-16 bg-white border-b border-slate-200 flex items-center px-6 gap-4 sticky top-0 z-50">
      <span className="text-xl cursor-pointer text-slate-400 hover:text-slate-600 transition-colors">☰</span>
      <div className="font-semibold text-slate-800 hidden sm:block">Current Route: {title}</div>
      <div className="flex items-center bg-slate-100 border border-slate-200 rounded-md px-3 py-1.5 gap-2 w-48 ml-4 lg:ml-8 transition-colors focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100">
        <span className="text-slate-400 text-sm">🔍</span>
        <input placeholder="Search..." className="bg-transparent border-none outline-none text-sm w-full text-slate-600 placeholder-slate-400" />
      </div>
      <div className="flex-1"></div>
      <div className="flex items-center gap-5">
        {["🔔", "💬", "🇺🇸"].map((icon, i) => (
          <div key={i} className="relative cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-lg">{icon}</span>
            {i === 0 && <span className="absolute -top-1.5 -right-1.5 bg-indigo-500 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">4</span>}
          </div>
        ))}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-xs text-white font-bold cursor-pointer ml-2">SS</div>
      </div>
    </div>
  );
}