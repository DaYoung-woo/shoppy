export default class Api {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  getProductList() {
    return this.apiClient.getProductList().then(({ data }) => {
      return data;
    });
  }
}
