import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApiProvider } from "./context/ApiContext";
import Header from "./components/Header";
import "./App.css";
const queryClient = new QueryClient();

export default function App() {
  return (
    <div className="App">
      <ApiProvider>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Outlet />
        </QueryClientProvider>
      </ApiProvider>
    </div>
  );
}
