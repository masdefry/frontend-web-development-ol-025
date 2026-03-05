import { create } from 'zustand';

type UseTotalCartStore = {
    totalCarts: number; 
    setTotalCarts: () => void; 
}

const useTotalCartStore = create<UseTotalCartStore>((set) => ({
  totalCarts: 0,
  setTotalCarts: () => set((state) => ({ totalCarts: state?.totalCarts + 1 })),
}));

export default useTotalCartStore;