
document.addEventListener('DOMContentLoaded', function() {
  let triggered = false;
  function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = Math.max(1, Math.ceil(target / 100));
    function update() {
      count += increment;
      if (count > target) count = target;
      counter.textContent = count.toLocaleString();
      if (count < target) {
        requestAnimationFrame(update);
      }
    }
    update();
  }
  function handleCounters() {
    if (triggered) return;
    const section = document.querySelector('.expertise-stats-section');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      document.querySelectorAll('.counter').forEach(animateCounter);
      triggered = true;
      window.removeEventListener('scroll', handleCounters);
    }
  }
  window.addEventListener('scroll', handleCounters);
  handleCounters();
});


