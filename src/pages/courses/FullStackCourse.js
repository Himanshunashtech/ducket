export default function FullStackCourse() {
  const course = {
    title: "Full Stack Development",
    description: "Master both front-end and back-end technologies to build complete web applications from scratch.",
    duration: "6 Months",
    fees: "₹45,000",
    placementRate: "95%",
    averageSalary: "₹8.5 LPA",
    projects: "12+ Real Projects",
    mentor: {
      name: "Rajesh Kumar",
      experience: "10+ years",
      specialization: "Full Stack Architecture",
      company: "Ex-Amazon, Microsoft",
      image: "/mentors/rajesh-kumar.jpg",
      achievements: ["Built scalable systems for 10M+ users", "Mentored 5000+ developers", "Open Source Contributor"]
    },
    syllabus: [
      "HTML5, CSS3 & JavaScript ES6+",
      "React.js with Hooks & Context API",
      "Node.js & Express.js Framework",
      "MongoDB & PostgreSQL Databases",
      "RESTful API Development",
      "Authentication & Authorization",
      "State Management with Redux",
      "Git, GitHub & Version Control",
      "AWS Cloud Deployment",
      "Docker & Containerization",
      "Testing & Debugging",
      "Performance Optimization"
    ],
    technologies: [
      {
        name: "React.js",
        icon: "fab fa-react",
        description: "Modern frontend library for building user interfaces",
        level: "Beginner to Advanced",
        useCases: ["Single Page Apps", "Progressive Web Apps", "Enterprise Applications"]
      },
      {
        name: "Node.js",
        icon: "fab fa-node-js",
        description: "JavaScript runtime for server-side development",
        level: "Intermediate to Advanced",
        useCases: ["API Development", "Real-time Apps", "Microservices"]
      },
      {
        name: "MongoDB",
        icon: "fas fa-database",
        description: "NoSQL document database for modern applications",
        level: "Intermediate",
        useCases: ["Big Data", "Real-time Apps", "Scalable Systems"]
      },
      {
        name: "Express.js",
        icon: "fas fa-server",
        description: "Minimal and flexible Node.js web application framework",
        level: "Intermediate",
        useCases: ["REST APIs", "Web Applications", "Middleware Systems"]
      },
      {
        name: "PostgreSQL",
        icon: "fas fa-database",
        description: "Advanced open-source relational database",
        level: "Intermediate to Advanced",
        useCases: ["Complex Queries", "ACID Compliance", "Enterprise Systems"]
      },
      {
        name: "AWS",
        icon: "fab fa-aws",
        description: "Cloud platform for deployment and scaling",
        level: "Intermediate",
        useCases: ["Cloud Hosting", "Serverless Architecture", "Database Services"]
      }
    ],
    codeExamples: [
      {
        language: "React Component",
        code: `function UserDashboard() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  return (
    <div>
      <h2>User Management</h2>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}`
      },
      {
        language: "Express API",
        code: `app.post('/api/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});`
      },
      {
        language: "MongoDB Schema",
        code: `const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  createdAt: { type: Date, default: Date.now }
});`
      }
    ]
  };

  return `
    <main class="pt-20">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl">
            <h1 class="text-4xl lg:text-5xl font-bold mb-4">${course.title}</h1>
            <p class="text-xl mb-6">${course.description}</p>
            <div class="flex flex-wrap gap-4 mb-6">
              <span class="bg-white/20 rounded-full px-4 py-2">${course.duration}</span>
              <span class="bg-white/20 rounded-full px-4 py-2">${course.fees}</span>
              <span class="bg-green-500 rounded-full px-4 py-2">${course.placementRate} Placement</span>
              <span class="bg-yellow-500 rounded-full px-4 py-2">${course.averageSalary} Average</span>
              <span class="bg-blue-500 rounded-full px-4 py-2">${course.projects}</span>
            </div>
            <div class="flex gap-4">
              <button class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Enroll Now
              </button>
              <button class="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Download Syllabus
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Course Content Section -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
              <h2 class="text-3xl font-bold text-gray-800 mb-8">Course Overview</h2>
              
              <!-- Technologies Grid -->
              <div class="mb-12">
                <h3 class="text-2xl font-bold text-gray-800 mb-6">Technologies You'll Master</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  ${course.technologies.map(tech => `
                    <div class="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                      <div class="flex items-center mb-4">
                        <i class="${tech.icon} text-3xl text-blue-600 mr-4"></i>
                        <div>
                          <h4 class="text-xl font-bold text-gray-800">${tech.name}</h4>
                          <span class="text-sm text-orange-500">${tech.level}</span>
                        </div>
                      </div>
                      <p class="text-gray-600 mb-4">${tech.description}</p>
                      <div class="flex flex-wrap gap-2">
                        ${tech.useCases.map(useCase => `
                          <span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">${useCase}</span>
                        `).join('')}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Syllabus -->
              <div class="mb-12">
                <h3 class="text-2xl font-bold text-gray-800 mb-6">Course Syllabus</h3>
                <div class="bg-gray-50 rounded-lg p-6">
                  <ol class="list-decimal list-inside space-y-3">
                    ${course.syllabus.map(topic => `
                      <li class="text-gray-700 text-lg py-2 border-b border-gray-200 last:border-b-0">${topic}</li>
                    `).join('')}
                  </ol>
                </div>
              </div>

              <!-- Code Examples -->
              <div class="mb-12">
                <h3 class="text-2xl font-bold text-gray-800 mb-6">Live Code Examples</h3>
                <div class="bg-gray-900 rounded-lg p-6">
                  <div class="flex space-x-2 mb-4">
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div class="text-green-400 font-mono text-sm">
                    <div class="mb-2">// ${course.codeExamples[0].language}</div>
                    <pre>${course.codeExamples[0].code}</pre>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="space-y-6">
              <!-- Mentor Card -->
              <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 class="text-xl font-bold text-gray-800 mb-4">Course Mentor</h3>
                <div class="flex items-center mb-4">
                  <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    ${course.mentor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-800">${course.mentor.name}</h4>
                    <p class="text-sm text-gray-600">${course.mentor.experience}</p>
                    <p class="text-sm text-blue-600">${course.mentor.company}</p>
                  </div>
                </div>
                <p class="text-gray-600 mb-4">${course.mentor.specialization}</p>
                <div class="space-y-2 mb-4">
                  ${course.mentor.achievements.map(achievement => `
                    <div class="flex items-center text-sm text-gray-600">
                      <i class="fas fa-check text-green-500 mr-2"></i>
                      <span>${achievement}</span>
                    </div>
                  `).join('')}
                </div>
                <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
                  View Profile
                </button>
              </div>

              <!-- Course Details Card -->
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
                    <span class="text-gray-600">Average Salary:</span>
                    <span class="font-semibold text-yellow-600">${course.averageSalary}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Projects:</span>
                    <span class="font-semibold">${course.projects}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Mode:</span>
                    <span class="font-semibold">Online & Offline</span>
                  </div>
                </div>
                <button class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold mt-4 transition-colors">
                  Enroll Now
                </button>
                <button class="w-full bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 py-3 rounded-lg font-semibold mt-2 transition-colors">
                  Book Free Demo
                </button>
              </div>

              <!-- Batch Info Card -->
              <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 class="text-xl font-bold text-blue-800 mb-2">Next Batch Starts</h3>
                <div class="text-2xl font-bold text-blue-600 mb-2">15th January 2024</div>
                <p class="text-blue-700 mb-4">Limited seats available. Enroll now to secure your spot!</p>
                <div class="flex items-center text-sm text-blue-600">
                  <i class="fas fa-clock mr-2"></i>
                  <span>Only 12 seats remaining</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Placement Stats Section -->
      <section class="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Placement Statistics</h2>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-4xl font-bold text-blue-600 mb-2">${course.placementRate}</div>
              <div class="text-gray-600">Placement Rate</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div class="text-gray-600">Hiring Partners</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-yellow-600 mb-2">${course.averageSalary}</div>
              <div class="text-gray-600">Average Salary</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-purple-600 mb-2">10,000+</div>
              <div class="text-gray-600">Students Placed</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}