const toggle = document.getElementById("sidebarToggle");
const panel = document.getElementById("panel");

toggle.addEventListener("click", () => {
  const isOpen = panel.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);
});