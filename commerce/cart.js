function cartitem(el) {
  let data = document.getElementById("cartcontainer");

  let div = document.createElement("div");
  div.classList.add("product");

  let p_name = document.createElement("p");
  p_name.innerHTML = el.name;

  let p_description = document.createElement("p");
  p_description.innerHTML = el.desc;

  let img = document.createElement("img");
  img.classList.add("img");
  img.src = el.image;

  let p_price = document.createElement("p");
  p_price.innerHTML = el.price;

  div.append(img, p_name, p_description, p_price);

  data.append(div);
}
function showcart() {
  let cart = JSON.parse(localStorage.getItem("cartItems"));
  cart.forEach(function (el) {
    cartitem(el);
  });
}
showcart();
function describe(el) {
  let cart = JSON.parse(localStorage.getItem("cartItems"));
  cart.forEach(function (el) {
    var arrprice = "";
    arrprice += el.price;
    console.log("arrprice:", arrprice);
  });
}
describe();
