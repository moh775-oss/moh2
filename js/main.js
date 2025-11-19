  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
  });

  // Close menu when clicking on a link
  document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
          navToggle.classList.remove('active');
          navMenu.classList.remove('active');
      });
  });

  // Form Validation and Submission
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let isValid = true;

      // Name validation
      const name = document.getElementById('name');
      const nameError = document.getElementById('nameError');
      if (name.value.trim() === '') {
          nameError.style.display = 'block';
          isValid = false;
      } else {
          nameError.style.display = 'none';
      }

      // Email validation
      const email = document.getElementById('email');
      const emailError = document.getElementById('emailError');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
          emailError.style.display = 'block';
          isValid = false;
      } else {
          emailError.style.display = 'none';
      }

      // Subject validation
      const subject = document.getElementById('subject');
      const subjectError = document.getElementById('subjectError');
      if (subject.value.trim() === '') {
          subjectError.style.display = 'block';
          isValid = false;
      } else {
          subjectError.style.display = 'none';
      }

      // Message validation
      const message = document.getElementById('message');
      const messageError = document.getElementById('messageError');
      if (message.value.trim() === '') {
          messageError.style.display = 'block';
          isValid = false;
      } else {
          messageError.style.display = 'none';
      }

      // If form is valid, redirect to WhatsApp
      if (isValid) {
          const phoneNumber = "+967775294208";
          const text = `مرحبًا، أنا ${name.value}. ${message.value}`;
          const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
          window.open(url, '_blank');

          // Reset form
          contactForm.reset();

          alert('تم إرسال رسالتك بنجاح! سيتم توجيهك إلى واتساب.');
      }
  });


  window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
          navbar.style.background = 'rgba(5, 10, 20, 0.98)';
          navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
      } else {
          navbar.style.background = 'rgba(10, 15, 28, 0.95)';
          navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
      }
  });

  // Project Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const projectCards = document.querySelectorAll('.project-card');

  tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          // Remove active class from all buttons
          tabBtns.forEach(b => b.classList.remove('active'));
          // Add active class to clicked button
          btn.classList.add('active');

          const filter = btn.getAttribute('data-filter');

          projectCards.forEach(card => {
              if (filter === 'all' || card.getAttribute('data-category') === filter) {
                  card.style.display = 'block';
              } else {
                  card.style.display = 'none';
              }
          });
      });
  });

  // Add scroll animation for elements
  const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.service-card, .project-card, .timeline-item, .contact-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
  });


  function fixMobileLayout() {
      // منع التمرير الأفقي
      document.body.style.overflowX = 'hidden';

      // إصلاح عرض النافبار
      const navbar = document.querySelector('.navbar');
      if (window.innerWidth <= 768) {
          navbar.style.width = '100vw';
          navbar.style.right = '0';
      }

      // إصلاح عرض المحتوى
      const containers = document.querySelectorAll('.container');
      containers.forEach(container => {
          container.style.maxWidth = '100%';
          container.style.overflow = 'hidden';
      });
  }

  // تشغيل الإصلاح عند التحميل وعند تغيير حجم الشاشة
  window.addEventListener('load', fixMobileLayout);
  window.addEventListener('resize', fixMobileLayout);

  // إغلاق القائمة عند النقر على رابط
  document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
          const navMenu = document.querySelector('.nav-menu');
          const navToggle = document.querySelector('.nav-toggle');

          navMenu.classList.remove('active');
          navToggle.classList.remove('active');

          // إرجاع التمرير إلى الطبيعي
          document.body.style.overflow = 'auto';
      });
  });

  // منع التمرير عند فتح القائمة
  document.querySelector('.nav-toggle').addEventListener('click', function () {
      const navMenu = document.querySelector('.nav-menu');

      if (navMenu.classList.contains('active')) {
          document.body.style.overflow = 'auto';
      } else {
          document.body.style.overflow = 'hidden';
      }
  });