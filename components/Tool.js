const tools = document.querySelector('.dev-tools__links');
const toolTemplate = document.querySelector('#tool-template').content.firstElementChild;

function createTool({ name, title, link, icon, color }) {
  const tool = toolTemplate.cloneNode(true);

  if (link) {
    tool.setAttribute('href', link);
  } else {
    tool.removeAttribute('href');
  }

  if (title) {
    tool.setAttribute('title', title);
  } else {
    tool.removeAttribute('title');
  }

  const iconEl = tool.querySelector('.dev-tools__icon');
  if (icon && color) {
    iconEl.style.setProperty('--icon-url', `url(https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${icon}.svg)`);
    iconEl.style.setProperty('--icon-color', `#${color}`);
  } else {
    iconEl.remove();
  }

  const nameEl = tool.querySelector('.dev-tools__name');
  if (name) {
    nameEl.textContent = name;
  } else {
    nameEl.remove();
  }

  return tool;
}

function renderTool(data) {
  tools.append(createTool(data));
}