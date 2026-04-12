"use client";

import { useEffect } from 'react';
import { useProductStore } from '@/store/useProductStore';
<<<<<<< HEAD
=======
import { useSettingsStore } from '@/store/useSettingsStore';
>>>>>>> 88cb45f (initial commit: full admin dashboard and dynamic settings)

export default function StoreInitializer({ children }: { children: React.ReactNode }) {
  const fetchProducts = useProductStore(state => state.fetchProducts);
  const isInitialized = useProductStore(state => state.isInitialized);
<<<<<<< HEAD
=======
  const fetchSettings = useSettingsStore(state => state.fetchSettings);
>>>>>>> 88cb45f (initial commit: full admin dashboard and dynamic settings)

  useEffect(() => {
    if (!isInitialized) {
      fetchProducts();
    }
<<<<<<< HEAD
  }, [fetchProducts, isInitialized]);
=======
    fetchSettings();
  }, [fetchProducts, isInitialized, fetchSettings]);
>>>>>>> 88cb45f (initial commit: full admin dashboard and dynamic settings)

  return <>{children}</>;
}
