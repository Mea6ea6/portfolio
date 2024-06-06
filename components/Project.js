// const ↓
const projects = document.querySelector('.portfolio__items');
const projectTemplate = document.querySelector('#project-template').content.querySelector('.portfolio__item');

// function ↓
function createProject({title, download, github, preview}) {
  const project = projectTemplate.cloneNode(true);
  const projectTitle = project.querySelector('.portfolio__item-name');
  const projectDownload = project.querySelector('.link_download');
  const projectGithub = project.querySelector('.link_github');
  const projectPreview = project.querySelector('.link_preview');

  projectTitle.textContent = title;
  projectDownload.setAttribute('href', download);
  projectGithub.setAttribute('href', github);
  projectPreview.setAttribute('href', preview);

  return project;
}

function renderProject(data) {
  projects.prepend(createProject(data));
};