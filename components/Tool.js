// const ↓
const tools = document.querySelector('.dev-tools__links');
const toolTemplate = document.querySelector('#tool-template').content.firstElementChild;

// function ↓
function createTool({ name, title, link, icon, color }) {
  const tool = toolTemplate.cloneNode(true);

  tool.setAttribute('href', link);
  tool.setAttribute('title', title);

  const iconEl = tool.querySelector('.dev-tools__icon');
  iconEl.style.setProperty('--icon-url', `url(https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${icon}.svg)`);
  iconEl.style.setProperty('--icon-color', `#${color}`);

  const nameEl = tool.querySelector('.dev-tools__name');
  nameEl.textContent = name;

  return tool;
}

function renderTool(data) {
  tools.append(createTool(data));
}