export default function Home() {
  return `
    <main class="pt-20">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-primary via-blue-600 to-accent text-white py-28">
        <div class="container-custom px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="animate-on-scroll">
              <h1 class="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your 
                <span class="text-secondary"> Career </span>
                with IT Training
              </h1>
              <p class="text-xl mb-8 text-blue-100 leading-relaxed">
                Join India's leading IT training institute with 23+ years of excellence. 
                Get trained by industry experts and secure your dream job with 100% placement assistance.
              </p>
              <div class="flex flex-wrap gap-4">
                <a href="#" data-page="courses" class="btn btn-primary text-lg px-8 py-4">Explore 100+ Courses</a>
                <a href="#" data-page="placements" class="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">View Placements</a>
              </div>
              <div class="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <div class="text-3xl font-bold text-secondary">95%</div>
                  <div class="text-blue-200">Placement Rate</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-secondary">50K+</div>
                  <div class="text-blue-200">Students Placed</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-secondary">500+</div>
                  <div class="text-blue-200">Hiring Partners</div>
                </div>
              </div>
            </div>
            <div class="animate-on-scroll animate-float">
              <div class="bg-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/30">
                <div class="text-center">
                  <img 
                    src="/Screenshot 2025-11-01 120751.png" 
                    alt="Industry-Ready Training" 
                    class="w-full h-80 object-contain mx-auto mb-6"
                  >
                  <h3 class="text-2xl font-bold mb-4 text-white">Industry-Ready Training</h3>
                  <p class="text-blue-100">Hands-on projects • Live sessions • Career guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Ducat Section -->
      <section class="section-padding bg-white">
        <div class="container-custom px-6">
          <div class="text-center mb-16 animate-on-scroll">
            <h2 class="text-4xl font-bold text-primary mb-4">Why Choose Ducat?</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes Ducat the preferred choice for IT education and career transformation
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="feature-card animate-on-scroll" data-delay="0">
              <div class="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                <i class="fas fa-user-tie"></i>
              </div>
              <h3 class="text-xl font-bold text-primary mb-3 text-center">Expert Trainers</h3>
              <p class="text-gray-600 text-center">Learn from industry professionals with 10+ years of experience</p>
            </div>
            
            <div class="feature-card animate-on-scroll" data-delay="100">
              <div class="w-16 h-16 bg-gradient-to-r from-secondary to-orange-500 rounded-xl flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                <i class="fas fa-briefcase"></i>
              </div>
              <h3 class="text-xl font-bold text-primary mb-3 text-center">100% Placement</h3>
              <p class="text-gray-600 text-center">Guaranteed job assistance with 500+ hiring partners</p>
            </div>
            
            <div class="feature-card animate-on-scroll" data-delay="200">
              <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                <i class="fas fa-laptop-code"></i>
              </div>
              <h3 class="text-xl font-bold text-primary mb-3 text-center">Live Projects</h3>
              <p class="text-gray-600 text-center">Work on real-world projects and build your portfolio</p>
            </div>
            
            <div class="feature-card animate-on-scroll" data-delay="300">
              <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                <i class="fas fa-certificate"></i>
              </div>
              <h3 class="text-xl font-bold text-primary mb-3 text-center">Certification</h3>
              <p class="text-gray-600 text-center">Get industry-recognized certificates upon completion</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Success Stories Section -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="animate-on-scroll">
              <h2 class="text-4xl font-bold text-primary mb-6">Success Stories That Inspire</h2>
              <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                Join thousands of students who transformed their careers and achieved their dream jobs through Ducat's comprehensive training programs.
              </p>
              
              <div class="space-y-6">
                <div class="success-story animate-on-scroll" data-delay="0">
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">R</div>
                    <div>
                      <h4 class="font-bold text-lg text-gray-800">Rahul transformed from fresher to Amazon SDE</h4>
                      <p class="text-gray-600">"Ducat's Full Stack course gave me the confidence to crack Amazon interviews."</p>
                      <div class="flex items-center space-x-2 mt-2">
                        <span class="text-secondary font-bold">₹12 LPA</span>
                        <span class="text-gray-500">•</span>
                        <span class="text-primary font-semibold">Amazon</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="success-story animate-on-scroll" data-delay="100">
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">P</div>
                    <div>
                      <h4 class="font-bold text-lg text-gray-800">Priya's journey to Data Scientist at Microsoft</h4>
                      <p class="text-gray-600">"The Data Science program covered everything from basics to advanced ML concepts."</p>
                      <div class="flex items-center space-x-2 mt-2">
                        <span class="text-secondary font-bold">₹15 LPA</span>
                        <span class="text-gray-500">•</span>
                        <span class="text-primary font-semibold">Microsoft</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="mt-8">
                <a href="#" data-page="placements" class="btn btn-primary text-lg px-8 py-3">View More Success Stories</a>
              </div>
            </div>
            
            <div class="animate-on-scroll">
              <div class="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/Generated Image November 02, 2025 - 12_58AM (1).png" 
                  alt="Student Success" 
                  class="w-full h-80 object-contain mx-auto mb-6 rounded-2xl"
                >
                <h3 class="text-2xl font-bold mb-4">From Learning to Earning</h3>
                <p class="text-blue-100 text-lg">Join our community of successful professionals</p>
                <div class="mt-6 grid grid-cols-3 gap-4">
                  <div>
                    <div class="text-2xl font-bold text-secondary">2.5K+</div>
                    <div class="text-blue-200 text-sm">Placed in 2024</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-secondary">₹85L</div>
                    <div class="text-blue-200 text-sm">Highest Package</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-secondary">4.9/5</div>
                    <div class="text-blue-200 text-sm">Student Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Learning Path Section -->
      <section class="section-padding bg-white">
        <div class="container-custom px-6">
          <div class="text-center mb-16 animate-on-scroll">
            <h2 class="text-4xl font-bold text-primary mb-4">Your Learning Journey</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              From beginner to professional - our structured learning path ensures your success
            </p>
          </div>

          <div class="relative">
            <!-- Timeline -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-accent h-full hidden lg:block"></div>
            
            <div class="space-y-12 lg:space-y-0">
              <div class="learning-step animate-on-scroll" data-delay="0">
                <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                  <div class="text-center lg:text-right mb-8 lg:mb-0">
                    <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto lg:mx-0 lg:ml-auto shadow-lg">
                      1
                    </div>
                  </div>
                  <div class="lg:pl-12">
                    <h3 class="text-2xl font-bold text-primary mb-4">Foundation Building</h3>
                    <p class="text-gray-600 mb-4">Start with fundamentals and build strong programming basics</p>
                    <ul class="text-gray-600 space-y-2">
                      <li class="flex items-center space-x-2">
                        <i class="fas fa-check text-secondary"></i>
                        <span>Core programming concepts</span>
                      </li>
                      <li class="flex items-center space-x-2">
                        <i class="fas fa-check text-secondary"></i>
                        <span>Problem-solving skills</span>
                      </li>
                      <li class="flex items-center space-x-2">
                        <i class="fas fa-check text-secondary"></i>
                        <span>Basic project development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="learning-step animate-on-scroll" data-delay="200">
                <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                  <div class="lg:order-2 text-center mb-8 lg:mb-0">
                    <div class="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto lg:mx-0 lg:mr-auto shadow-lg">
                      2
                    </div>
                  </div>
                  <div class="lg:pr-12 lg:order-1">
                    <h3 class="text-2xl font-bold text-primary mb-4">Advanced Specialization</h3>
                    <p class="text-gray-600 mb-4">Dive deep into your chosen technology stack and domain</p>
                    <ul class="text-gray-600 space-y-2">
                      <li class="flex items-center space-x-2">
                        <i class="fas fa-check text-secondary"></i>
                        <span>Advanced frameworks & tools</span>
                      </li>
                      <li class="flex items-center space-x-2">
                        <i class="fas fa-check text-secondary"></i>
                        <span>Real-world projects</span>
                      </li>
                      <li class="flex items-center space-x-2">
                        <i class="fas fa-check text-secondary"></i>
                        <span>Industry best practices</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="learning-step animate-on-scroll" data-delay="400">
                <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                  <div class="text-center lg:text-right mb-8 lg:mb-0">
                    <div class="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto lg:mx-0 lg:ml-auto shadow-lg">
                      3
                    </div>
                  </div>
                  <div class="lg:pl-12">
                    <h3 class="text-2xl font-bold text-primary mb-4">Career Launch</h3>
                    <p class="text-gray-600 mb-4">Get job-ready with interview preparation and placement support</p>
                    <ul class="text-gray-600 space-y-2">
                      <li class="flex items-center space-x-2">
                        <i class="fas fa-check text-secondary"></i>
                        <span>Mock interviews & resume building</span>
                      </li>
                      <li class="flex items-center space-x-2">
                        <i class="fas fa-check text-secondary"></i>
                        <span>Company-specific preparation</span>
                      </li>
                      <li class="flex items-center space-x-2">
                        <i class="fas fa-check text-secondary"></i>
                        <span>Placement assistance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Courses -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom px-6">
          <div class="text-center mb-16 animate-on-scroll">
            <h2 class="text-4xl font-bold text-primary mb-4">Featured Courses</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from 100+ industry-designed courses and kickstart your IT career with guaranteed placements
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${getFeaturedCourses().map(course => `
              <div class="card p-6 animate-on-scroll hover-lift">
                <div class="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center text-white text-2xl mb-4">
                  <i class="${course.icon}"></i>
                </div>
                <h3 class="text-xl font-bold text-primary mb-3">${course.name}</h3>
                <p class="text-gray-600 mb-4">${course.description}</p>
                <div class="flex justify-between items-center mb-4">
                  <span class="text-secondary font-bold">${course.duration}</span>
                  <span class="text-primary font-semibold">${course.fee}</span>
                </div>
                <a href="#" data-page="courses" class="btn btn-primary w-full text-center">Enroll Now</a>
              </div>
            `).join('')}
          </div>

          <div class="text-center mt-12 animate-on-scroll">
            <a href="#" data-page="courses" class="btn btn-outline text-lg px-8 py-3">View All 100+ Courses</a>
          </div>
        </div>
      </section>

      <!-- Placement Partners -->
      <section class="section-padding bg-white">
        <div class="container-custom px-6">
          <div class="text-center mb-16 animate-on-scroll">
            <h2 class="text-4xl font-bold text-primary mb-4">Our Placement Partners</h2>
            <p class="text-xl text-gray-600">Join 500+ companies that trust Ducat for quality talent</p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 animate-on-scroll">
            ${getTopCompanies().map(company => `
              <div class="bg-gray-50 rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover-lift">
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary mb-2">${company.name}</div>
                  <div class="text-sm text-secondary font-semibold">${company.placements}+ Hired</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div class="container-custom px-6 text-center">
          <div class="max-w-4xl mx-auto animate-on-scroll">
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your IT Career?</h2>
            <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards your dream job. Join thousands of successful professionals who started their journey with Ducat.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <a href="#" data-page="courses" class="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">Browse Courses</a>
              <a href="#" data-page="contact" class="btn bg-secondary text-white hover:bg-orange-600 text-lg px-8 py-4">Get Free Consultation</a>
            </div>
            <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div class="text-2xl font-bold text-white">23+</div>
                <div class="text-blue-200">Years Experience</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-white">50K+</div>
                <div class="text-blue-200">Students Trained</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-white">500+</div>
                <div class="text-blue-200">Companies</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-white">95%</div>
                <div class="text-blue-200">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

function getFeaturedCourses() {
  return [
    {
      name: "Full Stack Development",
      description: "Master MERN stack, DevOps, and cloud deployment with real-world projects",
      duration: "6 Months",
      fee: "₹45,000",
      icon: "fas fa-code"
    },
    {
      name: "Data Science & AI",
      description: "Learn Python, ML, Deep Learning, and AI with industry projects",
      duration: "8 Months",
      fee: "₹55,000",
      icon: "fas fa-brain"
    },
    {
      name: "Cloud Computing",
      description: "AWS, Azure, GCP with DevOps and containerization technologies",
      duration: "7 Months",
      fee: "₹50,000",
      icon: "fas fa-cloud"
    }
  ];
}

function getTopCompanies() {
  return [
    { name: "TCS", placements: "1200" },
    { name: "Infosys", placements: "950" },
    { name: "Wipro", placements: "800" },
    { name: "Amazon", placements: "150" },
    { name: "Microsoft", placements: "120" },
    { name: "Google", placements: "80" }
  ];
}