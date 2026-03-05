import {create} from 'zustand'; 

type UseAuthStore = {
    email: string; 
    setEmail: (_email: string) => void; 
}

const useAuthStore = create<UseAuthStore>((set) => ({
    email: '', 
    setEmail: (_email) => set((_) => ({email: _email}))
}))

export default useAuthStore;