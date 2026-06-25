const projects = document.querySelector('.portfolio__items');
const projectTemplate = document.querySelector('#project-template').content.querySelector('.portfolio__item');

function createProject({ title, tag, github, preview }) {
  const project = projectTemplate.cloneNode(true);

  project.querySelector('.portfolio__item-name').textContent = title;

  const githubEl = project.querySelector('.link_github');
  if (github) {
    githubEl.setAttribute('href', github);
  } else {
    githubEl.remove();
  }

  const previewEl = project.querySelector('.link_preview');
  if (preview) {
    previewEl.setAttribute('href', preview);
  } else {
    previewEl.remove();
  }

  const tagEl = project.querySelector('.portfolio__item-tag');
  if (tag) {
    tagEl.textContent = tag;
    tagEl.dataset.tag = tag;
    tagEl.classList.add(`portfolio__item-tag_${tag.replace(/-/g, '_')}`);
  } else {
    tagEl.remove();
  }

  return project;
}

function renderProject(data) {
  projects.prepend(createProject(data));
}