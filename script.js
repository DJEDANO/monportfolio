// Menu mobile
document.getElementById('menuBtn').addEventListener('click', function() {
    const menu = document.getElementById('menu').querySelector('ul');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });
  
  // Fermeture du menu au clic sur un lien
  document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        document.getElementById('menu').querySelector('ul').style.display = 'none';
      }
    });
  });
  
  // Formulaire
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message envoyé avec succès !');
    this.reset();
  });
  
  // Animation au scroll
  window.addEventListener('scroll', function() {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach((project, index) => {
      const projectPosition = project.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (projectPosition < screenPosition) {
        project.style.opacity = '1';
        project.style.transform = 'translateY(0)';
      }
    });
  });
  
  // Initialisation des animations
  document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
  });