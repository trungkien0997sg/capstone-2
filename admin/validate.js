function checkEmptyName() {
  let ten = document.getElementById("TenSP").value;
  let tenChecked = ten.trim();
  if (tenChecked === "") {
    Swal.fire("không bỏ trống 2 ô tên và giá");
    return false;
  }
  return true;
}
function checkEmptyPrice() {
  let price = document.getElementById("GiaSP").value;
  let priceChecked = price.trim();
  if (priceChecked === "") {
    Swal.fire("không bỏ trống 2 ô tên và giá");
    return false;
  }
  return true;
}
