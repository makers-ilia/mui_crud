import { type } from "os";
import { ReactNode } from "react";

export type ProviderType = {
  children: ReactNode;
};

export interface IContextProps {
  products: Product[];
  oneProduct: Product | null;
  editProduct: (id: number, newProduct: Product) => Promise<void>;
  getOneProduct: (id: number) => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
  addProduct: (newProduct: Product) => Promise<void>;
  getProducts: () => Promise<void>;
}

export type Product = {
  title: string;
  description: string;
  price: number;
  image: string;
};

export type State = {
  products: Product[];
  oneProduct: Product | null;
};

export type Action = {
  type: "GET_PRODUCTS" | "GET_ONE_PRODUCT";
  payload: any;
};
