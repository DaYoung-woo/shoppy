import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiOutlinePencil,
} from "react-icons/hi";
import { GoogleAuthProvider } from "firebase/auth";
import { useApi } from "../context/ApiContext";

export default function Header({ cartList }) {
  const { api } = useApi();

  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("accessToken");
    return localToken || "";
  });
  const [user, setUser] = useState(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    return localUser || "";
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    const localIsAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    return localIsAdmin || "";
  });

  const openPopup = () => {
    api
      .openLoginPopup()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        setToken(token);
        localStorage.setItem("accessToken", token);

        const user = result.user;
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));

        api.getAdminList().then((res) => {
          if (res.indexOf(user.uid) !== -1) {
            localStorage.setItem("isAdmin", true);
            setIsAdmin(true);
          } else {
            localStorage.setItem("isAdmin", false);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    api.signOut().then(() => {
      localStorage.clear();
      setUser("");
      setToken("");
      setIsAdmin(false);
    });
  };

  return (
    <header className="flex items-center justify-between p-2 border-b-2 ">
      <Link to="/" className="flex items-center font-sans text-brand">
        <HiOutlineShoppingBag className="text-2xl" />
        <span className="text-2xl font-thin">Shoppy</span>
      </Link>

      <div className="flex items-center text-lg">
        <Link to="/products" className="text-base">
          PRODUCTS
        </Link>
        {token && user && (
          <>
            <HiOutlineShoppingCart className="ml-2 text-2xl" />
            {cartList.length}
            {isAdmin && <HiOutlinePencil className="ml-2 text-2xl" />}
            <span className="text-base items-center ml-2">
              <img
                src={user.photoURL}
                alt="avatar"
                className="inline-block h-8 w-8 rounded-full mr-1 ring-white"
              />
              <span className="text-sm">{user.displayName}</span>
            </span>
          </>
        )}
        {!token && !user && (
          <button
            onClick={openPopup}
            className="ml-3 px-5 pb-1 rounded-xl border border-brand text-brand"
          >
            LOGIN
          </button>
        )}
        {token && user && (
          <button
            onClick={logout}
            className="ml-3 px-5 pb-1 rounded-xl border border-brand text-brand"
          >
            LOGOUT
          </button>
        )}
      </div>
    </header>
  );
}
