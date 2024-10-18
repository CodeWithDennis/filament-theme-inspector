function c(){let e=document.createElement("div");e.style.cssText=`
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
    `;let t=document.createElement("button");return t.innerText="COPY",t.style.cssText=`
    background: rgba(0, 0, 0, 0.9); /* Darker background matching the popup */
    color: white;
    border: none; /* No border for a cleaner look */
    cursor: pointer;
    margin-left: 10px; /* Increased margin to the left */
    padding: 5px 10px; /* Padding for the button */
    font-size: 12px;
    border-radius: 5px; /* Rounded corners */
    transition: background 0.3s, transform 0.2s; /* Smooth transitions */
`,t.addEventListener("click",()=>{let o=e.firstChild.nodeValue;navigator.clipboard.writeText(o).then(()=>{a(e)}).catch(i=>{console.error("Failed to copy: ",i)})}),e.appendChild(document.createTextNode("")),e.appendChild(t),document.body.appendChild(e),e}function p(e,t,o,i){e.firstChild.nodeValue=t,e.style.left=`${o+10}px`,e.style.top=`${i+10}px`,e.style.display="block";let n=e.getBoundingClientRect(),s=window.innerWidth,l=window.innerHeight;n.right>s&&(e.style.left=`${s-n.width-10}px`),n.left<0&&(e.style.left="10px"),n.bottom>l&&(e.style.top=`${i-n.height-10}px`)}function a(e){e.style.display="none"}var d=c(),r=!1;document.querySelectorAll("[class]").forEach(e=>{e.classList.forEach(t=>{t.startsWith("fi-")&&(e.addEventListener("mouseenter",o=>{r||p(d,t,o.clientX,o.clientY)}),e.addEventListener("mouseleave",()=>{r||a(d)}))})});document.addEventListener("keydown",e=>{e.altKey&&(r=!0,d.style.pointerEvents="auto")});document.addEventListener("keyup",e=>{(e.key==="Alt"||e.key==="Meta")&&(r=!1)});
