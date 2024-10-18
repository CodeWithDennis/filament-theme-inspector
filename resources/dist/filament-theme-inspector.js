function p(){let e=document.createElement("div");return e.style.cssText=`
        position: fixed; 
        display: none; 
        z-index: 9999;`,document.body.appendChild(e),e}function f(e){let t=document.createElement("div");t.style.cssText=`
        background: rgba(0, 0, 0, 0.8); 
        padding: 10px 15px; 
        border-radius: 5px; 
        margin-left: 5px;
        margin-bottom: 10px;
        display: flex; 
        align-items: center;
        white-space: nowrap;           /* Prevent text wrapping */
        overflow: hidden;              /* Hide overflowed text */
        text-overflow: ellipsis;       /* Show ellipsis for overflowed text */
    `;let o=document.createElement("span");o.textContent=e,o.style.color="white",o.style.marginRight="10px";let n=document.createElement("button"),i=`
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="fi-btn-icon transition duration-75 h-5 w-5 text-gray-400 dark:text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
        </svg>`,r=`
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="fi-btn-icon transition duration-75 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5L19 7" />
        </svg>`;return n.innerHTML=i,n.style.cssText=`
        background: rgba(0, 0, 0, 0.5); 
        color: white; 
        border: none; 
        cursor: pointer; 
        padding: 5px 10px; 
        font-size: 12px; 
        border-radius: 5px;`,n.addEventListener("click",()=>{navigator.clipboard.writeText(e).then(()=>{n.innerHTML=r,setTimeout(()=>{n.innerHTML=i},2e3)}).catch(a=>console.error("Failed to copy: ",a))}),t.appendChild(o),t.appendChild(n),t}function h(e,t,o,n){e.innerHTML="",t.forEach(c=>{let d=f(c);e.appendChild(d)}),e.style.left=`${o+10}px`,e.style.top=`${n+10}px`,e.style.display="flex";let i=e.getBoundingClientRect(),r=window.innerWidth,a=window.innerHeight;i.right>r&&(e.style.left=`${r-i.width-10}px`),i.left<0&&(e.style.left="10px"),i.bottom>a&&(e.style.top=`${n-i.height-10}px`)}function u(e){e.style.display="none"}var l=p(),s=!1;document.body.addEventListener("mouseenter",e=>{if(e.target.matches('[class*="fi-"]')&&!s){let t=Array.from(e.target.classList).filter(o=>o.startsWith("fi-"));t.length>0&&h(l,t,e.clientX,e.clientY)}},!0);document.body.addEventListener("mouseleave",e=>{e.target.matches('[class*="fi-"]')&&!s&&u(l)},!0);document.addEventListener("keydown",e=>{e.altKey&&(s=!0,l.style.pointerEvents="auto")});document.addEventListener("keyup",e=>{(e.key==="Alt"||e.key==="Meta")&&(s=!1)});
