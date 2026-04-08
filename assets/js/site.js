document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector("[data-mobile-toggle]");
  const mobileLinks = document.querySelector(".mobile-links");

  if (mobileToggle && mobileLinks) {
    mobileToggle.addEventListener("click", function () {
      mobileLinks.classList.toggle("open");
      mobileToggle.setAttribute(
        "aria-expanded",
        mobileLinks.classList.contains("open") ? "true" : "false"
      );
    });
  }

  const demoForm = document.querySelector("[data-demo-form]");
  const formMessage = document.querySelector("[data-form-message]");

  if (demoForm) {
    demoForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (formMessage) {
        formMessage.textContent = "Thanks, your inquiry has been received.";
      }

      demoForm.reset();
    });
  }
});
