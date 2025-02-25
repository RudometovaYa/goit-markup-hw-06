(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"), // Кнопка відкриття
    closeModalBtn: document.querySelector("[data-modal-close]"), // Кнопка закриття
    modal: document.querySelector("[data-modal]"), // Саме модальне вікно (бекдроп)
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();