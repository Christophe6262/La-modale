const open = document.querySelector(".btn-open");
const close = document.querySelector(".btn-close");
const modalOverlay = document.querySelector(".modal-overlay");

open.addEventListener("click", function () {
  modalOverlay.style.display = "block";
});

close.addEventListener("click", function () {
  modalOverlay.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modalOverlay) {
    modalOverlay.style.display = "none";
  }
});
