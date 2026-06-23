const timeline = document.querySelector('.about-me__timeline');
const timelineTemplate = document.querySelector('#timeline-template').content.firstElementChild;

function createTimelineItem({ date, title, desc }) {
  const item = timelineTemplate.cloneNode(true);

  item.querySelector('.about-me__timeline-date').textContent = date;
  item.querySelector('.about-me__timeline-title').textContent = title;
  item.querySelector('.about-me__timeline-desc').textContent = desc;

  return item;
}

function renderTimelineItem(data) {
  timeline.append(createTimelineItem(data));
}