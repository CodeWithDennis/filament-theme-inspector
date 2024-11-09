import { createCopyableItem } from './copyable.js';

export function createPopup() {
  const popup = document.createElement('div');
  popup.classList.add('theme-inspector-container');
  document.body.appendChild(popup);
  return popup;
}

export function showPopup(popup, classes, x, y) {
  // Clear previous content
  popup.innerHTML = '';

  classes.forEach(cls => {
    const copyableItem = createCopyableItem(cls);
    popup.appendChild(copyableItem);
  });

  // Position popup based on mouse coordinates
  popup.style.left = `${x + 10}px`;
  popup.style.top = `${y + 10}px`;
  popup.classList.add('is-visible');

  // Ensure popup stays within the viewport
  const popupRect = popup.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  if (popupRect.right > viewportWidth) popup.style.left = `${viewportWidth - popupRect.width - 10}px`;
  if (popupRect.left < 0) popup.style.left = '10px';
  if (popupRect.bottom > viewportHeight) popup.style.top = `${y - popupRect.height - 10}px`;
}

export function hidePopup(popup) {
  popup.classList.remove('is-visible');
}
