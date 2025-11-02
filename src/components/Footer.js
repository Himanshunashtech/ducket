export default function Footer() {
  return `
    <footer class="bg-dark text-white pt-16 pb-8">
      <div class="container-custom px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 class="text-2xl font-bold text-secondary mb-4">DUCAT INDIA</h3>
            <p class="text-gray-300 mb-6 leading-relaxed">
              Transforming careers through quality IT education and guaranteed placements since 2001. 
              Join India's leading IT training institute.
            </p>
           <div class="flex space-x-4">
  <a href="https://www.facebook.com/login" target="_blank" class="social-icon w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
    <i class="fab fa-facebook-f"></i>
  </a>
  <a href="https://twitter.com/i/flow/login" target="_blank" class="social-icon w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
    <i class="fab fa-twitter"></i>
  </a>
  <a href="https://www.linkedin.com/login" target="_blank" class="social-icon w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
    <i class="fab fa-linkedin-in"></i>
  </a>
  <a href="https://www.instagram.com/accounts/login" target="_blank" class="social-icon w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
    <i class="fab fa-instagram"></i>
  </a>
  <a href="https://www.youtube.com/login" target="_blank" class="social-icon w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
    <i class="fab fa-youtube"></i>
  </a>
  <a href="https://github.com/login" target="_blank" class="social-icon w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
    <i class="fab fa-github"></i>
  </a>
</div>
          </div>

          <div>
            <h4 class="text-xl font-semibold text-secondary mb-6">Quick Links</h4>
            <ul class="space-y-3">
              <li><a href="#" data-page="courses" class="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"><i class="fas fa-chevron-right text-xs"></i><span>All Courses</span></a></li>
              <li><a href="#" data-page="placements" class="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"><i class="fas fa-chevron-right text-xs"></i><span>Placement Records</span></a></li>
              <li><a href="#" data-page="about" class="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"><i class="fas fa-chevron-right text-xs"></i><span>About Ducat</span></a></li>
              <li><a href="#" data-page="contact" class="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"><i class="fas fa-chevron-right text-xs"></i><span>Contact Us</span></a></li>
              <li><a href="#" data-page="blog" class="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"><i class="fas fa-chevron-right text-xs"></i><span>Blog & News</span></a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-xl font-semibold text-secondary mb-6">Popular Courses</h4>
            <ul class="space-y-3">
              <li><a href="#" data-page="fullstack-course" class="text-gray-300 hover:text-white transition-colors">Full Stack Development</a></li>
              <li><a href="#" data-page="data-science-course2" class="text-gray-300 hover:text-white transition-colors">Data Science & AI</a></li>
              <li><a href="#" data-page="cloud-computing-course" class="text-gray-300 hover:text-white transition-colors">Cloud Computing</a></li>
              <li><a href="#" data-page="cyber-security-course" class="text-gray-300 hover:text-white transition-colors">Cyber Security</a></li>
              <li><a href="#" data-page="digital-marketing-course" class="text-gray-300 hover:text-white transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-xl font-semibold text-secondary mb-6">Contact Info</h4>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <i class="fas fa-map-marker-alt text-secondary mt-1"></i>
                <div>
                  <p class="text-gray-300">Ducat India, Sector 142</p>
                  <p class="text-gray-300">Noida, Uttar Pradesh 201305</p>
                </div>
              </div>
              <div class="flex items-center space-x-3">
                <i class="fas fa-phone text-secondary"></i>
                <a href="tel:+919999999999" class="text-gray-300 hover:text-white">+91 99999 99999</a>
              </div>
              <div class="flex items-center space-x-3">
                <i class="fas fa-envelope text-secondary"></i>
                <a href="mailto:info@ducatindia.com" class="text-gray-300 hover:text-white">info@ducatindia.com</a>
              </div>
              <div class="flex items-center space-x-3">
                <i class="fas fa-clock text-secondary"></i>
                <p class="text-gray-300">Mon-Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-700 pt-8 text-center">
          <p class="text-gray-400">&copy; 2024 Ducat India. All rights reserved. | Made with ❤️ for aspiring IT professionals</p>
        </div>
      </div>
    </footer>
  `;
}