document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".email__container");
  const emailInput = document.querySelector(".email__input");
  const errorMessage = document.querySelector(".error__message");
  const errorIcon = document.querySelector(".error__icon");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      errorMessage.style.display = "block";
      errorIcon.style.display = "block";
      emailInput.classList.add("invalid");
    } else {
      errorMessage.style.display = "none";
      errorIcon.style.display = "none";
      emailInput.classList.remove("invalid");
      form.reset();
    }
  });
  emailInput.addEventListener("input", () => {
    console.log("User is typing");
    errorMessage.style.display = "none";
    errorIcon.style.display = "none";
    emailInput.classList.remove("invalid");
  });
});
