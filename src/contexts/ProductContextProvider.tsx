import React, { createContext, useReducer } from "react";
import {
  Action,
  IContextProps,
  Product,
  ProviderType,
  State,
} from "./Context.types";
import axios from "axios";

export const productContext = createContext<IContextProps | null>(null);

const INIT_STATE: State = {
  products: [],
  oneProduct: null,
};

function reducer(state = INIT_STATE, action: Action): State {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }: ProviderType) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  let API = "http://localhost:8000/products";

  async function getProducts(): Promise<void> {
    let res = await axios.get(API);
    let action: Action = {
      type: "GET_PRODUCTS",
      payload: res.data,
    };
    dispatch(action);
  }

  async function addProduct(newProduct: Product) {
    await axios.post(API, newProduct);
    getProducts();
  }

  async function deleteProduct(id: number) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  async function getOneProduct(id: number) {
    let res = await axios.get(`${API}/${id}`);
    let action: Action = {
      type: "GET_ONE_PRODUCT",
      payload: res.data,
    };
    dispatch(action);
    getProducts();
  }

  async function editProduct(id: number, newProduct: Product) {
    await axios.patch(`${API}/${id}`, newProduct);
    getProducts();
  }

  return (
    <productContext.Provider
      value={{
        products: state.products,
        oneProduct: state.oneProduct,
        addProduct,
        deleteProduct,
        editProduct,
        getProducts,
        getOneProduct,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
