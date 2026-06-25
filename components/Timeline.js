const timeline = document.querySelector('.about-me__timeline');
const timelineTemplate = document.querySelector('#timeline-template').content.firstElementChild;

function createTimelineItem({ date, title, desc }) {
  const item = timelineTemplate.cloneNode(true);

  const dateEl = item.querySelector('.about-me__timeline-date');
  if (date) {
    dateEl.textContent = date;
  } else {
    dateEl.remove();
  }

  const titleEl = item.querySelector('.about-me__timeline-title');
  if (title) {
    titleEl.textContent = title;
  } else {
    titleEl.remove();
  }

  const descEl = item.querySelector('.about-me__timeline-desc');
  if (desc) {
    descEl.textContent = desc;
  } else {
    descEl.remove();
  }

  return item;
}

function renderTimelineItem(data) {
  timeline.append(createTimelineItem(data));
}