import React, { useEffect, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Resize } from "@cloudinary/url-gen/actions";
const cldInstance = new Cloudinary({ cloud: { cloudName: "deswq5l3g" } });

export default function ProductCard({ imgUrl }) {
  const [img, setImg] = useState("");

  useEffect(() => {
    const loadImg = cldInstance.image(imgUrl).setDeliveryType("fetch");
    setImg(loadImg.toURL());
  }, [imgUrl]);

  return (
    <li>
      <img src={img} alt="test" />
    </li>
  );
}
