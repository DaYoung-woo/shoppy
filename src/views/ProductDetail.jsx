import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  return (
    <div>
      {isLoading && "로딩중입니다"}
      {product && (
        <div className="px-4 py-2">
          <p
            className="pl-4"
            onClick={() => navigate(`/products/${product.category}`)}
          >
            {product.category}
          </p>
          <div className="flex">
            <section className="basis-2/4 px-4 py-2">
              <img src={img} alt="test" />
            </section>
            <section className="basis-2/4 p-4 pl-0">
              <p className="text-lg font-bold">{product.name}</p>
              <p className="text-lg font-bold pb-2">\{product.price}</p>
              <article className="border-t-2 py-2 text-sm">
                {product.desc}
              </article>
              <div className="flex pt-10 items-center">
                <p className="text-brand w-1/4">옵션: </p>
                <select
                  name="pets"
                  id="pet-select"
                  className="border p-1 ml-2 border-brand border-dashed w-3/4"
                >
                  {product.option.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <button className="mt-8 border py-2 border-brand text-brand w-full">
                장바구니에 추가
              </button>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
