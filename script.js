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

        // Animate skill progress bars when in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBars = entry.target.querySelectorAll('.skill-progress');
                    progressBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        bar.style.width = width;
                    });
                }
            });
        }, { threshold: 0.5 });

        observer.observe(document.querySelector('.skills'));

        // Header background on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(26, 26, 26, 0.95)';
            } else {
                header.style.background = 'rgba(26, 26, 26, 0.9)';
            }
        });

        // Play button click effect
        // document.querySelector('.play-button').addEventListener('click', () => {
        //     // Add your video/animation logic here
        //     alert('เปิดวิดีโอแนะนำตัว! 🎬');
        // });

        // Add floating animation to skill cards
        document.querySelectorAll('.skill-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('fade-in-up');
        });
