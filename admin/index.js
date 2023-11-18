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
      Swal.fire({
        title: "Thành công",
        text: "Đã xóa sản phẩm",
        icon: "success",
        timer: 1500,
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function createProduct() {
  var productInfo = getData();
  axios({
    url: `https://653122ed4d4c2e3f333c7251.mockapi.io/products`,
    method: "POST",
    data: productInfo,
  })
    .then(function (res) {
      fetchProductList();
      Swal.fire({
        title: "Thành công",
        text: "Đã thêm sản phẩm",
        icon: "success",
        timer: 1500,
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}
