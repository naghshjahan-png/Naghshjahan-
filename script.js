// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Form submission
const form = document.getElementById('registerForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Simple validation
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const className = document.getElementById('class').value;
  
  if (!name || !phone || !className) {
    alert('لطفاً فیلدهای ضروری را پر کنید.');
    return;
  }
  
  // Simulate submission
  form.style.display = 'none';
  formSuccess.style.display = 'block';
  
  // Scroll to success message
  formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
  // In a real scenario, you would send data to a server here
  // For now, we just show a success message
  console.log('Form submitted:', {
    name,
    phone,
    age: document.getElementById('age').value,
    class: className,
    message: document.getElementById('message').value
  });
});
