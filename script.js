// Initialize WOW.js for scroll animations
new WOW().init();

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});

// Alpine.js data for Kite Grid Carousel
document.addEventListener('alpine:init', () => {
    Alpine.data('kiteGridCarousel', () => ({
        activeSlide: 0,
        transitioning: false,
        slides: [
            {
                title: 'Engineering for the Extremes',
                subtitle: 'Delivering components that excel in the most demanding aviation and military applications.',
                img: 'images/1.jpg',
                wingImg1: 'images/2.jpg',
                wingImg2: 'images/3.jpg',
                icon1: 'fas fa-plane-departure',
                icon2: 'fas fa-certificate'
            },
            {
                title: 'Uncompromising Quality & Precision',
                subtitle: 'Our assemblies are the cornerstone of reliability for industrial leaders worldwide.',
                img: 'images/4.jpg',
                wingImg1: 'images/5.jpg',
                wingImg2: 'images/6.jpg',
                icon1: 'fas fa-shield-halved',
                icon2: 'fas fa-cogs'
            },
            {
                title: 'Powering Heavy Industry',
                subtitle: 'Robust components designed for maximum durability and performance in heavy equipment.',
                img: 'images/7.jpg',
                wingImg1: 'images/1.jpg',
                wingImg2: 'images/2.jpg',
                icon1: 'fas fa-truck-monster',
                icon2: 'fas fa-award'
            }
        ],

        changeSlide(direction) {
            if (this.transitioning) return;
            this.transitioning = true;
            
            let nextSlideIndex = this.activeSlide + direction;
            if (nextSlideIndex < 0) {
                nextSlideIndex = this.slides.length - 1;
            } else if (nextSlideIndex >= this.slides.length) {
                nextSlideIndex = 0;
            }

            setTimeout(() => {
                this.activeSlide = nextSlideIndex;
                this.transitioning = false;
            }, 500); // Duration should match CSS transition
        },

        next() {
            this.changeSlide(1);
        },

        prev() {
            this.changeSlide(-1);
        },
        
        init() {
            // Auto-play the carousel
            setInterval(() => {
                this.next();
            }, 7000); // Change slide every 7 seconds
        }
    }));
});