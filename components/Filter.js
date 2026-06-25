const filterButtons = document.querySelectorAll('.portfolio__filter');

function filterProjects(filter) {
  const items = document.querySelectorAll('.portfolio__item');

  items.forEach(function(item) {
    if (filter === 'all') {
      item.style.display = 'flex';
      return;
    }
    const tag = item.querySelector('.portfolio__item-tag');
    const tagText = tag ? tag.dataset.tag : '';
    item.style.display = tagText === filter ? 'flex' : 'none';
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