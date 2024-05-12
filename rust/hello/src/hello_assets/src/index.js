import { hello } from "../../declarations/hello";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  document.getElementById("greeting").innerText = "";
  const loader = document.getElementById("loader");

  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  loader.style.visibility = "visible";
  button.setAttribute("disabled", true);
  document.getElementById("name").setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const greeting = await hello.greet(name);

  loader.style.visibility = "hidden";
  button.removeAttribute("disabled");
  document.getElementById("name").removeAttribute("disabled");
  document.getElementById("greeting").innerText = greeting;

  return false;
});


function populateImages() {
  var imageUrls = [
    "https://d1jyxxz9imt9yb.cloudfront.net/medialib/3803/image/p1300x1300/leopard_2.webp",
    "https://d1jyxxz9imt9yb.cloudfront.net/medialib/3848/image/p1300x1300/AdobeStock_384667533_431571.webp",
    "https://d1jyxxz9imt9yb.cloudfront.net/medialib/3980/image/p1300x1300/Mignon-Gorilla5_reduced.webp",
    // Add more image URLs here
  ];

  // Get the placeholder element where the images will be rendered
  var placeholder = document.getElementById("placeholder");

  // Loop through the image URLs and create <img> elements
  for (var i = 0; i < imageUrls.length; i++) {
    var imageUrl = imageUrls[i];
    var img = document.createElement("img");
    img.src = imageUrl;
    placeholder.appendChild(img);
  }
}

populateImages();