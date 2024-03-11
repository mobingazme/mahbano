import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useOptionsStore = create(
  persist(
    devtools(
      (set) => ({
        options: {
          information_site: {
            sitename: null,
            short_description: null,
            description: null,
            keyword: null,
            logo: null,
            logo2: null,
            icon_logo: null,
            type_site: null,
            is_active: null,
          },
          social: {
            instagram: null,
            whatsApp: null,
            telegram: null,
          },
          business_information: {
            phone_support: null,
            email_support: null,
            video_about_us: null,
            address: null,
            address_2: null,
          },
        },
        isLoading: false,
        isError: false,
        getOptionsFromApi: async () => {
          set({ isLoading: true });
          try {
            const response = await fetch('https://best-cms.ir/api/v1/options', {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              next: { revalidate: 7 * 24 * 60 * 1000 },
            });
            const data = await response.json();
            set((state) => ({
              ...state,
              options: data.results,
              isLoading: false,
            }));
          } catch (error) {
            set((state) => ({
              ...state,
              isError: true,
              isLoading: false,
            }));
            console.error('Error fetching options:', error);
          }
        },
      })
    ),
    {
      name: 'options-store',
      // استفاده از localStorage به جای sessionStorage
      storage: typeof window !== 'undefined' ? localStorage : undefined,
    }
  )
);

export default useOptionsStore;