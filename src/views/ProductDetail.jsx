import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useApi } from "../context/ApiContext";
import { useParams } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
const cldInstance = new Cloudinary({ cloud: { cloudName: "deswq5l3g" } });

export default function ProductDetail() {
  const { api } = useApi();
  const { id } = useParams();
  const [img, setImg] = useState("");

  const { isLoading, data: product } = useQuery(["getProductDetail", id], () =>
    api.getProductDetail().then((data) => {
      const loadImg = cldInstance.image(data.img).setDeliveryType("fetch");
      setImg(loadImg.toURL());
      return data;
    })
  );

  return (
    <div>
      {isLoading && "로딩중입니다"}
      {product && (
        <div className="flex">
          <section className="basis-2/4 p-4">
            <img src={img} alt="test" />
          </section>
          <section className="basis-2/4 p-4 pl-0">
            <p>{product.name}</p>
            <p>\{product.price}</p>
            <article>{product.desc}</article>
          </section>
        </div>
      )}
    </div>
  );
}
