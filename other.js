var cart = JSON.parse(window.localStorage.getItem("mylist"));
const lezo = document.querySelector(".lezo"); //

const homes = cart
  .filter((x) => x.cins === "Other")
  .map((darko) => {
    return darko.name;
  });

const homes1 = cart
  .filter((x) => x.cins === "Other")
  .map((darko) => {
    return darko.boy;
  });

const homes2 = cart
  .filter((x) => x.cins === "Other")
  .map((darko) => {
    return darko.kilo;
  });

let newEl = document.createElement("p");
newEl.innerHTML = "Other items you bought:: " + homes;
newEl.classList.add("listza");
lezo.appendChild(newEl);

console.log(homes);
