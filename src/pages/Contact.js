export default function Contact() {
  return `
    <main class="pt-20">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div class="container-custom px-6 text-center">
          <h1 class="text-5xl font-bold mb-6 animate-on-scroll">Contact Us</h1>
          <p class="text-xl mb-8 max-w-3xl mx-auto animate-on-scroll">
            Get in touch with us for course inquiries, placement partnerships, or any other questions.
            We're here to help you transform your career.
          </p>
        </div>
      </section>

      <!-- Contact Content -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="animate-on-scroll">
              <div class="card p-8">
                <h2 class="text-3xl font-bold text-primary mb-6">Send us a Message</h2>
                <form id="contactForm" class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label class="block text-gray-700 mb-2">First Name *</label>
                      <input type="text" name="firstName" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    </div>
                    <div>
                      <label class="block text-gray-700 mb-2">Last Name *</label>
                      <input type="text" name="lastName" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    </div>
                  </div>
                  <div>
                    <label class="block text-gray-700 mb-2">Email Address *</label>
                    <input type="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  </div>
                  <div>
                    <label class="block text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" name="phone" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  </div>
                  <div>
                    <label class="block text-gray-700 mb-2">Course Interest *</label>
                    <select name="course" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select a course</option>
                      <option>Full Stack Development</option>
                      <option>Data Science & AI</option>
                      <option>Cloud Computing</option>
                      <option>Cyber Security</option>
                      <option>Digital Marketing</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-gray-700 mb-2">Message *</label>
                    <textarea name="message" rows="5" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary w-full text-lg py-4 flex items-center justify-center">
                    <span id="submitText">Send Message</span>
                    <div id="loadingSpinner" class="hidden ml-2">
                      <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  </button>
                  <div id="formMessage" class="hidden mt-4 p-4 rounded-lg text-center"></div>
                </form>
              </div>
            </div>

            <!-- Contact Info & Map -->
            <div class="space-y-8 animate-on-scroll">
              <!-- Contact Information -->
              <div class="card p-8">
                <h2 class="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
                <div class="space-y-6">
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h3 class="font-semibold text-lg mb-1">Visit Our Campus</h3>
                      <p class="text-gray-600">Ducat India, Sector 142</p>
                      <p class="text-gray-600">Noida, Uttar Pradesh 201305</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-white">
                      <i class="fas fa-phone"></i>
                    </div>
                    <div>
                      <h3 class="font-semibold text-lg mb-1">Call Us</h3>
                      <a href="tel:+919999999999" class="text-gray-600 hover:text-primary">+91 99999 99999</a>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h3 class="font-semibold text-lg mb-1">Email Us</h3>
                      <a href="mailto:info@ducatindia.com" class="text-gray-600 hover:text-primary">info@ducatindia.com</a>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white">
                      <i class="fas fa-clock"></i>
                    </div>
                    <div>
                      <h3 class="font-semibold text-lg mb-1">Working Hours</h3>
                      <p class="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p class="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Map -->
              <div class="card p-6">
                <h3 class="text-xl font-bold text-primary mb-4">Our Location</h3>
                <div class="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div class="text-center">
                    <i class="fas fa-map-marked-alt text-4xl text-primary mb-3"></i>
                    <p class="text-gray-600 font-semibold">Ducat India, Sector 142</p>
                    <p class="text-gray-500">Noida, Uttar Pradesh</p>
                    <button class="mt-3 btn btn-outline text-sm">
                      <i class="fas fa-directions mr-2"></i>
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Additional Campuses -->
      <section class="section-padding bg-white">
        <div class="container-custom px-6">
          <h2 class="text-3xl font-bold text-primary text-center mb-12 animate-on-scroll">Our Campuses</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
            <div class="text-center card p-6">
              <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <i class="fas fa-building"></i>
              </div>
              <h3 class="text-xl font-bold text-primary mb-3">Noida Sector 142</h3>
              <p class="text-gray-600 mb-4">Main Campus</p>
              <p class="text-sm text-gray-500">Fully equipped labs • Library • Placement cell</p>
            </div>
            <div class="text-center card p-6">
              <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <i class="fas fa-building"></i>
              </div>
              <h3 class="text-xl font-bold text-primary mb-3">Delhi Center</h3>
              <p class="text-gray-600 mb-4">Pitampura Branch</p>
              <p class="text-sm text-gray-500">Modern infrastructure • Expert faculty • Hostel facility</p>
            </div>
            <div class="text-center card p-6">
              <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <i class="fas fa-building"></i>
              </div>
              <h3 class="text-xl font-bold text-primary mb-3">Gurugram Center</h3>
              <p class="text-gray-600 mb-4">Cyber City Branch</p>
              <p class="text-sm text-gray-500">Corporate training • Weekend batches • Online support</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

// EmailJS setup and form handling
export function setupContactForm() {
  console.log('Setting up contact form...');
  
  // Check if EmailJS is loaded
  if (typeof emailjs === 'undefined') {
    console.error('EmailJS is not loaded. Make sure the script is included in your HTML.');
    // Retry after a short delay
    setTimeout(() => setupContactForm(), 100);
    return;
  }

  // Initialize EmailJS with your Public Key
  emailjs.init("SvJ0PJHOz9YD04Ngy");
  console.log('EmailJS initialized');

  const contactForm = document.getElementById('contactForm');
  const submitText = document.getElementById('submitText');
  const loadingSpinner = document.getElementById('loadingSpinner');
  const formMessage = document.getElementById('formMessage');

  if (!contactForm) {
    console.error('Contact form not found!');
    // Retry after a short delay
    setTimeout(() => setupContactForm(), 100);
    return;
  }

  console.log('Contact form found, setting up event listener...');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    
    // Show loading state
    submitText.classList.add('hidden');
    loadingSpinner.classList.remove('hidden');
    formMessage.classList.add('hidden');

    // Get form data
    const formData = new FormData(contactForm);
    const templateParams = {
      from_name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      first_name: formData.get('firstName'),
      last_name: formData.get('lastName'),
      from_email: formData.get('email'),
      phone: formData.get('phone'),
      course: formData.get('course'),
      message: formData.get('message'),
      to_email: 'himanshu.sh9540@gmail.com',
      reply_to: formData.get('email')
    };

    console.log('Sending email with data:', templateParams);

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        'service_w22dl66',
        'template_ugrbx6j', 
        templateParams
      );

      console.log('Email sent successfully:', response);
      
      // Show success message
      formMessage.classList.remove('hidden');
      formMessage.className = 'mt-4 p-4 rounded-lg bg-green-100 text-green-700 border border-green-200';
      formMessage.innerHTML = `
        <i class="fas fa-check-circle mr-2"></i>
        Message sent successfully! We'll get back to you within 24 hours.
      `;
      
      // Reset form
      contactForm.reset();
      
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      
      // Show detailed error message
      formMessage.classList.remove('hidden');
      formMessage.className = 'mt-4 p-4 rounded-lg bg-red-100 text-red-700 border border-red-200';
      
      let errorMessage = 'Failed to send message. Please try again or contact us directly at info@ducatindia.com';
      
      if (error.text) {
        errorMessage += `<br><small class="text-red-600 mt-2">Error: ${error.text}</small>`;
      }
      
      formMessage.innerHTML = `
        <i class="fas fa-exclamation-circle mr-2"></i>
        ${errorMessage}
      `;
    } finally {
      // Hide loading state
      submitText.classList.remove('hidden');
      loadingSpinner.classList.add('hidden');
      
      // Scroll to message
      formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

// Auto-setup when the module is loaded
if (typeof window !== 'undefined' && document.getElementById('contactForm')) {
  setTimeout(() => setupContactForm(), 100);
}