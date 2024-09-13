// types/userStoreTypes.ts

export interface UserResult {
    first_name: string;
    last_name: string;
    username: string;
    phone: string;
    // Add other fields as needed
}

export interface UserResponse {
    result: UserResult;
}

export interface UserStore {
    token: string | null;
    user: UserResponse | null;
    setUser: (userData: UserResponse | null) => void;
    setToken: (newToken: string | null) => void;
    clearUser: () => void;
    getUserFromApi: () => Promise<void>;
    updateUserInApi: (userData: UserResult) => Promise<void>;
}
