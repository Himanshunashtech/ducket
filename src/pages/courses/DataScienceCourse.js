export default function DataScienceCourse() {
  const course = {
    title: "Data Science & AI",
    description: "Master data analysis, machine learning, and artificial intelligence to build intelligent data-driven solutions.",
    duration: "8 Months",
    fees: "₹55,000",
    placementRate: "92%",
    averageSalary: "₹9.2 LPA",
    projects: "15+ Real Projects",
    mentor: {
      name: "Dr. Anjali Sharma",
      experience: "8+ years",
      specialization: "Machine Learning & AI",
      company: "Ex-Google, IIT Delhi",
      image: "/mentors/anjali-sharma.jpg",
      achievements: ["Published 20+ research papers", "Led AI teams at Google", "PhD in Machine Learning"]
    },
    syllabus: [
      "Python for Data Science",
      "Statistics & Probability",
      "Data Analysis with Pandas & NumPy",
      "Data Visualization with Matplotlib & Seaborn",
      "Machine Learning Fundamentals",
      "Supervised Learning Algorithms",
      "Unsupervised Learning & Clustering",
      "Deep Learning & Neural Networks",
      "Natural Language Processing",
      "Computer Vision",
      "Big Data with PySpark",
      "SQL for Data Analysis",
      "Cloud Platforms (AWS SageMaker)",
      "Model Deployment & MLOps",
      "Capstone Project"
    ],
    technologies: [
      {
        name: "Python",
        icon: "fab fa-python",
        description: "Primary programming language for data analysis and ML",
        level: "Beginner to Advanced",
        useCases: ["Data Analysis", "Machine Learning", "Automation"]
      },
      {
        name: "TensorFlow",
        icon: "fas fa-brain",
        description: "Open-source library for machine learning and neural networks",
        level: "Intermediate to Advanced",
        useCases: ["Deep Learning", "Neural Networks", "AI Models"]
      },
      {
        name: "PyTorch",
        icon: "fas fa-project-diagram",
        description: "Flexible deep learning framework for research and production",
        level: "Intermediate to Advanced",
        useCases: ["Research Projects", "Computer Vision", "NLP"]
      },
      {
        name: "Pandas",
        icon: "fas fa-table",
        description: "Powerful data manipulation and analysis library",
        level: "Beginner to Advanced",
        useCases: ["Data Cleaning", "Analysis", "Transformation"]
      },
      {
        name: "Scikit-learn",
        icon: "fas fa-cogs",
        description: "Machine learning library for traditional algorithms",
        level: "Beginner to Advanced",
        useCases: ["Classification", "Regression", "Clustering"]
      },
      {
        name: "AWS SageMaker",
        icon: "fab fa-aws",
        description: "Cloud platform for building and deploying ML models",
        level: "Intermediate",
        useCases: ["Model Training", "Deployment", "Scaling"]
      }
    ],
    codeExamples: [
      {
        language: "Python - Data Analysis",
        code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Load and explore data
df = pd.read_csv('sales_data.csv')
print(df.info())
print(df.describe())

# Data cleaning
df = df.dropna()
df = df[df['sales'] > 0]

# Group by category
category_sales = df.groupby('category')['sales'].sum()

# Visualization
plt.figure(figsize=(10, 6))
category_sales.plot(kind='bar')
plt.title('Sales by Category')
plt.xlabel('Category')
plt.ylabel('Total Sales')
plt.show()`
      },
      {
        language: "Machine Learning Model",
        code: `from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Prepare features and target
X = df.drop('target', axis=1)
y = df['target']

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy:.2f}")`
      },
      {
        language: "Deep Learning with TensorFlow",
        code: `import tensorflow as tf
from tensorflow import keras

# Build neural network
model = keras.Sequential([
    keras.layers.Dense(128, activation='relu', input_shape=(784,)),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(64, activation='relu'),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(10, activation='softmax')
])

# Compile model
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Train model
history = model.fit(
    X_train, y_train,
    epochs=50,
    validation_data=(X_test, y_test),
    batch_size=32
)`
      }
    ],
    tools: [
      { name: "Jupyter Notebook", icon: "fas fa-laptop-code", purpose: "Interactive coding environment" },
      { name: "Tableau", icon: "fas fa-chart-bar", purpose: "Data visualization and BI" },
      { name: "SQL", icon: "fas fa-database", purpose: "Database querying and analysis" },
      { name: "Git", icon: "fab fa-git-alt", purpose: "Version control and collaboration" },
      { name: "Docker", icon: "fab fa-docker", purpose: "Containerization for ML models" },
      { name: "MLflow", icon: "fas fa-chart-line", purpose: "Machine learning lifecycle management" }
    ]
  };

  return `
    <main class="pt-20">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16">
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
              <button class="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
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
                <h3 class="text-2xl font-bold text-gray-800 mb-6">Core Technologies & Libraries</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  ${course.technologies.map(tech => `
                    <div class="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                      <div class="flex items-center mb-4">
                        <i class="${tech.icon} text-3xl text-green-600 mr-4"></i>
                        <div>
                          <h4 class="text-xl font-bold text-gray-800">${tech.name}</h4>
                          <span class="text-sm text-orange-500">${tech.level}</span>
                        </div>
                      </div>
                      <p class="text-gray-600 mb-4">${tech.description}</p>
                      <div class="flex flex-wrap gap-2">
                        ${tech.useCases.map(useCase => `
                          <span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">${useCase}</span>
                        `).join('')}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Tools Section -->
              <div class="mb-12">
                <h3 class="text-2xl font-bold text-gray-800 mb-6">Essential Tools & Platforms</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                  ${course.tools.map(tool => `
                    <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
                      <i class="${tool.icon} text-2xl text-green-600 mb-2"></i>
                      <h4 class="font-semibold text-gray-800">${tool.name}</h4>
                      <p class="text-sm text-gray-600">${tool.purpose}</p>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Syllabus -->
              <div class="mb-12">
                <h3 class="text-2xl font-bold text-gray-800 mb-6">Comprehensive Syllabus</h3>
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
                <h3 class="text-2xl font-bold text-gray-800 mb-6">Practical Code Examples</h3>
                <div class="space-y-6">
                  ${course.codeExamples.map((example, index) => `
                    <div class="bg-gray-900 rounded-lg p-6">
                      <div class="flex space-x-2 mb-4">
                        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div class="text-green-400 font-mono text-sm">
                        <div class="mb-2 text-blue-400"># ${example.language}</div>
                        <pre class="whitespace-pre-wrap">${example.code}</pre>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Career Paths -->
              <div class="mb-12">
                <h3 class="text-2xl font-bold text-gray-800 mb-6">Career Opportunities</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border border-green-200">
                    <h4 class="text-xl font-bold text-green-800 mb-3">Data Scientist</h4>
                    <p class="text-gray-700 mb-4">Build predictive models and derive insights from complex data</p>
                    <div class="text-green-600 font-semibold">₹8-15 LPA</div>
                  </div>
                  <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                    <h4 class="text-xl font-bold text-blue-800 mb-3">ML Engineer</h4>
                    <p class="text-gray-700 mb-4">Design and deploy machine learning systems at scale</p>
                    <div class="text-blue-600 font-semibold">₹10-18 LPA</div>
                  </div>
                  <div class="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
                    <h4 class="text-xl font-bold text-purple-800 mb-3">AI Researcher</h4>
                    <p class="text-gray-700 mb-4">Push boundaries in artificial intelligence research</p>
                    <div class="text-purple-600 font-semibold">₹12-25 LPA</div>
                  </div>
                  <div class="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
                    <h4 class="text-xl font-bold text-orange-800 mb-3">Data Analyst</h4>
                    <p class="text-gray-700 mb-4">Transform data into actionable business insights</p>
                    <div class="text-orange-600 font-semibold">₹6-12 LPA</div>
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
                  <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    ${course.mentor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-800">${course.mentor.name}</h4>
                    <p class="text-sm text-gray-600">${course.mentor.experience}</p>
                    <p class="text-sm text-green-600">${course.mentor.company}</p>
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
                <button class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">
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
                  <div class="flex justify-between">
                    <span class="text-gray-600">Prerequisites:</span>
                    <span class="font-semibold">Basic Programming</span>
                  </div>
                </div>
                <button class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold mt-4 transition-colors">
                  Enroll Now
                </button>
                <button class="w-full bg-white hover:bg-gray-100 text-green-600 border border-green-600 py-3 rounded-lg font-semibold mt-2 transition-colors">
                  Book Free Demo
                </button>
              </div>

              <!-- Batch Info Card -->
              <div class="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 class="text-xl font-bold text-green-800 mb-2">Next Batch Starts</h3>
                <div class="text-2xl font-bold text-green-600 mb-2">20th January 2024</div>
                <p class="text-green-700 mb-4">Limited seats available. Enroll now to secure your spot!</p>
                <div class="flex items-center text-sm text-green-600">
                  <i class="fas fa-clock mr-2"></i>
                  <span>Only 8 seats remaining</span>
                </div>
              </div>

              <!-- Certification Card -->
              <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 class="text-xl font-bold text-blue-800 mb-2">Industry Certification</h3>
                <div class="flex items-center mb-3">
                  <i class="fas fa-certificate text-blue-600 text-2xl mr-3"></i>
                  <span class="font-semibold text-blue-700">DUCAT Data Science Certificate</span>
                </div>
                <p class="text-blue-700 text-sm">Recognized by 500+ companies including Google, Amazon, and Microsoft</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Placement Stats Section -->
      <section class="py-16 bg-gradient-to-r from-gray-50 to-green-50">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Success Stories</h2>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-4xl font-bold text-green-600 mb-2">${course.placementRate}</div>
              <div class="text-gray-600">Placement Rate</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-blue-600 mb-2">300+</div>
              <div class="text-gray-600">AI/ML Companies</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-yellow-600 mb-2">${course.averageSalary}</div>
              <div class="text-gray-600">Average Salary</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-purple-600 mb-2">5,000+</div>
              <div class="text-gray-600">Data Professionals</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Showcase -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Real-world Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i class="fas fa-chart-line text-green-600 text-xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">Sales Prediction</h3>
              <p class="text-gray-600 mb-4">Build ML models to predict future sales and optimize inventory</p>
              <span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Time Series</span>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i class="fas fa-comments text-blue-600 text-xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">Sentiment Analysis</h3>
              <p class="text-gray-600 mb-4">Analyze customer reviews and social media sentiment using NLP</p>
              <span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">NLP</span>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i class="fas fa-eye text-purple-600 text-xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">Image Classification</h3>
              <p class="text-gray-600 mb-4">Create CNN models for object detection and image recognition</p>
              <span class="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Computer Vision</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}