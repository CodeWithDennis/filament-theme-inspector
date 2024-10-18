function l(){let t=document.createElement("div");t.style.cssText=`
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
        align-items: center;`;let n=document.createElement("span");n.style.color="white",n.style.marginRight="10px",t.appendChild(n);let e=document.createElement("button"),i=`
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="fi-btn-icon transition duration-75 h-5 w-5 text-gray-400 dark:text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
        </svg>`;e.innerHTML=i,e.style.cssText=`
        background: rgba(0, 0, 0, 0.5); 
        color: white; 
        border: none; 
        cursor: pointer; 
        padding: 5px 10px; 
        font-size: 12px; 
        border-radius: 5px;`;let s=`
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="fi-btn-icon transition duration-75 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5L19 7" />
        </svg>`;return e.addEventListener("click",()=>{let o=n.textContent;navigator.clipboard.writeText(o).then(()=>{e.innerHTML=s,setTimeout(()=>{e.innerHTML=i},2e3)}).catch(r=>console.error("Failed to copy: ",r))}),t.appendChild(e),document.body.appendChild(t),{popup:t,textNode:n}}function p(t,n,e,i,s){n.textContent=e,t.style.left=`${i+10}px`,t.style.top=`${s+10}px`,t.style.display="flex";let o=t.getBoundingClientRect(),r=window.innerWidth,c=window.innerHeight;o.right>r&&(t.style.left=`${r-o.width-10}px`),o.left<0&&(t.style.left="10px"),o.bottom>c&&(t.style.top=`${s-o.height-10}px`)}function h(t){t.style.display="none"}var{popup:d,textNode:u}=l(),a=!1;document.body.addEventListener("mouseenter",t=>{if(t.target.matches('[class*="fi-"]')&&!a){let n=Array.from(t.target.classList).find(e=>e.startsWith("fi-"));p(d,u,n,t.clientX,t.clientY)}},!0);document.body.addEventListener("mouseleave",t=>{t.target.matches('[class*="fi-"]')&&!a&&h(d)},!0);document.addEventListener("keydown",t=>{t.altKey&&(a=!0,d.style.pointerEvents="auto")});document.addEventListener("keyup",t=>{(t.key==="Alt"||t.key==="Meta")&&(a=!1)});
