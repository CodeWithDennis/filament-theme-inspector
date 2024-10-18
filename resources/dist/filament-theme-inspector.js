function r(){let e=document.createElement("div");return e.style.cssText=`
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        display: none; /* Initially hidden */
        z-index: 9999; /* Set a high z-index */
        max-width: 200px; /* Set a maximum width */
        white-space: nowrap; /* Prevent text from wrapping */
        overflow: hidden; /* Hide overflow */
        text-overflow: ellipsis; /* Show ellipsis for overflowed text */
    `,document.body.appendChild(e),e}function a(e,i,n,o){e.innerText=i,e.style.left=`${n+10}px`,e.style.top=`${o+10}px`,e.style.display="block";let t=e.getBoundingClientRect(),d=window.innerWidth,l=window.innerHeight;t.right>d&&(e.style.left=`${d-t.width-10}px`),t.left<0&&(e.style.left="10px"),t.bottom>l&&(e.style.top=`${o-t.height-10}px`)}function c(e){e.style.display="none"}var s=r();document.querySelectorAll("[class]").forEach(e=>{e.classList.forEach(i=>{i.startsWith("fi-")&&(e.addEventListener("mouseenter",n=>{a(s,i,n.pageX,n.pageY)}),e.addEventListener("mouseleave",()=>{c(s)}))})});
