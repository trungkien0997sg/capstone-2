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
