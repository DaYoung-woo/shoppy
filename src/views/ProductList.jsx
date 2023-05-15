import React from "react";
import ProductCard from "../components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { useApi } from "../context/ApiContext";

export default function ProductList() {
  const { api } = useApi();
  const { isLoading, data: products } = useQuery(["getProductList", ""], () =>
    api.getProductList()
  );

  return (
    <div className="pt-10">
      {isLoading && <p>리스트를 불러오는 중입니다.</p>}
      {products && (
        <ul className="grid gird-cols-2 xs:grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4 p-4">
          {products.map((el) => (
            <ProductCard product={el} key={el.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
