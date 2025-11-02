import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Import pages
import Home from './pages/Home.js';
import Courses from './pages/Courses.js';
import Placements from './pages/Placements.js';
import About from './pages/About.js';
import Contact, { setupContactForm } from './pages/Contact.js';
import Blog from './pages/Blog.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ProgrammingCourse from './pages/courses/programming.js';
import DataScienceCourse from './pages/courses/datascience.js';
import CloudComputingCourse from './pages/courses/CloudComputingCourse.js';
import CyberSecurityCourse from './pages/courses/CyberSecurityCourse.js';
import DigitalMarketingCourse from './pages/courses/DigitalMarketingCourse.js';
import MobileDevelopmentCourse from './pages/courses/MobileDevelopmentCourse.js';
import WebDevelopmentCourse from './pages/courses/WebDevelopmentCourse.js';
import DatabaseCourse from './pages/courses/DatabaseCourse.js';
import DevOpsCourse from './pages/courses/DevOpsCourse.js';
import AIMLCourse from './pages/courses/AIMLCourse.js';
import BlockchainCourse from './pages/courses/BlockchainCourse.js';
import IoTCourse from './pages/courses/IoTCourse.js';
import FullStackCourse from './pages/courses/FullStackCourse.js';
import DataScienceCourse2 from './pages/courses/datascience.js';

class App {
  constructor() {
    this.currentPage = 'home';
    this.isMobileMenuOpen = false;
    this.init();
  }

  init() {
    this.setupGlobalEventListeners();
    this.render();
    this.setupGSAPAnimations();
    this.setupPageSpecificFunctions();
  }

  render() {
    const app = document.getElementById('app');
    app.innerHTML = `
      ${Header()}
      ${this.getCurrentPage()}
      ${Footer()}
    `;
    
    // Update mobile menu icon based on current state
    this.updateMobileMenuIcon();
    this.setupPageSpecificFunctions();
  }

  getCurrentPage() {
    switch(this.currentPage) {
      case 'courses': return Courses();
      case 'placements': return Placements();
      case 'about': return About();
      case 'contact': return Contact();
      case 'blog': return Blog();
      case 'programming-course': return ProgrammingCourse();
      case 'data-science-course': return DataScienceCourse();
      case 'cloud-computing-course': return CloudComputingCourse();
      case 'cyber-security-course': return CyberSecurityCourse();
      case 'digital-marketing-course': return DigitalMarketingCourse();
      case 'mobile-development-course': return MobileDevelopmentCourse();
      case 'web-development-course': return WebDevelopmentCourse();
      case 'database-course': return DatabaseCourse();
      case 'devops-course': return DevOpsCourse();
      case 'ai/ml-course': return AIMLCourse();
      case 'blockchain-course': return BlockchainCourse();
      case 'iot-course': return IoTCourse();
      case 'fullstack-course': return FullStackCourse();
      case 'data-science-course2': return DataScienceCourse2();
      default: return Home();
    }
  }

  setupGlobalEventListeners() {
    // Single event listener for all navigation
    document.addEventListener('click', (e) => {
      this.handleNavigation(e);
      this.handleMobileMenu(e);
    });
  }

  handleNavigation(e) {
    // Handle all navigation links (desktop and mobile)
    const navLink = e.target.closest('[data-page]');
    if (navLink) {
      e.preventDefault();
      e.stopPropagation();
      
      this.currentPage = navLink.dataset.page;
      this.closeMobileMenu();
      this.render();
      this.setupGSAPAnimations();
      window.scrollTo(0, 0);
    }
  }

  handleMobileMenu(e) {
    const mobileMenuBtn = e.target.closest('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Handle mobile menu button click
    if (mobileMenuBtn) {
      e.preventDefault();
      e.stopPropagation();
      
      this.toggleMobileMenu();
      return;
    }
    
    // Close menu when clicking outside
    if (this.isMobileMenuOpen && mobileMenu) {
      if (!e.target.closest('.mobile-menu') && !e.target.closest('.mobile-menu-btn')) {
        this.closeMobileMenu();
      }
    }
  }

  toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenu && mobileMenuBtn) {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      mobileMenu.classList.toggle('hidden');
      this.toggleMenuIcon(mobileMenuBtn, !this.isMobileMenuOpen);
    }
  }

  closeMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenu && mobileMenuBtn) {
      this.isMobileMenuOpen = false;
      mobileMenu.classList.add('hidden');
      this.toggleMenuIcon(mobileMenuBtn, true);
    }
  }

  updateMobileMenuIcon() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
      this.toggleMenuIcon(mobileMenuBtn, !this.isMobileMenuOpen);
    }
  }

  toggleMenuIcon(menuBtn, isHidden) {
    const icon = menuBtn.querySelector('svg');
    if (icon) {
      if (isHidden) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
      } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
      }
    }
  }

  setupPageSpecificFunctions() {
    // Setup contact form if on contact page
    if (this.currentPage === 'contact') {
      console.log('Setting up contact form...');
      setTimeout(() => {
        if (typeof setupContactForm === 'function') {
          setupContactForm();
        } else {
          console.error('setupContactForm function not found');
        }
      }, 100);
    }
  }

  setupGSAPAnimations() {
    // Animate elements on scroll
    gsap.utils.toArray('.animate-on-scroll').forEach(element => {
      gsap.fromTo(element, 
        { 
          opacity: 0, 
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Stagger animations for feature cards
    gsap.utils.toArray('.feature-card').forEach((card, index) => {
      const delay = parseInt(card.dataset.delay || 0) / 1000;
      gsap.fromTo(card, 
        { 
          opacity: 0, 
          y: 30 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: delay,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Success stories animation
    gsap.utils.toArray('.success-story').forEach((story, index) => {
      const delay = parseInt(story.dataset.delay || 0) / 1000;
      gsap.fromTo(story, 
        { 
          opacity: 0, 
          x: -30 
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: delay,
          scrollTrigger: {
            trigger: story,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Learning steps animation
    gsap.utils.toArray('.learning-step').forEach((step, index) => {
      const delay = parseInt(step.dataset.delay || 0) / 1000;
      gsap.fromTo(step, 
        { 
          opacity: 0, 
          y: 40 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: delay,
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Floating animations
    gsap.to('.animate-float', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // Hover lift effect
    gsap.utils.toArray('.hover-lift').forEach(element => {
      element.addEventListener('mouseenter', () => {
        gsap.to(element, {
          y: -10,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  }
}

// Initialize app
new App();

// Test EmailJS initialization
setTimeout(() => {
  console.log('App initialized, checking EmailJS...');
  if (typeof emailjs !== 'undefined') {
    console.log('EmailJS is loaded successfully');
  } else {
    console.error('EmailJS is not loaded. Check your HTML script tag.');
  }
}, 1000);