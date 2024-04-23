// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// hamburger menu onclick
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// tutup navbar untuk random tap
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// toggle popup
const popup = document.querySelector("#popup-1");
document.querySelector(".open-popup").onclick = () => {
  popup.classList.toggle("active");
};

const close = document.querySelector(".close-button");
close.addEventListener("click", function () {
  popup.classList.remove("active");
});

// input form
function sendMessage() {
  const nama = document.getElementById("text").value;
  const mail = document.getElementById("mail").value;
  const pesan = document.getElementById("pesan").value;

  const url =
    "https://api.whatsapp.com/send?phone=+6289682369567&text=data%20diri%20pengirim%20%3A%0A*nama*%20%3A%20" +
    nama +
    "%3B%0A*e-mail*%20%3B%20" +
    mail +
    "%3B%0A*pesan*%20%3A%20" +
    pesan +
    "%3B";
  window.open(url);
}
