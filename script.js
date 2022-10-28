// initializing animate on scroll
AOS.init();

// query selectors
const hamBurger = document.querySelector("#ham");
const mobileNav = document.querySelector(".mobile-nav-bar");
const mobileCross = document.querySelector(".mobile-cross")
const sliderImg = document.querySelector(".img");
const captionHeading = document.querySelector(".caption-heading");
const subCaption = document.querySelector(".sub-caption");
const sliderDots=document.querySelectorAll(".dot");
const travelGallery = document.querySelector(".travel-gallery-inner");
const travelCaption = document.querySelector(".travel-caption");

// variables
let currImg = 0;
const imgData = [
  {
    source: "./imgs/mountain-11.jpg",
    captionHeading: "Beautiful mountain",
    subCaption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad soluta ipsum consectetur! Eaque itaque odio ex enim minima accusantium dolorem magnam."
  },
  {
    source: "./imgs/river-11.jpg",
    captionHeading: "Beautiful river",
    subCaption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad soluta ipsum consectetur! Eaque itaque odio ex enim minima accusantium dolorem magnam."
  },
  {
    source: "./imgs/river-22.jpg",
    captionHeading: "Wonderful river",
    subCaption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad soluta ipsum consectetur! Eaque itaque odio ex enim minima accusantium dolorem magnam."
  },
  {
    source: "./imgs/house-11.jpg",
    captionHeading: "Beautiful house",
    subCaption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad soluta ipsum consectetur! Eaque itaque odio ex enim minima accusantium dolorem magnam."
  },
];
const galleryImgs = Array.from(travelGallery.children);

// functions
const getSliderImg = () => {
  currImg++;
  if(currImg>3) currImg=0;

  sliderImg.src = imgData[currImg].source;
  // setTimeout(()=>{
    captionHeading.innerText = imgData[currImg].captionHeading;
    subCaption.innerText = imgData[currImg].subCaption;
  // },100);
  
  sliderDots.forEach((dot,index)=>{
    if(currImg==index) dot.className="dot active-dot";
    else dot.className="dot";
  })
};
getSliderImg();

const changeSliderImg = index=>{
  sliderImg.src = imgData[index].source;
  captionHeading.innerText = imgData[index].captionHeading;
  subCaption.innerText = imgData[index].subCaption;

  sliderDots.forEach((dot,i)=>{
    if(index==i) dot.className="dot active-dot";
    else dot.className="dot";
  })

  currImg=index;
}

const handleTravelGallery=()=>{
  let travelCaptionText="";
  galleryImgs.push(galleryImgs.shift());

  travelGallery.innerHTML="";

  galleryImgs.forEach((img,index)=>{
    travelGallery.appendChild(img);
    if(index==3) travelCaptionText=img.getAttribute("data");
  })

  travelCaption.innerText=travelCaptionText;
};

setInterval(getSliderImg,7000);
setInterval(handleTravelGallery,3000)

// event listeners
hamBurger.addEventListener("click", ()=>{
  mobileNav.className="mobile-nav-bar active";
});
mobileCross.addEventListener("click",()=>{
  mobileNav.className="mobile-nav-bar";
});
Array.from(mobileNav.children).forEach(child=>{
  child.addEventListener("click",()=>{
    mobileNav.className="mobile-nav-bar";
  })
})
sliderDots.forEach((dot,index)=>{
  dot.addEventListener("click",()=>{
    changeSliderImg(index)
  })
})


