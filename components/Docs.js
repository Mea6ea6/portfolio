const docsContainer = document.querySelector('.about-me__docs');
const docTemplate = document.querySelector('#doc-template').content.firstElementChild;
const accordion = document.querySelector('.about-me__accordion');
const trigger = document.querySelector('.about-me__accordion-trigger');

function createDoc({ name, action, href, download }) {
  const doc = docTemplate.cloneNode(true);

  doc.setAttribute('href', href);

  if (download) {
    doc.setAttribute('download', '');
    doc.removeAttribute('target');
  }

  const nameEl = doc.querySelector('.about-me__doc-name');
  if (name) nameEl.textContent = name;

  const actionEl = doc.querySelector('.about-me__doc-action');
  if (action) actionEl.textContent = action;

  return doc;
}

function renderDoc(data) {
  docsContainer.append(createDoc(data));
}

initialDocs.forEach(renderDoc);

trigger.addEventListener('click', function() {
  accordion.classList.toggle('open');
  const arrow = trigger.querySelector('.about-me__accordion-arrow');
  arrow.textContent = accordion.classList.contains('open') ? '−' : '+';
});