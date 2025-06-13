document.addEventListener('DOMContentLoaded', () => {
  const sidebarButtons = document.querySelectorAll('.button-ghost');
  const featureCards = document.querySelectorAll('.card-custom');

  sidebarButtons.forEach(button => {
    button.addEventListener('click', () => {
      const featureName = button.textContent.trim();
      console.log(`Chuyển đến chức năng: ${featureName}`);
      // Logic để tải giao diện chức năng tương ứng sẽ được thêm ở đây
      // Ví dụ: window.location.href = `/${featureName.toLowerCase().replace(/ /g, '-')}`;
    });
  });

  featureCards.forEach(card => {
    card.addEventListener('click', () => {
      const featureName = card.querySelector('h2').textContent.trim();
      console.log(`Mở chức năng: ${featureName}`);
      // Logic để tải giao diện chức năng tương ứng sẽ được thêm ở đây
    });
  });
});