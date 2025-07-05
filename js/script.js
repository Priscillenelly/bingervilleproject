
        function animateCounters() {
            const counters = document.querySelectorAll('.counter');
            const speed = 200; // Plus la valeur est petite, plus l'animation est rapide
            
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;
                
                if(count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(animateCounters, 1);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            });
        }
        
        // Démarrer l'animation lorsque la section est visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold: 0.5});
        
        observer.observe(document.querySelector('.commune-section'));
    

  // Dupliquer les logos pour effet infini si pas déjà fait
  const logoContainer = document.querySelector('.partner-logos');
  if (logoContainer) {
    const clones = logoContainer.innerHTML;
    logoContainer.innerHTML += clones; // double les logos pour une boucle continue
  }

  document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.navbar');
  let lastScroll = 0;
  const delta = 10;          // seuil pour éviter les micro‑mouvements
  const navHeight = nav.offsetHeight;

  window.addEventListener('scroll', () => {
    const current = window.pageYOffset;

    // Ignore les petits déplacements
    if (Math.abs(current - lastScroll) <= delta) return;

    if (current > lastScroll && current > navHeight) {
      // On descend → on cache
      nav.classList.add('nav-up');
    } else {
      // On monte → on montre
      nav.classList.remove('nav-up');
    }
    lastScroll = current;
  }, { passive: true });
});



