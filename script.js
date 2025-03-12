// Typing Effect for Greeting
const greetingElement = document.getElementById("greeting");
const greetings = ["Jambo","Hello", "Hola", "Bonjour", "こんにちは", "안녕하세요", "Hallo"];
let greetingIndex = 0;
let charIndex = 0;

typingEffect();
function typingEffect() {
    if (charIndex < greetings[greetingIndex].length) {
        greetingElement.textContent += greetings[greetingIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typingEffect, 150);
    } else {
        setTimeout(() => {
            greetingElement.textContent = "";
            charIndex = 0;
            greetingIndex = (greetingIndex + 1) % greetings.length;
            typingEffect();
        }, 2000);
    }
}

// Set Current Year in Footer
const yearElement = document.getElementById("year");
yearElement.textContent = new Date().getFullYear();


// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDarkMode = document.body.classList.contains('dark-theme');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.textContent = '☀️';
}

// Automatic Greeting
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();
let greetingText;

if (hour < 12) {
    greetingText = 'Good Morning';
} else if (hour < 18) {
    greetingText = 'Good Afternoon';
} else {
    greetingText = 'Good Evening';
}

greeting.textContent = greetingText;

// Dynamic Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Intersection Observer for Animations
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});