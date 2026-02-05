// ===== DOM Elements =====
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contact-form');

// ===== Mobile Menu Toggle =====
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ===== Header Scroll Effect =====
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class for shadow effect
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===== Contact Form Handling =====
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Add loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Get form data
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Remove loading state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;

            // Show success message
            showFormMessage('success', 'Thank you for your message! We will get back to you soon.');

            // Reset form
            contactForm.reset();
        }, 1500);
    });
}

// ===== Form Message Display =====
function showFormMessage(type, message) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-success, .form-error');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'form-success' : 'form-error';
    messageDiv.innerHTML = `<p>${message}</p>`;

    // Insert after form
    contactForm.parentNode.insertBefore(messageDiv, contactForm.nextSibling);

    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// ===== Scroll to Top Button =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Animate Elements on Scroll =====
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .feature-item, .mv-card, .wwd-item, .bim-service-card, .contact-card');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.service-card, .feature-item, .mv-card, .wwd-item, .bim-service-card, .contact-card');

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Trigger initial check
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);

// ===== Active Navigation Link Based on Scroll Position =====
const sections = document.querySelectorAll('section[id]');

const highlightNavLink = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(sectionId)) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNavLink);

// ===== Form Validation =====
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const validatePhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phone === '' || re.test(phone);
};

// Add real-time validation
if (contactForm) {
    const emailInput = contactForm.querySelector('#email');
    const phoneInput = contactForm.querySelector('#phone');

    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.style.borderColor = '#dc3545';
            } else {
                this.style.borderColor = '';
            }
        });
    }

    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            if (!validatePhone(this.value)) {
                this.style.borderColor = '#dc3545';
            } else {
                this.style.borderColor = '';
            }
        });
    }
}

// ===== Preloader (Optional) =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== Service Hash Navigation =====
if (window.location.hash) {
    setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }, 100);
}

// ===== Keyboard Navigation Support =====
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ===== Console Welcome Message =====
console.log('%c Inventive Bizsol ', 'background: #046bd2; color: white; font-size: 20px; padding: 10px;');
console.log('%c Inventive With You ', 'color: #1e3a5f; font-size: 14px;');
