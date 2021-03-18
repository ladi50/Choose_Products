import { useCallback, useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((item) => {
    setCart((prevState) => [...prevState, item]);
  }, []);

  const removeFromCart = useCallback(
    (item) => {
      let newCart = [...cart];

      newCart = newCart.filter((i) => i !== item);

      setCart(newCart);
    },
    [cart]
  );

  const cartProducts = useCallback(
    async (prods) => {
      let cartProds = [];

      for (const cartItem of cart) {
        let foundItem;

        foundItem = await prods.find((item) => item.name === cartItem);

        if (foundItem) {
          cartProds.push(foundItem);
        }
      }

      if (cartProds.length > 0) {
        console.log(cartProds);
      }
    },
    [cart]
  );

  return { addToCart, cart, removeFromCart, cartProducts };
};
