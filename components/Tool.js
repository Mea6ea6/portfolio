// const ↓
const tools = document.querySelector('.dev-tools__items');
const toolTemplate = document.querySelector('#tool-template').content.querySelector('.dev-tools__item');

// function ↓
function createTool({name, title, link}) {
  const tool = toolTemplate.cloneNode(true);
  const toolItem = tool.querySelector('.dev-tools__link');

  toolItem.textContent = name;
  toolItem.setAttribute('title', title);
  toolItem.setAttribute('href', link);

  return tool;
}

function renderTool(data) {
  tools.append(createTool(data));
};