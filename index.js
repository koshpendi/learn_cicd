document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle");

  toggleBtn.addEventListener("input", () => {
    const bg = document.querySelectorAll('.bg-light')
    const text = document.querySelectorAll('.text-dark')
    bg.forEach(el => {
        el.classList.toggle('bg-dark')
    })
    text.forEach(el => {
        el.classList.toggle('text-white')
    })
  });
});
