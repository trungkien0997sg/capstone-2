function renderProductList(productArr) {
  let htmlContent = "";
  productArr.forEach((data) => {
    htmlContent += `
    <div class="card__item">
        <div class="card__img">
          <img
            src="${data.img}"
            alt=""
          />
        </div>
        <div class="card__body">
          <p>Hello</p>
        </div>
      </div>
    `;
  });
  document.getElementById("grid-list").innerHTML = htmlContent;
}
