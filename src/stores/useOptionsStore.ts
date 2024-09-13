import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

import {InformationSite,Social,BusinessInformation,OptionsStoreState,OptionsData} from '@/types/optionsStoreTypes'

const useOptionsStore = create<OptionsStoreState>()(
  devtools(
    persist(
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
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/options`, {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              next: { revalidate: 7 * 24 * 60 * 1000 },
            });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            set({ options: data.results, isLoading: false });
          } catch (error) {
            set({ isError: true, isLoading: false });
            console.error('Error fetching options:', error);
          }
        },
      }),
      {
        name: 'options-store',
        storage: createJSONStorage(() => localStorage), // استفاده از localStorage
        partialize: (state) => ({
          options: state.options,
          isLoading: state.isLoading,
          isError: state.isError,
        }),
      }
    )
  )
);

export default useOptionsStore;
