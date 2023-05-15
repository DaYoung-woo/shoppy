export default class Api {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  getProductList(category) {
    return this.apiClient.getProductList().then(({ data }) => {
      return category ? data.filter((el) => el.category === category) : data;
    });
  }

  getProductDetail(id) {
    return this.apiClient.getProductDetail({ id }).then(({ data }) => {
      return data;
    });
  }
}
