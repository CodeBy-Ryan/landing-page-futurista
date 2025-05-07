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
