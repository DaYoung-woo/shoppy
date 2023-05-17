import axios from "axios";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set } from "firebase/database";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { v4 as uuidv4 } from "uuid";

export default class ApiClient {
  constructor() {
    this.instance = axios.create({
      baseURL: "/",
    });
    this.app = initializeApp({
      apiKey: "AIzaSyCN3l95NkwZruKtlYEpeP8gzewkD_jLBc0",
      authDomain: "shoppy-c10f8.firebaseapp.com",
      databaseURL:
        "https://shoppy-c10f8-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "shoppy-c10f8",
      storageBucket: "shoppy-c10f8.appspot.com",
      messagingSenderId: "1043986337435",
      appId: "1:1043986337435:web:a82f5a0f5fef53805bc03e",
      measurementId: "G-LETMEP6H1Y",
    });
    this.db = getDatabase(this.app);
    this.auth = getAuth();
    this.provider = new GoogleAuthProvider(this.app);
    this.dbRef = ref(getDatabase());
  }

  getProductList() {
    return get(child(this.dbRef, `productList`));
  }

  getProductDetail(params) {
    return this.instance.get("/mock/product.json", params);
  }

  getAdminList() {
    return get(child(this.dbRef, `adminList`));
  }

  openLoginPopup() {
    return signInWithPopup(this.auth, this.provider);
  }

  logOut() {
    return signOut(this.auth);
  }

  addProduct(param) {
    return set(ref(this.db, "productList/" + uuidv4()), param);
  }
  // addUserCart(params) {
  //   set(ref(this.db, "users/" + params.userId), params);
  // }
}
