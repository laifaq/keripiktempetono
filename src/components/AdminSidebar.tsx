"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Package, 
  Settings, 
  User, 
  Store, 
  Globe,
  ChevronDown,
  LogOut
} from "lucide-react";
import { useState } from "react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isSettingsOpen, setIsSettingsOpen] = useState(pathname.includes("/pengaturan"));

  const menuItems = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: <LayoutDashboard size={20} />,
      active: pathname === "/admin"
    },
    {
      label: "Manajemen Produk",
      href: "/admin/produk",
      icon: <Package size={20} />,
      active: pathname.startsWith("/admin/produk") || pathname.startsWith("/admin/tambah") || pathname.startsWith("/admin/edit")
    }
  ];

  const settingSubmenu = [
    {
      label: "Pengaturan Admin",
      href: "/admin/pengaturan/admin",
      icon: <User size={18} />,
      active: pathname === "/admin/pengaturan/admin"
    },
    {
      label: "Pengaturan Store",
      href: "/admin/pengaturan/toko",
      icon: <Store size={18} />,
      active: pathname === "/admin/pengaturan/toko"
    },
    {
      label: "Pengaturan Website",
      href: "/admin/pengaturan/website",
      icon: <Globe size={18} />,
      active: pathname === "/admin/pengaturan/website"
    }
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col sticky top-0 shadow-sm">
      {/* Brand */}
      <div className="p-6 border-b border-gray-100 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-white font-bold">
          T
        </div>
        <div className="leading-tight">
          <p className="font-bold text-gray-900">Admin Panel</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-0.5">Keripik Tono</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-grow p-4 space-y-2 mt-4 overflow-y-auto">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              item.active 
                ? "bg-amber-50 text-amber-600 font-bold shadow-sm" 
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}

        {/* Collapsible Settings */}
        <div className="space-y-1">
          <button
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
              pathname.includes("/pengaturan") 
                ? "text-amber-600 font-bold" 
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <div className="flex items-center gap-3">
              <Settings size={20} />
              <span className="text-sm">Pengaturan</span>
            </div>
            <ChevronDown 
              size={16} 
              className={`transition-transform duration-200 ${isSettingsOpen ? "rotate-180" : ""}`} 
            />
          </button>

          {isSettingsOpen && (
            <div className="ml-9 space-y-1 mt-1 border-l-2 border-amber-100 pl-2">
              {settingSubmenu.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                    sub.active 
                      ? "text-amber-600 font-bold bg-amber-50" 
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {sub.icon}
                  <span className="text-xs">{sub.label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Logout / User Info */}
      <div className="p-4 border-t border-gray-100 mt-auto">
        <Link
          href="/admin/login"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all duration-200"
        >
          <LogOut size={20} />
          <span className="text-sm font-semibold">Keluar</span>
        </Link>
      </div>
    </div>
  );
}
