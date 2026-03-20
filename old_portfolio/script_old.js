
        // Remove loading overlay after page loads
        window.addEventListener('load', () => {
            const loadingOverlay = document.getElementById('loadingOverlay');
            setTimeout(() => {
                loadingOverlay.style.opacity = '0';
                setTimeout(() => {
                    loadingOverlay.style.display = 'none';
                }, 500);
            }, 1000);
        });

        // Create animated background particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                const size = Math.random() * 4 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
                
                particlesContainer.appendChild(particle);
            }
        }
        function showProjects(type) {
    const fullstack = document.getElementById('fullstack-projects');
    const ml = document.getElementById('ml-projects');
    
    if (type === 'fullstack') {
        fullstack.style.display = 'block';
        ml.style.display = 'none';
    } else {
        fullstack.style.display = 'none';
        ml.style.display = 'block';
    }
}


        // Initialize particles
        createParticles();

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

        // Enhanced fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Enhanced form submission handling
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Create success message with better styling
            const successMsg = document.createElement('div');
            successMsg.innerHTML = `
                <div style="
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);
                    color: white;
                    padding: 20px 30px;
                    border-radius: 15px;
                    box-shadow: 0 20px 40px rgba(79, 172, 254, 0.3);
                    z-index: 10000;
                    animation: slideInRight 0.5s ease;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    max-width: 300px;
                ">
                    <h4 style="margin: 0 0 10px 0; font-size: 1.1rem;">Message Sent! ✨</h4>
                    <p style="margin: 0; font-size: 0.9rem; opacity: 0.9;">Thank you ${name}! I'll get back to you soon.</p>
                </div>
                <style>
                    @keyframes slideInRight {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                </style>
            `;
            
            document.body.appendChild(successMsg);
            
            // Remove message after 4 seconds
            setTimeout(() => {
                successMsg.style.animation = 'slideInRight 0.5s ease reverse';
                setTimeout(() => {
                    document.body.removeChild(successMsg);
                }, 500);
            }, 4000);
            
            this.reset();
        });

        // Enhanced navbar background change on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.12)';
                navbar.style.boxShadow = '0 8px 32px rgba(31, 38, 135, 0.37)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.08)';
                navbar.style.boxShadow = 'none';
            }
        });

        // Enhanced hover effects for project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.02)';
                this.style.background = 'rgba(255, 255, 255, 0.08)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.background = 'rgba(255, 255, 255, 0.05)';
            });
        });

        // Enhanced typing effect for the hero section
        const heroDescription = document.querySelector('.hero-description');
        const texts = [
            'Passionate about Full Stack Development & AI/ML',
            'Building the Future with Code',
            'Turning Ideas into Digital Reality',
            'Creating Innovative Solutions',
            'Crafting Digital Experiences'
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeEffect() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                heroDescription.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                heroDescription.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 2500);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
            
            const speed = isDeleting ? 50 : 100;
            setTimeout(typeEffect, speed);
        }
        
        // Start typing effect after page load
        setTimeout(typeEffect, 3000);

        // Enhanced resume download function
        function downloadResume() {
            const resumeUrl = 'Resume_dattatreya.pdf';
            
            // Create animated download notification
            const downloadNotification = document.createElement('div');
            downloadNotification.innerHTML = `
                <div style="
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);
                    color: white;
                    padding: 30px 40px;
                    border-radius: 20px;
                    box-shadow: 0 30px 60px rgba(79, 172, 254, 0.4);
                    z-index: 10000;
                    text-align: center;
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    animation: popIn 0.5s ease;
                ">
                    <div style="font-size: 3rem; margin-bottom: 15px;">📄</div>
                    <h3 style="margin: 0 0 10px 0; font-size: 1.3rem;">Downloading Resume...</h3>
                    <p style="margin: 0; opacity: 0.9;">Please check your downloads folder</p>
                </div>
                <style>
                    @keyframes popIn {
                        0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
                        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                    }
                </style>
            `;
            
            document.body.appendChild(downloadNotification);
            
            // Create download link
            const link = document.createElement('a');
            link.href = resumeUrl;
            link.download = 'Dattatreya_Resume.pdf';
            link.target = '_blank';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                downloadNotification.style.animation = 'popIn 0.5s ease reverse';
                setTimeout(() => {
                    if (document.body.contains(downloadNotification)) {
                        document.body.removeChild(downloadNotification);
                    }
                }, 500);
            }, 3000);
        }

        // Make downloadResume function globally available
        window.downloadResume = downloadResume;

        // Add mousemove parallax effect to hero section
        document.addEventListener('mousemove', (e) => {
            const hero = document.querySelector('.hero-content');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            hero.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        });

        // Add intersection observer for skill items animation
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.skill-item').forEach(skill => {
            skill.style.opacity = '0';
            skill.style.transform = 'translateY(30px)';
            skill.style.transition = 'all 0.6s ease';
            skillsObserver.observe(skill);
        });

        // Add click effect to contact items
        document.querySelectorAll('.contact-item').forEach(item => {
            item.addEventListener('click', function(e) {
                // Create ripple effect
                const ripple = document.createElement('div');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    if (this.contains(ripple)) {
                        this.removeChild(ripple);
                    }
                }, 600);
            });
        });

        // Add ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Add scroll progress indicator
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);
            z-index: 10001;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrolled + '%';
        });
    
// Enhanced form submission handling
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get('name');

    fetch(this.getAttribute('action'), {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        const successMsg = document.createElement('div');
        successMsg.innerHTML = `
          <div style="
              position: fixed;
              top: 20px;
              right: 20px;
              background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);
              color: white;
              padding: 20px 30px;
              border-radius: 15px;
              box-shadow: 0 20px 40px rgba(79, 172, 254, 0.3);
              z-index: 10000;
              animation: slideInRight 0.5s ease;
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.1);
              max-width: 300px;
          ">
              <h4 style="margin: 0 0 10px 0; font-size: 1.1rem;">Message Sent! ✨</h4>
              <p style="margin: 0; font-size: 0.9rem; opacity: 0.9;">Thank you ${name}! I'll get back to you soon.</p>
          </div>
          <style>
              @keyframes slideInRight {
                  from { transform: translateX(100%); opacity: 0; }
                  to { transform: translateX(0); opacity: 1; }
              }
          </style>
        `;
        document.body.appendChild(successMsg);

        setTimeout(() => {
          successMsg.style.animation = 'slideInRight 0.5s ease reverse';
          setTimeout(() => {
            document.body.removeChild(successMsg);
          }, 500);
        }, 4000);

        form.reset();
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    }).catch(() => {
      alert("❌ Network error. Please try again later.");
    });
  });
});
