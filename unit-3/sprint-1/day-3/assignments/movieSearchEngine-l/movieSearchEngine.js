let input = document.getElementById("movie");

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("mybtn").click();
  }
});

async function myFunction() {
  var name = document.getElementById("movie").value;
  var output = document.getElementById("movieshow");
  let res = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=eb13a6ff`);
  let data = await res.json();
  console.log("data:", data);

  let { Title,Poster,DVD,Actors,imdbRating } = data

  output.innerHTML = `<div id="main"><img src = "${Poster}" id ="poster">
    <br>
    <h1 id="heading">${Title}</h1>
    <p id ="date">Release Date: ${DVD}</p>
    <p id="actor">Actors : ${Actors}</p>
    <p id="rating">IMDb Rating : ${imdbRating}</p>
    
    </div>`;
  
  
}
