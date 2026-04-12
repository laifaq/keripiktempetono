"use client";

import { useEffect } from 'react';
import { useProductStore } from '@/store/useProductStore';
import { useSettingsStore } from '@/store/useSettingsStore';

export default function StoreInitializer({ children }: { children: React.ReactNode }) {
  const fetchProducts = useProductStore(state => state.fetchProducts);
  const isInitialized = useProductStore(state => state.isInitialized);
  const fetchSettings = useSettingsStore(state => state.fetchSettings);

  useEffect(() => {
    if (!isInitialized) {
      fetchProducts();
    }
    fetchSettings();
  }, [fetchProducts, isInitialized, fetchSettings]);

  return <>{children}</>;
}
