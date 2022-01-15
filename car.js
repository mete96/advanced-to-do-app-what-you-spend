var cart = JSON.parse(window.localStorage.getItem("mylist"));
const lezo = document.querySelector(".lezo"); //

const homes = cart
  .filter((x) => x.cins === "Car")
  .map((darko) => {
    return darko.name;
  });

const homes1 = cart
  .filter((x) => x.cins === "Car")
  .map((darko) => {
    return darko.boy;
  });

const homes2 = cart
  .filter((x) => x.cins === "Car")
  .map((darko) => {
    return darko.kilo;
  });

let newEl = document.createElement("p");
newEl.innerHTML = "Car bills u paid: " + homes;
newEl.classList.add("listza");
lezo.appendChild(newEl);

console.log(homes);
