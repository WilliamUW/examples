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
  // [{ url: 'http://example.com/image1.jpg', title: 'Title 1', subtitle: 'Subtitle 1' }, ...]

  var imageUrls = [{ url:     "https://d1jyxxz9imt9yb.cloudfront.net/medialib/3803/image/p1300x1300/leopard_2.webp",
  title: 'Title 1', subtitle: 'Subtitle 1' },
  { url:     "https://d1jyxxz9imt9yb.cloudfront.net/medialib/3848/image/p1300x1300/AdobeStock_384667533_431571.webp",
  title: 'Title 1', subtitle: 'Subtitle 1' },
  { url:     "https://d1jyxxz9imt9yb.cloudfront.net/medialib/3980/image/p1300x1300/Mignon-Gorilla5_reduced.webp",
  title: 'Title 1', subtitle: 'Subtitle 1' },
    // Add more image URLs here
  ];

  // Get the placeholder element where the images will be rendered
  var placeholder = document.getElementById("placeholder");

  // Assuming imageUrls is an array of objects like:
// [{ url: 'http://example.com/image1.jpg', title: 'Title 1', subtitle: 'Subtitle 1' }, ...]

// Select the placeholder element where cards will be appended

// Loop through the image URLs and create card elements
for (var i = 0; i < imageUrls.length; i++) {
    var imageUrl = imageUrls[i].url;
    var title = imageUrls[i].title;
    var subtitle = imageUrls[i].subtitle;

    // Create card container
    var card = document.createElement('div');
    card.className = 'card';

    // Create <img> element
    var img = document.createElement('img');
    img.src = imageUrl;
    img.alt = title;  // Use title as alt text
    img.className = 'card-img-top';  // Bootstrap class for images on cards

    // Create card body
    var cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Create title element
    var cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = title;

    // Create subtitle element
    var cardSubtitle = document.createElement('p');
    cardSubtitle.className = 'card-subtitle';
    cardSubtitle.textContent = subtitle;

    // Append title and subtitle to card body
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardSubtitle);

    // Append img and card body to card
    card.appendChild(img);
    card.appendChild(cardBody);

    // Append the card to the placeholder
    placeholder.appendChild(card);
}

}

populateImages();