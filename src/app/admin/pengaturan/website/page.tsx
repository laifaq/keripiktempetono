"use client";

import { useState, useEffect } from "react";
import { 
  Globe, 
  Palette, 
  Image as ImageIcon, 
  MapPin, 
  Share2, 
  Save,
  RotateCcw,
  Loader2
} from "lucide-react";

export default function WebsiteSettingsPage() {
  const [activeSection, setActiveSection] = useState('umum');
  const [settings, setSettings] = useState<Record<string, string>>({});
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

  const handleChange = (key: string, value: string) => {
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
        alert('Pengaturan berhasil disimpan!');
      }
    } catch (err) {
      alert('Gagal menyimpan pengaturan');
    } finally {
      setIsSaving(false);
    }
  };

  const sections = [
    { id: 'umum', label: 'Umum & Hero', icon: <ImageIcon size={18} /> },
    { id: 'visual', label: 'Visual & Warna', icon: <Palette size={18} /> },
    { id: 'kontak', label: 'Kontak & Alamat', icon: <MapPin size={18} /> },
    { id: 'sosmed', label: 'Social Media', icon: <Share2 size={18} /> },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Pengaturan Website</h1>
          <p className="text-gray-500 mt-1">Sesuaikan tampilan dan informasi publik website Anda.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors">
            <RotateCcw size={18} />
            Reset
          </button>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 px-6 py-2 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors shadow-md disabled:opacity-50"
          >
            {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
            {isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Navigation Tabs */}
        <aside className="lg:w-64 flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                activeSection === section.id 
                  ? "bg-white text-amber-600 shadow-sm border border-amber-100" 
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {section.icon}
              {section.label}
            </button>
          ))}
        </aside>

        {/* Content Area */}
        <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 min-h-[500px]">
          {isLoading ? (
             <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-3">
                <Loader2 className="animate-spin" size={32} />
                <p className="text-sm font-medium">Memuat pengaturan...</p>
             </div>
          ) : (
            <>
              {activeSection === 'umum' && <UmumSettings settings={settings} onChange={handleChange} />}
              {activeSection === 'visual' && <VisualSettings settings={settings} onChange={handleChange} />}
              {activeSection === 'kontak' && <KontakSettings settings={settings} onChange={handleChange} />}
              {activeSection === 'sosmed' && <SosmedSettings settings={settings} onChange={handleChange} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function UmumSettings({ settings, onChange }: { settings: any, onChange: any }) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Judul & Tagline Hero</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="brand-name" className="text-sm font-semibold text-gray-700">Nama Brand</label>
            <input 
              id="brand-name" 
              type="text" 
              placeholder="Masukkan nama brand" 
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none" 
              value={settings.brand_name || "Keripik Tempe Tono"} 
              onChange={(e) => onChange('brand_name', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="hero-tagline" className="text-sm font-semibold text-gray-700">Tagline (Hero)</label>
            <input 
              id="hero-tagline" 
              type="text" 
              placeholder="Masukkan tagline hero" 
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none" 
              value={settings.hero_tagline || "Camilan khas Malang, kriuknya nendang!"} 
              onChange={(e) => onChange('hero_tagline', e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Hero Banner Image</h3>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-64 h-40 rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden relative group">
            <img src={settings.hero_image || "/images/hero-banner.png"} alt="Preview" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-900 px-3 py-1.5 rounded-lg text-xs font-bold shadow-xl">Ganti Gambar</button>
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <p className="text-sm text-gray-500 italic">Rekomendasi ukuran: 1920x1080px. Format: JPG, PNG, atau WebP. Maksimal 2MB.</p>
            <button className="text-amber-600 font-bold text-sm hover:underline">Hapus & Gunakan Default</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function VisualSettings({ settings, onChange }: { settings: any, onChange: any }) {
  const brandColor = settings.brand_color || "#F59E0B";
  
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Identitas Visual</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
             <label className="text-sm font-semibold text-gray-700">Logo Website</label>
             <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-100 overflow-hidden p-2">
                   <img src={settings.brand_logo || "https://down-id.img.susercontent.com/file/id-11134233-7r98w-lsryht7jdcndec@resize_w160_nl.webp"} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-xl text-xs font-bold transition-colors">Ganti Logo</button>
             </div>
          </div>
          <div className="space-y-3">
             <label htmlFor="theme-color" className="text-sm font-semibold text-gray-700">Warna Utama (Theme Color)</label>
              <div className="flex items-center gap-4">
                 <input 
                   id="theme-color-picker"
                   type="color"
                   title="Pilih warna tema"
                   aria-label="Pilih warna tema"
                   className="w-16 h-10 rounded-lg border border-gray-200 cursor-pointer p-1"
                   value={brandColor}
                   onChange={(e) => onChange('brand_color', e.target.value)}
                 />
                 <input 
                   id="theme-color" 
                   type="text" 
                   placeholder="#HEXCOLOR" 
                   className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-mono w-28 uppercase outline-none focus:ring-2 focus:ring-amber-500" 
                   value={brandColor} 
                   onChange={(e) => onChange('brand_color', e.target.value)}
                 />
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function KontakSettings({ settings, onChange }: { settings: any, onChange: any }) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="space-y-2">
        <label htmlFor="maps-address" className="text-sm font-semibold text-gray-700">Alamat Lengkap (Google Maps)</label>
        <textarea 
          id="maps-address" 
          rows={3} 
          placeholder="Masukkan alamat lengkap" 
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 transition-all outline-none" 
          value={settings.maps_address || "Jl. Pisang Agung III No.14C, Pisang Candi, Kota Malang"} 
          onChange={(e) => onChange('maps_address', e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="maps-url" className="text-sm font-semibold text-gray-700">URL Google Maps</label>
        <input 
          id="maps-url" 
          type="text" 
          placeholder="Masukkan URL Google Maps" 
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 transition-all outline-none" 
          value={settings.maps_url || "https://maps.app.goo.gl/f5z7uL3Kg3EJDR9d9"} 
          onChange={(e) => onChange('maps_url', e.target.value)}
        />
      </div>
    </div>
  );
}

function SosmedSettings({ settings, onChange }: { settings: any, onChange: any }) {
  const socialList = [
    { key: 'social_wa', name: 'WhatsApp', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/3840px-WhatsApp.svg.png', color: 'text-green-600', default: '085733325250' },
    { key: 'social_ig', name: 'Instagram', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png', color: 'text-pink-600', default: '@keripiktempetono' },
    { key: 'social_shopee', name: 'Shopee', icon: 'https://emping.web.id/wp-content/uploads/Shopee-Logo-1.png', color: 'text-orange-600', default: 'https://s.shopee.co.id/2BAo62R1jO' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      {socialList.map((social) => (
        <div key={social.name} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
          <div className="w-10 h-10 rounded-lg bg-white p-2 shadow-sm shrink-0">
             <img src={social.icon} alt={social.name} className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
             <label htmlFor={`social-${social.name}`} className="text-xs font-bold text-gray-400 uppercase tracking-wider">{social.name}</label>
             <input 
                id={`social-${social.name}`} 
                type="text" 
                placeholder={`Masukkan ${social.name}`} 
                className="w-full bg-transparent border-none p-0 focus:ring-0 font-medium text-gray-900" 
                value={settings[social.key] || social.default} 
                onChange={(e) => onChange(social.key, e.target.value)}
              />
          </div>
        </div>
      ))}
    </div>
  );
}
