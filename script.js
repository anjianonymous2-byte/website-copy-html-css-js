// Initialize Lucide icons when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize counter animation
    initCounterAnimation();
    
    // Initialize carousel functionality
    initCarousels();
});

// Mobile menu toggle
let isMobileMenuOpen = false;

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuBtn = document.getElementById('mobile-menu-btn');
    
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
        mobileNav.classList.add('show');
        menuBtn.innerHTML = '<i data-lucide="x"></i>';
    } else {
        mobileNav.classList.remove('show');
        menuBtn.innerHTML = '<i data-lucide="menu"></i>';
    }
    
    // Re-initialize icons after changing innerHTML
    lucide.createIcons();
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
        toggleMobileMenu();
    }
}

// Counter animation
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter-number');
    const counterSection = document.querySelector('.counters');
    let countersAnimated = false;

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                animateCounters();
            }
        });
    }, observerOptions);

    if (counterSection) {
        observer.observe(counterSection);
    }

    function animateCounters() {
        counters.forEach((counter, index) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const card = counter.closest('.counter-card');
            
            // Add animation class to card
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 100);

            let current = 0;
            const increment = target / 100;
            const duration = 2000; // 2 seconds
            const stepTime = duration / 100;

            const updateCounter = () => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target + '+';
                } else {
                    counter.textContent = Math.floor(current) + '+';
                    setTimeout(updateCounter, stepTime);
                }
            };

            // Start animation with delay
            setTimeout(updateCounter, index * 200);
        });
    }
}

// Carousel functionality
let carouselStates = {};
let carouselIntervals = {};

function initCarousels() {
    const carousels = document.querySelectorAll('.facility-carousel');
    
    carousels.forEach((carousel, index) => {
        const images = carousel.querySelectorAll('.carousel-image');
        const dots = carousel.querySelectorAll('.dot');
        
        // Initialize state
        carouselStates[index] = {
            currentSlide: 0,
            totalSlides: images.length,
            isHovered: false
        };
        
        // Start auto-slide
        startAutoSlide(index);
        
        // Add hover event listeners
        carousel.addEventListener('mouseenter', () => {
            carouselStates[index].isHovered = true;
            stopAutoSlide(index);
            showPauseIndicator(index);
        });
        
        carousel.addEventListener('mouseleave', () => {
            carouselStates[index].isHovered = false;
            startAutoSlide(index);
            hidePauseIndicator(index);
        });
    });
}

function startAutoSlide(carouselIndex) {
    if (carouselIntervals[carouselIndex]) {
        clearInterval(carouselIntervals[carouselIndex]);
    }
    
    carouselIntervals[carouselIndex] = setInterval(() => {
        if (!carouselStates[carouselIndex].isHovered) {
            changeSlide(carouselIndex, 1);
        }
    }, 5000); // 5 seconds
}

function stopAutoSlide(carouselIndex) {
    if (carouselIntervals[carouselIndex]) {
        clearInterval(carouselIntervals[carouselIndex]);
    }
}

function showPauseIndicator(carouselIndex) {
    const carousel = document.querySelector(`[data-carousel="${carouselIndex}"]`);
    const indicator = carousel.querySelector('.pause-indicator');
    if (indicator) {
        indicator.style.display = 'block';
    }
}

function hidePauseIndicator(carouselIndex) {
    const carousel = document.querySelector(`[data-carousel="${carouselIndex}"]`);
    const indicator = carousel.querySelector('.pause-indicator');
    if (indicator) {
        indicator.style.display = 'none';
    }
}

function changeSlide(carouselIndex, direction) {
    const state = carouselStates[carouselIndex];
    
    // Calculate new slide index
    let newSlide = state.currentSlide + direction;
    
    if (newSlide >= state.totalSlides) {
        newSlide = 0;
    } else if (newSlide < 0) {
        newSlide = state.totalSlides - 1;
    }
    
    updateSlide(carouselIndex, newSlide);
}

function currentSlide(carouselIndex, slideIndex) {
    updateSlide(carouselIndex, slideIndex);
}

function updateSlide(carouselIndex, slideIndex) {
    const carousel = document.querySelector(`[data-carousel="${carouselIndex}"]`);
    const images = carousel.querySelectorAll('.carousel-image');
    const dots = carousel.querySelectorAll('.dot');
    
    // Update state
    carouselStates[carouselIndex].currentSlide = slideIndex;
    
    // Update images
    images.forEach((img, index) => {
        img.classList.toggle('active', index === slideIndex);
    });
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
    });
}

// Header scroll effect
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove background opacity based on scroll
    if (scrollTop > 50) {
        header.style.backgroundColor = 'rgba(254, 254, 226, 0.98)';
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.backgroundColor = 'rgba(254, 254, 226, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
    
    lastScrollTop = scrollTop;
});

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.mvv-card, .expertise-card, .reason-card, .facility-card'
    );

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    if (window.innerWidth > 768 && isMobileMenuOpen) {
        toggleMobileMenu();
    }
});

// Handle clicks outside mobile menu
document.addEventListener('click', (event) => {
    const mobileNav = document.getElementById('mobile-nav');
    const menuBtn = document.getElementById('mobile-menu-btn');
    
    if (isMobileMenuOpen && 
        !mobileNav.contains(event.target) && 
        !menuBtn.contains(event.target)) {
        toggleMobileMenu();
    }
});

// Smooth page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease-in-out';
});

// Add some initial styles for smooth loading
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
});

// Utility function to debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handler for better performance
const debouncedScrollHandler = debounce(() => {
    // Add any additional scroll-based functionality here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Error handling for images
// document.addEventListener('DOMContentLoaded', () => {
//     const images = document.querySelectorAll('img');
    
//     images.forEach(img => {
//         img.addEventListener('error', function() {
//             // Hide broken images gracefully
//             this.style.display = 'none';
//             console.warn('Failed to load image:', this.src);
//         });
        
//         img.addEventListener('load', function() {
//             // Fade in loaded images
//             this.style.opacity = '1';
//             this.style.transition = 'opacity 0.3s ease-in-out';
//         });
        
//         // Set initial opacity for smooth loading
//         img.style.opacity = '0';
//     });
// });

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'https://images.unsplash.com/photo-1610631066894-62452ccb927c',
        'https://images.pexels.com/photos/8942118/pexels-photo-8942118.jpeg',
        'https://images.pexels.com/photos/8942119/pexels-photo-8942119.jpeg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
document.addEventListener('DOMContentLoaded', preloadImages);

// Add keyboard navigation support
document.addEventListener('keydown', (event) => {
    // Handle escape key for mobile menu
    if (event.key === 'Escape' && isMobileMenuOpen) {
        toggleMobileMenu();
    }
    
    // Handle arrow keys for carousel navigation (when focused)
    const focusedCarousel = document.activeElement?.closest('.facility-carousel');
    if (focusedCarousel) {
        const carouselIndex = parseInt(focusedCarousel.getAttribute('data-carousel'));
        
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            changeSlide(carouselIndex, -1);
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            changeSlide(carouselIndex, 1);
        }
    }
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    // Apply lazy loading to images that are not immediately visible
    document.addEventListener('DOMContentLoaded', () => {
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    });
}

// Add focus management for accessibility
document.addEventListener('DOMContentLoaded', () => {
    // Ensure focusable elements are properly managed
    const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    // Add focus styles for keyboard navigation
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #f8d041';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});

// Contact Form Functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async function(e) {
        // e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            company: formData.get('company'),
            message: formData.get('message')
        };
        
        // Validate required fields
        if (!data.name || !data.email || !data.message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending...</span>';
        
        try {
            // Simulate form submission (since this is a static website)
            // In a real implementation, you would send this to your backend
            // await simulateFormSubmission(data);
            
            // Show success message
            showNotification('Message sent successfully! We will get back to you within 24 hours.', 'success');
            
            // Reset form
            // contactForm.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            showNotification('Failed to send message. Please try again or contact us directly.', 'error');
        } finally {
            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Send Message</span><i data-lucide="send"></i>';
            lucide.createIcons(); // Re-initialize icons
        }
    });
}

// Simulate form submission for demo purposes
// async function simulateFormSubmission(data) {
//     return new Promise((resolve) => {
//         // Simulate network delay
//         setTimeout(() => {
//             console.log('Form submitted with data:', data);
//             resolve();
//         }, 1500);
//     });
// }


// Show notification function

function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Initialize contact form when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // ... existing initialization code runs first
    initContactForm();
});

console.log('SPIRO MULTI ACTIVITIES website loaded successfully! 🚀');
