export default function Header() {
  return `
    <header class="bg-white shadow-lg fixed w-full top-0 z-50">
      <nav class="container-custom">
        <div class="flex justify-between items-center py-4 px-6">
          <a href="#" data-page="home" class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">D</div>
            <span class="text-2xl font-bold text-primary">DUCAT</span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#" data-page="home" class="nav-link">Home</a>
            <a href="#" data-page="courses" class="nav-link">Courses</a>
            <a href="#" data-page="placements" class="nav-link">Placements</a>
            <a href="#" data-page="about" class="nav-link">About Us</a>
            <a href="#" data-page="contact" class="nav-link">Contact</a>
            <a href="#" data-page="blog" class="nav-link">Blog</a>
          </div>

          <!-- Desktop Buttons -->
          <div class="hidden md:flex items-center space-x-4">
            <a href="#" data-page="contact" class="btn btn-primary">Apply Now</a>
          </div>

          <!-- Mobile Menu Button -->
          <button class="md:hidden mobile-menu-btn p-2 rounded-lg hover:bg-gray-100">
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation Menu -->
        <div class="mobile-menu hidden md:hidden bg-white border-t border-gray-200">
          <div class="px-6 py-4 space-y-4">
            <a href="#" data-page="home" class="block py-3 border-b border-gray-100">Home</a>
            <a href="#" data-page="courses" class="block py-3 border-b border-gray-100">Courses</a>
            <a href="#" data-page="placements" class="block py-3 border-b border-gray-100">Placements</a>
            <a href="#" data-page="about" class="block py-3 border-b border-gray-100">About Us</a>
            <a href="#" data-page="contact" class="block py-3 border-b border-gray-100">Contact</a>
            <a href="#" data-page="blog" class="block py-3 border-b border-gray-100">Blog</a>
            <div class="pt-4">
            <a href="#" data-page="contact" class="nav-link block w-full text-center btn btn-primary py-3">Apply Now</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `;
}