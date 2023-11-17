import React, { useState, useContext } from "react";
import { productContext } from "../contexts/ProductContextProvider";
import { Button, TextField } from "@mui/material";

const AddPage = () => {
  const { addProduct } = useContext(productContext);
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    addProduct(newProduct);
    setNewProduct({ title: "", description: "", price: 0, image: "" });
  };

  return (
    <div>
      <h1>Add Product Page</h1>
      <TextField
        label="Title"
        name="title"
        value={newProduct.title}
        onChange={handleInputChange}
      />
      <TextField
        label="Description"
        name="description"
        value={newProduct.description}
        onChange={handleInputChange}
      />
      <TextField
        label="Price"
        name="price"
        type="number"
        value={newProduct.price}
        onChange={handleInputChange}
      />
      <TextField
        label="Image URL"
        name="image"
        value={newProduct.image}
        onChange={handleInputChange}
      />
      <Button variant="contained" onClick={handleAddProduct}>
        Add Product
      </Button>
    </div>
  );
};

export default AddPage;
