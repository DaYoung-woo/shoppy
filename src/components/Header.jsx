import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiOutlinePencil,
} from "react-icons/hi";

export default function Header() {
  const logout = () => {};
  return (
    <header className="flex items-center justify-between p-2 border-b-2 ">
      <Link to="/" className="flex items-center font-sans text-brand">
        <HiOutlineShoppingBag className="text-2xl" />
        <span className="text-2xl font-thin">Shoppy</span>
      </Link>

      <div className="flex items-center text-lg">
        <Link to="/products">Products</Link>
        <HiOutlineShoppingCart className="ml-2 text-2xl" />
        <HiOutlinePencil className="ml-2 text-2xl" />
        <span className="text-base items-center ml-2">
          <img
            src="https://yt3.ggpht.com/ytc/AGIKgqMlrBqAK411d43n9m_71yHMUvobAJQ7GHZGi4az=s48-c-k-c0x00ffffff-no-rj"
            alt="avatar"
            className="inline-block h-8 w-8 rounded-full  ring-white"
          />
          <span className="text-sm">다영</span>
        </span>
        <button
          onClick={logout}
          className="ml-3 px-5 pb-1 rounded-xl border border-brand text-brand"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
