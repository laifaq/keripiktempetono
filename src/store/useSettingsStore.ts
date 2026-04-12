import { create } from 'zustand';

interface SettingsState {
  settings: Record<string, string>;
  isLoading: boolean;
  fetchSettings: () => Promise<void>;
  getSetting: (key: string, defaultValue?: string) => string;
}

export const useSettingsStore = create<SettingsState>((set, get) => ({
  settings: {},
  isLoading: true,
  fetchSettings: async () => {
    try {
      const res = await fetch('/api/settings');
      const data = await res.json();
      if (!data.error) {
        set({ settings: data, isLoading: false });
      }
    } catch (err) {
      console.error('Failed to fetch settings:', err);
      set({ isLoading: false });
    }
  },
  getSetting: (key: string, defaultValue: string = "") => {
    return get().settings[key] || defaultValue;
  }
}));
