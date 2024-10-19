// const ↓
const projects = document.querySelector('.portfolio__items');
const projectTemplate = document.querySelector('#project-template').content.querySelector('.portfolio__item');

// function ↓
function createProject({title, github, preview}) {
  const project = projectTemplate.cloneNode(true);
  const projectTitle = project.querySelector('.portfolio__item-name');
  const projectGithub = project.querySelector('.link_github');
  const projectPreview = project.querySelector('.link_preview');

  projectTitle.textContent = title;
  projectGithub.setAttribute('href', github);
  projectPreview.setAttribute('href', preview);

  return project;
}

function renderProject(data) {
  projects.prepend(createProject(data));
};