// Load the header from header.html
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));
  
  // Enable dropdown menus on hover interaction for the main navigation bar
  document.querySelectorAll('.main-nav ul li').forEach((menuItem) => {
    menuItem.addEventListener('mouseenter', () => {
      const dropdown = menuItem.querySelector('.dropdown');
      if (dropdown) {
        dropdown.style.display = 'block';
        // Add transition for smoother appearance
        setTimeout(() => {
          dropdown.style.opacity = 1;
          dropdown.style.transform = 'translateY(0)';
        }, 0);
      }
    });
  
    menuItem.addEventListener('mouseleave', () => {
      const dropdown = menuItem.querySelector('.dropdown');
      if (dropdown) {
        dropdown.style.opacity = 0;
        dropdown.style.transform = 'translateY(-10px)';
        // Add transition for smoother disappearance
        setTimeout(() => {
          dropdown.style.display = 'none';
        }, 300);
      }
    });
  });
  
  // Hero Section Carousel functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-item');
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  setInterval(nextSlide, 3000); // Rotate every 3 seconds
  
  // Highlight the "About the School" menu item (Assuming a specific class)
  document.querySelectorAll('.main-nav ul li.about-school a').forEach(link => {
    link.style.backgroundColor = '#ffcc00';
    link.style.color = '#00274d';
  });
  
  // Add animations to the values section on the "About the School" page
  document.addEventListener('DOMContentLoaded', () => {
    const valuesSection = document.querySelector('.about-school .values');
    if (valuesSection) {
      valuesSection.style.opacity = 0;
      valuesSection.style.transform = 'translateY(20px)';
      setTimeout(() => {
        valuesSection.style.transition = 'all 1s ease';
        valuesSection.style.opacity = 1;
        valuesSection.style.transform = 'translateY(0)';
      }, 500);
    }
  });
  
  // Contact Form Handling (assuming a form with ID "contactForm")
  document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      const formMessage = document.getElementById('formMessage');
  
      contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
  
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
  
        // Basic form validation
        if (name === '' || email === '' || message === '') {
          formMessage.innerHTML = '<p class="error">Please fill in all fields.</p>';
          return;
        }
  
        // Form submission logic can be implemented here (e.g., sending data to a server)
        // For now, a basic success message is displayed
        formMessage.innerHTML = '<p class="success">Your message has been sent!</p>';
        contactForm.reset(); // Clear the form after successful submission
      });
    }
  });
  
  // Mobile Menu Toggle functionality (Using Vanilla JavaScript)
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('show');
        menuToggle.classList.toggle('active'); // Toggle active class on the toggle button
      });
    }
    
    // FAQ Toggle functionality (Corrected and improved)
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('open');
      });
    });
    
    // Lightgallery initialization (Check if element exists first)
    const galleryElement = document.getElementById('lightgallery');
    if (galleryElement) {
        lightGallery(galleryElement, {
            plugins: [lgZoom, lgThumbnail],
            thumbnail: true,
            zoom: true,
            actualSize: false,
            download: false,
        });
    }
    
    //Comment functionality
    document.addEventListener('DOMContentLoaded', () => {
      const commentForm = document.getElementById('comment-form');
      const commentsContainer = document.getElementById('comments-container');
    
      if(commentForm && commentsContainer){
        commentForm.addEventListener('submit', (event) => {
          event.preventDefault();
    
          const name = document.getElementById('name').value;
          const commentText = document.getElementById('comment').value;
    
          if (name.trim() === "" || commentText.trim() === "") {
            alert("Please fill in both name and comment.");
            return;
          }
    
          const newComment = document.createElement('div');
          newComment.classList.add('comment');
    
          const timestamp = new Date().toLocaleString();
    
          newComment.innerHTML = `
              <p class="comment-author">${name}</p>
              <p class="comment-timestamp">${timestamp}</p>
              <p>${commentText}</p>
          `;
    
          commentsContainer.appendChild(newComment);
    
          document.getElementById('name').value = '';
          document.getElementById('comment').value = '';
        });
      }
    });
    
    // Carousel functionality (Improved)
    document.addEventListener('DOMContentLoaded', function() {
        const carousel = document.querySelector('.carousel');
        if (carousel) { // Check if the carousel exists on the page
            const carouselItems = carousel.querySelectorAll('.carousel-item');
            let currentIndex = 0;
    
            function showSlide(index) {
                carousel.style.transform = `translateX(-${index * 100}%)`;
            }
    
            function nextSlide() {
                currentIndex = (currentIndex + 1) % carouselItems.length;
                showSlide(currentIndex);
            }
    
            if (carouselItems.length > 1) { // Only start the interval if there's more than one slide
                setInterval(nextSlide, 3000);
            }
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navList = document.querySelector('.nav-list');

        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                navList.classList.toggle('active');
            });
        }

        // Dropdown handling for mobile
        const dropdownItems = document.querySelectorAll('.has-dropdown');
        dropdownItems.forEach(item => {
            const link = item.querySelector('a');
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    item.classList.toggle('active');
                }
            });
        });

        // Add smooth scroll animation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Add hover animation for nav items
        const navItems = document.querySelectorAll('.nav-list > li > a');
        navItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    });
