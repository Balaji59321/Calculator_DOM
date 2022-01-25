// creating a new div
let body_ct = document.getElementsByTagName("body")[0];
let div = document.createElement("div");
// div.setAttribute("class", "border border-primary");
body_ct.appendChild(div);

// result display
var res = document.createElement("div");
res.setAttribute("class", "container-sm");
document.getElementsByTagName("div")[0].append(res);
res.style.position = "absolute";
res.style.top = "50%";
res.style.left = "50%";
res.style.transform = "translate(-50%, -50%)";

var res1 = document.createElement("div");
res1.setAttribute("iseditable", true);
res1.setAttribute(
  "class",
  `col-sm-4 col-12 mx-auto d-flex my-1 justify-content-end align-items-center border border-dark overflow-wrap-anywhere`
);
res1.style.height = "5rem";
res1.style.backgroundColor = "#ddd";
res1.style.fontSize = "3rem";
// res1.innerHTML = 0;
document.getElementsByClassName("container-sm")[0].append(res1);

// displaying button in calculator
let container = document.createElement("div");
container.setAttribute("class", "container-sm");
document.getElementsByTagName("div")[1].append(container);

let row = document.createElement("div");
row.setAttribute("class", "row d-block");
document.getElementsByClassName("container-sm")[1].append(row);

function column(name) {
  let col = document.createElement("div");
  col.setAttribute(
    "class",
    `col-sm-4 col-12 mx-auto ${name} d-flex justify-content-around`
  );
  col.style.backgroundColor = "#ddd";
  document.getElementsByClassName("row")[0].append(col);
}

function button(row, column, color, val) {
  let button = document.createElement("button");
  button.setAttribute(
    "class",
    `btn btn-outline-${color} col-2 my-2 mx-2 py-3 px-4 ${row} py-sm-3 d-flex justify-content-around overflow-wrap`
  );
  button.setAttribute("onclick", "clickHandler(this)");
  button.innerText = val;
  document
    .getElementsByClassName(`col-sm-4 col-12 mx-auto ${column}`)[0]
    .append(button);
}

column("column-1");
column("column-2");
column("column-3");
column("column-4");
column("column-5");

button("row-1", "column-1", "dark", 1);
button("row-1", "column-1", "dark", 2);
button("row-1", "column-1", "dark", 3);
button("row-1", "column-1", "primary", "+");

button("row-2", "column-2", "dark", 4);
button("row-2", "column-2", "dark", 5);
button("row-2", "column-2", "dark", 6);
button("row-2", "column-2", "primary", "-");

button("row-3", "column-3", "dark", 7);
button("row-3", "column-3", "dark", 8);
button("row-3", "column-3", "dark", 9);
button("row-3", "column-3", "primary", "/");

button("row-4", "column-4", "danger", "C");
button("row-4", "column-4", "dark", "<-");
button("row-4", "column-4", "dark", ".");
button("row-4", "column-4", "primary", "*");

function buttonLast(row, column, color, val) {
  let button = document.createElement("button");
  button.setAttribute(
    "class",
    `btn btn-${color} col-5 my-2 mx-2 py-3 px-4 ${row} py-sm-3 d-flex justify-content-center `
  );
  button.setAttribute("onclick", "clickHandler(this)");
  button.innerText = val;
  document
    .getElementsByClassName(`col-sm-4 col-12 mx-auto ${column}`)[0]
    .append(button);
}
button("row-5", "column-5", "dark", 0);
button("row-5", "column-5", "dark", "00");
buttonLast("row-5", "column-5", "primary", "=");

function clickHandler(event) {
  if (event.innerText === "=") {
    document.getElementsByClassName(
      "col-sm-4 col-12 mx-auto d-flex my-1 justify-content-end align-items-center border border-dark overflow-wrap-anywhere"
    )[0].innerHTML = eval(
      document.getElementsByClassName(
        "col-sm-4 col-12 mx-auto d-flex my-1 justify-content-end align-items-center border border-dark overflow-wrap-anywhere"
      )[0].innerHTML
    );
  } else if (event.innerText === "C") {
    document.getElementsByClassName(
      "col-sm-4 col-12 mx-auto d-flex my-1 justify-content-end align-items-center border border-dark overflow-wrap-anywhere"
    )[0].innerHTML = "";
  } else if (event.innerText === "<-") {
    let res = document.getElementsByClassName(
      "col-sm-4 col-12 mx-auto d-flex my-1 justify-content-end align-items-center border border-dark overflow-wrap-anywhere"
    )[0].innerHTML;
    document.getElementsByClassName(
      "col-sm-4 col-12 mx-auto d-flex my-1 justify-content-end align-items-center border border-dark overflow-wrap-anywhere"
    )[0].innerHTML = res.toString().slice(0, res.length - 1);
    console.log(res);
  } else {
    document.getElementsByClassName(
      "col-sm-4 col-12 mx-auto d-flex my-1 justify-content-end align-items-center border border-dark overflow-wrap-anywhere"
    )[0].innerHTML += event.innerText;
  }
}

document.addEventListener("keyup", (event) => {
  // console.log(event, typeof event.key, typeof +event.key, event.code);
  if (typeof +event.key === "number" && (+event.key).toString() !== "NaN") {
    // console.log(+event.key);
    document.getElementsByClassName(
      "col-sm-4 col-12 mx-auto d-flex my-1 justify-content-end align-items-center border border-dark overflow-wrap-anywhere"
    )[0].innerHTML += event.key;
  } else {
    alert("Only Numbers are Allowed");
    // <p>Only Numbers are Allowed</p>;
  }
});
