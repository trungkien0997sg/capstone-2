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
          <p class="font-bold">Name: ${data.name}</p>
          <p class="pb-4"><span class="font-bold">Price: ${data.price} $</span></p>
          <p class=""><span class="font-bold">Screen type:</span> ${data.screen}</p>
          <p class=""><span class="font-bold">Back Camera:</span> ${data.backCamera} </p>
          <p class=""><span class="font-bold">Front Camera:</span> ${data.frontCamera} </p>
          <p class=""><span class="font-bold">Description:</span> ${data.desc}</p>
        </div>
      </div>
    `;
  });
  document.getElementById("grid-list").innerHTML = htmlContent;
}
