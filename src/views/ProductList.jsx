import React from "react";
import ProductCard from "../components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { useApi } from "../context/ApiContext";
export default function ProductList() {
  const { api } = useApi();
  const { data: products } = useQuery(["getProductList"], () =>
    api.getProductList()
  );
  return (
    <div>
      {products.map((el) => {
        return el.img;
      })}
      <ProductCard />
    </div>
  );
}
