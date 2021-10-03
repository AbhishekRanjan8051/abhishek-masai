async function getData(url) {
  let response = await fetch(url);

  let data = await response.json();

  return data;
}


function append(data, place) {
  data.forEach(({ strMeal, strCategory, strMealThumb }) => {
    let div = document.createElement("div");

    let p_name = document.createElement("p");

    let p_price = document.createElement("p");

    let img = document.createElement("img");

    img.src = strMealThumb;

    p_name.innerText = strMeal;

    p_price.innerText = strCategory;

    div.append(img, p_name, p_price);

    place.append(div);
  });
}

export{getData,append}