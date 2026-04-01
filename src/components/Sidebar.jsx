import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navConfig } from "../data/navConfig";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const activePath = location.pathname;
  
  const [expanded, setExpanded] = useState({ Dashboards: true, Auth: false, "UI Elements": false });

  const toggle = (label) => setExpanded((e) => ({ ...e, [label]: !e[label] }));

  return (
    <div className="w-64 bg-slate-900 h-full flex flex-col overflow-y-auto">
      <div className="p-5 flex items-center gap-2">
        <span className="text-xl font-extrabold text-white tracking-tight">AdminKit</span>
        <span className="bg-indigo-500 text-white text-[10px] font-bold rounded px-1.5 py-0.5">PRO</span>
      </div>

      <div className="px-5 pb-5 pt-3 flex items-center gap-3 border-b border-slate-800">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-sm text-white font-bold">SS</div>
        <div>
          <div className="text-white font-semibold text-sm flex items-center gap-1">Satyam Sharma <span className="text-[10px]">▾</span></div>
          <div className="text-slate-400 text-xs">Designer</div>
        </div>
      </div>

      <nav className="flex-1 py-4">
        {navConfig.map((section) => (
          <div key={section.section}>
            <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase px-5 py-2">{section.section}</div>
            {section.items.map((item) => {
              if (item.expandable) {
                const open = expanded[item.label];
                const isParentActive = item.children?.some((c) => activePath.includes(c.path));
                return (
                  <div key={item.label}>
                    <div onClick={() => toggle(item.label)} className={`flex items-center gap-3 px-5 py-2.5 cursor-pointer text-sm select-none transition-colors ${isParentActive ? "text-white" : "text-slate-400 hover:text-slate-200"}`}>
                      <span className="text-lg w-5 text-center">{item.icon}</span>
                      <span className="flex-1 font-medium">{item.label}</span>
                      <span className="text-[10px] text-slate-500">{open ? "▲" : "▼"}</span>
                    </div>
                    {open && item.children?.map((child) => {
                      const isActive = activePath === child.path;
                      return (
                        <div key={child.path} onClick={() => navigate(child.path)} className={`flex items-center gap-2.5 py-2 pl-12 pr-5 cursor-pointer text-sm transition-colors border-l-4 ${isActive ? "bg-slate-800 border-indigo-500 text-indigo-400" : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`}>
                          <span className="mr-1">→</span>
                          <span className="flex-1">{child.label}</span>
                          {child.pro && <span className="bg-indigo-500 text-white text-[9px] font-bold rounded px-1.5 py-0.5">Pro</span>}
                        </div>
                      );
                    })}
                  </div>
                );
              }
              const isActive = activePath === item.path;
              return (
                <div key={item.path} onClick={() => navigate(item.path)} className={`flex items-center gap-3 px-5 py-2.5 cursor-pointer text-sm transition-colors border-l-4 ${isActive ? "bg-slate-800 border-indigo-500 text-white" : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`}>
                  <span className="text-lg w-5 text-center">{item.icon}</span>
                  <span className="flex-1 font-medium">{item.label}</span>
                  {item.pro && <span className="bg-indigo-500 text-white text-[9px] font-bold rounded px-1.5 py-0.5">Pro</span>}
                  {item.badge && <span className="bg-slate-700 text-slate-200 text-[9px] font-bold rounded px-1.5 py-0.5">{item.badge}</span>}
                </div>
              );
            })}
          </div>
        ))}
      </nav>

      
    </div>
  );
}