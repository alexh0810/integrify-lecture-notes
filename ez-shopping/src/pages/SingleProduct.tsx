import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = useProduct(productId);
  return (
    <div>
      {product ? (
        <div>
          {product.title}
          <button></button>
        </div>
      ) : (
        <div>Product does not exist</div>
      )}
    </div>
  );
};

export default SingleProduct;
