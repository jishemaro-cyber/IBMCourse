document.addEventListener("DOMContentLoaded", () => {
  const navHomeBtn = document.getElementById("nav-home");
  const recForm = document.getElementById("recommendationForm");
  const successPopup = document.getElementById("successPopup");
  const closePopupBtn = document.getElementById("closePopupBtn");

  if (navHomeBtn) {
    navHomeBtn.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  function showPopup(state) {
    if (state === true) {
      successPopup.classList.remove("hidden");
    } else {
      successPopup.classList.add("hidden");
    }
  }

  function closePopup() {
    showPopup(false);
  }

  function addRecommendation() {
    const nameVal = document.getElementById("recommenderName").value.trim();
    const titleVal = document.getElementById("recommenderTitle").value.trim();
    const textVal = document.getElementById("recommendationText").value.trim();

    console.log("Recommendation processed successfully:", { nameVal, titleVal, textVal });

    showPopup(true);

    if (recForm) {
      recForm.reset();
    }
  }

  if (recForm) {
    recForm.addEventListener("submit", (event) => {
      event.preventDefault();
      addRecommendation();
    });
  }

  if (closePopupBtn) {
    closePopupBtn.addEventListener("click", closePopup);
  }
});
