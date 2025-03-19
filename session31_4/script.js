let modal = document.getElementById("modal");
let openBtn = document.getElementById("openModal");
let closeBtn = document.getElementById("closeModal");

openBtn.onclick = function () {
  modal.style.display = "flex";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};
