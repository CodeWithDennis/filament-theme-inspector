function d(){let e=document.createElement("div");return e.style.cssText=`
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        display: none; /* Initially hidden */
        z-index: 9999; /* Set a high z-index */
    `,document.body.appendChild(e),e}function s(e,t,n,o){e.innerText=t,e.style.left=`${n+10}px`,e.style.top=`${o+10}px`,e.style.display="block"}function a(e){e.style.display="none"}var i=d();document.querySelectorAll("[class]").forEach(e=>{e.classList.forEach(t=>{t.startsWith("fi-")&&(e.addEventListener("mouseenter",n=>{s(i,t,n.pageX,n.pageY)}),e.addEventListener("mouseleave",()=>{a(i)}))})});
