var popover = document.querySelector(".popu-overlay");
var popbox = document.querySelector(".pop-box");
var popbtn = document.getElementById("btn-add");
popbtn.addEventListener("click", function () {
  popover.style.display = "block";
  popbox.style.display = "block";
});

var popcancel = document.getElementById("cancel-book");

popcancel.addEventListener("click", function (event) {
  event.preventDefault();
  popover.style.display = "none";
  popbox.style.display = "none";
});

var addb = document.getElementById("add-book");
var title = document.getElementById("tito");
var author = document.getElementById("autho");
var desc = document.getElementById("text0");
var container = document.querySelector(".container");

addb.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${title.value}</h2>
    <h5>${author.value}</h5>
    <p>${desc.value}</p>
    <button onclick="del(event)">delete</button>`;
  console.log(div);
  container.append(div);

  popover.style.display = "none";
  popbox.style.display = "none";
});

function del(event) {
  event.target.parentElement.remove();
}
