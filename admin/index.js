function fetchProductList() {
  axios({
    url: "https://653122ed4d4c2e3f333c7251.mockapi.io/products",
    method: "GET",
  })
    .then(function (res) {
      renderProductList(res.data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

fetchProductList();

function deleteProduct(id) {
  axios({
    url: `https://653122ed4d4c2e3f333c7251.mockapi.io/products/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      fetchProductList();
    })
    .catch(function (err) {
      console.log(err);
    });
}
