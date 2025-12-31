// =======================
// Smooth Scroll Navigation
// =======================
document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =======================
// Sticky Navbar Scroll Effect
// =======================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 60) {
    navbar.style.background = '#002f50';
    navbar.style.padding = '10px 40px';
    navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
  } else {
    navbar.style.background = '#003d6b';
    navbar.style.padding = '14px 40px';
    navbar.style.boxShadow = 'none';
  }
});

// =======================
// Highlight on CLICK
// =======================
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// =======================
// Auto Highlight on SCROLL
// =======================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ===============================
// PRODUCT SLIDER FUNCTIONALITY
// ===============================

// Select elements
const grid = document.querySelector(".products-grid");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

// CARD WIDTH (must match CSS width)
let cardWidth = 250; // includes gap approx.

// Scroll Function → moves one card per click
function slideLeft() {
    grid.scrollBy({
        left: -cardWidth,
        behavior: "smooth"
    });
}

function slideRight() {
    grid.scrollBy({
        left: cardWidth,
        behavior: "smooth"
    });
}

// Attach events
leftArrow.addEventListener("click", slideLeft);
rightArrow.addEventListener("click", slideRight);

// ===============================
// RESPONSIVE CARD WIDTH UPDATE
// Adjust scrolling width based on screen size
// ===============================
function updateCardWidth() {
    if (window.innerWidth <= 480) {
        cardWidth = grid.clientWidth; // full width card
    } else if (window.innerWidth <= 768) {
        cardWidth = 260; 
    } else if (window.innerWidth <= 1024) {
        cardWidth = 260; 
    } else {
        cardWidth = 250; 
    }
}

window.addEventListener("resize", updateCardWidth);
updateCardWidth();

<script>
const pageUrl = encodeURIComponent(window.location.href);
const pageTitle = encodeURIComponent(document.title);

document.querySelector('.fa-facebook-f').parentElement.href =
  `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;

document.querySelector('.fa-x-twitter').parentElement.href =
  `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;

document.querySelector('.fa-linkedin-in').parentElement.href =
  `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;

document.querySelector('.fa-whatsapp').parentElement.href =
  `https://wa.me/?text=${pageTitle}%20${pageUrl}`;

document.querySelector('.fa-telegram').parentElement.href =
  `https://t.me/share/url?url=${pageUrl}&text=${pageTitle}`;

document.querySelector('.fa-envelope').parentElement.href =
  `mailto:?subject=${pageTitle}&body=${pageUrl}`;

document.querySelector('.fa-link').parentElement.onclick = () 
  navigator.clipboard.writeText(window.location.href);
  alert("Job link copied!");

</script>