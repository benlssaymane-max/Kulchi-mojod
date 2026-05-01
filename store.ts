'use client';

import { create } from 'zustand';
import { Cart, CartItem } from '@/types';

interface CartStore {
  cart: Cart | null;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  setCart: (cart: Cart) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: null,
  addItem: (item) =>
    set((state) => ({
      cart: state.cart
        ? {
            ...state.cart,
            items: [...state.cart.items, item],
          }
        : null,
    })),
  removeItem: (itemId) =>
    set((state) => ({
      cart: state.cart
        ? {
            ...state.cart,
            items: state.cart.items.filter((i) => i.id !== itemId),
          }
        : null,
    })),
  updateQuantity: (itemId, quantity) =>
    set((state) => ({
      cart: state.cart
        ? {
            ...state.cart,
            items: state.cart.items.map((i) =>
              i.id === itemId ? { ...i, quantity } : i
            ),
          }
        : null,
    })),
  clearCart: () => set({ cart: null }),
  setCart: (cart) => set({ cart }),
}));
