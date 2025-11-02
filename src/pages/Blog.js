

export default function Blog() {
  const blogPosts = generateBlogPosts();
  
  return `
    <main class="pt-20">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div class="container-custom px-6 text-center">
          <h1 class="text-5xl font-bold mb-6 animate-on-scroll">Ducat Blog</h1>
          <p class="text-xl mb-8 max-w-3xl mx-auto animate-on-scroll">
            Stay updated with the latest trends in technology, career guidance, 
            industry insights, and success stories from our students.
          </p>
          <div class="flex flex-wrap justify-center gap-4 animate-on-scroll">
            <input type="text" placeholder="Search articles..." class="px-6 py-3 rounded-lg text-gray-800 w-80 max-w-full">
            <select class="px-6 py-3 rounded-lg text-gray-800">
              <option>All Categories</option>
              <option>Technology</option>
              <option>Career Guidance</option>
              <option>Placement News</option>
              <option>Student Stories</option>
              <option>Industry Trends</option>
            </select>
          </div>
        </div>
      </section>

      <!-- Featured Post -->
      <section class="section-padding bg-white">
        <div class="container-custom px-6">
          <div class="card p-8 mb-12 animate-on-scroll">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span class="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">Featured</span>
                <h2 class="text-3xl font-bold text-primary mb-4">Top 10 Programming Languages to Learn in 2024</h2>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  Discover the most in-demand programming languages that will dominate the tech industry 
                  in 2024. Learn which skills can boost your career and increase your earning potential.
                </p>
                <div class="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <span><i class="far fa-calendar mr-1"></i> December 15, 2024</span>
                  <span><i class="far fa-clock mr-1"></i> 8 min read</span>
                  <span><i class="far fa-eye mr-1"></i> 2.5K views</span>
                </div>
                <a href="#" class="btn btn-primary">Read Full Article</a>
              </div>
              <div class="bg-gradient-to-br from-primary to-accent rounded-2xl h-64 flex items-center justify-center text-white">
                <i class="fas fa-feather-alt text-6xl"></i>
              </div>
            </div>
          </div>

          <!-- Blog Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            ${blogPosts.map((post, index) => `
              <div class="card p-6 animate-on-scroll" style="animation-delay: ${index * 0.1}s">
                <div class="bg-gradient-to-br from-primary to-accent rounded-xl h-40 flex items-center justify-center text-white mb-4">
                  <i class="${post.icon} text-4xl"></i>
                </div>
                <span class="bg-blue-100 text-primary px-2 py-1 rounded text-xs font-semibold mb-3 inline-block">${post.category}</span>
                <h3 class="text-xl font-bold text-primary mb-3 line-clamp-2">${post.title}</h3>
                <p class="text-gray-600 text-sm mb-4 line-clamp-3">${post.excerpt}</p>
                <div class="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span><i class="far fa-calendar mr-1"></i> ${post.date}</span>
                  <span><i class="far fa-clock mr-1"></i> ${post.readTime}</span>
                </div>
                <a href="#" class="text-secondary font-semibold text-sm hover:text-orange-600 flex items-center space-x-1">
                  <span>Read More</span>
                  <i class="fas fa-arrow-right text-xs"></i>
                </a>
              </div>
            `).join('')}
          </div>

          <!-- Pagination -->
          <div class="flex justify-center animate-on-scroll">
            <div class="flex space-x-2">
              <button class="px-4 py-2 bg-primary text-white rounded-lg">1</button>
              <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">2</button>
              <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">3</button>
              <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Next</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Newsletter -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom px-6">
          <div class="max-w-4xl mx-auto text-center card p-12 animate-on-scroll">
            <h2 class="text-3xl font-bold text-primary mb-4">Stay Updated</h2>
            <p class="text-gray-600 mb-8 text-lg">
              Subscribe to our newsletter and get the latest tech insights, 
              course updates, and career guidance directly in your inbox.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <button class="btn btn-primary px-8">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

function generateBlogPosts() {
  const categories = [
    { name: 'Technology', icon: 'fas fa-laptop-code' },
    { name: 'Career', icon: 'fas fa-briefcase' },
    { name: 'Placements', icon: 'fas fa-trophy' },
    { name: 'Trends', icon: 'fas fa-chart-line' },
    { name: 'Guidance', icon: 'fas fa-graduation-cap' }
  ];

  const posts = [];
  const titles = [
    "How to Crack FAANG Company Interviews in 2024",
    "The Future of Artificial Intelligence in India",
    "From Non-Tech to Tech: A Complete Success Guide",
    "Top 5 Cloud Computing Certifications for 2024",
    "Data Science Career Path: Skills and Opportunities",
    "Cyber Security Trends You Can't Ignore",
    "Building a Strong Developer Portfolio",
    "Remote Work Skills for IT Professionals",
    "Machine Learning Projects for Beginners",
    "DevOps Best Practices for 2024"
  ];

  for (let i = 0; i < 9; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    posts.push({
      title: titles[i] || `Tech Insight ${i + 1}`,
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      category: category.name,
      icon: category.icon,
      date: `Dec ${15 - i}, 2024`,
      readTime: `${Math.floor(Math.random() * 5) + 3} min read`
    });
  }

  return posts;
}