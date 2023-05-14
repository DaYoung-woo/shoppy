import React, { useEffect, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Resize } from "@cloudinary/url-gen/actions";
const cldInstance = new Cloudinary({ cloud: { cloudName: "deswq5l3g" } });

export default function ProductCard() {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const img = cldInstance
      .image(
        "https://res.cloudinary.com/deswq5l3g/image/upload/v1683983071/mock/2_vzeqix.webp"
      )
      .setDeliveryType("fetch")
      .resize(Resize.fill().width(100).height(150));
    setImgUrl(img.toURL());
  }, []);

  return (
    <div>
      <img src={imgUrl} alt="test" />
    </div>
  );
}
