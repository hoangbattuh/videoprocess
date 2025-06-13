document.addEventListener('DOMContentLoaded', () => {
  const sidebarButtons = document.querySelectorAll('.button-ghost');
  const featureCards = document.querySelectorAll('.card-custom');
  const toggleDark = document.getElementById('toggle-dark');
  const body = document.body;

  // Sidebar active state
  sidebarButtons.forEach(button => {
    button.addEventListener('click', () => {
      sidebarButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const featureName = button.textContent.trim();
      console.log(`Chuyển đến chức năng: ${featureName}`);
    });
  });

  // Card click
  featureCards.forEach(card => {
    card.addEventListener('click', () => {
      const featureName = card.querySelector('h2').textContent.trim();
      console.log(`Mở chức năng: ${featureName}`);
    });
  });

  // Dark mode toggle
  if (toggleDark) {
    toggleDark.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      document.querySelectorAll('.bg-gray-50').forEach(el => el.classList.toggle('dark'));
    });
  }
});