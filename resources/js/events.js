import { showPopup, hidePopup } from './popup.js';

export function setupEventListeners(popup) {
  let isFrozen = false;

  document.body.addEventListener('mouseenter', (e) => {
    if (e.target.matches('[class*="fi-"]') && !isFrozen) {
      const fiClasses = Array.from(e.target.classList).filter(c => c.startsWith('fi-'));
      if (fiClasses.length > 0) showPopup(popup, fiClasses, e.clientX, e.clientY);
    }
  }, true);

  document.body.addEventListener('mouseleave', (e) => {
    if (e.target.matches('[class*="fi-"]') && !isFrozen) hidePopup(popup);
  }, true);

  document.addEventListener('keydown', (e) => {
    if (window.filamentData.toggle && e.key === 'Alt') {
      isFrozen = !isFrozen;
    } else if (!window.filamentData.toggle && e.altKey) {
      isFrozen = true;
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Alt' || e.key === 'Meta') isFrozen = false;
  });
}