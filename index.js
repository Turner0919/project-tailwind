let openTab = function (tabNum) {
  document.getElementById("tab1").classList.add("hidden");
  document.getElementById("tab2").classList.add("hidden");
  document.getElementById("tab3").classList.add("hidden");

  document.getElementById("btn1").className =
    "border-b-3 border-transparent px-9 py-5";
  document.getElementById("btn2").className =
    "border-b-3 border-transparent px-9 py-5";
  document.getElementById("btn3").className =
    "border-b-3 border-transparent px-9 py-5";

  document.getElementById("tab" + tabNum).classList.remove("hidden");

  document.getElementById("btn" + tabNum).className =
    "border-b-3 border-blue-500 px-9 py-5";
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const fullName = form.querySelector(
        'input[placeholder="Full name"]'
      ).value;
      const email = form.querySelector(
        'input[placeholder="Email address"]'
      ).value;
      const message = form.querySelector("textarea").value;
      const termsAccepted = form.querySelector("#terms").checked;

      if (!fullName || !email || !message) {
        alert("Vui lòng điền đầy đủ các trường bắt buộc.");
        e.preventDefault();
      } else if (!termsAccepted) {
        alert("Bạn phải đồng ý với các điều khoản.");
        e.preventDefault();
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form form');
    if (form) {
        form.addEventListener('submit', (e) => {
            const fullName = form.querySelector('input[placeholder="Full name"]').value;
            const email = form.querySelector('input[placeholder="Email address"]').value;
            const message = form.querySelector('textarea').value;
            const termsAccepted = form.querySelector('#terms').checked;

            if (!fullName || !email || !message) {
                alert('Vui lòng điền đầy đủ các trường bắt buộc.');
                e.preventDefault();
            } else if (!termsAccepted) {
                alert('Bạn phải đồng ý với các điều khoản.');
                e.preventDefault();
            }
        });
    }
});

