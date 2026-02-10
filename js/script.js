// ===== DOM Elements =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('.nav-link, .mobile-menu-item');
const scrollToTopBtn = document.getElementById('scrollToTop');
const contactForm = document.getElementById('contact-form');
const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

// ===== Mobile Menu Toggle =====
if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a nav link (except dropdown toggles)
    navLinks.forEach(link => {
        if (!link.classList.contains('mobile-dropdown-toggle')) {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ===== Mobile Dropdown Toggle =====
mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = toggle.parentElement;
        parent.classList.toggle('active');
    });
});

// Close mobile dropdown submenu items
document.querySelectorAll('.mobile-dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ===== Hero Slider =====
const slides = document.querySelectorAll('.slide');
const sliderDots = document.querySelectorAll('.slider-dot');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    // Handle wraparound
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    currentSlide = index;

    // Update slides
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });

    // Update dots
    sliderDots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlide) {
            dot.classList.add('active');
        }
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startSlideshow() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
}

function stopSlideshow() {
    clearInterval(slideInterval);
}

// Initialize slider if elements exist
if (slides.length > 0) {
    // Navigation buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopSlideshow();
            nextSlide();
            startSlideshow();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopSlideshow();
            prevSlide();
            startSlideshow();
        });
    }

    // Dot navigation
    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopSlideshow();
            showSlide(index);
            startSlideshow();
        });
    });

    // Start automatic slideshow
    startSlideshow();
}

// ===== Page Hero Background Slider (inner pages) =====
const pageHeroSlides = document.querySelectorAll('.page-hero-slide');
if (pageHeroSlides.length > 0) {
    let currentPageSlide = 0;
    setInterval(() => {
        pageHeroSlides[currentPageSlide].classList.remove('active');
        currentPageSlide = (currentPageSlide + 1) % pageHeroSlides.length;
        pageHeroSlides[currentPageSlide].classList.add('active');
    }, 5000);
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===== Scroll to Top Button =====
if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== Contact Form Handling =====
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Add loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Get form data
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Simulate form submission
        setTimeout(() => {
            // Remove loading state
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;

            // Show success message
            alert('Thank you for your message! We will get back to you soon.');

            // Reset form
            contactForm.reset();
        }, 1500);
    });
}

// ===== Service Hash Navigation =====
if (window.location.hash) {
    setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
            const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
            const targetPosition = target.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }, 100);
}

// ===== Keyboard Navigation =====
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Arrow keys for slider
    if (slides.length > 0) {
        if (e.key === 'ArrowLeft') {
            stopSlideshow();
            prevSlide();
            startSlideshow();
        } else if (e.key === 'ArrowRight') {
            stopSlideshow();
            nextSlide();
            startSlideshow();
        }
    }
});

// ===== Services / Solutions Tab Switching =====
const serviceTabs = document.querySelectorAll('.services-tab');
const serviceTabPanels = document.querySelectorAll('.services-tab-panel');

if (serviceTabs.length > 0) {
    serviceTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-tab');

            // Update active tab
            serviceTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update active panel
            serviceTabPanels.forEach(panel => panel.classList.remove('active'));
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

const sliderContainer = document.querySelector('.hero-slider');

// ===== Touch Swipe for Slider =====
let touchStartX = 0;
let touchEndX = 0;

if (sliderContainer) {
    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        stopSlideshow();
        if (diff > 0) {
            // Swiped left - next slide
            nextSlide();
        } else {
            // Swiped right - previous slide
            prevSlide();
        }
        startSlideshow();
    }
}

// ===== About Page Clients Carousel =====
const clientsTrack = document.getElementById('clientsTrack');
const clientsDots = document.getElementById('clientsDots');

if (clientsTrack && clientsDots) {
    const clientSlides = clientsTrack.querySelectorAll('.about-clients-slide');
    const dots = clientsDots.querySelectorAll('.client-dot');
    let currentClientSlide = 0;

    function showClientSlide(index) {
        clientSlides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        currentClientSlide = index;
        clientSlides[currentClientSlide].classList.add('active');
        dots[currentClientSlide].classList.add('active');
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => showClientSlide(i));
    });

    setInterval(() => {
        showClientSlide((currentClientSlide + 1) % clientSlides.length);
    }, 4000);
}

// ===== Video Modal =====
const videoModal = document.getElementById('videoModal');
const openVideoBtn = document.getElementById('openVideoModal');
const closeVideoBtn = document.getElementById('closeVideoModal');
const videoModalIframe = document.getElementById('videoModalIframe');
const vimeoVideoSrc = 'https://player.vimeo.com/video/1013157421?badge=0&autopause=0&player_id=0&app_id=58479';

if (openVideoBtn && videoModal) {
    openVideoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        videoModalIframe.src = vimeoVideoSrc;
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeVideoBtn.addEventListener('click', () => {
        videoModal.classList.remove('active');
        videoModalIframe.src = '';
        document.body.style.overflow = '';
    });

    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.classList.remove('active');
            videoModalIframe.src = '';
            document.body.style.overflow = '';
        }
    });
}

// ===== Animate elements on scroll =====
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .about-content, .footer-col');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate-in');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
