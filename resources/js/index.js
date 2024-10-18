// Function to create and style the popup
function createPopup() {
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        display: none; /* Initially hidden */
        z-index: 9999; /* Set a high z-index */
    `;
    document.body.appendChild(popup);
    return popup;
}

// Function to show the popup
function showPopup(popup, text, x, y) {
    popup.innerText = text;
    popup.style.left = `${x + 10}px`;
    popup.style.top = `${y + 10}px`;
    popup.style.display = 'block'; // Show instantly
}

// Function to hide the popup
function hidePopup(popup) {
    popup.style.display = 'none'; // Hide instantly
}

// Initialize the popup
const popup = createPopup();

// Set up event listeners for elements with classes
document.querySelectorAll("[class]").forEach(el => {
    el.classList.forEach(cls => {
        if (cls.startsWith('fi-')) {
            el.addEventListener('mouseenter', e => {
                showPopup(popup, cls, e.pageX, e.pageY);
            });
            el.addEventListener('mouseleave', () => {
                hidePopup(popup);
            });
        }
    });
});