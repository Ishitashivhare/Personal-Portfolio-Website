// DARK MODE TOGGLE
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(mode) {
  body.classList.toggle('dark', mode === 'dark');
  localStorage.setItem('theme', mode);
  toggleBtn.textContent = mode === 'dark' ? '☀️' : '🌙';
}

toggleBtn.addEventListener('click', () => {
  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// LOAD THEME FROM STORAGE
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
  renderProjects();
});

// DYNAMIC PROJECT DATA
const projectData = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with HTML, CSS, and JS.',
    link: '#'
  },
  {
    title: 'Weather App',
    description: 'Uses OpenWeatherMap API to fetch live weather data.',
    link: '#'
  },
  {
    title: 'ToDo App',
    description: 'Simple task manager with local storage.',
    link: '#'
  }
];

function renderProjects() {
  const container = document.getElementById('projects-container');
  container.innerHTML = '';
  projectData.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
    container.appendChild(card);
  });
}

// CONTACT FORM (fake submission)
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thanks for your message! 🚀");
  e.target.reset();
});
// ... previous code

// Typing Animation
const roles = ["John", "a Frontend Developer", "a UI/UX Enthusiast", "a JavaScript Nerd"];
const typedText = document.getElementById('typed-text');

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typedText.textContent = currentRole.substring(0, charIndex--);
    typingSpeed = 50;
  } else {
    typedText.textContent = currentRole.substring(0, charIndex++);
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    typingSpeed = 1200; // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, typingSpeed);
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
  renderProjects();
  typeEffect(); // Start typing animation
});

