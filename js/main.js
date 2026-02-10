// ============================================
// MILES CAM - Website JavaScript
// ============================================

// Email Configuration
// Forms will send to: oawotokun@gmail.com
// Display email on site: victor@milescam.com

const RECIPIENT_EMAIL = 'oawotokun@gmail.com';
const DISPLAY_EMAIL = 'victor@milescam.com';

// Web3Forms Access Key (get free key at https://web3forms.com)
// This is a simple service that sends emails without requiring backend setup
const WEB3FORMS_ACCESS_KEY = '5e8a1da5-d4d4-438e-b61b-d90017257daa';

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const betaForm = document.getElementById('betaForm');
const contactForm = document.getElementById('contactForm');

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Beta Form Submission
if (betaForm) {
    betaForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(betaForm);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitButton = betaForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;
        
        try {
            // Send email via Web3Forms (simple, no backend required)
            if (WEB3FORMS_ACCESS_KEY !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
                const emailBody = `
New Beta Application from Miles CAM Website

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Role: ${data.role}
Industry: ${data.industry}
Number of Cameras: ${data.cameras}
Primary Use Case: ${data['use-case']}

Message:
${data.message || 'No additional message provided'}

---
This email was sent from the Miles CAM beta registration form.
Reply directly to: ${data.email}
                `.trim();

                await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        access_key: WEB3FORMS_ACCESS_KEY,
                        subject: `New Beta Application: ${data.name} from ${data.company}`,
                        from_name: 'Miles CAM Website',
                        email: RECIPIENT_EMAIL,
                        message: emailBody,
                        replyto: data.email
                    })
                });
            } else {
                // Fallback: log to console if Web3Forms not configured
                console.log('Beta Application Submitted (Web3Forms not configured):', data);
                console.log('To enable email notifications, get a free key from https://web3forms.com');
            }
            
            // Hide form and show success message
            betaForm.style.display = 'none';
            document.getElementById('betaSuccess').style.display = 'block';
            
            // Scroll to success message
            document.getElementById('betaSuccess').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
            
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your application. Please try again or contact us directly at victor@milescam.com');
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// Contact Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        try {
            // Send email via Web3Forms (simple, no backend required)
            if (WEB3FORMS_ACCESS_KEY !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
                const emailBody = `
New Contact Form Submission from Miles CAM Website

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
This email was sent from the Miles CAM contact form.
Reply directly to: ${data.email}
                `.trim();

                await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        access_key: WEB3FORMS_ACCESS_KEY,
                        subject: `Contact Form: ${data.subject}`,
                        from_name: 'Miles CAM Website',
                        email: RECIPIENT_EMAIL,
                        message: emailBody,
                        replyto: data.email
                    })
                });
            } else {
                // Fallback: log to console if Web3Forms not configured
                console.log('Contact Form Submitted (Web3Forms not configured):', data);
                console.log('To enable email notifications, get a free key from https://web3forms.com');
            }
            
            // Show success message
            alert('Thank you for your message! We\'ll get back to you soon.');
            contactForm.reset();
            
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error sending your message. Please try again or email us directly at victor@milescam.com');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// Note: simulateFormSubmission removed - now using EmailJS directly

// Intersection Observer for Fade-in Animations
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
    const animateElements = document.querySelectorAll('.feature-card, .use-case-card, .status-item, .investor-card');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Form Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add real-time email validation
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value && !validateEmail(input.value)) {
            input.style.borderColor = '#ff4444';
        } else {
            input.style.borderColor = '';
        }
    });
});

// Scroll to top functionality (optional)
function createScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
        } else {
            scrollBtn.style.opacity = '0';
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Initialize scroll to top button
createScrollToTop();

// Analytics tracking (replace with your analytics code)
function trackEvent(category, action, label) {
    // Google Analytics example:
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         event_category: category,
    //         event_label: label
    //     });
    // }
    console.log('Event tracked:', category, action, label);
}

// Track form submissions
if (betaForm) {
    betaForm.addEventListener('submit', () => {
        trackEvent('Form', 'Submit', 'Beta Registration');
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', () => {
        trackEvent('Form', 'Submit', 'Contact Form');
    });
}

// Track CTA clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const text = e.target.textContent.trim();
        trackEvent('CTA', 'Click', text);
    });
});

// Console message for developers
console.log('%cMiles CAM', 'font-size: 24px; font-weight: bold; color: #9ACD32;');
console.log('%cAI-Powered Video Monitoring', 'font-size: 14px; color: #666;');
console.log('%cInterested in joining our team? Contact us at victor@milescam.com', 'font-size: 12px; color: #999;');
