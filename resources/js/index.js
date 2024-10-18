function createPopup() {
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed; 
        background: rgba(0, 0, 0, 0.8); 
        padding: 10px 15px; 
        border-radius: 5px; 
        display: none; 
        z-index: 9999; 
        white-space: nowrap; 
        overflow: hidden; 
        text-overflow: ellipsis; 
        display: flex; 
        align-items: center;`;

    const textNode = document.createElement('span');
    textNode.style.color = 'white';
    textNode.style.marginRight = '10px';
    popup.appendChild(textNode);

    const copyButton = document.createElement('button');
    const copyIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="fi-btn-icon transition duration-75 h-5 w-5 text-gray-400 dark:text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
        </svg>`;

    copyButton.innerHTML = copyIcon;
    copyButton.style.cssText = `
        background: rgba(0, 0, 0, 0.5); 
        color: white; 
        border: none; 
        cursor: pointer; 
        padding: 5px 10px; 
        font-size: 12px; 
        border-radius: 5px;`;

    const checkmarkSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="fi-btn-icon transition duration-75 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5L19 7" />
        </svg>`;

    copyButton.addEventListener('click', () => {
        const textToCopy = textNode.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            copyButton.innerHTML = checkmarkSVG;
            setTimeout(() => {
                copyButton.innerHTML = copyIcon;
            }, 2000);
        }).catch(err => console.error('Failed to copy: ', err));
    });

    popup.appendChild(copyButton);
    document.body.appendChild(popup);
    return { popup, textNode };
}

function showPopup(popup, textNode, text, x, y) {
    textNode.textContent = text;
    popup.style.left = `${x + 10}px`;
    popup.style.top = `${y + 10}px`;
    popup.style.display = 'flex';

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

const { popup, textNode } = createPopup();
let isFrozen = false;

document.body.addEventListener('mouseenter', (e) => {
    if (e.target.matches('[class*="fi-"]') && !isFrozen) {
        const cls = Array.from(e.target.classList).find(c => c.startsWith('fi-'));
        showPopup(popup, textNode, cls, e.clientX, e.clientY);
    }
}, true);

document.body.addEventListener('mouseleave', (e) => {
    if (e.target.matches('[class*="fi-"]') && !isFrozen) {
        hidePopup(popup);
    }
}, true);

document.addEventListener('keydown', (e) => {
    if (e.altKey) {
        isFrozen = true;
        popup.style.pointerEvents = 'auto';
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'Alt' || e.key === 'Meta') isFrozen = false;
});
