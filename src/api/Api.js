export default class Api {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  getProductList(category) {
    return this.apiClient
      .getProductList()
      .then((snapshot) => {
        if (snapshot.exists()) {
          return category
            ? snapshot.val().filter((el) => el.category === category)
            : snapshot.val();
        } else {
          return [];
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getProductDetail(id) {
    return this.apiClient.getProductDetail({ id }).then(({ data }) => {
      return data;
    });
  }
}
