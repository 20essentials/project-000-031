console.log("Based in: ", "https://youtu.be/QZKqUI8DXQw?si=62KleBG2bGy30YD4");
console.log("img-19 ->", "https://wallhaven.cc/w/3k713v");

const d = document;

d.addEventListener("click", e => {
  if (e.target.matches(".container")) {
    e.target.classList.toggle("sombrear");
  }
})