import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function Placements() {
  const placementData = generatePlacementData();
  
  return `
    <main class="pt-20">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-primary to-accent text-white py-20 relative overflow-hidden">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="container-custom px-6 text-center relative z-10">
          <h1 class="text-5xl lg:text-6xl font-bold mb-6 animate-on-scroll">Placement Records</h1>
          <p class="text-xl mb-8 max-w-3xl mx-auto animate-on-scroll">
            Join 50,000+ students who transformed their careers with Ducat. 
            Get placed in top companies with our 100% placement assistance.
          </p>
          <div class="animate-on-scroll">
            <a href="#" data-page="contact" class="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
              Get Placement Assistance
            </a>
          </div>
        </div>
        
        <!-- Animated Background Elements -->
        <div class="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div class="absolute bottom-10 left-10 w-24 h-24 bg-secondary/20 rounded-full animate-pulse delay-1000"></div>
      </section>

      <!-- Statistics -->
      <section class="section-padding bg-white">
        <div class="container-custom px-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div class="text-center animate-on-scroll">
              <div class="text-5xl font-bold text-secondary mb-2 count-up" data-target="95">0</div>
              <div class="text-gray-600 font-semibold">Placement Rate</div>
            </div>
            <div class="text-center animate-on-scroll">
              <div class="text-5xl font-bold text-secondary mb-2 count-up" data-target="50">0</div>
              <div class="text-gray-600 font-semibold">Students Placed (K+)</div>
            </div>
            <div class="text-center animate-on-scroll">
              <div class="text-5xl font-bold text-secondary mb-2 count-up" data-target="500">0</div>
              <div class="text-gray-600 font-semibold">Companies</div>
            </div>
            <div class="text-center animate-on-scroll">
              <div class="text-5xl font-bold text-secondary mb-2 count-up" data-target="85">0</div>
              <div class="text-gray-600 font-semibold">Highest Package (LPA)</div>
            </div>
          </div>

          <!-- Marquee Banner -->
          <div class="bg-gradient-to-r from-secondary to-orange-500 rounded-2xl p-6 mb-16 animate-on-scroll">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary text-xl font-bold">
                  <i class="fas fa-trophy"></i>
                </div>
                <div>
                  <h3 class="text-white font-bold text-lg">Top Placement Institute 2024</h3>
                  <p class="text-orange-100">Awarded by Times Education</p>
                </div>
              </div>
              <div class="hidden md:block">
                <span class="text-white bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                  🏆 Excellence in IT Education
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Company Logos Marquee -->
      <section class="py-12 bg-gray-50 overflow-hidden">
        <div class="animate-on-scroll">
          <h3 class="text-center text-gray-600 font-semibold mb-8">Trusted by 500+ Companies</h3>
          <div class="company-marquee">
            <div class="marquee-content">
              ${getCompanyLogos().map(company => `
                <div class="company-logo-item">
                  <div class="h-12 flex items-center justify-center text-2xl font-bold text-primary bg-gray-100 rounded-lg px-4 min-w-[120px]">
                    ${company.name}
                  </div>
                </div>
              `).join('')}
              ${getCompanyLogos().map(company => `
                <div class="company-logo-item">
                  <div class="h-12 flex items-center justify-center text-2xl font-bold text-primary bg-gray-100 rounded-lg px-4 min-w-[120px]">
                    ${company.name}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- Placement Stories -->
      <section class="section-padding bg-white">
        <div class="container-custom px-6">
          <div class="text-center mb-16 animate-on-scroll">
            <h2 class="text-4xl font-bold text-primary mb-4">Success Stories</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from our students who transformed their careers with Ducat
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            ${placementData.stories.map((story, index) => `
              <div class="success-card animate-on-scroll" data-delay="${index * 100}">
                <div class="card p-6 hover-lift group relative overflow-hidden">
                  <div class="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Placed
                  </div>
                  
                  <div class="flex items-center mb-4">
                    <div class="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-xl font-bold mr-4 group-hover:scale-110 transition-transform">
                      ${story.name.charAt(0)}
                    </div>
                    <div>
                      <h3 class="font-bold text-lg text-primary group-hover:text-secondary transition-colors">${story.name}</h3>
                      <p class="text-gray-600">${story.course}</p>
                    </div>
                  </div>
                  
                  <div class="mb-4">
                    <div class="flex justify-between items-center mb-2">
                      <span class="font-semibold text-gray-800">${story.company}</span>
                      <span class="text-secondary font-bold text-lg">${story.package}</span>
                    </div>
                    <div class="text-sm text-gray-500">Placed in ${story.year}</div>
                  </div>
                  
                  <p class="text-gray-700 text-sm italic border-l-4 border-secondary pl-4 py-2">"${story.testimonial}"</p>
                  
                  <div class="mt-4 pt-4 border-t border-gray-100">
                    <div class="flex space-x-1 text-yellow-400">
                      ${Array.from({length: 5}, (_, i) => `
                        <i class="fas fa-star text-yellow-400"></i>
                      `).join('')}
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Top Recruiters Section -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom px-6">
          <div class="text-center mb-16 animate-on-scroll">
            <h2 class="text-4xl font-bold text-primary mb-4">Our Top Recruiters</h2>
            <p class="text-xl text-gray-600">Leading companies that regularly hire from Ducat</p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            ${getTopRecruiters().map((company, index) => `
              <div class="recruiter-card animate-on-scroll" data-delay="${index * 100}">
                <div class="bg-white rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover-lift border border-gray-100">
                  <div class="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    ${company.name.charAt(0)}
                  </div>
                  <h3 class="font-bold text-gray-800 mb-2">${company.name}</h3>
                  <div class="text-secondary font-semibold">${company.hires}+ Hired</div>
                  <div class="text-xs text-gray-500 mt-2">${company.type}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Placement Process -->
      <section class="section-padding bg-white">
        <div class="container-custom px-6">
          <div class="text-center mb-16 animate-on-scroll">
            <h2 class="text-4xl font-bold text-primary mb-4">Our Placement Process</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured 4-step process that ensures every student gets placed in their dream company
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            ${getPlacementProcess().map((step, index) => `
              <div class="process-step animate-on-scroll" data-delay="${index * 100}">
                <div class="text-center group">
                  <div class="w-20 h-20 ${step.gradient} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    ${step.number}
                  </div>
                  <h3 class="font-bold text-lg mb-3 text-primary">${step.title}</h3>
                  <p class="text-gray-600 mb-4">${step.description}</p>
                  <div class="space-y-2 text-sm text-gray-500">
                    ${step.features.map(feature => `
                      <div class="flex items-center justify-center space-x-2">
                        <i class="fas fa-check text-green-500"></i>
                        <span>${feature}</span>
                      </div>
                    `).join('')}
                  </div>
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
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">Ready to Get Placed?</h2>
            <p class="text-xl text-blue-100 mb-8">
              Join thousands of successful students who started their IT careers with Ducat. 
              Our placement team is dedicated to helping you land your dream job.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <a href="#" data-page="courses" class="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                Explore Courses
              </a>
              <a href="#" data-page="contact" class="btn bg-secondary text-white hover:bg-orange-600 text-lg px-8 py-4">
                <i class="fas fa-calendar-check mr-2"></i>
                Schedule Consultation
              </a>
            </div>
            <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div class="text-2xl font-bold text-white">95%</div>
                <div class="text-blue-200">Placement Rate</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-white">500+</div>
                <div class="text-blue-200">Companies</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-white">₹85L</div>
                <div class="text-blue-200">Highest Package</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-white">50K+</div>
                <div class="text-blue-200">Students Placed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

function generatePlacementData() {
  const companies = [
    'TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant', 'Capgemini',
    'Amazon', 'Microsoft', 'Google', 'IBM', 'Oracle', 'Intel',
    'Deloitte', 'PwC', 'EY', 'KPMG', 'HCL', 'Tech Mahindra'
  ];

  const courses = [
    'Full Stack Development', 'Data Science', 'Cloud Computing', 
    'Cyber Security', 'AI/ML', 'Digital Marketing'
  ];

  const stories = [];
  for (let i = 1; i <= 6; i++) {
    stories.push({
      name: `Student ${i}`,
      course: courses[Math.floor(Math.random() * courses.length)],
      company: companies[Math.floor(Math.random() * companies.length)],
      package: `₹${Math.floor(Math.random() * 20) + 5} LPA`,
      year: 2023 + Math.floor(Math.random() * 2),
      testimonial: "Ducat provided excellent training and placement support. The faculty is very experienced and the curriculum is industry-relevant."
    });
  }

  return {
    stories,
    companies: companies.map(company => ({
      name: company,
      hires: Math.floor(Math.random() * 1000) + 100
    }))
  };
}

function getCompanyLogos() {
  return [
    { name: 'TCS' },
    { name: 'Infosys' },
    { name: 'Wipro' },
    { name: 'Accenture' },
    { name: 'Cognizant' },
    { name: 'Capgemini' },
    { name: 'Amazon' },
    { name: 'Microsoft' },
    { name: 'Google' },
    { name: 'IBM' },
    { name: 'Oracle' },
    { name: 'Intel' }
  ];
}

function getTopRecruiters() {
  return [
    { name: 'TCS', hires: 1200, type: 'IT Services' },
    { name: 'Infosys', hires: 950, type: 'IT Services' },
    { name: 'Wipro', hires: 800, type: 'IT Services' },
    { name: 'Accenture', hires: 700, type: 'Consulting' },
    { name: 'Amazon', hires: 150, type: 'E-commerce' },
    { name: 'Microsoft', hires: 120, type: 'Technology' },
    { name: 'Google', hires: 80, type: 'Technology' },
    { name: 'IBM', hires: 300, type: 'Technology' },
    { name: 'Deloitte', hires: 200, type: 'Consulting' },
    { name: 'Capgemini', hires: 600, type: 'IT Services' },
    { name: 'Cognizant', hires: 550, type: 'IT Services' },
    { name: 'HCL', hires: 400, type: 'IT Services' }
  ];
}

function getPlacementProcess() {
  return [
    {
      number: 1,
      title: 'Profile Building',
      description: 'Professional resume crafting and LinkedIn optimization',
      gradient: 'bg-gradient-to-br from-primary to-accent',
      features: ['Resume Writing', 'LinkedIn Makeover', 'Portfolio Building']
    },
    {
      number: 2,
      title: 'Skill Training',
      description: 'Technical and soft skills development sessions',
      gradient: 'bg-gradient-to-br from-secondary to-orange-500',
      features: ['Technical Skills', 'Communication', 'Aptitude Training']
    },
    {
      number: 3,
      title: 'Mock Interviews',
      description: 'Practice sessions with industry experts',
      gradient: 'bg-gradient-to-br from-green-500 to-emerald-600',
      features: ['Technical Rounds', 'HR Rounds', 'Company Specific']
    },
    {
      number: 4,
      title: 'Job Placement',
      description: 'Campus drives and company referrals',
      gradient: 'bg-gradient-to-br from-purple-500 to-pink-600',
      features: ['Campus Drives', 'Referral Program', 'Offer Negotiation']
    }
  ];
}