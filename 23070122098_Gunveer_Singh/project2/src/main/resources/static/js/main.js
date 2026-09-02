// Initialize AOS Animation Library
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Typing Effect
    const typingTexts = [
        "Computer Science Engineer",
        "Java Developer",
        "Spring Boot Developer",
        "DevOps Enthusiast",
        "AI Engineer"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.querySelector('.typing-text');
    
    if (typingElement) {
        function type() {
            const currentText = typingTexts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = 100;
            if (isDeleting) {
                typeSpeed /= 2;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % typingTexts.length;
                typeSpeed = 500; // Pause before typing next
            }
            
            setTimeout(type, typeSpeed);
        }
        
        setTimeout(type, 1000);
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm');
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.style.background = 'rgba(15, 23, 42, 0.85)';
            }
        });
    }

    // Progress bar animation on scroll
    const progressBars = document.querySelectorAll('.progress-bar');
    if (progressBars.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('aria-valuenow');
                    entry.target.style.width = width + '%';
                }
            });
        }, { threshold: 0.5 });
        
        progressBars.forEach(bar => {
            bar.style.width = '0%';
            observer.observe(bar);
        });
    }
});
