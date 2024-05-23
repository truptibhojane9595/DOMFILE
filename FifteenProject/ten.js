document.addEventListener('load', () => {
  const navToggle = document.querySelector('.nav-toggle'); 
  const linksContainer = document.querySelector('.links-container'); 
  const scrollLinks = document.querySelectorAll('.scroll-link'); 
  const topLink = document.querySelector('.top-link'); 
  const date = document.getElementById('date'); 

  navToggle.addEventListener('click', () => {
      linksContainer.classList.toggle('show-links');
  });

  scrollLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault(); 
          const id = e.currentTarget.getAttribute('href').slice(1);
          const element = document.getElementById(id); 
          element.scrollIntoView({ behavior: 'smooth' }); 
          linksContainer.classList.remove('show-links'); 
      });
  });

  window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
          topLink.classList.add('show-link');
      } else {
          topLink.classList.remove('show-link');
      }
  });

  date.textContent = new Date().getFullYear();
});
