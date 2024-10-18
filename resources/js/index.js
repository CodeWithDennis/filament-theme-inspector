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
        white-space: nowrap; /* Prevent text from wrapping */
        overflow: hidden; /* Hide overflow */
        text-overflow: ellipsis; /* Show ellipsis for overflowed text */
    `;

    // Create the copy button
    const copyButton = document.createElement('button');
    copyButton.innerText = 'COPY';
    copyButton.style.cssText = `
    background: rgba(0, 0, 0, 0.9); /* Darker background matching the popup */
    color: white;
    border: none; /* No border for a cleaner look */
    cursor: pointer;
    margin-left: 10px; /* Increased margin to the left */
    padding: 5px 10px; /* Padding for the button */
    font-size: 12px;
    border-radius: 5px; /* Rounded corners */
    transition: background 0.3s, transform 0.2s; /* Smooth transitions */
`;

    // Add copy functionality
    copyButton.addEventListener('click', () => {
        const textToCopy = popup.firstChild.nodeValue; // Get the text from the popup
        navigator.clipboard.writeText(textToCopy).then(() => {
            hidePopup(popup); // Hide the current popup after copying
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });

    popup.appendChild(document.createTextNode('')); // Placeholder for text
    popup.appendChild(copyButton); // Add the button to the popup
    document.body.appendChild(popup);
    return popup;
}

// Function to show the popup
function showPopup(popup, text, x, y) {
    popup.firstChild.nodeValue = text; // Set the text of the popup

    // Set initial position
    popup.style.left = `${x + 10}px`;
    popup.style.top = `${y + 10}px`;
    popup.style.display = 'block'; // Show instantly

    // Check for overflow and adjust position if necessary
    const popupRect = popup.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Adjust for right overflow
    if (popupRect.right > viewportWidth) {
        popup.style.left = `${viewportWidth - popupRect.width - 10}px`;
    }

    // Adjust for left overflow
    if (popupRect.left < 0) {
        popup.style.left = '10px'; // Keep it within the left edge
    }

    // Adjust for bottom overflow
    if (popupRect.bottom > viewportHeight) {
        popup.style.top = `${y - popupRect.height - 10}px`; // Move above the cursor
    }
}

// Function to hide the popup
function hidePopup(popup) {
    popup.style.display = 'none'; // Hide instantly
}

// Initialize the popup
const popup = createPopup();
let isFrozen = false;

// Set up event listeners for elements with classes
document.querySelectorAll("[class]").forEach(el => {
    el.classList.forEach(cls => {
        if (cls.startsWith('fi-')) {
            el.addEventListener('mouseenter', e => {
                if (!isFrozen) {
                    showPopup(popup, cls, e.clientX, e.clientY); // Use clientX and clientY
                }
            });
            el.addEventListener('mouseleave', () => {
                if (!isFrozen) {
                    hidePopup(popup);
                }
            });
        }
    });
});

// Listen for keydown and keyup events to toggle freeze state
document.addEventListener('keydown', (e) => {
    if (e.altKey) {
        isFrozen = true;
        popup.style.pointerEvents = 'auto'; // Allow pointer events even when frozen
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'Alt' || e.key === 'Meta') { // Handle both Alt and Command (Meta) keys
        isFrozen = false;
        // Optionally hide the popup when unfrozen
        // hidePopup(popup);
    }
});