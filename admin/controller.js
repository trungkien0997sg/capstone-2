function renderProductList(productArr) {
  let htmlContent = "";
  productArr.forEach((data) => {
    htmlContent += `
      <tr>
                        <td class="border">${data.id}</td>
                        <td class ="text-left border">${data.name}</td>
                        <td class="border">${data.price}$</td>
                        <td class="border">${data.img}</td>
                        <td class ="text-left border">${data.desc}</td>
                        <td class="border">
                        <button class=" bg-red-500 p-2 text-white" onclick =deleteProduct(${data.id})>Xóa</button>

                        <button onclick= editProduct(${data.id}) class="text-white bg-yellow-500 p-2">Sửa</button>
                      </td>
                      </tr>`;
  });
  document.getElementById("tbl-product").innerHTML = htmlContent;
}

function getData() {
  return {
    name: document.getElementById("TenSP").value,
    price: document.getElementById("GiaSP").value * 1,
    screen: document.getElementById("ScreenSP").value,
    backCamera: document.getElementById("bCamera").value,
    frontCamera: document.getElementById("fCamera").value,
    img: document.getElementById("imgSP").value,
    desc: document.getElementById("MoTaSP").value,
    type: document.getElementById("loaiSP").value,
  };
}
