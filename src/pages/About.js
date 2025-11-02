export default function About() {
  return `
    <main class="pt-20">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-primary to-accent text-white py-20 relative overflow-hidden">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="container-custom px-6 text-center relative z-10">
          <h1 class="text-5xl lg:text-6xl font-bold mb-6 animate-on-scroll">About Ducat India</h1>
          <p class="text-xl mb-8 max-w-3xl mx-auto animate-on-scroll">
            Pioneering IT education since 2001. Transforming careers through quality training and 100% placement assistance.
          </p>
          <div class="animate-on-scroll">
            <a href="#" data-page="courses" class="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
              Explore Our Courses
            </a>
          </div>
        </div>
        
        <!-- Animated Background Elements -->
        <div class="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div class="absolute bottom-10 left-10 w-24 h-24 bg-secondary/20 rounded-full animate-pulse delay-1000"></div>
      </section>

      <!-- About Content -->
      <section class="section-padding bg-white">
        <div class="container-custom px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div class="animate-on-scroll">
              <h2 class="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <p class="text-gray-700 text-lg mb-6 leading-relaxed">
                Founded in 2001, Ducat India has been at the forefront of IT education, 
                bridging the gap between academia and industry requirements. With over two decades 
                of excellence, we have successfully trained and placed more than 50,000 students 
                in top IT companies.
              </p>
              <p class="text-gray-700 text-lg mb-6 leading-relaxed">
                Our mission is to empower individuals with industry-relevant skills and transform 
                them into job-ready professionals. We believe in practical, hands-on learning 
                that prepares students for real-world challenges.
              </p>
              <div class="grid grid-cols-2 gap-6 mt-8">
                <div class="text-center">
                  <div class="text-3xl font-bold text-secondary mb-2 count-up" data-target="23">0</div>
                  <div class="text-gray-600">Years of Excellence</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-secondary mb-2 count-up" data-target="50">0</div>
                  <div class="text-gray-600">Students Trained (K+)</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-secondary mb-2 count-up" data-target="500">0</div>
                  <div class="text-gray-600">Hiring Partners</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-secondary mb-2 count-up" data-target="95">0</div>
                  <div class="text-gray-600">Placement Rate</div>
                </div>
              </div>
            </div>
            <div class="animate-on-scroll">
              <div class="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white text-center hover-lift">
                <img 
                  src="/Screenshot 2025-11-01 120751.png" 
                  alt="Ducat Campus"
                  class="w-full h-48 object-cover rounded-lg mb-6"
                >
                <h3 class="text-2xl font-bold mb-4">Why Choose Ducat?</h3>
                <ul class="text-left space-y-3 text-blue-100">
                  <li class="flex items-center space-x-3">
                    <i class="fas fa-check text-secondary"></i>
                    <span>Industry Expert Trainers</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <i class="fas fa-check text-secondary"></i>
                    <span>100% Placement Assistance</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <i class="fas fa-check text-secondary"></i>
                    <span>Hands-on Project Experience</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <i class="fas fa-check text-secondary"></i>
                    <span>Latest Curriculum</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <i class="fas fa-check text-secondary"></i>
                    <span>Flexible Batch Timings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Journey Timeline -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom px-6">
          <div class="text-center mb-16 animate-on-scroll">
            <h2 class="text-4xl font-bold text-primary mb-4">Our Journey</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Two decades of excellence in IT education and career transformation
            </p>
          </div>

          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-accent h-full hidden lg:block"></div>
            
            <div class="space-y-12 lg:space-y-0">
              <div class="journey-step animate-on-scroll" data-delay="0">
                <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                  <div class="text-center lg:text-right mb-8 lg:mb-0">
                    <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto lg:mx-0 lg:ml-auto shadow-lg">
                      2001
                    </div>
                  </div>
                  <div class="lg:pl-12">
                    <h3 class="text-2xl font-bold text-primary mb-4">Foundation</h3>
                    <p class="text-gray-600 mb-4">Ducat India was founded with a vision to bridge the IT skills gap and provide quality education.</p>
                    <div class="bg-white rounded-lg p-4 border-l-4 border-primary">
                      <p class="text-gray-700">First batch of 50 students trained in programming fundamentals</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="journey-step animate-on-scroll" data-delay="200">
                <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                  <div class="lg:order-2 text-center mb-8 lg:mb-0">
                    <div class="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto lg:mx-0 lg:mr-auto shadow-lg">
                      2010
                    </div>
                  </div>
                  <div class="lg:pr-12 lg:order-1">
                    <h3 class="text-2xl font-bold text-primary mb-4">Expansion</h3>
                    <p class="text-gray-600 mb-4">Expanded to multiple cities with state-of-the-art infrastructure and advanced courses.</p>
                    <div class="bg-white rounded-lg p-4 border-l-4 border-secondary">
                      <p class="text-gray-700">Launched specialized courses in emerging technologies</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="journey-step animate-on-scroll" data-delay="400">
                <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                  <div class="text-center lg:text-right mb-8 lg:mb-0">
                    <div class="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto lg:mx-0 lg:ml-auto shadow-lg">
                      2020
                    </div>
                  </div>
                  <div class="lg:pl-12">
                    <h3 class="text-2xl font-bold text-primary mb-4">Digital Transformation</h3>
                    <p class="text-gray-600 mb-4">Pioneered online learning with live interactive classes and virtual labs.</p>
                    <div class="bg-white rounded-lg p-4 border-l-4 border-accent">
                      <p class="text-gray-700">Successfully transitioned to hybrid learning model</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="journey-step animate-on-scroll" data-delay="600">
                <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                  <div class="lg:order-2 text-center mb-8 lg:mb-0">
                    <div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto lg:mx-0 lg:mr-auto shadow-lg">
                      2024
                    </div>
                  </div>
                  <div class="lg:pr-12 lg:order-1">
                    <h3 class="text-2xl font-bold text-primary mb-4">Excellence</h3>
                    <p class="text-gray-600 mb-4">Recognized as a leading IT training institute with 50,000+ successful placements.</p>
                    <div class="bg-white rounded-lg p-4 border-l-4 border-green-500">
                      <p class="text-gray-700">Awarded "Best IT Training Institute" by Times Education</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Vision & Mission -->
      <section class="section-padding bg-white">
        <div class="container-custom px-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div class="card p-8 animate-on-scroll hover-lift">
              <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mb-6">
                <i class="fas fa-eye"></i>
              </div>
              <h3 class="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p class="text-gray-700 leading-relaxed mb-6">
                To be the leading IT training institute that transforms aspiring individuals 
                into skilled professionals, driving innovation and excellence in the technology 
                industry worldwide.
              </p>
              <div class="space-y-3">
                <div class="flex items-center space-x-3 text-gray-600">
                  <i class="fas fa-rocket text-secondary"></i>
                  <span>Global technology leadership</span>
                </div>
                <div class="flex items-center space-x-3 text-gray-600">
                  <i class="fas fa-graduation-cap text-secondary"></i>
                  <span>Excellence in education</span>
                </div>
                <div class="flex items-center space-x-3 text-gray-600">
                  <i class="fas fa-users text-secondary"></i>
                  <span>Community empowerment</span>
                </div>
              </div>
            </div>
            <div class="card p-8 animate-on-scroll hover-lift">
              <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl mb-6">
                <i class="fas fa-bullseye"></i>
              </div>
              <h3 class="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p class="text-gray-700 leading-relaxed mb-6">
                To provide industry-relevant IT education through expert-led training, 
                hands-on projects, and comprehensive placement support, enabling students 
                to build successful careers in technology.
              </p>
              <div class="space-y-3">
                <div class="flex items-center space-x-3 text-gray-600">
                  <i class="fas fa-laptop-code text-primary"></i>
                  <span>Industry-relevant curriculum</span>
                </div>
                <div class="flex items-center space-x-3 text-gray-600">
                  <i class="fas fa-briefcase text-primary"></i>
                  <span>100% placement assistance</span>
                </div>
                <div class="flex items-center space-x-3 text-gray-600">
                  <i class="fas fa-hands-helping text-primary"></i>
                  <span>Lifelong career support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Infrastructure Section -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom px-6">
          <div class="text-center mb-16 animate-on-scroll">
            <h2 class="text-4xl font-bold text-primary mb-4">Our Infrastructure</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities designed for optimal learning experience
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="animate-on-scroll">
              <img 
                src="/Generated Image November 02, 2025 - 2_04AM.png" 
                alt="Ducat Infrastructure"
                class="w-full h-96 object-cover rounded-2xl shadow-lg"
              >
            </div>
            <div class="animate-on-scroll">
              <h3 class="text-3xl font-bold text-primary mb-6">Modern Learning Environment</h3>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <i class="fas fa-desktop"></i>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-gray-800 mb-2">Advanced Computer Labs</h4>
                    <p class="text-gray-600">Fully equipped labs with latest hardware and software for hands-on practice.</p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <i class="fas fa-wifi"></i>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-gray-800 mb-2">High-Speed Internet</h4>
                    <p class="text-gray-600">Dedicated high-speed internet connectivity for seamless online learning.</p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <i class="fas fa-book"></i>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-gray-800 mb-2">Digital Library</h4>
                    <p class="text-gray-600">Access to extensive digital resources and learning materials.</p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <i class="fas fa-video"></i>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-gray-800 mb-2">Live Sessions</h4>
                    <p class="text-gray-600">Interactive live classes with industry expert trainers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="section-padding bg-white">
        <div class="container-custom px-6">
          <div class="text-center mb-16 animate-on-scroll">
            <h2 class="text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Ducat
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="value-card animate-on-scroll" data-delay="0">
              <div class="text-center">
                <div class="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <i class="fas fa-gem"></i>
                </div>
                <h3 class="text-xl font-bold text-primary mb-3">Excellence</h3>
                <p class="text-gray-600">Committed to delivering the highest quality education and training standards.</p>
              </div>
            </div>
            <div class="value-card animate-on-scroll" data-delay="100">
              <div class="text-center">
                <div class="w-16 h-16 bg-gradient-to-br from-secondary to-orange-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <i class="fas fa-users"></i>
                </div>
                <h3 class="text-xl font-bold text-primary mb-3">Integrity</h3>
                <p class="text-gray-600">Building trust through transparency, honesty, and ethical practices.</p>
              </div>
            </div>
            <div class="value-card animate-on-scroll" data-delay="200">
              <div class="text-center">
                <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <i class="fas fa-lightbulb"></i>
                </div>
                <h3 class="text-xl font-bold text-primary mb-3">Innovation</h3>
                <p class="text-gray-600">Continuously evolving our methods to stay ahead in technology education.</p>
              </div>
            </div>
            <div class="value-card animate-on-scroll" data-delay="300">
              <div class="text-center">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <i class="fas fa-heart"></i>
                </div>
                <h3 class="text-xl font-bold text-primary mb-3">Care</h3>
                <p class="text-gray-600">Genuine concern for student success and career growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Leadership Team -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom px-6">
          <div class="text-center mb-16 animate-on-scroll">
            <h2 class="text-4xl font-bold text-primary mb-4">Leadership Team</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders driving Ducat's mission forward
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${getLeadershipTeam().map((member, index) => `
              <div class="leadership-card animate-on-scroll" data-delay="${index * 100}">
                <div class="text-center card p-6 hover-lift">
                  <div class="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    ${member.name.charAt(0)}
                  </div>
                  <h3 class="text-xl font-bold text-primary mb-2">${member.name}</h3>
                  <p class="text-secondary font-semibold mb-3">${member.position}</p>
                  <p class="text-gray-600 text-sm mb-4">${member.bio}</p>
                  <div class="flex justify-center space-x-3">
                    <span class="bg-blue-100 text-primary text-xs px-2 py-1 rounded">${member.experience}</span>
                    <span class="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">${member.expertise}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Campus Tour Section -->
      <section class="section-padding bg-white">
        <div class="container-custom px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="animate-on-scroll">
              <h2 class="text-4xl font-bold text-primary mb-6">Experience Our Campus</h2>
              <p class="text-gray-700 text-lg mb-6 leading-relaxed">
                Visit our state-of-the-art campus in Sector 142, Noida, and experience the 
                perfect learning environment designed for your success.
              </p>
              <div class="space-y-4 mb-8">
                <div class="flex items-center space-x-3">
                  <i class="fas fa-map-marker-alt text-secondary text-xl"></i>
                  <span class="text-gray-700">Sector 142, Noida - Modern infrastructure</span>
                </div>
                <div class="flex items-center space-x-3">
                  <i class="fas fa-clock text-secondary text-xl"></i>
                  <span class="text-gray-700">Flexible batch timings including weekends</span>
                </div>
                <div class="flex items-center space-x-3">
                  <i class="fas fa-laptop text-secondary text-xl"></i>
                  <span class="text-gray-700">Latest technology labs and equipment</span>
                </div>
                <div class="flex items-center space-x-3">
                  <i class="fas fa-users text-secondary text-xl"></i>
                  <span class="text-gray-700">Vibrant student community</span>
                </div>
              </div>
              <a href="#" data-page="contact" class="btn btn-primary text-lg px-8 py-3">
                <i class="fas fa-calendar mr-2"></i>
                Schedule Campus Visit
              </a>
            </div>
            <div class="animate-on-scroll">
              <img 
                src="/Generated Image November 02, 2025 - 2_06AM.png" 
                alt="Ducat Campus Tour"
                class="w-full h-96 object-cover rounded-2xl shadow-lg"
              >
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div class="container-custom px-6 text-center">
          <div class="max-w-4xl mx-auto animate-on-scroll">
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p class="text-xl text-blue-100 mb-8">
              Join thousands of successful professionals who transformed their careers with Ducat. 
              Let us help you achieve your dreams in the IT industry.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <a href="#" data-page="courses" class="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                Explore Courses
              </a>
              <a href="#" data-page="contact" class="btn bg-secondary text-white hover:bg-orange-600 text-lg px-8 py-4">
                <i class="fas fa-phone mr-2"></i>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

function getLeadershipTeam() {
  return [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      bio: "25+ years in IT education and corporate training. Passionate about bridging the skill gap.",
      experience: "25+ Years",
      expertise: "IT Education"
    },
    {
      name: "Priya Sharma",
      position: "Director - Academics",
      bio: "Expert in curriculum development with 15+ years experience in IT education.",
      experience: "15+ Years",
      expertise: "Curriculum Design"
    },
    {
      name: "Amit Singh",
      position: "Head - Placements",
      bio: "Successfully placed 10,000+ students in top IT companies over the last decade.",
      experience: "12+ Years",
      expertise: "Placements"
    }
  ];
}