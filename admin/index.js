let idEdit = null;

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
  let isValid = checkEmptyName() & checkEmptyPrice();
  if (isValid) {
    let productInfo = getData();
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
}

function editProduct(id) {
  idEdit = id;
  axios({
    url: `https://653122ed4d4c2e3f333c7251.mockapi.io/products/${id}`,
    method: "GET",
  })
    .then(function (res) {
      let product = res.data;
      document.getElementById("TenSP").value = product.name;
      document.getElementById("GiaSP").value = product.price;
      document.getElementById("imgSP").value = product.img;
      document.getElementById("MoTaSP").value = product.desc;
      document.getElementById("ScreenSP").value = product.screen;
      document.getElementById("bCamera").value = product.backCamera;
      document.getElementById("fCamera").value = product.frontCamera;
      document.getElementById("loaiSP").value = product.type;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function updateProduct() {
  let product = getData();
  //gọi api cập nhật
  axios({
    url: `https://653122ed4d4c2e3f333c7251.mockapi.io/products/${idEdit}`,
    method: "PUT",
    data: product,
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
    .catch(function (err) {});
}

function tang() {
  axios({
    url: "https://653122ed4d4c2e3f333c7251.mockapi.io/products",
    method: "GET",
  })
    .then(function (res) {
      let product = res.data.sort(function (a, b) {
        return a.price - b.price;
      });
      console.log("product: ", product);
      renderProductList(product);
    })
    .catch(function (err) {
      console.log(err);
    });
}
function giam() {
  axios({
    url: "https://653122ed4d4c2e3f333c7251.mockapi.io/products",
    method: "GET",
  })
    .then(function (res) {
      let product = res.data.sort(function (a, b) {
        return b.price - a.price;
      });
      console.log("product: ", product);
      renderProductList(product);
    })
    .catch(function (err) {
      console.log(err);
    });
}
