let movieList = [];
let indexCount = 0;

//Getting the movie and rating from the DOM and adding it to the list
$("form").on("submit", function (e) {
  e.preventDefault();

  const form = document.querySelector("form");
  const $inputValues = $("input").get();
  const title = $inputValues[0].value;
  const rate = $inputValues[1].value;
  const movie = { title, rate, indexCount };

  movieList.push(movie);

  $(
    `<div class="box" ><p>${movie.title} : ${movie.rate}</p><button class="close-btn" id="${indexCount}">remove</button></div>`
  ).appendTo(".container2");

  form.reset();
  indexCount++;
});

//Removing element by clicking on remove button
$(".container2").on("click", ".close-btn", function (e) {
  $(e.target).closest(".box").remove();

  //Removing from the array
  const index = movieList.findIndex(
    (movie) => movie.indexCount === e.target.id
  );
  movieList.splice(index, 1);
});

//sorting elements based on name/rate
$("#sort").on("change", function (e) {
  movieList.sort((a, b) => {
    const sortValue = e.target.value;
    if (sortValue === "rate" || sortValue === "name") {
      a[sortValue] = +a[sortValue];
      b[sortValue] = +b[sortValue];
      if (a[sortValue] > b[sortValue]) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  $(".box").remove();
  movieList.forEach(function (movie) {
    $(
      `<div class="box" ><p>${movie.title} : ${movie.rate}</p><button class="close-btn" id="${indexCount}">remove</button></div>`
    ).appendTo(".container2");
  });
  $("#sort").val("");
});

let names = ["az", "xc", "gb"];
names.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(names);
