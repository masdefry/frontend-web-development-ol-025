import { create } from 'zustand';

type UseTotalCartStore = {
    totalCarts: number; 
    setTotalCarts: (newTotal: number) => void; 
}

const useTotalCartStore = create<UseTotalCartStore>((set) => ({
  totalCarts: 0,
  setTotalCarts: (newTotal) => set((state) => ({ totalCarts: newTotal })),
}));

export default useTotalCartStore;