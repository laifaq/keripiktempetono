"use client";

import { Store, Clock, Truck, ShieldCheck, Save, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function StoreSettingsPage() {
  const [settings, setSettings] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/settings');
      const data = await res.json();
      if (!data.error) {
        setSettings(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      if (res.ok) {
        alert('Pengaturan store berhasil disimpan!');
      }
    } catch (err) {
      alert('Gagal menyimpan pengaturan');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center text-gray-400 gap-3">
        <Loader2 className="animate-spin" size={32} />
        <p className="text-sm font-medium">Memuat pengaturan store...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Pengaturan Store</h1>
        <p className="text-gray-500 mt-1">Konfigurasi operasional dan kebijakan toko Anda.</p>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 divide-y divide-gray-100">
        <section className="py-6 first:pt-0">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <Clock size={24} />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="font-bold text-gray-900">Jam Operasional</h3>
                <p className="text-sm text-gray-500">Tentukan kapan toko Anda melayani pesanan.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="op-hours-1" className="text-xs font-bold text-gray-400 px-1">Hari Kerja</label>
                  <input 
                    id="op-hours-1" 
                    type="text" 
                    placeholder="Contoh: Senin - Sabtu: 08.00 - 17.00" 
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-amber-500" 
                    value={settings.op_hours_1 || "Senin - Sabtu: 08.00 - 17.00"} 
                    onChange={(e) => handleChange('op_hours_1', e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="op-hours-2" className="text-xs font-bold text-gray-400 px-1">Hari Libur</label>
                  <input 
                    id="op-hours-2" 
                    type="text" 
                    placeholder="Contoh: Minggu: Tutup" 
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-amber-500" 
                    value={settings.op_hours_2 || "Minggu: Tutup"} 
                    onChange={(e) => handleChange('op_hours_2', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Truck size={24} />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="font-bold text-gray-900">Pengiriman</h3>
                <p className="text-sm text-gray-500">Metode dan area pengiriman yang didukung.</p>
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 rounded text-amber-500 focus:ring-amber-500" 
                    checked={settings.shipping_indo !== "false"} 
                    onChange={(e) => handleChange('shipping_indo', String(e.target.checked))}
                  />
                  <span className="text-sm font-medium text-gray-700">Mendukung Pengiriman Seluruh Indonesia</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 rounded text-amber-500 focus:ring-amber-500" 
                    checked={settings.shipping_cod !== "false"} 
                    onChange={(e) => handleChange('shipping_cod', String(e.target.checked))}
                  />
                  <span className="text-sm font-medium text-gray-700">Bisa COD (Bayar di Tempat) - Area Malang</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 last:pb-0">
           <div className="flex justify-end">
             <button 
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-2 px-8 py-3 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition-all shadow-md disabled:opacity-50"
             >
                {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                {isSaving ? 'Menyimpan...' : 'Simpan Pengaturan'}
             </button>
           </div>
        </section>
      </div>
    </div>
  );
}
