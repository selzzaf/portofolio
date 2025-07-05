// Theme and language functionality
let currentLanguage = 'fr';
let currentTheme = localStorage.getItem('theme') || 'light';

// Initialize theme
document.documentElement.setAttribute('data-theme', currentTheme);

const translations = {
    fr: {
        'Accueil': 'Accueil',
        'À propos': 'À propos',
        'Compétences': 'Compétences',
        'Projets': 'Projets',
        'Contact': 'Contact',
        'Bonjour, je suis': 'Bonjour, je suis',
        'Étudiante en informatique et réseaux': 'Étudiante en informatique et réseaux',
        'Passionnée par le développement logiciel et les nouvelles technologies': 'Passionnée par le développement logiciel et les nouvelles technologies',
        'Voir mes projets': 'Voir mes projets',
        'Me contacter': 'Me contacter',
        'À propos de moi': 'À propos de moi',
        'Étudiante en 1re année du cycle ingénieur à l\'EMSI, spécialisée en informatique et réseaux, je suis passionnée par le développement logiciel. Curieuse, rigoureuse et dotée de solides compétences en programmation.': 'Étudiante en 1re année du cycle ingénieur à l\'EMSI, spécialisée en informatique et réseaux, je suis passionnée par le développement logiciel. Curieuse, rigoureuse et dotée de solides compétences en programmation.',
        'Projets': 'Projets',
        'Langages': 'Langages',
        'Années': 'Années',
        'Langages de programmation': 'Langages de programmation',
        'Frameworks Back-end': 'Frameworks Back-end',
        'Front-end': 'Front-end',
        'Bases de données': 'Bases de données',
        'Mes Projets': 'Mes Projets',
        'Application de location de voiture': 'Application de location de voiture',
        'Développement d\'une plateforme web permettant la réservation et la gestion de véhicules en ligne avec Laravel.': 'Développement d\'une plateforme web permettant la réservation et la gestion de véhicules en ligne avec Laravel.',
        'Clonage de Reddit': 'Clonage de Reddit',
        'Développement d\'un réseau social avec back-end Express.js, base de données PostgreSQL, et interface utilisateur React.': 'Développement d\'un réseau social avec back-end Express.js, base de données PostgreSQL, et interface utilisateur React.',
        'Application de chat': 'Application de chat',
        'Développement d\'une application chat desktop en temps réel avec Java Swing, Spring Boot et Firebase.': 'Développement d\'une application chat desktop en temps réel avec Java Swing, Spring Boot et Firebase.',
        'Immotech : Gestion immobilière': 'Immotech : Gestion immobilière',
        'Application web de gestion immobilière avec Flask (back-end), MongoDB (NoSQL) et interface en HTML/CSS/JS avec templates Jinja2.': 'Application web de gestion immobilière avec Flask (back-end), MongoDB (NoSQL) et interface en HTML/CSS/JS avec templates Jinja2.',
        'Restons en contact': 'Restons en contact',
        'N\'hésitez pas à me contacter pour discuter de projets ou opportunités.': 'N\'hésitez pas à me contacter pour discuter de projets ou opportunités.',
        'Tous droits réservés': 'Tous droits réservés'
    },
    en: {
        'Accueil': 'Home',
        'À propos': 'About',
        'Compétences': 'Skills',
        'Projets': 'Projects',
        'Contact': 'Contact',
        'Bonjour, je suis': 'Hello, I\'m',
        'Étudiante en informatique et réseaux': 'Computer Science & Networks Student',
        'Passionnée par le développement logiciel et les nouvelles technologies': 'Passionate about software development and new technologies',
        'Voir mes projets': 'View my projects',
        'Me contacter': 'Contact me',
        'À propos de moi': 'About Me',
        'Étudiante en 1re année du cycle ingénieur à l\'EMSI, spécialisée en informatique et réseaux, je suis passionnée par le développement logiciel. Curieuse, rigoureuse et dotée de solides compétences en programmation.': 'First-year engineering student at EMSI, specialized in computer science and networks, I am passionate about software development. Curious, rigorous and equipped with solid programming skills.',
        'Projets': 'Projects',
        'Langages': 'Languages',
        'Années': 'Years',
        'Langages de programmation': 'Programming Languages',
        'Frameworks Back-end': 'Back-end Frameworks',
        'Front-end': 'Front-end',
        'Bases de données': 'Databases',
        'Mes Projets': 'My Projects',
        'Application de location de voiture': 'Car Rental Application',
        'Développement d\'une plateforme web permettant la réservation et la gestion de véhicules en ligne avec Laravel.': 'Development of a web platform for online vehicle reservation and management with Laravel.',
        'Clonage de Reddit': 'Reddit Clone',
        'Développement d\'un réseau social avec back-end Express.js, base de données PostgreSQL, et interface utilisateur React.': 'Development of a social network with Express.js backend, PostgreSQL database, and React user interface.',
        'Application de chat': 'Chat Application',
        'Développement d\'une application chat desktop en temps réel avec Java Swing, Spring Boot et Firebase.': 'Development of a real-time desktop chat application with Java Swing, Spring Boot and Firebase.',
        'Immotech : Gestion immobilière': 'Immotech: Real Estate Management',
        'Application web de gestion immobilière avec Flask (back-end), MongoDB (NoSQL) et interface en HTML/CSS/JS avec templates Jinja2.': 'Real estate management web application with Flask (back-end), MongoDB (NoSQL) and HTML/CSS/JS interface with Jinja2 templates.',
        'Restons en contact': 'Let\'s stay in touch',
        'N\'hésitez pas à me contacter pour discuter de projets ou opportunités.': 'Don\'t hesitate to contact me to discuss projects or opportunities.',
        'Tous droits réservés': 'All rights reserved'
    }
};

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    updateLanguage();
}

function updateLanguage() {
    // Update all elements with data-lang attributes
    const elements = document.querySelectorAll('[data-lang-fr]');
    elements.forEach(element => {
        const frenchText = element.getAttribute('data-lang-fr');
        const englishText = element.getAttribute('data-lang-en');
        
        if (currentLanguage === 'fr') {
            element.textContent = frenchText;
        } else {
            element.textContent = englishText;
        }
    });

    // Update language toggle button
    const langToggle = document.querySelector('.lang-text');
    if (currentLanguage === 'fr') {
        langToggle.textContent = 'EN';
    } else {
        langToggle.textContent = 'FR';
    }

    // Update page title
    document.title = currentLanguage === 'fr' ? 'Salma Afroukh - Portfolio' : 'Salma Afroukh - Portfolio';
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        if (currentTheme === 'dark') {
            navbar.style.background = 'rgba(17, 24, 39, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        }
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        if (currentTheme === 'dark') {
            navbar.style.background = 'rgba(17, 24, 39, 0.95)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .about-content, .contact-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Typing animation for code
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const codeLines = document.querySelectorAll('.code-line');
    codeLines.forEach((line, index) => {
        const text = line.textContent;
        setTimeout(() => {
            typeWriter(line, text, 50);
        }, index * 200);
    });
});

// Add hover effects for skill items
document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add click effects for project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'translateY(-10px)';
            }, 150);
        });
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    updateLanguage();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Update navbar background based on current theme
    const navbar = document.querySelector('.navbar');
    if (currentTheme === 'dark') {
        navbar.style.background = 'rgba(17, 24, 39, 0.95)';
    }
}); 