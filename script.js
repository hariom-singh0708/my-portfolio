
// Typing animation
const typeText = document.getElementById('type-text');
const phrases = ['Full Stack Developer', 'MERN Stack Expert', 'Software Engineer', 'Web Developer'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typeText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typeText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isEnd = true;
    setTimeout(() => {
      isDeleting = true;
    }, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  const speed = isDeleting ? 100 : isEnd ? 100 : 150;
  setTimeout(type, speed);

  if (isEnd) {
    isEnd = false;
  }
}

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
});

// Highlight active navigation link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active-nav', 'text-white');
    link.classList.add('text-gray-300');

    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active-nav', 'text-white');
      link.classList.remove('text-gray-300');
    }
  });
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', () => {
  formSuccess.classList.remove('hidden', 'opacity-0');
  setTimeout(() => {
    formSuccess.classList.add('opacity-0', 'hidden');
    contactForm.reset();
  }, 4500);
});

// Initialize typing animation
setTimeout(type, 1000);