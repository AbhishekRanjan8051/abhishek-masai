// console.log("hello");
function storeproduct() {
  let form = document.getElementById("products");
  let name = form.name.value;
  let desc = form.description.value;
  let image = form.image.value;
  let price = form.price.value;

  let product = {
    name: name,
    desc: desc,
    image: image,
    price: price,
  };
  console.log(product);

  let arr;

  arr = localStorage.getItem("products");

  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("products"));
  }
  arr.push(product);

  localStorage.setItem("products", JSON.stringify(arr));
}
