//global variables
let cart = [];

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

function renderType() {
  const value = document.getElementById("filter").value;
  let filterArr = [];
  axios({
    url: "https://653122ed4d4c2e3f333c7251.mockapi.io/products",
    method: "GET",
  })
    .then(function (res) {
      let product = res.data;
      for (let i = 0; i < product.length; i++) {
        if (product[i].type === value) {
          filterArr.push(product[i]);
        }
      }
      console.log("filterArr: ", filterArr);
      renderProductList(filterArr);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function deleteProduct(id) {}
