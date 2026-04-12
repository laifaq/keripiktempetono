"use client";

import { useState, useEffect } from "react";
import { User, Shield, Key, Save, Loader2 } from "lucide-react";

export default function AdminSettingsPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [isSavingPassword, setIsSavingPassword] = useState(false);

  useEffect(() => {
    fetchAdmin();
  }, []);

  const fetchAdmin = async () => {
    try {
      const res = await fetch('/api/admin/profile');
      const data = await res.json();
      if (data.username) {
        setUsername(data.username);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateProfile = async () => {
    setIsSavingProfile(true);
    try {
      const res = await fetch('/api/admin/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
      });
      if (res.ok) {
        alert('Profil admin berhasil diperbarui!');
      }
    } catch (err) {
      alert('Gagal memperbarui profil');
    } finally {
      setIsSavingProfile(false);
    }
  };

  const handleUpdatePassword = async () => {
    if (password !== confirmPassword) {
      alert('Password konfirmasi tidak cocok!');
      return;
    }
    if (password.length < 6) {
      alert('Password minimal 6 karakter!');
      return;
    }

    setIsSavingPassword(true);
    try {
      const res = await fetch('/api/admin/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        alert('Password berhasil diperbarui!');
        setPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      alert('Gagal memperbarui password');
    } finally {
      setIsSavingPassword(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center text-gray-400 gap-3">
        <Loader2 className="animate-spin" size={32} />
        <p className="text-sm font-medium">Memuat data admin...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Pengaturan Admin</h1>
        <p className="text-gray-500 mt-1">Kelola akun administrator dan keamanan panel.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
              <User size={32} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Profil Admin</h3>
              <p className="text-sm text-gray-500">ID: admin-tono-01</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="admin-username" className="text-sm font-semibold text-gray-700">Username</label>
              <input 
                id="admin-username" 
                type="text" 
                placeholder="Masukkan username" 
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 transition-all outline-none" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <button 
              onClick={handleUpdateProfile}
              disabled={isSavingProfile}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition-all shadow-md disabled:opacity-50"
            >
              {isSavingProfile ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
              {isSavingProfile ? "Menyimpan..." : "Simpan Profil"}
            </button>
          </div>
        </div>

        {/* Password Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
              <Key size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Ganti Password</h3>
              <p className="text-sm text-gray-500">Gunakan kombinasi yang kuat.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Password Baru</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 transition-all outline-none" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Konfirmasi Password Baru</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 transition-all outline-none" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button 
              onClick={handleUpdatePassword}
              disabled={isSavingPassword}
              className="w-full py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-black transition-all shadow-md disabled:opacity-50"
            >
              {isSavingPassword ? "Memperbarui..." : "Perbarui Password"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
