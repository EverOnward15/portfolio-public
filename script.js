// Get tabLinks & tabContents
var tabLinks = document.getElementsByClassName("tab-links"),
  tabContents = document.getElementsByClassName("tab-contents");

// On openTab fucntion call
function openTab(tabname) {
  for (item of tabLinks) {
    item.classList.remove("active-link");
  }
  for (item of tabContents) {
    item.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Get SideMenu
var sideMenu = document.getElementById("sidemenu");

// On openTab fucntion call
function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}

//Date for copyright at bottom
const date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;

//Display/hide Captcha div
var captcha = document.getElementById("captcha");
var message = document.getElementById("message");
message.addEventListener("keypress", displayCaptcha);
function displayCaptcha(e) {
  captcha.classList.remove("invisible");
}
message.addEventListener("focusout", hideCaptcha);
function hideCaptcha() {
  if (message.value == "") {
    captcha.classList.add("invisible");
  }
}

//FAQs
document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.question');

  questions.forEach((question) => {
    question.addEventListener('click', function () {
      const answer = this.nextElementSibling;

      if (answer.classList.contains('show')) {
        answer.classList.remove('show');
        question.classList.add('border')
      } else {
        const allAnswers = document.querySelectorAll('.answer');
        allAnswers.forEach((ans) => ans.classList.remove('show'));
        answer.classList.add('show');
        question.classList.remove('border');
      }
    });
  });
});

/*Smoke animation*/
// document.addEventListener('DOMContentLoaded', function() {
//   let trailContainer = document.getElementById('rainbow-trail');
//   let numParticles = 50;
//   let particles = [];

//   // Create trail particles
//   for (let i = 0; i < numParticles; i++) {
//     createTrailParticle();
//   }

//   // Function to create a trail particle
//   function createTrailParticle() {
//     let particle = document.createElement('div');
//     particle.className = 'trail-particle';
//     particle.classList.add('rainbow-' + (Math.floor(Math.random() * 7) + 1)); // Random rainbow color
//     trailContainer.appendChild(particle);
//     particles.push(particle);
//   }

//   // Update trail particle positions on mousemove
//   document.addEventListener('mousemove', function(event) {
//     particles.forEach(function(particle) {
//       let offsetX = Math.random() * 50 - 25; // Random offset to make the trail look more natural
//       let offsetY = Math.random() * 50 - 25;
//       particle.style.left = (event.pageX + offsetX) + 'px';
//       particle.style.top = (event.pageY + offsetY) + 'px';
//     });
//   });
// });


//Adding case study page
// Get references to the popup and close button
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');

// Function to open the popup
function openPopup() {
    popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    popup.style.display = 'none';
}

function navigateToConexus() {
  window.open("https://conexus.vn", "_blank");
}


// Event listener to open the popup when a project is clicked
const projectLink = document.getElementById('case-study-img'); 
projectLink.addEventListener('click', navigateToConexus);
const projectLink2 = document.getElementById('popup-2'); 
projectLink2.addEventListener('click', openPopup);


// Event listener to close the popup when the close button is clicked
closeBtn.addEventListener('click', closePopup);

// Get the anchor element
const readCaseStudyBtn = document.getElementById('read-case-study');

// Prevent the default action when the button is clicked
readCaseStudyBtn.addEventListener('click', function(event) {
    event.preventDefault();
});




//SCroll

/// Hide scroll to top button by default
document.querySelector('.scroll-to-top').style.display = 'none';

// Show scroll to top button when scrolling past the hero section
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var heroSectionHeight = document.querySelector('#header').offsetHeight;
  var scrollButton = document.querySelector('.scroll-to-top');

  if (scrollPosition > heroSectionHeight) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
});

// Image sources
const fullResImages = [
  "/assets/lotus-crypto 2.jpeg",
  "/assets/happy-inr.in.png",
  "/assets/staynido2.jpeg",
  "/assets/1tamilmv.fan.jpeg",
  "/assets/forever-studios-c.jpeg",
];

// Dynamically generate low-quality placeholders using a canvas
async function generateLowQualityImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const scaleFactor = 0.8; // Reduce quality by 90%
      canvas.width = img.width * scaleFactor;
      canvas.height = img.height * scaleFactor;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/jpeg', 0.5)); // Low-quality JPEG
    };
  });
}

// Generate and apply thumbnails
async function generateThumbnails() {
  const thumbnails = await Promise.all(fullResImages.map(generateLowQualityImage));
  const buildings = document.querySelectorAll('.building');

  buildings.forEach((building, index) => {
    if (thumbnails[index]) {
      building.style.backgroundImage = `url('${thumbnails[index]}')`;
    } else {
      console.error(`Thumbnail not generated for index ${index}`);
    }
  });
}

// Open fullscreen modal with high-resolution image
function openFullscreen(index) {
  const modal = document.getElementById('fullscreenModal');
  const fullscreenImage = document.getElementById('fullscreenImage');

  if (fullResImages[index]) {
    fullscreenImage.src = fullResImages[index];
    modal.style.display = 'flex';
    document.body.classList.add("no-scroll"); // Disable scrolling on body
  } else {
    console.error(`Full-resolution image not found for index ${index}`);
  }
}

// Close fullscreen modal
function closeFullscreen() {
  const modal = document.getElementById('fullscreenModal');
  modal.style.display = 'none';
  document.body.classList.remove("no-scroll"); // Re-enable scrolling on body
}

// Navigate images
function navigate(direction) {
  if (direction === 1) {
    fullResImages.push(fullResImages.shift());
  } else if (direction === -1) {
    fullResImages.unshift(fullResImages.pop());
  }
  generateThumbnails(); // Refresh thumbnails
}

// Initialize gallery
generateThumbnails();
