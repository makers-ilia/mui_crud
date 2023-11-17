import React, { useContext, useEffect } from "react";
import { productContext } from "../contexts/ProductContextProvider";
import MediaControlCard from "../components/MediaControlCard";

const ProductsPage = () => {
  const { products, getProducts } = useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Products Page</h1>
      {products.map((product) => (
        <MediaControlCard
          key={product.title}
          imageUrl={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
