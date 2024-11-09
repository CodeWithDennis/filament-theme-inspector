export function createCopyableItem(text) {
  const textNode = document.createElement('span');
  const copyButton = document.createElement('button');
  const item = document.createElement('div');

  textNode.classList.add('class-text');
  textNode.textContent = text;

  const copyIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="fi-btn-icon h-5 w-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
        </svg>`;

  const checkmarkSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="fi-btn-icon h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5L19 7" />
        </svg>`;

  copyButton.innerHTML = copyIcon;
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(text).then(() => {
      copyButton.innerHTML = checkmarkSVG;
      setTimeout(() => copyButton.innerHTML = copyIcon, 2000);
    }).catch(err => console.error('Failed to copy: ', err));
  });

  item.appendChild(textNode);
  item.appendChild(copyButton);
  return item;
}
