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
    // Challenge start date (Day 1) - Format: YYYY-MM-DD
    // Today is Day 7, so Day 1 was 6 days ago (2025-12-15)
    challengeStartDate: '2025-12-15', // Day 1 start date
    
    // Social media links (update once)
    social: {
        linkedin: "https://www.linkedin.com/in/ravi-paraliya-507272367",
        instagram: "https://www.instagram.com/raviparaliya.rp?igsh=MXFncTBrY2E0eHFxbQ=="
    }
};

// ============================================================
// CALCULATE CURRENT DAY (Automatic 24-hour cycle)
// ============================================================
function calculateCurrentDay() {
    // Get challenge start date (Day 1) - set to midnight
    const startDateStr = CONFIG.challengeStartDate + 'T00:00:00';
    const startDate = new Date(startDateStr);
    
    // Get current date (local timezone) - set to midnight for accurate day calculation
    const now = new Date();
    const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
    
    // Reset start date to midnight for accurate calculation
    const startDateMidnight = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 0, 0, 0, 0);
    
    // Calculate difference in milliseconds
    const timeDiff = currentDate.getTime() - startDateMidnight.getTime();
    
    // Convert to days
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    // Day 1 is the start date, so add 1
    const currentDay = daysDiff + 1;
    
    // Ensure day is between 1 and 30
    return Math.max(1, Math.min(currentDay, 30));
}

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
    // Calculate and update current day automatically
    const currentDay = calculateCurrentDay();
    const currentDayElement = document.getElementById('current-day');
    if (currentDayElement) {
        currentDayElement.textContent = String(currentDay).padStart(2, '0');
    }
    
    // Set up automatic update at midnight (12:00 AM)
    scheduleMidnightUpdate();
}

// ============================================================
// SCHEDULE MIDNIGHT UPDATE (Automatic day change at 12:00 AM)
// ============================================================
function scheduleMidnightUpdate() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0); // Set to midnight
    
    // Calculate milliseconds until midnight
    const msUntilMidnight = tomorrow.getTime() - now.getTime();
    
    // Update the day at midnight
    setTimeout(function() {
        const currentDay = calculateCurrentDay();
        const currentDayElement = document.getElementById('current-day');
        if (currentDayElement) {
            currentDayElement.textContent = String(currentDay).padStart(2, '0');
        }
        
        // Schedule next update (24 hours later)
        scheduleMidnightUpdate();
    }, msUntilMidnight);
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
        
        if (ariaLabel === 'LinkedIn' && CONFIG.social.linkedin !== 'www.linkedin.com/in/raviparaliyarp') {
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

