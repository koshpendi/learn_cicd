document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle");
  const bg = document.querySelectorAll(".bg-light");
  const text = document.querySelectorAll(".text-dark");

  const isDark = Boolean(Number(localStorage.getItem("isDark")));
  toggleBtn.checked = isDark;

  if (isDark) {
    bg.forEach((el) => {
      el.classList.toggle("bg-dark");
    });
    text.forEach((el) => {
      el.classList.toggle("text-white");
    });
  }

  toggleBtn.addEventListener("input", (e) => {
    const isDark = e.target.checked;
    localStorage.setItem("isDark", isDark ? "1" : "0");
    bg.forEach((el) => {
      el.classList.toggle("bg-dark");
    });
    text.forEach((el) => {
      el.classList.toggle("text-white");
    });
  });
});
