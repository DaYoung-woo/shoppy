import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { useApi } from "../context/ApiContext";
import { useNavigate } from "react-router-dom";

export default function UploadProduct() {
  const { api } = useApi();
  const [form, setForm] = useState({
    name: "",
    img: "",
    price: "",
    category: "",
    desc: "",
    option: [],
  });
  const [option, setOption] = useState({});
  const naviagate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", form.img);
    formData.append("upload_preset", "dlyzaezj");
    fetch("https://api.cloudinary.com/v1_1/deswq5l3g/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        const item = { ...form };
        item.img = res.secure_url;
        api.addProduct(item).then(() => {
          naviagate("/");
        });
      });
  };

  const addOption = () => {
    if (!form.option.includes(option)) {
      let optionList = form.option;
      optionList.push(option);
      setForm(() => ({
        ...form,
        option: optionList,
      }));
    }
  };

  return (
    <div className="text-center w-full p-10">
      <p className="text-xl font-medium">새상품 추가</p>
      <form onSubmit={submitForm}>
        <div className="mt-10">
          <label htmlFor="inputFile">
            <div className="border m-auto p-2 w-96">
              <p className={`text-left ${!form.img && "text-gray-400"}`}>
                {form.img ? form.img.name : "새상품 추가"}
              </p>
              <input
                type="file"
                placeholder="파일"
                id="inputFile"
                style={{ display: "none" }}
                onChange={(e) => setForm({ ...form, img: e.target.files[0] })}
              />
            </div>
          </label>
        </div>
        <div>
          <input
            type="text"
            placeholder="상품명"
            className="border p-2 mt-5 w-96"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="가격"
            className="border p-2 mt-5 w-96"
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="카테고리"
            className="border p-2 mt-5 w-96"
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="설명"
            className="border p-2 mt-5 w-96"
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="옵션"
            className="border p-2 mt-5 w-80"
            onChange={(e) => setOption(e.target.value)}
          />
          <button
            type="button"
            className="border p-3 mt-5 ml-5"
            onClick={addOption}
          >
            <HiOutlinePlus />
          </button>
        </div>

        <button className="border text-brand border-brand mt-10 w-96 p-2">
          상품 추가하기
        </button>
      </form>
    </div>
  );
}
