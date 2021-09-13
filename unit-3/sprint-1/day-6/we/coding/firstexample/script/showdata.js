async function getData(url) {
  let response = await fetch(url);

  let data = await response.json();

  return data;
}

function index() {
  return `<h2>Welcome to the home page of Happy Hours Mall</h2>`;
}

function append(data, place) {
  data.forEach(({ title, price, image }) => {
    let div = document.createElement("div");

    let p_name = document.createElement("p");

    let p_price = document.createElement("p");

    let img = document.createElement("img");

    img.src = image;

    p_name.innerText = title;

    p_price.innerText = price;

    div.append(img, p_name, p_price);

    place.append(div);
  });
}



// export { index };
export { index,getData, append };
