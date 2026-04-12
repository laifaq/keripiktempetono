"use client";

import { useState, useEffect } from "react";
import { useProductStore } from "@/store/useProductStore";
import { 
  Users, 
  MousePointerClick, 
  Package, 
  TrendingUp,
  BarChart3,
  CalendarDays
} from "lucide-react";

export default function AdminDashboard() {
  const products = useProductStore((state) => state.products);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'harian' | 'mingguan' | 'bulanan'>('harian');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-amber-200 border-t-amber-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Mock data for analytics based on tab
  const stats = {
    harian: { visitors: 45, clicks: 128, conversion: 12 },
    mingguan: { visitors: 320, clicks: 890, conversion: 15 },
    bulanan: { visitors: 1450, clicks: 4200, conversion: 18 }
  };

  const currentStats = stats[activeTab];
  const activeCount = products.filter(p => !p.archived).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard Ringkasan</h1>
          <p className="text-gray-500 mt-1">Pantau performa website dan produk Anda.</p>
        </div>
        
        {/* Tab Switcher */}
        <div className="bg-gray-100 p-1 rounded-xl flex gap-1 self-stretch md:self-auto">
          {(['harian', 'mingguan', 'bulanan'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === tab 
                  ? "bg-white text-amber-600 shadow-sm" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatCard 
          title="Pengunjung" 
          value={currentStats.visitors} 
          icon={<Users className="text-blue-500" />} 
          trend="+12%" 
          color="blue"
        />
        <StatCard 
          title="Klik Produk" 
          value={currentStats.clicks} 
          icon={<MousePointerClick className="text-amber-500" />} 
          trend="+8%" 
          color="amber"
        />
        <StatCard 
          title="Total Produk" 
          value={products.length} 
          icon={<Package className="text-purple-500" />} 
          trend={`${activeCount} Aktif`} 
          color="purple"
        />
        <StatCard 
          title="Konversi" 
          value={`${currentStats.conversion}%`} 
          icon={<TrendingUp className="text-green-500" />} 
          trend="+2%" 
          color="green"
        />
      </div>

      {/* Placeholder for Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <BarChart3 size={18} className="text-amber-500" />
              Grafik Pengunjung
            </h3>
            <span className="text-xs text-gray-400">Data {activeTab}</span>
          </div>
          <div className="h-48 bg-gray-50 rounded-xl flex items-center justify-center border border-dashed border-gray-200">
            <p className="text-gray-400 text-sm italic">Visualisasi grafik akan muncul di sini</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <CalendarDays size={18} className="text-amber-500" />
              Aktivitas Terakhir
            </h3>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                  <MousePointerClick size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Seseorang mengklik Produk {i}</p>
                  <p className="text-xs text-gray-400">{i * 5} menit yang lalu</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, trend, color }: any) {
  const colorMap: any = {
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-600",
    purple: "bg-purple-50 text-purple-600",
    green: "bg-green-50 text-green-600",
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${colorMap[color]}`}>
          {icon}
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded-lg ${trend.includes('%') ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-600'}`}>
          {trend}
        </span>
      </div>
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
    </div>
  );
}
