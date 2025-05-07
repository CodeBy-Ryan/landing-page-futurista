// ========================= CRIAÇÃO DE VARIÁVEI ===========================

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot");
const numerIndicator = document.querySelector(".numbers");
const list = document.querySelector(".list");

let active = 0;
const total = items.length;
let time;

// ============== BOTÕES DE NAVEGAÇÃO ===========================

function update(direction) {
  document.querySelector(".item.active").classList.remove("active");
  document.querySelector(".dot.active").classList.remove("active");

  if (direction > 0) {
    active = active +1

  } 
  
  
  else if (direction < 0) {

  }
}

prevButton.addEventListener("click", () => {
  update(-1);
});

nextButton.addEventListener("click", () => {
  update(1);
});
