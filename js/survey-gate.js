(function () {
  const dialog = document.getElementById("survey-gate");
  if (!dialog || typeof dialog.showModal !== "function") return;

  const STORAGE_KEY = "petfm-proto-opened";
  const protoBtn = dialog.querySelector("[data-gate-proto]");
  const continueBtn = dialog.querySelector("[data-gate-continue]");
  const doneNote = dialog.querySelector(".modal-done");

  function protoOpened() {
    try { return sessionStorage.getItem(STORAGE_KEY) === "1"; } catch (e) { return false; }
  }

  function markProtoOpened() {
    try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch (e) {}
    render();
  }

  function render() {
    const opened = protoOpened();
    doneNote.hidden = !opened;
    protoBtn.classList.toggle("btn-p", !opened);
    protoBtn.classList.toggle("btn-s", opened);
    continueBtn.classList.toggle("btn-p", opened);
    continueBtn.classList.toggle("btn-s", !opened);
  }

  document.querySelectorAll("[data-survey-gate]").forEach(link => {
    link.addEventListener("click", event => {
      if (link.classList.contains("disabled")) return;
      event.preventDefault();
      render();
      dialog.showModal();
    });
  });

  document.querySelectorAll('[data-link="figma"]').forEach(link => {
    link.addEventListener("click", markProtoOpened);
  });

  continueBtn.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
})();
