import { useEffect } from "react";
import { useCartStore } from "@/store/useCartStore";

/**
 * CartInitializer - Fetches cart data when the app loads.
 * Should be rendered in App.tsx to initialize cart state.
 */
const CartInitializer = () => {
  const fetchCart = useCartStore((state) => state.fetchCart);

  useEffect(() => {
    // Initialize cart state when the app loads
    fetchCart();
  }, [fetchCart]);

  return null;
};

export default CartInitializer;
