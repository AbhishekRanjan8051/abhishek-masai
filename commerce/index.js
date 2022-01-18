var cart = JSON.parse(localStorage.getItem("cartItems")) || [];
function appendproducts(el) {
  let data = document.getElementById("main");

  let div = document.createElement("div");

  let p_name = document.createElement("p");
  p_name.innerHTML = el.name;

  let p_description = document.createElement("p");
  p_description.innerHTML = el.desc;

  let img = document.createElement("img");
  img.classList.add("imge");
  img.src = el.image;

  let p_price = document.createElement("p");
  p_price.innerHTML = el.price;

  let btn = document.createElement("button");
  btn.textContent = "Add to Cart";
  btn.addEventListener("click", function () {
    addToCart(el);
  });

  div.append(img, p_name, p_description, p_price, btn);

  data.append(div);
}

function addToCart(el) {
  cart.push(el);
  localStorage.setItem("cartItems", JSON.stringify(cart));
}

let cartlen = document.getElementById("cartitem");
cartlen.textContent = cart.length;

function showproducts() {
  let maindata = JSON.parse(localStorage.getItem("products"));

  maindata.forEach(function (el) {
    appendproducts(el);
  });
}
showproducts();
