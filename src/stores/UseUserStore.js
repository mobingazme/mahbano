import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import Cookies from 'js-cookie';

const useUserStore = create(
  persist(
    devtools((set) => ({
      token: null,
      user: null,
      setUser: (userData) => set({ user: userData }),
      setToken: (newToken) => set({ token: newToken }),
      clearUser: () => set({ user: null, token: null }),
      getUserFromApi: async () => {
        try {
          const token = Cookies.get('authToken');
          if (!token) {
            console.error('No auth token found');
            return;
          }
          
          const response = await fetch('https://best-cms.ir/api/v1/user', {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            cache: 'force-cache',
          });
    
          if (!response.ok) {
            console.error('Error fetching user data:', response.statusText);
            return;
          }
    
          const data = await response.json();
          set({ user: data });
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      },
      updateUserInApi: async (userData) => {
        try {
          const token = Cookies.get('authToken');
          if (!token) {
            console.error('No auth token found');
            return;
          }

          const response = await fetch('https://best-cms.ir/api/v1/user/update', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userData),
            cache: 'no-cache',
          });

          if (!response.ok) {
            console.error('Error updating user data:', response.statusText);
            return;
          }

          const updatedUser = await response.json();
          set({ user: updatedUser });
          console.log(updatedUser)
        } catch (error) {
          console.error('Error updating user data:', error);
        }
      },
    })),
    {
      name: 'user-store',
      storage: typeof window !== 'undefined' ? sessionStorage : undefined,
    }
  )
);

export default useUserStore;