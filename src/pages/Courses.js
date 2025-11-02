import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function Courses() {
  return `
    <main class="pt-20">
      <!-- Hero Section with Image -->
      <section class="bg-gradient-to-r from-primary to-accent text-white py-16 md:py-20 relative overflow-hidden">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-on-scroll">100+ IT Courses</h1>
            <p class="text-lg md:text-xl mb-8 animate-on-scroll">
              Choose from our comprehensive catalog of IT courses designed by industry experts. 
              Get job-ready with hands-on training and guaranteed placements.
            </p>
          </div>
        </div>
        
        <!-- Animated Background Elements -->
        <div class="absolute top-10 right-10 w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div class="absolute bottom-10 left-10 w-16 h-16 md:w-24 md:h-24 bg-secondary/20 rounded-full animate-pulse delay-1000"></div>
      </section>

      <!-- Stats Section -->
      <section class="py-12 md:py-16 bg-white">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-on-scroll">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-primary mb-2 count-up" data-target="100">0</div>
              <div class="text-sm md:text-base text-gray-600">Courses</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-secondary mb-2 count-up" data-target="95">0</div>
              <div class="text-sm md:text-base text-gray-600">Placement Rate</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-accent mb-2 count-up" data-target="500">0</div>
              <div class="text-sm md:text-base text-gray-600">Hiring Partners</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-primary mb-2 count-up" data-target="50">0</div>
              <div class="text-sm md:text-base text-gray-600">Expert Trainers</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Courses with Images -->
      <section class="py-12 md:py-16 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="text-center mb-12 md:mb-16 animate-on-scroll">
            <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Courses</h2>
            <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Hand-picked courses with highest placement records and student satisfaction
            </p>
          </div>

          <!-- Featured Courses Grid - 1 column on mobile, 2 columns on desktop -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 px-10 md:gap-8 mb-12 md:mb-16">
            <!-- Featured Course 1 -->
            <div class="featured-course-card animate-on-scroll">
              <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl md:rounded-2xl p-4 md:p-6 text-white relative overflow-hidden hover-lift w-full h-full">
                <div class="absolute top-3 right-3 md:top-4 md:right-4 bg-white/20 rounded-full px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm">Most Popular</div>
                <div class="flex flex-col h-full">
                  <div class="flex-1">
                    <h3 class="text-xl md:text-2xl font-bold mb-3">Full Stack Development</h3>
                    <p class="text-blue-100 text-sm md:text-base mb-4">Master MERN stack, DevOps, and build real-world applications with hands-on projects and industry mentorship.</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span class="bg-white/20 rounded-full px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm">6 Months</span>
                      <span class="bg-white/20 rounded-full px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm">₹45,000</span>
                      <span class="bg-green-500 rounded-full px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm">97% Placement</span>
                    </div>
                    <div class="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div class="flex items-center space-x-2">
                        <i class="fas fa-check text-green-300 text-sm"></i>
                        <span class="text-blue-100 text-sm md:text-base">MERN Stack Mastery</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <i class="fas fa-check text-green-300 text-sm"></i>
                        <span class="text-blue-100 text-sm md:text-base">Real-time Projects</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <i class="fas fa-check text-green-300 text-sm"></i>
                        <span class="text-blue-100 text-sm md:text-base">DevOps & Deployment</span>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-6">
                    <img 
                      src="/Generated Image November 02, 2025 - 1_27AM.png" 
                      alt="Full Stack Development"
                      class="w-full h-32 md:h-40 object-contain rounded-lg shadow-lg mb-4"
                    >
                    <div class="flex flex-col sm:flex-row gap-3">
                      <a href="#" data-page="contact" class="btn bg-white text-blue-600 hover:bg-gray-100 inline-flex items-center justify-center space-x-2 px-3 py-2 md:px-4 md:py-3 rounded-lg transition-colors duration-300 border border-white text-sm md:text-base">
                        <span>Enroll Now</span>
                        <i class="fas fa-arrow-right text-xs"></i>
                      </a>
                      <a href="#" data-page="fullstack-course" class="btn bg-transparent text-white hover:bg-white/20 inline-flex items-center justify-center space-x-2 px-3 py-2 md:px-4 md:py-3 rounded-lg transition-colors duration-300 border border-white text-sm md:text-base">
                        <span>View Course</span>
                        <i class="fas fa-arrow-right text-xs"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Featured Course 2 -->
            <div class="featured-course-card animate-on-scroll">
              <div class="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl md:rounded-2xl p-4 md:p-6 text-white relative overflow-hidden hover-lift w-full h-full">
                <div class="absolute top-3 right-3 md:top-4 md:right-4 bg-white/20 rounded-full px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm">Trending</div>
                <div class="flex flex-col h-full">
                  <div class="flex-1">
                    <h3 class="text-xl md:text-2xl font-bold mb-3">Data Science & AI</h3>
                    <p class="text-green-100 text-sm md:text-base mb-4">Learn Python, Machine Learning, and AI with industry projects and real-world datasets.</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span class="bg-white/20 rounded-full px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm">8 Months</span>
                      <span class="bg-white/20 rounded-full px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm">₹55,000</span>
                      <span class="bg-green-500 rounded-full px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm">95% Placement</span>
                    </div>
                    <div class="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div class="flex items-center space-x-2">
                        <i class="fas fa-check text-green-300 text-sm"></i>
                        <span class="text-green-100 text-sm md:text-base">Python & ML Algorithms</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <i class="fas fa-check text-green-300 text-sm"></i>
                        <span class="text-green-100 text-sm md:text-base">Deep Learning & AI</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <i class="fas fa-check text-green-300 text-sm"></i>
                        <span class="text-green-100 text-sm md:text-base">Industry Projects</span>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-6">
                    <img 
                      src="/Generated Image November 02, 2025 - 1_27AM (1).png" 
                      alt="Data Science & AI"
                      class="w-full h-32 md:h-40 object-contain rounded-lg shadow-lg mb-4"
                    >
                    <div class="flex flex-col sm:flex-row gap-3">
                      <a href="#" data-page="contact" class="btn bg-white text-green-600 hover:bg-gray-100 inline-flex items-center justify-center space-x-2 px-3 py-2 md:px-4 md:py-3 rounded-lg transition-colors duration-300 border border-white text-sm md:text-base">
                        <span>Enroll Now</span>
                        <i class="fas fa-arrow-right text-xs"></i>
                      </a>
                      <a href="#" data-page="data-science-course2" class="btn bg-transparent text-white hover:bg-white/20 inline-flex items-center justify-center space-x-2 px-3 py-2 md:px-4 md:py-3 rounded-lg transition-colors duration-300 border border-white text-sm md:text-base">
                        <span>View Course</span>
                        <i class="fas fa-arrow-right text-xs"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Featured Courses - 1 column on mobile, 3 columns on desktop -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <!-- Cloud Computing -->
            <div class="featured-course-small animate-on-scroll">
              <div class="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl md:rounded-2xl p-4 md:p-6 text-white hover-lift h-full">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center text-white text-lg md:text-xl mb-3 md:mb-4">
                  <i class="fas fa-cloud"></i>
                </div>
                <h3 class="text-lg md:text-xl font-bold mb-2 md:mb-3">Cloud Computing</h3>
                <p class="text-orange-100 text-xs md:text-sm mb-3 md:mb-4">AWS, Azure, GCP with DevOps and containerization</p>
                <div class="flex justify-between items-center mb-3 md:mb-4">
                  <span class="text-xs md:text-sm">7 Months</span>
                  <span class="font-bold text-sm md:text-base">₹50,000</span>
                </div>
                <a href="#" data-page="cloud-computing-course" class="btn bg-white text-orange-600 hover:bg-gray-100 w-full text-center text-xs md:text-sm py-2 md:py-3">
                  Explore Course
                </a>
              </div>
            </div>

            <!-- Cyber Security -->
            <div class="featured-course-small animate-on-scroll">
              <div class="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl md:rounded-2xl p-4 md:p-6 text-white hover-lift h-full">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center text-white text-lg md:text-xl mb-3 md:mb-4">
                  <i class="fas fa-shield-alt"></i>
                </div>
                <h3 class="text-lg md:text-xl font-bold mb-2 md:mb-3">Cyber Security</h3>
                <p class="text-purple-100 text-xs md:text-sm mb-3 md:mb-4">Ethical hacking, network security, and threat protection</p>
                <div class="flex justify-between items-center mb-3 md:mb-4">
                  <span class="text-xs md:text-sm">6 Months</span>
                  <span class="font-bold text-sm md:text-base">₹48,000</span>
                </div>
                <a href="#" data-page="cyber-security-course" class="btn bg-white text-purple-600 hover:bg-gray-100 w-full text-center text-xs md:text-sm py-2 md:py-3">
                  Explore Course
                </a>
              </div>
            </div>

            <!-- Digital Marketing -->
            <div class="featured-course-small animate-on-scroll">
              <div class="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl md:rounded-2xl p-4 md:p-6 text-white hover-lift h-full">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center text-white text-lg md:text-xl mb-3 md:mb-4">
                  <i class="fas fa-bullhorn"></i>
                </div>
                <h3 class="text-lg md:text-xl font-bold mb-2 md:mb-3">Digital Marketing</h3>
                <p class="text-pink-100 text-xs md:text-sm mb-3 md:mb-4">SEO, Social Media, PPC, and marketing analytics</p>
                <div class="flex justify-between items-center mb-3 md:mb-4">
                  <span class="text-xs md:text-sm">4 Months</span>
                  <span class="font-bold text-sm md:text-base">₹35,000</span>
                </div>
                <a href="#" data-page="digital-marketing-course" class="btn bg-white text-pink-600 hover:bg-gray-100 w-full text-center text-xs md:text-sm py-2 md:py-3">
                  Explore Course
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Course Categories -->
      <section class="py-12 md:py-16 bg-white">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="text-center mb-12 md:mb-16 animate-on-scroll">
            <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">Browse by Category</h2>
            <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive course categories and find the perfect path for your career
            </p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            ${getCourseCategories().map((category, index) => `
              <div class="category-card animate-on-scroll" data-delay="${index * 100}">
                <div 
                  class="text-center p-3 md:p-4 bg-gray-50 rounded-xl hover:shadow-xl transition-all cursor-pointer group hover-lift h-full"
                  data-page="${category.name.toLowerCase().replace(/\s+/g, '-')}-course"
                >
                  <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-base md:text-lg mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                    <i class="${category.icon}"></i>
                  </div>
                  <h3 class="font-semibold text-gray-800 text-xs md:text-sm group-hover:text-primary transition-colors">${category.name}</h3>
                  <p class="text-xs text-gray-600 mt-1 group-hover:text-secondary transition-colors">${category.count} Courses</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Learning Benefits -->
      <section class="py-12 md:py-16 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <div class="animate-on-scroll">
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">Why Learn With Ducat?</h2>
              <div class="space-y-4 md:space-y-6">
                <div class="flex items-start space-x-3 md:space-x-4">
                  <div class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <i class="fas fa-laptop-code text-xs md:text-sm"></i>
                  </div>
                  <div>
                    <h3 class="text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-1 md:mb-2">Industry-Ready Curriculum</h3>
                    <p class="text-gray-600 text-sm md:text-base">Learn the latest technologies and tools used by top companies.</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3 md:space-x-4">
                  <div class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-secondary rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <i class="fas fa-briefcase text-xs md:text-sm"></i>
                  </div>
                  <div>
                    <h3 class="text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-1 md:mb-2">100% Placement Assistance</h3>
                    <p class="text-gray-600 text-sm md:text-base">Get placed in top companies with our dedicated placement cell.</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3 md:space-x-4">
                  <div class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-accent rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <i class="fas fa-chalkboard-teacher text-xs md:text-sm"></i>
                  </div>
                  <div>
                    <h3 class="text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-1 md:mb-2">Expert Mentors</h3>
                    <p class="text-gray-600 text-sm md:text-base">Learn from industry professionals with 10+ years of experience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="animate-on-scroll">
              <div class="bg-gradient-to-br from-primary to-accent rounded-xl md:rounded-2xl p-4 md:p-6 text-white text-center">
                <h3 class="text-lg md:text-xl font-bold mb-3 md:mb-4">Start Your IT Career Today</h3>
                <p class="text-blue-100 text-sm md:text-base mb-4 md:mb-6">Join 50,000+ students who transformed their careers with Ducat</p>
                <div class="grid grid-cols-3 gap-2 md:gap-3 mb-4 md:mb-6">
                  <div>
                    <div class="text-lg md:text-xl font-bold text-secondary">95%</div>
                    <div class="text-blue-200 text-xs">Placement Rate</div>
                  </div>
                  <div>
                    <div class="text-lg md:text-xl font-bold text-secondary">500+</div>
                    <div class="text-blue-200 text-xs">Companies</div>
                  </div>
                  <div>
                    <div class="text-lg md:text-xl font-bold text-secondary">₹85L</div>
                    <div class="text-blue-200 text-xs">Highest Package</div>
                  </div>
                </div>
                <a href="#" data-page="contact" class="btn bg-white text-primary hover:bg-gray-100 w-full text-xs md:text-sm py-2 md:py-3">
                  Get Free Career Guidance
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-12 md:py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div class="container mx-auto px-4 sm:px-6 text-center">
          <div class="max-w-4xl mx-auto animate-on-scroll">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Transform Your Career?</h2>
            <p class="text-base md:text-lg text-blue-100 mb-6 md:mb-8">
              Take the first step towards your dream IT job. Our career counselors are here to help you choose the right course.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              <a href="#" data-page="contact" class="btn bg-white text-primary hover:bg-gray-100 text-sm md:text-base px-4 md:px-6 py-2 md:py-3">Get Free Consultation</a>
              <a href="tel:+919999999999" class="btn bg-secondary text-white hover:bg-orange-600 text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
                <i class="fas fa-phone mr-1 md:mr-2"></i>
                Call Now
              </a>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center">
              <div>
                <div class="text-lg md:text-xl font-bold text-white">23+</div>
                <div class="text-blue-200 text-xs">Years Experience</div>
              </div>
              <div>
                <div class="text-lg md:text-xl font-bold text-white">50K+</div>
                <div class="text-blue-200 text-xs">Students Trained</div>
              </div>
              <div>
                <div class="text-lg md:text-xl font-bold text-white">500+</div>
                <div class="text-blue-200 text-xs">Companies</div>
              </div>
              <div>
                <div class="text-lg md:text-xl font-bold text-white">95%</div>
                <div class="text-blue-200 text-xs">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

function getCourseCategories() {
  return [
    { name: 'Programming', icon: 'fas fa-code', count: 25 },
    { name: 'Data Science', icon: 'fas fa-chart-line', count: 18 },
    { name: 'Cloud Computing', icon: 'fas fa-cloud', count: 15 },
    { name: 'Cyber Security', icon: 'fas fa-shield-alt', count: 12 },
    { name: 'Digital Marketing', icon: 'fas fa-bullhorn', count: 10 },
    { name: 'Mobile Development', icon: 'fas fa-mobile-alt', count: 8 },
    { name: 'Web Development', icon: 'fas fa-globe', count: 20 },
    { name: 'Database', icon: 'fas fa-database', count: 6 },
    { name: 'DevOps', icon: 'fas fa-cogs', count: 9 },
    { name: 'AI/ML', icon: 'fas fa-brain', count: 14 },
    { name: 'Blockchain', icon: 'fas fa-link', count: 7 },
    { name: 'IoT', icon: 'fas fa-wifi', count: 5 }
  ];
}