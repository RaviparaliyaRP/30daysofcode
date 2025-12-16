/* 
═══════════════════════════════════════════════════════════════
RAVICODES PORTFOLIO - JAVASCRIPT
═══════════════════════════════════════════════════════════════
This file contains interactive functionality for the portfolio.
═══════════════════════════════════════════════════════════════
*/

// ============================================================
// CONFIGURATION - UPDATE THESE VALUES
// ============================================================
const CONFIG = {
    // Current day of the challenge (update daily)
    currentDay: 2,
    
    // Social media links (update once)
    social: {
        linkedin: "[TO BE ADDED]",
        instagram: "[TO BE ADDED]"
    }
};

// ============================================================
// INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupNavbar();
    updateSocialLinks();
    setupCardAnimations();
});

// ============================================================
// PAGE INITIALIZATION
// ============================================================
function initializePage() {
    // Update current day display
    const currentDayElement = document.getElementById('current-day');
    if (currentDayElement) {
        currentDayElement.textContent = String(CONFIG.currentDay).padStart(2, '0');
    }
}

// ============================================================
// NAVBAR SCROLL EFFECT
// ============================================================
function setupNavbar() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ============================================================
// UPDATE SOCIAL MEDIA LINKS
// ============================================================
function updateSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        const ariaLabel = link.getAttribute('aria-label');
        
        if (ariaLabel === 'LinkedIn' && CONFIG.social.linkedin !== '[TO BE ADDED]') {
            link.href = CONFIG.social.linkedin;
        } else if (ariaLabel === 'Instagram' && CONFIG.social.instagram !== '[TO BE ADDED]') {
            link.href = CONFIG.social.instagram;
        }
    });
}

// ============================================================
// SETUP CARD ANIMATIONS
// ============================================================
function setupCardAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation for multiple cards
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, observerOptions);

    // Observe all project cards for animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// ============================================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#all-projects') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================================
// CONSOLE MESSAGE
// ============================================================
console.log('%c🚀 RaviCodes Portfolio', 'color: #f20d33; font-size: 20px; font-weight: bold;');
console.log('%c#30DaysOfCode Challenge', 'color: #ffaa00; font-size: 14px;');
console.log('%cBuilt with passion and code!', 'color: #fff7e5; font-size: 12px;');

