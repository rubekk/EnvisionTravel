// initializing animate on scroll
AOS.init();

// query selectors
const hamBurger = document.querySelector("#ham");
const mobileNav = document.querySelector(".mobile-nav-bar");
const mobileCross = document.querySelector(".mobile-cross");
const sliderImg = document.querySelector(".img");
const captionHeading = document.querySelector(".caption-heading");
const subCaption = document.querySelector(".sub-caption");
const sliderDots = document.querySelectorAll(".dot");
const travelGallery = document.querySelector(".travel-gallery-inner");
const travelCaption = document.querySelector(".travel-caption");
const leftBtn = document.querySelector("#left-btn");
const rightBtn = document.querySelector("#right-btn");
const topBtn = document.querySelector(".top-btn");

// variables
let currImg = 0;
let galleryIndex = 0;
const imgData = [
  {
    source: "./../imgs/annapurna.jpg",
    captionHeading: "Annapurna Base Camp",
    subCaption:
      "Annapurna is a mountain situated in the Annapurna mountain range of Gandaki Province, north-central Nepal. It is the tenth highest mountain in the world.",
  },
  {
    source: "./../imgs/marshyangdi.jpg",
    captionHeading: "Marshyangdi Safari",
    subCaption:
      "Marshyangdi is the main river of Nepal. Being a mountain river, it offers mesmerizing views of the mountains. Being the best white water river, it will give you the most exhilarating experience of water sports like rafting and kayaking.",
  },
  {
    source: "./../imgs/langtang.jpg",
    captionHeading: "Langtang valley",
    subCaption:
      "Langtang valley is a Himalayan valley in the mountains of north-central Nepal, known for its trekking routes and natural environment.",
  },
  {
    source: "./../imgs/manang.jpg",
    captionHeading: "Soothing Manang",
    subCaption:
      "Manang district is located at an elevation of 3519 m above sea level. The magnificent fusion of numerous mountain peaks, glaciers, passes, valleys and human settlement make it a wonderful place.",
  },
];
const galleryImgs = Array.from(travelGallery.children);

// functions
const getSliderImg = () => {
  currImg++;
  if (currImg > 3) currImg = 0;

  sliderImg.src = imgData[currImg].source;
  // setTimeout(()=>{
  captionHeading.innerText = imgData[currImg].captionHeading;
  subCaption.innerText = imgData[currImg].subCaption;
  // },100);

  sliderDots.forEach((dot, index) => {
    if (currImg == index) dot.className = "dot active-dot";
    else dot.className = "dot";
  });
};
getSliderImg();

const changeSliderImg = (index) => {
  sliderImg.src = imgData[index].source;
  captionHeading.innerText = imgData[index].captionHeading;
  subCaption.innerText = imgData[index].subCaption;

  sliderDots.forEach((dot, i) => {
    if (index == i) dot.className = "dot active-dot";
    else dot.className = "dot";
  });

  currImg = index;
};

const handleTravelGallery = (direction) => {
  let travelCaptionText = "";
  if (direction == "right") galleryImgs.push(galleryImgs.shift());
  else if (direction == "left") galleryImgs.unshift(galleryImgs.pop());

  travelGallery.innerHTML = "";

  galleryImgs.forEach((img, index) => {
    travelGallery.appendChild(img);
    if (index == 3) travelCaptionText = img.getAttribute("data");
  });

  travelCaption.innerText = travelCaptionText;
};

setInterval(getSliderImg, 7000);
setInterval(() => {
  handleTravelGallery("right");
}, 4000);

// event listeners
hamBurger.addEventListener("click", () => {
  mobileNav.className = "mobile-nav-bar active";
  topBtn.style.zIndex=-5;
});
mobileCross.addEventListener("click", () => {
  mobileNav.className = "mobile-nav-bar";
  topBtn.style.zIndex=1000;
});
Array.from(mobileNav.children).forEach((child) => {
  child.addEventListener("click", () => {
    mobileNav.className = "mobile-nav-bar";
  });
});
sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    changeSliderImg(index);
  });
});
leftBtn.addEventListener("click", () => {
  handleTravelGallery("left");
});
rightBtn.addEventListener("click", () => {
  handleTravelGallery("right");
});
window.addEventListener("scroll", () => {
  if (window.scrollY <= 550) topBtn.style.display = "none";
  else topBtn.style.display = "block";
});

// credit
console.log("Website created by Rubek!");
