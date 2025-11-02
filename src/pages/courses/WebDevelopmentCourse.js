import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';

export default function WebDevelopmentCourse() {
  const course = {
    title: "Web Development Full Stack",
    description: "Become a full-stack web developer mastering front-end and back-end technologies.",
    duration: "6 Months",
    fees: "₹45,000",
    placementRate: "96%",
    mentor: {
      name: "Anjali Singh",
      experience: "11+ years",
      specialization: "Full Stack Development",
      image: "/mentors/anjali-singh.jpg"
    },
    syllabus: [
      "HTML5, CSS3 & JavaScript",
      "Frontend Frameworks (React)",
      "Backend Development (Node.js)",
      "Database Management",
      "RESTful APIs",
      "Version Control (Git)",
      "Deployment & DevOps"
    ],
    technologies: [
      {
        name: "React",
        icon: "fab fa-react",
        description: "Frontend JavaScript library",
        level: "Intermediate to Advanced",
        useCases: ["Single Page Apps", "UI Components"]
      },
      {
        name: "Node.js",
        icon: "fab fa-node-js",
        description: "Backend JavaScript runtime",
        level: "Intermediate to Advanced",
        useCases: ["Server-side", "APIs", "Real-time Apps"]
      },
      {
        name: "MongoDB",
        icon: "fas fa-database",
        description: "NoSQL database",
        level: "Intermediate",
        useCases: ["Document Storage", "Big Data"]
      },
      {
        name: "Git",
        icon: "fab fa-git-alt",
        description: "Version control system",
        level: "Beginner to Advanced",
        useCases: ["Code Management", "Collaboration"]
      }
    ]
  };

  return `
    <main class="pt-20">
      <section class="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-16">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl">
            <h1 class="text-4xl lg:text-5xl font-bold mb-4">${course.title}</h1>
            <p class="text-xl mb-6">${course.description}</p>
            <div class="flex flex-wrap gap-4 mb-6">
              <span class="bg-white/20 rounded-full px-4 py-2">${course.duration}</span>
              <span class="bg-white/20 rounded-full px-4 py-2">${course.fees}</span>
              <span class="bg-green-500 rounded-full px-4 py-2">${course.placementRate} Placement</span>
            </div>
            <button class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
              <h2 class="text-3xl font-bold text-gray-800 mb-8">Course Overview</h2>
              
              <div class="mb-12">
                <h3 class="text-2xl font-bold text-gray-800 mb-6">Web Technologies Stack</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  ${course.technologies.map(tech => `
                    <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div class="flex items-center mb-4">
                        <i class="${tech.icon} text-3xl text-teal-600 mr-4"></i>
                        <div>
                          <h4 class="text-xl font-bold text-gray-800">${tech.name}</h4>
                          <span class="text-sm text-orange-500">${tech.level}</span>
                        </div>
                      </div>
                      <p class="text-gray-600 mb-4">${tech.description}</p>
                      <div class="flex flex-wrap gap-2">
                        ${tech.useCases.map(useCase => `
                          <span class="bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full">${useCase}</span>
                        `).join('')}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <div class="mb-12">
                <h3 class="text-2xl font-bold text-gray-800 mb-6">Course Syllabus</h3>
                <div class="bg-gray-50 rounded-lg p-6">
                  <ol class="list-decimal list-inside space-y-3">
                    ${course.syllabus.map(topic => `
                      <li class="text-gray-700 text-lg">${topic}</li>
                    `).join('')}
                  </ol>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 class="text-xl font-bold text-gray-800 mb-4">Course Mentor</h3>
                <div class="flex items-center mb-4">
                  <div class="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    ${course.mentor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-800">${course.mentor.name}</h4>
                    <p class="text-sm text-gray-600">${course.mentor.experience} Experience</p>
                  </div>
                </div>
                <p class="text-gray-600 mb-4">${course.mentor.specialization}</p>
                <button class="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg transition-colors">
                  View Profile
                </button>
              </div>

              <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 class="text-xl font-bold text-gray-800 mb-4">Course Details</h3>
                <div class="space-y-3">
                  <div class="flex justify-between">
                    <span class="text-gray-600">Duration:</span>
                    <span class="font-semibold">${course.duration}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Fees:</span>
                    <span class="font-semibold">${course.fees}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Placement Rate:</span>
                    <span class="font-semibold text-green-600">${course.placementRate}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Mode:</span>
                    <span class="font-semibold">Online & Offline</span>
                  </div>
                </div>
                <button class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold mt-4 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}