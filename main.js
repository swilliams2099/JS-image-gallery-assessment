const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic5.jpg",
]
/* Declaring the alternative text for each image file */

const imagesAltText = [
    "A closeup photo of a blue eye",
    "A closeup photo of a flat rock formation",
    "A photo of purple iris flowers",
    "An blurry photo of an Egyptian mural",
    "A photo of a non-monarch butterfly"
]
/* Looping through images */

// Put the section of code below the "Looping through images" comment inside a loop that loops through all the filenames in the array.
// In each loop iteration, replace the xxx placeholder values with a string that will equal the path to the image and alt attributes in each case. Set the value of the src and alt attributes to these values in each case. Remember that the image is inside the images directory, and its name is pic1.jpg, pic2.jpg, etc.
for (let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', imagesAltText[i]);
    thumbBar.appendChild(newImage);
}

thumbBar.addEventListener("click", (event) => {
    changeDisplayImage(event.target);
    // changeDisplayImage(event.target.getAttribute("alt"));
});

function changeDisplayImage(newImage) {
    displayedImage.setAttribute("src", newImage.getAttribute("src"));
    displayedImage.setAttribute("alt", newImage.getAttribute("alt"));
}
/* Wiring up the Darken/Lighten button */
let tinted = false;
btn.addEventListener("click", () => {
    if (tinted === false) {
        overlay.style.backgroundColor = "rgb(0 0 0 /0.5)";
        tinted = true;
        btn.textContent = "Lighten";
    } else {
        overlay.style.backgroundColor = "rgb(0 0 0 /0.0)";
        tinted = false;
        btn.textContent = "Darken";
    }
}
)