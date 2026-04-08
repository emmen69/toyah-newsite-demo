document.addEventListener('DOMContentLoaded',()=>{const b=document.querySelector('[data-mobile-toggle]');const l=document.querySelector('.mobile-links');if(b&&l){b.addEventListener('click',()=>l.classList.toggle('open'));}document.querySelectorAll('a[href^="#"]').forEach((a)=>a.addEventListener('click',()=>{if(l)l.classList.remove('open');}));const f=document.querySelector('[data-demo-form]');if(f){f.addEventListener('submit',(e)=>{e.preventDefault();const m=f.querySelector('[data-form-message]');if(m)m.textContent='Demo only: form submission is disabled in this static preview.';});}});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("[data-demo-form]");
  const message = document.querySelector("[data-form-message]");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      const name = (formData.get("name") || "").toString().trim();

      if (message) {
        message.textContent = name
          ? `Thanks ${name}, your inquiry has been received.`
          : "Thanks, your inquiry has been received.";
      }

      form.reset();
    });
  }
});
