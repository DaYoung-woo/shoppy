import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiOutlinePencil,
} from "react-icons/hi";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCN3l95NkwZruKtlYEpeP8gzewkD_jLBc0",
  authDomain: "shoppy-c10f8.firebaseapp.com",
  databaseURL:
    "https://shoppy-c10f8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shoppy-c10f8",
  storageBucket: "shoppy-c10f8.appspot.com",
  messagingSenderId: "1043986337435",
  appId: "1:1043986337435:web:a82f5a0f5fef53805bc03e",
  measurementId: "G-LETMEP6H1Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(app);

const auth = getAuth();

export default function Header() {
  const logout = () => {};
  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("accessToken");
    return localToken || "";
  });
  const [user, setUser] = useState(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    console.log(localUser);
    return localUser || "";
  });
  const openPopup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        localStorage.setItem("accessToken", token);
        setToken(token);
        // The signed-in user info.
        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

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
        {token && user && (
          <span className="text-base items-center ml-2">
            <img
              src={user.photoURL}
              alt="avatar"
              className="inline-block h-8 w-8 rounded-full mr-1 ring-white"
            />
            <span className="text-sm">{user.displayName}</span>
          </span>
        )}
        {!token && !user && (
          <button
            onClick={openPopup}
            className="ml-3 px-5 pb-1 rounded-xl border border-brand text-brand"
          >
            LogIn
          </button>
        )}
        {token && user && (
          <button
            onClick={logout}
            className="ml-3 px-5 pb-1 rounded-xl border border-brand text-brand"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
}
