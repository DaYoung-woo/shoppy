import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
const cldInstance = new Cloudinary({ cloud: { cloudName: "deswq5l3g" } });

export default function ProductCard({ product }) {
  const [img, setImg] = useState("");

  useEffect(() => {
    const loadImg = cldInstance.image(product.img).setDeliveryType("fetch");
    setImg(loadImg.toURL());
  }, [product]);

  const navigate = useNavigate();

  return (
    <li onClick={() => navigate(`/product/${product.id}`)}>
      <img src={img} alt={product.name} className="product-img" />
      <div className="flex justify-between pt-2 px-1">
        <h6 className="text-sm font-bold">{product.name}</h6>
        <h6 className="text-sm font-bold">{product.price} \</h6>
      </div>
      <pre className="text-xs pt-1 px-1">여성</pre>
    </li>
  );
}
