function itemCart(id, name, price, img, quantity) {
  axios({
    url: "https://653122ed4d4c2e3f333c7251.mockapi.io/products",
    method: "GET",
  })
    .then(function (res) {})
    .catch(function (err) {
      console.log(err);
    });
  return {
    id: id,
  };
}

itemCart();
console.log("itemCart() ", itemCart());
