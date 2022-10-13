"use strict";

const imgContainer = document.querySelector(".image-container");
const img = document.querySelector(".image");

document.addEventListener("scroll", function (e) {
  const val = document.body.getBoundingClientRect();
  const y = window.scrollY;
  const frame = Math.min(Math.floor(y / 12) + 2, 63);
  console.log(y, frame);

  const image = `./images/ezgif-frame-${frame.toString().padStart(3, "0")}.png`;
  img.setAttribute(
    "src",
    `./images/ezgif-frame-${frame.toString().padStart(3, "0")}.png`
  );
});

// const wait = function (num) {
//   setTimeout(() => {
//     console.log("img waited");
//   }, num * 1000);
// };

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement("img");
//     img.classList.add("images");
//     // img.setAttribute.loading = "lazy";
//     img.src = imgPath;

//     img.addEventListener("load", function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener("error", function () {
//       reject(new Error("Error occured"));
//     });
//   });
// };

// const loadImg = async function (imgArr) {
//   let img = await imgArr.map((img) => createImage(img));
//   const imgAll = await Promise.allSettled(img);

// };

// const imgArr = [];
