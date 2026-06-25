const filterButtons = document.querySelectorAll('.portfolio__filter');

function filterProjects(filter) {
  const items = document.querySelectorAll('.portfolio__item');

  items.forEach(function(item) {
    const tag = item.querySelector('.portfolio__item-tag');
    const tagText = tag ? tag.dataset.tag : '';
    const match = filter === 'all' || tagText === filter;

    if (match) {
      item.style.display = 'flex';
      requestAnimationFrame(function() {
        item.classList.remove('hidden');
      });
    } else {
      item.classList.add('hidden');
      item.addEventListener('transitionend', function hide() {
        if (item.classList.contains('hidden')) {
          item.style.display = 'none';
        }
        item.removeEventListener('transitionend', hide);
      });
    }
  });
}

filterButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    filterButtons.forEach(function(btn) {
      btn.classList.remove('active');
    });
    button.classList.add('active');
    filterProjects(button.dataset.filter);
  });
});