import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import Cookies from 'js-cookie';
import { UserResult, UserResponse, UserStore } from '@/types/userStoreTypes'; // Import the types

const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        token: null, // Initial value for token
        user: null,  // Initial value for user

        // Function to set user data in store
        setUser: (userData: UserResponse | null) => set({ user: userData }),

        // Function to set token in store
        setToken: (newToken: string | null) => set({ token: newToken }),

        // Function to clear user data and token from store
        clearUser: () => set({ user: null, token: null }),

        // Function to get user data from API
        getUserFromApi: async () => {
          try {
            const token = Cookies.get('authToken'); // Get token from cookies
            if (!token) {
              console.error('No auth token found');
              return;
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              cache: 'no-cache',
            });

            if (!response.ok) {
              console.error('Error fetching user data:', response.statusText);
              return;
            }

            const data: UserResponse = await response.json(); // Convert response to UserResponse
            set({ user: data }); // Store user data
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        },

        // Function to update user data in API
        updateUserInApi: async (userData: UserResult) => {
          try {
            const token = Cookies.get('authToken'); // Get token from cookies
            if (!token) {
              console.error('No auth token found');
              return;
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/update`, {
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

            const updatedUser: UserResponse = await response.json(); // Convert response to UserResponse
            set({ user: updatedUser }); // Store updated user data
          } catch (error) {
            console.error('Error updating user data:', error);
          }
        },
      }),
      {
        name: 'user-store', // Store name for sessionStorage
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useUserStore;
