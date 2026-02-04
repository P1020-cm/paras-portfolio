// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth Scrolling
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

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link
        const mailtoLink = `mailto:parassorthiya587@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open mail client
        window.location.href = mailtoLink;
        
        // Show success message
        alert('Opening your email client... Please send the email to complete your message.');
        
        // Reset form
        contactForm.reset();
    });
}

// Add scroll animations
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

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.skill-card, .education-card, .experience-card, .project-card, .stat-card, .contact-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add active navigation highlighting based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentLocation) {
            link.classList.add('active');
        }
    });
});

// Animate sparkles
const sparkles = document.querySelectorAll('.sparkle');
sparkles.forEach((sparkle, index) => {
    sparkle.style.animationDelay = `${index * 0.3}s`;
});

// Add particle effect on mouse move (optional enhancement)
let particlesEnabled = false;

document.addEventListener('mousemove', (e) => {
    if (!particlesEnabled) return;
    
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '5px';
    particle.style.height = '5px';
    particle.style.background = 'var(--neon-cyan)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    particle.style.opacity = '0.6';
    particle.style.transition = 'all 1s ease';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.style.opacity = '0';
        particle.style.transform = 'scale(2)';
    }, 10);
    
    setTimeout(() => {
        particle.remove();
    }, 1000);
});

// Search functionality
const searchBar = document.querySelector('.search-bar');
if (searchBar) {
    searchBar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchTerm = searchBar.value.toLowerCase().trim();
            
            if (searchTerm) {
                // Simple search navigation
                if (searchTerm.includes('about') || searchTerm.includes('education')) {
                    window.location.href = 'about.html';
                } else if (searchTerm.includes('skill') || searchTerm.includes('project') || searchTerm.includes('experience') || searchTerm.includes('service')) {
                    window.location.href = 'services.html';
                } else if (searchTerm.includes('contact') || searchTerm.includes('email') || searchTerm.includes('phone')) {
                    window.location.href = 'contact.html';
                } else {
                    alert(`Searching for: ${searchTerm}\n\nTry searching for: about, skills, projects, experience, contact`);
                }
                
                searchBar.value = '';
            }
        }
    });
}

// Add typing effect to hero title (optional)
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

// Console easter egg
console.log('%c🔐 Cybersecurity Portfolio', 'color: #00ffff; font-size: 20px; font-weight: bold;');
console.log('%cLooking for vulnerabilities? 😄', 'color: #00ffff; font-size: 14px;');
console.log('%cThis portfolio is built with security in mind!', 'color: #b8b8d1; font-size: 12px;');
console.log('%cConnect: parassorthiya587@gmail.com', 'color: #00ffff; font-size: 12px;');
