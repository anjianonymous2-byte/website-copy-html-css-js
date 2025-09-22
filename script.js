// Initialize Lucide icons when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize counter animation
    initCounterAnimation();
    
    // Initialize carousel functionality
    initCarousels();
    
    // Initialize mobile touch support
    initTouchSupport();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize contact form
    initContactForm();
});

// Mobile menu toggle with enhanced animation
let isMobileMenuOpen = false;

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuBtn = document.getElementById('mobile-menu-btn');
    const header = document.getElementById('header');
    
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
        mobileNav.classList.add('show');
        menuBtn.innerHTML = '<i data-lucide="x"></i>';
        menuBtn.classList.add('active');
        header.classList.add('menu-open');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = 'hidden';
        
        // Add backdrop
        const backdrop = document.createElement('div');
        backdrop.className = 'mobile-menu-backdrop';
        backdrop.onclick = toggleMobileMenu;
        document.body.appendChild(backdrop);
        
    } else {
        mobileNav.classList.remove('show');
        menuBtn.innerHTML = '<i data-lucide="menu"></i>';
        menuBtn.classList.remove('active');
        header.classList.remove('menu-open');
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Remove backdrop
        const backdrop = document.querySelector('.mobile-menu-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
    }
    
    // Re-initialize icons after changing innerHTML
    lucide.createIcons();
}

// Enhanced smooth scrolling to sections with mobile optimization
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const offsetTop = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({ 
            top: offsetTop,
            behavior: 'smooth'
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

// Enhanced carousel functionality with touch support
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
            isHovered: false,
            touchStartX: 0,
            touchEndX: 0
        };
        
        // Start auto-slide
        startAutoSlide(index);
        
        // Mouse events
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
        
        // Touch events for mobile
        carousel.addEventListener('touchstart', (e) => {
            carouselStates[index].touchStartX = e.changedTouches[0].screenX;
            carouselStates[index].isHovered = true;
            stopAutoSlide(index);
        });
        
        carousel.addEventListener('touchend', (e) => {
            carouselStates[index].touchEndX = e.changedTouches[0].screenX;
            handleSwipe(index);
            
            // Resume auto-slide after a delay
            setTimeout(() => {
                carouselStates[index].isHovered = false;
                startAutoSlide(index);
            }, 2000);
        });
        
        // Prevent default touch behavior that might interfere
        carousel.addEventListener('touchmove', (e) => {
            e.preventDefault();
        }, { passive: false });
    });
}

function handleSwipe(carouselIndex) {
    const state = carouselStates[carouselIndex];
    const swipeDistance = state.touchEndX - state.touchStartX;
    const minSwipeDistance = 50; // Minimum distance for a swipe
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
            // Swipe right - go to previous slide
            changeSlide(carouselIndex, -1);
        } else {
            // Swipe left - go to next slide
            changeSlide(carouselIndex, 1);
        }
    }
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

// Touch support initialization for mobile devices
function initTouchSupport() {
    // Add touch-friendly interactions to buttons and links
    const interactiveElements = document.querySelectorAll('button, .btn, .nav-link-mobile');
    
    interactiveElements.forEach(element => {
        // Add active state for touch
        element.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        });
        
        element.addEventListener('touchend', function() {
            setTimeout(() => {
                this.classList.remove('touch-active');
            }, 150);
        });
        
        element.addEventListener('touchcancel', function() {
            this.classList.remove('touch-active');
        });
    });
    
    // Improve scroll behavior on mobile
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
        
        // Prevent zoom on double tap for better UX
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function (event) {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }
    
    // Handle orientation changes
    window.addEventListener('orientationchange', function() {
        // Delay to account for viewport changes
        setTimeout(() => {
            // Recalculate positions if needed
            if (isMobileMenuOpen) {
                toggleMobileMenu();
            }
            
            // Force redraw
            document.body.style.display = 'none';
            document.body.offsetHeight; // Trigger reflow
            document.body.style.display = '';
        }, 100);
    });
}

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

// Team Carousel Functionality
let teamCarouselState = {
    currentSlide: 0,
    totalSlides: 6,
    isHovered: false,
    interval: null
};

function initTeamCarousel() {
    const teamCarousel = document.querySelector('.team-carousel');
    if (!teamCarousel) return;
    
    // Initialize first slide
    updateTeamSlide(0);
    
    // Start auto-slide
    startTeamAutoSlide();
    
    // Mouse events
    teamCarousel.addEventListener('mouseenter', () => {
        teamCarouselState.isHovered = true;
        stopTeamAutoSlide();
        showTeamPauseIndicator(true);
    });
    
    teamCarousel.addEventListener('mouseleave', () => {
        teamCarouselState.isHovered = false;
        startTeamAutoSlide();
        showTeamPauseIndicator(false);
    });
    
    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    teamCarousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        teamCarouselState.isHovered = true;
        stopTeamAutoSlide();
    });
    
    teamCarousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleTeamSwipe(touchStartX, touchEndX);
        
        // Resume auto-slide after delay
        setTimeout(() => {
            teamCarouselState.isHovered = false;
            startTeamAutoSlide();
        }, 3000);
    });
    
    // Prevent default touch behavior
    teamCarousel.addEventListener('touchmove', (e) => {
        e.preventDefault();
    }, { passive: false });
}

function handleTeamSwipe(startX, endX) {
    const swipeDistance = endX - startX;
    const minSwipeDistance = 50;
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
            changeTeamSlide(-1);
        } else {
            changeTeamSlide(1);
        }
    }
}

function startTeamAutoSlide() {
    if (teamCarouselState.interval) {
        clearInterval(teamCarouselState.interval);
    }
    
    teamCarouselState.interval = setInterval(() => {
        if (!teamCarouselState.isHovered) {
            changeTeamSlide(1);
        }
    }, 5000); // 5 seconds auto-slide
}

function stopTeamAutoSlide() {
    if (teamCarouselState.interval) {
        clearInterval(teamCarouselState.interval);
    }
}

function showTeamPauseIndicator(show) {
    const indicator = document.querySelector('.team-pause-indicator');
    if (indicator) {
        indicator.style.display = show ? 'flex' : 'none';
    }
}

function changeTeamSlide(direction) {
    let newSlide = teamCarouselState.currentSlide + direction;
    
    if (newSlide >= teamCarouselState.totalSlides) {
        newSlide = 0;
    } else if (newSlide < 0) {
        newSlide = teamCarouselState.totalSlides - 1;
    }
    
    updateTeamSlide(newSlide);
}

function goToTeamSlide(slideIndex) {
    updateTeamSlide(slideIndex);
}

function updateTeamSlide(slideIndex) {
    teamCarouselState.currentSlide = slideIndex;
    
    // Get team data
    const teamData = document.querySelectorAll('.team-slide-data');
    const totalSlides = teamData.length;
    
    if (totalSlides === 0) return;
    
    // Calculate previous and next slide indices
    const prevIndex = slideIndex === 0 ? totalSlides - 1 : slideIndex - 1;
    const nextIndex = slideIndex === totalSlides - 1 ? 0 : slideIndex + 1;
    
    // Update slide content
    updateTeamSlideContent('.team-slide-prev', prevIndex);
    updateTeamSlideContent('.team-slide-current', slideIndex);
    updateTeamSlideContent('.team-slide-next', nextIndex);
    
    // Update dots
    const dots = document.querySelectorAll('.team-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
    });
}

function updateTeamSlideContent(slideSelector, dataIndex) {
    const slide = document.querySelector(slideSelector);
    const teamData = document.querySelectorAll('.team-slide-data')[dataIndex];
    
    if (!slide || !teamData) return;
    
    const img = teamData.querySelector('img');
    const h4 = teamData.querySelector('h4');
    const position = teamData.querySelectorAll('p')[0];
    const description = teamData.querySelectorAll('p')[1];
    
    // Update slide content
    const slideImg = slide.querySelector('.team-image');
    const slideName = slide.querySelector('.team-name');
    const slidePosition = slide.querySelector('.team-position');
    const slideDescription = slide.querySelector('.team-description');
    
    if (slideImg && img) {
        slideImg.src = img.src;
        slideImg.alt = img.alt;
    }
    
    if (slideName && h4) {
        slideName.textContent = h4.textContent;
    }
    
    if (slidePosition && position) {
        slidePosition.textContent = position.textContent;
    }
    
    if (slideDescription && description) {
        slideDescription.textContent = description.textContent;
    }
}

// Add team carousel to initialization
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize counter animation
    initCounterAnimation();
    
    // Initialize carousel functionality
    initCarousels();
    
    // Initialize team carousel
    initTeamCarousel();
    
    // Initialize mobile touch support
    initTouchSupport();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize contact form
    initContactForm();
});

console.log('SPIRO MULTI ACTIVITIES website loaded successfully! 🚀');
