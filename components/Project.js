const projects = document.querySelector('.portfolio__items');
const projectTemplate = document.querySelector('#project-template').content.querySelector('.portfolio__item');

function createProject({ title, tag, github, preview }) {
  const project = projectTemplate.cloneNode(true);

  project.querySelector('.portfolio__item-name').textContent = title;
  project.querySelector('.link_github').setAttribute('href', github);
  project.querySelector('.link_preview').setAttribute('href', preview);

  const tagEl = project.querySelector('.portfolio__item-tag');
  tagEl.textContent = tag;
  tagEl.dataset.tag = tag;
  tagEl.classList.add(`portfolio__item-tag_${tag.replace('-', '_')}`);

  return project;
}

function renderProject(data) {
  projects.prepend(createProject(data));
};