import React from "react";

export default function UploadProduct() {
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center w-full p-10">
      <p className="text-xl font-medium">새상품 추가</p>
      <form onSubmit={submitForm}>
        <div>
          <input
            type="text"
            placeholder="파일"
            className="border p-2 mt-10 w-96"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="상품명"
            className="border p-2 mt-5 w-96"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="가격"
            className="border p-2 mt-5 w-96"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="카테고리"
            className="border p-2 mt-5 w-96"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="설명"
            className="border p-2 mt-5 w-96"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="옵션"
            className="border p-2 mt-5 w-96"
          />
        </div>

        <button className="border text-brand border-brand mt-10 w-96 p-2">
          상품 추가하기
        </button>
      </form>
    </div>
  );
}
