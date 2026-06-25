const copyButtons = document.querySelectorAll('[data-copy]');

copyButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const text = button.dataset.copy;
    const tooltip = button.querySelector('.copy__tooltip');

    navigator.clipboard.writeText(text).then(function() {
      if (tooltip) {
        tooltip.textContent = 'E-mail copied!';
        setTimeout(function() {
          tooltip.textContent = 'Click to copy';
        }, 2000);
      }
    });
  });
});