import { useEffect } from 'react';
import { useProductStore } from '@/store/useProductStore';

export default function StoreInitializer({ children }: { children: React.ReactNode }) {
  const fetchProducts = useProductStore(state => state.fetchProducts);
  const isInitialized = useProductStore(state => state.isInitialized);

  useEffect(() => {
    if (!isInitialized) {
      fetchProducts();
    }
  }, [fetchProducts, isInitialized]);

  return <>{children}</>;
}
