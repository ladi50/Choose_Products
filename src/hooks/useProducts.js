import { useCallback, useState } from "react";

import { useFetch } from "./useFetch";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { fetchHandler } = useFetch();

  const getProducts = useCallback(() => {
    fetchHandler("products.json", {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        setProducts(res);
        setFilteredProducts(res);
      })
      .catch((err) => console.log(err));
  }, [fetchHandler]);

  const filterProducts = useCallback(
    (data) => {
      let newProducts = [...products];

      if (data.category.length > 0) {
        newProducts = newProducts.filter(
          (item) => item.category === data.category
        );
      }

      if (data.category === "all") {
        newProducts = [...products];
      }

      if (data.name.length > 0) {
        newProducts = newProducts.filter((item) =>
          item.name.includes(data.name)
        );
      }

      setFilteredProducts(newProducts);
    },
    [products]
  );

  return { products, getProducts, filterProducts, filteredProducts };
};
