import { hello } from "../../declarations/hello";

let currentAnimal = null;

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

  const imageUrls = [
    {
      url: "https://images.ctfassets.net/cnu0m8re1exe/6hIM0vFiDm1DDVD1KNp7Zn/0ccd745300c1f6dd74989c58875da2bc/Untitled_design_-_2023-08-23T104246.288.png",
      title: 'The Javan Rhino',
      subtitle: 'Critically Endangered - Only 18 Remaining',
      description: `The Javan Rhino, once found across Southeast Asia, India, and China, is now critically endangered, restricted to a single national park on Java, Indonesia. They face critical threats from poaching and illegal trade, particularly for their horn. This severe endangerment comes despite concerted efforts to protect and conserve their dwindling population.`
  },  
    {
        url: "https://d1jyxxz9imt9yb.cloudfront.net/medialib/3628/image/p1300x1300/Rhinocerous0002_reduced.webp",
        title: 'Black Rhino',
        subtitle: 'Critically Endangered - About 3,142 Remaining',
        description: 'Black rhinos are critically endangered due to poaching, habitat loss, and climate change. Historically widespread across Africa, their numbers have drastically reduced, threatening their survival.'
    },
    {
        url: "https://gdb.voanews.com/B13DDCE1-70D6-4CC7-B910-C7D75F213212_w1080_h608_s.jpg",
        title: 'Northern White Rhino',
        subtitle: 'Critically Endangered - 2 Remaining',
        description: 'With an estimated 0-2 individuals left, Northern white rhinos are possibly extinct in the wild. They face threats from poaching and habitat loss.'
    },
    {
        url: "https://d1jyxxz9imt9yb.cloudfront.net/medialib/3803/image/p1300x1300/leopard_2.webp",
        title: 'Amur Leopard',
        subtitle: 'Critically Endangered - About 100 Remaining',
        description: 'Amur leopards are critically endangered due to habitat loss from man-made fires, poaching, and inbreeding. They are native to the forests and mountains of eastern Russia and northern China.'
    },
    {
        url: "https://d1jyxxz9imt9yb.cloudfront.net/medialib/3980/image/p1300x1300/Mignon-Gorilla5_reduced.webp",
        title: 'Gorilla',
        subtitle: 'Critically Endangered - About 2,600 Eastern Gorillas Remaining',
        description: 'Gorillas are endangered due to habitat loss, hunting for bushmeat, and disease. Efforts to protect their habitats and combat poaching are ongoing.'
    },
    {
        url: "https://d1jyxxz9imt9yb.cloudfront.net/medialib/3635/image/p1300x1300/Ele_daloa4_reduced.webp",
        title: 'African Forest Elephant',
        subtitle: 'Critically Endangered - Population Decreasing',
        description: 'Native to the sub-Saharan tropical forests, African forest elephants face threats from poaching, illegal trade, habitat loss, and human conflict.'
    },
    {
        url: "https://d1jyxxz9imt9yb.cloudfront.net/medialib/3981/image/p1300x1300/WR202308_Saola_001_437460_edited.webp",
        title: 'Saola',
        subtitle: 'Critically Endangered - Fewer than 750 Remaining',
        description: 'Known as the Asian unicorn, saolas are critically endangered due to commercial hunting, habitat destruction for agriculture, roads, and mining in Vietnam and Laos.'
    },
    {
        url: "https://d1jyxxz9imt9yb.cloudfront.net/medialib/3982/image/p1300x1300/AdobeStock_571513315_437479_reduced.webp",
        title: 'Kākāpō',
        subtitle: 'Critically Endangered - Only 116 Remaining',
        description: 'Kākāpōs, the world’s only flightless parrots, are critically endangered and found only in southwestern New Zealand. Conservation efforts focus on protecting their habitat and increasing their numbers through breeding programs.'
    },
    {
        url: "https://d1jyxxz9imt9yb.cloudfront.net/medialib/3760/image/p1300x1300/MC201512_NARW_002_418298_reduced.webp",
        title: 'North Atlantic Right Whale',
        subtitle: 'Critically Endangered - About 340 Remaining',
        description: 'North Atlantic right whales face critical threats from vessel strikes, entanglement in fishing gear, ocean noise pollution, and climate change.'
    },
    {
        url: "https://d1jyxxz9imt9yb.cloudfront.net/medialib/3984/image/p1300x1300/WR200810_Vaquita_001_437469_edited.webp",
        title: 'Vaquita',
        subtitle: 'Critically Endangered - Only 18 Remaining',
        description: 'Vaquitas, the smallest cetaceans, are on the brink of extinction due to fishing, habitat degradation, and climate change in the Gulf of California.'
    },
];


  // Get the placeholder element where the images will be rendered
  var placeholder = document.getElementById("placeholder");

  // Assuming imageUrls is an array of objects like:
  // [{ url: 'http://example.com/image1.jpg', title: 'Title 1', subtitle: 'Subtitle 1' }, ...]

  // Loop through the image URLs and create card elements
  for (var i = 0; i < imageUrls.length; i++) {
    let animal = imageUrls[i];
    var imageUrl = imageUrls[i].url;
    var title = imageUrls[i].title;
    var subtitle = imageUrls[i].subtitle;
    var description = imageUrls[i].description;

    // Create card container
    var card = document.createElement('div');
    card.className = 'card';
    card.style.display = 'inline-block'; // Add this line to make the cards display side by side

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

    var descriptionDiv = document.getElementById("description");

    // Using an IIFE to correctly bind the current description to the click event
    (function(animal) {
        card.addEventListener("click", function() {
            currentAnimal = animal;
            // Update the descriptionDiv with the current card's description
            descriptionDiv.innerText = animal.description;

            console.log(currentAnimal);
        });
    })(animal); // Pass the current description to the IIFE

    
  }
}

populateImages();