// querySelectors
const colorElems = document.querySelectorAll(".color");
const cssRoot = document.querySelector(":root");

const colors = [
  {
    dark: "#009100", //green
    light: "lime",
    scrollLight: "rgb(167, 253, 167)",
    scrollHover: "#045e04",
    bgImg: "./../imgs/green-texture.png",
  },
  {
    dark: "#005091", //blue
    light: "rgb(0, 255, 213)",
    scrollLight: "#9dd3ff",
    scrollHover: "#04365e",
    bgImg: "./../imgs/blue-texture.png",
  },
  {
    dark: "#91001f", //red
    light: "rgb(255, 0, 34)",
    scrollLight: "#ffa1b5",
    scrollHover: "#5e044f",
    bgImg: "./../imgs/red-texture.png",
  },
];

colorElems.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    cssRoot.style.setProperty("--primaryColor", colors[index].dark);
    cssRoot.style.setProperty("--primaryHoverColor", colors[index].light);
    cssRoot.style.setProperty("--scrollThumbHover", colors[index].scrollHover);
    cssRoot.style.setProperty("--scrollLight", colors[index].scrollLight);
    cssRoot.style.setProperty("--bgImg", `url("${colors[index].bgImg}")`);
  });
});
