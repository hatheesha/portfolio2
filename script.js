const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('#navigation');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active'); // Toggle 'active' class
    menuToggle.classList.toggle('active'); // Toggle 'active' class for the button
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("table-contents");

for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener('click', function () {
        var tabname = this.innerText.toLowerCase().trim();
        for (var j = 0; j < tabcontents.length; j++) {
            tabcontents[j].style.display = "none";
            if (tabcontents[j].id === tabname) {
                tabcontents[j].style.display = "block";
            }
        }
        for (var k = 0; k < tablinks.length; k++) {
            tablinks[k].classList.remove("active-link");
        }
        this.classList.add("active-link");
    });
}

const dynamicText = document.querySelector("h1 span");
const words = ["Software Engineer", "Web Developer", "UI/UX Designer", "Content Creator"];
// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();

let slideIndex = 0;
const slides = document.querySelectorAll('.slides');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 3 seconds
}

showSlides();
