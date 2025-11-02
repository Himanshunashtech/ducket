import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';

export default function AIMLCourse() {
  const course = {
    title: "Artificial Intelligence & Machine Learning",
    description: "Master AI and ML algorithms to build intelligent systems and predictive models.",
    duration: "8 Months",
    fees: "₹58,000",
    placementRate: "94%",
    mentor: {
      name: "Dr. Arjun Rao",
      experience: "15+ years",
      specialization: "AI Research",
      image: "/mentors/arjun-rao.jpg"
    },
    syllabus: [
      "Python for AI/ML",
      "Statistics & Probability",
      "Machine Learning Algorithms",
      "Deep Learning & Neural Networks",
      "Natural Language Processing",
      "Computer Vision",
      "AI Ethics & Deployment"
    ],
    technologies: [
      {
        name: "TensorFlow",
        icon: "fas fa-brain",
        description: "Deep learning framework by Google",
        level: "Intermediate to Advanced",
        useCases: ["Neural Networks", "Deep Learning", "AI Models"]
      },
      {
        name: "PyTorch",
        icon: "fas fa-robot",
        description: "Machine learning library",
        level: "Intermediate to Advanced",
        useCases: ["Research", "Prototyping", "Production"]
      },
      {
        name: "Scikit-learn",
        icon: "fas fa-cogs",
        description: "Machine learning in Python",
        level: "Beginner to Advanced",
        useCases: ["ML Algorithms", "Data Mining", "Analysis"]
      },
      {
        name: "OpenCV",
        icon: "fas fa-eye",
        description: "Computer vision library",
        level: "Intermediate to Advanced",
        useCases: ["Image Processing", "Object Detection", "Video Analysis"]
      }
    ]
  };

  return `
    <main class="pt-20">
      <section class="bg-gradient-to-r from-violet-600 to-purple-700 text-white py-16">
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
                <h3 class="text-2xl font-bold text-gray-800 mb-6">AI/ML Frameworks & Tools</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  ${course.technologies.map(tech => `
                    <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div class="flex items-center mb-4">
                        <i class="${tech.icon} text-3xl text-violet-600 mr-4"></i>
                        <div>
                          <h4 class="text-xl font-bold text-gray-800">${tech.name}</h4>
                          <span class="text-sm text-orange-500">${tech.level}</span>
                        </div>
                      </div>
                      <p class="text-gray-600 mb-4">${tech.description}</p>
                      <div class="flex flex-wrap gap-2">
                        ${tech.useCases.map(useCase => `
                          <span class="bg-violet-100 text-violet-800 text-sm px-3 py-1 rounded-full">${useCase}</span>
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
                  <div class="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    ${course.mentor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-800">${course.mentor.name}</h4>
                    <p class="text-sm text-gray-600">${course.mentor.experience} Experience</p>
                  </div>
                </div>
                <p class="text-gray-600 mb-4">${course.mentor.specialization}</p>
                <button class="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded-lg transition-colors">
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