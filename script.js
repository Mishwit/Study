const menu = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");

menu.addEventListener("click", (event) => {
  if (sidebar.style.display !== "flex") {
    sidebar.style.display = "flex";
  } else {
    sidebar.style.display = "none";
  }
});

const xx = (a, b) => {
  return a + b;
};

const res1 = xx(1, 2); // 3
const res2 = xx(100, 23); // 123

console.log(res1, res2);

const name1 = (name, surname) => {
  return `Имя: ${name} Фамилия: ${surname}`;
};

name1("Михаил", "Гаврилов");
