import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApiProvider } from "./context/ApiContext";
import Header from "./components/Header";
import "./App.css";
import { useState } from "react";
const queryClient = new QueryClient();

export default function App() {
  const [cartList, setCartList] = useState([]);

  const addCart = (item) => {
    setCartList((prev) => [...prev, item]);
  };

  return (
    <div className="App">
      <ApiProvider>
        <QueryClientProvider client={queryClient}>
          <Header cartList={cartList} />
          <Outlet context={{ addCart }} />
        </QueryClientProvider>
      </ApiProvider>
    </div>
  );
}
