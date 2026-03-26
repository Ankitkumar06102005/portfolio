// 3D Scene Setup
let scene, camera, renderer, stars, particles;

function init3DScene() {
    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg'), antialias: true });
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    
    // Create animated background
    createStarField();
    createFloatingGeometry();
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    const pointLight = new THREE.PointLight(0x00f5ff, 1);
    pointLight.position.set(5, 5, 5);
    
    scene.add(ambientLight, pointLight);
    
    animate3D();
}

function createStarField() {
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 2000;
    const starPositions = new Float32Array(starCount * 3);
    
    for (let i = 0; i < starCount * 3; i++) {
        starPositions[i] = (Math.random() - 0.5) * 2000;
    }
    
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    
    const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 2,
        transparent: true,
        opacity: 0.8
    });
    
    stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
}

function createFloatingGeometry() {
    const geometries = [
        new THREE.SphereGeometry(0.5, 16, 16),
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.TetrahedronGeometry(0.8),
        new THREE.OctahedronGeometry(0.6)
    ];
    
    particles = [];
    
    for (let i = 0; i < 50; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const material = new THREE.MeshPhongMaterial({
            color: Math.random() > 0.5 ? 0x00f5ff : 0xff00ff,
            transparent: true,
            opacity: 0.6,
            wireframe: Math.random() > 0.5
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        
        mesh.position.set(
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100
        );
        
        mesh.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );
        
        mesh.userData = {
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.02,
                y: (Math.random() - 0.5) * 0.02,
                z: (Math.random() - 0.5) * 0.02
            },
            floatSpeed: Math.random() * 0.02 + 0.01,
            floatRange: Math.random() * 2 + 1
        };
        
        particles.push(mesh);
        scene.add(mesh);
    }
}

function animate3D() {
    requestAnimationFrame(animate3D);
    
    // Rotate stars
    if (stars) {
        stars.rotation.x += 0.0001;
        stars.rotation.y += 0.0002;
    }
    
    // Animate floating particles
    particles.forEach((particle, index) => {
        particle.rotation.x += particle.userData.rotationSpeed.x;
        particle.rotation.y += particle.userData.rotationSpeed.y;
        particle.rotation.z += particle.userData.rotationSpeed.z;
        
        particle.position.y += Math.sin(Date.now() * particle.userData.floatSpeed + index) * 0.01;
    });
    
    // Camera movement based on scroll
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.01;
    camera.position.y = rate;
    
    renderer.render(scene, camera);
}

// Responsive 3D scene
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Skills animation
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const level = bar.getAttribute('data-level');
                setTimeout(() => {
                    bar.style.width = level + '%';
                }, 200);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// Scroll fade-in animation
function initFadeInAnimations() {
    const fadeEls = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    fadeEls.forEach(el => observer.observe(el));
}

// Smooth scroll for all anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Contact form handling
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name') || contactForm.querySelector('input[type="text"]').value;
        const email = formData.get('email') || contactForm.querySelector('input[type="email"]').value;
        const message = formData.get('message') || contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate form submission
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, email, message });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, observerOptions);
    
    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('.section, .hero');
    sections.forEach(section => {
        section.classList.add('loading');
        observer.observe(section);
    });
}

// Navbar background change on scroll
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        }
    });
}

// Particle interaction on mouse move
function initMouseInteraction() {
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        
        // Move camera slightly based on mouse position
        if (camera) {
            camera.position.x = mouseX * 2;
            camera.position.y = mouseY * 2;
        }
        
        // Create mouse trail effect
        createMouseTrail(e.clientX, e.clientY);
    });
}

function createMouseTrail(x, y) {
    const trail = document.createElement('div');
    trail.style.position = 'fixed';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    trail.style.width = '4px';
    trail.style.height = '4px';
    trail.style.background = 'rgba(0, 245, 255, 0.6)';
    trail.style.borderRadius = '50%';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '9999';
    trail.style.transition = 'all 0.3s ease';
    
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.style.opacity = '0';
        trail.style.transform = 'scale(0)';
        setTimeout(() => trail.remove(), 300);
    }, 50);
}

// Typing animation for hero title
function initTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = 'Ankit Kumar';
    let i = 0;

    heroTitle.textContent = '';

    function typeWriter() {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(typeWriter, 500);
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    init3DScene();
    initNavigation();
    animateSkills();
    initContactForm();
    initScrollAnimations();
    initNavbarScroll();
    initMouseInteraction();
    initTypingAnimation();
    initFadeInAnimations();
    initSmoothScroll();
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize);
    
    // Preloader (optional)
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});

// Smooth scrolling polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js';
    document.head.appendChild(script);
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // intentionally empty — parallax removed to prevent hero overlap
}, 16)); // ~60fps

// Add loading states and error handling
function showLoader() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(loader);
    return loader;
}

function hideLoader(loader) {
    if (loader) {
        loader.remove();
    }
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Console welcome message
console.log(`
🌟 Ankit Kumar's Portfolio 🌟
Built with Three.js, HTML5, CSS3, and JavaScript
`);

// Certificate preview modal
function openCert(path) {
    document.getElementById('certFrame').src = path;
    document.getElementById('certModal').style.display = 'block';
}

function closeCert() {
    document.getElementById('certModal').style.display = 'none';
    document.getElementById('certFrame').src = '';
}

// Close modal on outside click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('certModal');
    if (e.target === modal) closeCert();
});
