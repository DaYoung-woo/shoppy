import axios from "axios";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
export default class ApiClient {
  constructor() {
    this.instance = axios.create({
      baseURL: "/",
    });
    this.firebaseConfig = {
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
    this.app = initializeApp(this.firebaseConfig);
    this.db = getDatabase(this.app);
  }

  getProductList() {
    // const res = ref(this.db, "productList");
    // return res;
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `productList`));
    //return this.instance.get("/mock/products.json");
  }

  getProductDetail(params) {
    return this.instance.get("/mock/product.json", params);
  }

  // addUserCart(params) {
  //   set(ref(this.db, "users/" + params.userId), params);
  // }
}
