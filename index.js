const colors = [
  "#fdb44b",
  "#005792",
  "#00bbf0",
  "#c3195d",
  "#e8630a",
  "#42b883",
  "#35495e",
  "#e84a5f",
];

let wheel = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spinBtn");
let value = Math.ceil(Math.random() * 5000);

spinBtn.onclick = () => {
  wheel.style.transform = "rotate(" + value + "deg)";
  value = Math.ceil(Math.random() * 5000);
};
