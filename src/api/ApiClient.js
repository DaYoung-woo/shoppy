import axios from "axios";

export default class ApiClient {
  constructor() {
    this.instance = axios.create({
      baseURL: "/",
    });
  }

  getProductList() {
    return this.instance.get("/mock/products.json");
  }
}
