const menu = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");

menu.addEventListener("click", (event) => {
  if (sidebar.style.display !== "flex") {
    sidebar.style.display = "flex";
  } else {
    sidebar.style.display = "none";
  }
});
