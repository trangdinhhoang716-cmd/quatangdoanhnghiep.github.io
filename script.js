const form = document.querySelector(".form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Cảm ơn bạn! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.");
    form.reset();
  });
}
