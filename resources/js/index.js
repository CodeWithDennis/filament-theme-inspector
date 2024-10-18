function createPopup() {
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed; background: rgba(0, 0, 0, 0.8); color: white; 
        padding: 10px 15px; border-radius: 5px; display: none; 
        z-index: 9999; white-space: nowrap; overflow: hidden; 
        text-overflow: ellipsis;`;

    const copyButton = document.createElement('button');
    copyButton.innerText = 'COPY';
    copyButton.style.cssText = `
        background: rgba(0, 0, 0, 0.9); color: white; border: none; 
        cursor: pointer; margin-left: 10px; padding: 5px 10px; 
        font-size: 12px; border-radius: 5px; 
        transition: background 0.3s, transform 0.2s;`;

    copyButton.addEventListener('click', () => {
        const textToCopy = popup.firstChild.nodeValue;
        navigator.clipboard.writeText(textToCopy).then(() => hidePopup(popup))
            .catch(err => console.error('Failed to copy: ', err));
    });

    popup.appendChild(document.createTextNode(''));
    popup.appendChild(copyButton);
    document.body.appendChild(popup);
    return popup;
}

function showPopup(popup, text, x, y) {
    popup.firstChild.nodeValue = text;
    popup.style.left = `${x + 10}px`;
    popup.style.top = `${y + 10}px`;
    popup.style.display = 'block';

    const popupRect = popup.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (popupRect.right > viewportWidth) {
        popup.style.left = `${viewportWidth - popupRect.width - 10}px`;
    }
    if (popupRect.left < 0) {
        popup.style.left = '10px';
    }
    if (popupRect.bottom > viewportHeight) {
        popup.style.top = `${y - popupRect.height - 10}px`;
    }
}

function hidePopup(popup) {
    popup.style.display = 'none';
}

const popup = createPopup();
let isFrozen = false;

document.querySelectorAll("[class]").forEach(el => {
    el.classList.forEach(cls => {
        if (cls.startsWith('fi-')) {
            el.addEventListener('mouseenter', e => {
                if (!isFrozen) showPopup(popup, cls, e.clientX, e.clientY);
            });
            el.addEventListener('mouseleave', () => {
                if (!isFrozen) hidePopup(popup);
            });
        }
    });
});

document.addEventListener('keydown', e => {
    if (e.altKey) {
        isFrozen = true;
        popup.style.pointerEvents = 'auto';
    }
});

document.addEventListener('keyup', e => {
    if (e.key === 'Alt' || e.key === 'Meta') isFrozen = false;
});