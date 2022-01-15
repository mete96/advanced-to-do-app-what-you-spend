var inp = document.querySelector(".taskname");
var inp1 = document.querySelector(".taskname1");
var inp2 = document.querySelector(".taskname2");
var list = document.querySelector(".tasklist");
var formzo = document.querySelector(".formzo");
var btn = document.querySelector(".btn1");
var addTask = document.querySelector(".btn");
var taskClear = document.querySelector(".btnClear");
var lezo = document.querySelector(".lezo");
var top3 = document.getElementById("top");
var taskList = [];

function render(elemments) {
  list.innerHTML = "";
  elemments.forEach((e) => {
    let newEl = document.createElement("li");
    newEl.innerHTML = "Item: " + e.name;
    newEl.classList.add("list-group-item");
    list.appendChild(newEl);

    let newHeight = document.createElement("span");
    newHeight.innerHTML = "Price: " + e.boy + "$";
    newHeight.classList.add("spano");
    newEl.appendChild(newHeight);

    let newWeight = document.createElement("span");
    newWeight.innerHTML = "Total: " + e.kilo;
    newWeight.classList.add("spano1");
    newEl.appendChild(newWeight);

    let deleteZ = document.createElement("img");
    deleteZ.src = `/delete.svg`;
    deleteZ.classList.add("ikon");
    deleteZ.onclick = function (e) {
      e.currentTarget.parentElement.remove();
    };
    deleteZ.classList.add("btn-remove");
    newEl.appendChild(deleteZ);
  });
}

formzo.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inp.value !== "") {
    taskList.push({
      name: inp.value,
      boy: Number(inp1.value),
      kilo: Number(inp2.value),
      cins: top3.value,
      id: Math.floor(Math.random() * 543543),
    });
    inp.value = "";
    inp1.value = "";
    inp2.value = "";
    render(taskList);
    taskClear.style.display = "block";
    localStorage.setItem("mylist", JSON.stringify(taskList));
  } else {
    alert("Please type something...");
  }
});

let saved = localStorage.getItem("mylist");
if (saved) {
  taskList = JSON.parse(localStorage.getItem("mylist"));
  render(taskList);
} else {
  taskClear.style.display = "none";
}

taskClear.addEventListener("click", function () {
  localStorage.clear();
  list.innerHTML = "";
  taskList = [];
  taskClear.style.display = "none";
});

var cart = JSON.parse(window.localStorage.getItem("mylist"));

const sumArray = [];

let newCalculate = document.createElement("p");

btn.addEventListener("click", (eve) => {
  const areas = taskList.map(({ boy, kilo }) => boy * kilo);

  const sum = areas.reduce(function (s, a) {
    return s + a;
  }, 0);

  newCalculate.innerHTML = "Your Total is " + `${sum}` + "$";
  newCalculate.classList.add("calculate");
  list.appendChild(newCalculate);
});
