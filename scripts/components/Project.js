// const ↓
const projects = document.querySelector('.project');
const projectTemplate = document.querySelector('#project-template').content.querySelector('.project__block');

// function ↓
function createProject({title, link}) {
  const project = projectTemplate.cloneNode(true);
  const projectLink = project.querySelector('.project__link');
  const projectTitle = project.querySelector('.project__title');

  projectLink.setAttribute('href', link);
  projectTitle.textContent = title;

  return project;
}

function renderProject(data, position = 'prepend') {
  switch (position) {
    case 'append':
      projects.append(createProject(data));
      break;
    case 'prepend':
      projects.prepend(createProject(data));
      break;
    default:
      break;
  };
};