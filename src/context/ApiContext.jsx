import { createContext, useContext } from "react";
import ApiClient from "../api/ApiClient";
import Api from "../api/Api";
export const ApiContext = createContext();

export function ApiProvider({ children }) {
  const client = new ApiClient();
  const api = new Api(client);
  return <ApiContext.Provider value={{ api }}>{children}</ApiContext.Provider>;
}

export function useApi() {
  return useContext(ApiContext);
}
