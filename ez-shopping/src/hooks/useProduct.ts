import { useState, useEffect } from "react";

import { Product } from "../types/product";

export const useProduct = (productId: string | undefined) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  useEffect(() => {
    if (productId) {
      fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
        .then((data) => data.json())
        .then((data) => setProduct(data));
    }
  }, [productId]);

  return product;
};
