function c(){let e=document.createElement("div");e.style.cssText=`
        position: fixed; background: rgba(0, 0, 0, 0.8); color: white; 
        padding: 10px 15px; border-radius: 5px; display: none; 
        z-index: 9999; white-space: nowrap; overflow: hidden; 
        text-overflow: ellipsis;`;let t=document.createElement("button");return t.innerText="COPY",t.style.cssText=`
        background: rgba(0, 0, 0, 0.9); color: white; border: none; 
        cursor: pointer; margin-left: 10px; padding: 5px 10px; 
        font-size: 12px; border-radius: 5px; 
        transition: background 0.3s, transform 0.2s;`,t.addEventListener("click",()=>{let n=e.firstChild.nodeValue;navigator.clipboard.writeText(n).then(()=>l(e)).catch(i=>console.error("Failed to copy: ",i))}),e.appendChild(document.createTextNode("")),e.appendChild(t),document.body.appendChild(e),e}function p(e,t,n,i){e.firstChild.nodeValue=t,e.style.left=`${n+10}px`,e.style.top=`${i+10}px`,e.style.display="block";let o=e.getBoundingClientRect(),s=window.innerWidth,a=window.innerHeight;o.right>s&&(e.style.left=`${s-o.width-10}px`),o.left<0&&(e.style.left="10px"),o.bottom>a&&(e.style.top=`${i-o.height-10}px`)}function l(e){e.style.display="none"}var r=c(),d=!1;document.querySelectorAll("[class]").forEach(e=>{e.classList.forEach(t=>{t.startsWith("fi-")&&(e.addEventListener("mouseenter",n=>{d||p(r,t,n.clientX,n.clientY)}),e.addEventListener("mouseleave",()=>{d||l(r)}))})});document.addEventListener("keydown",e=>{e.altKey&&(d=!0,r.style.pointerEvents="auto")});document.addEventListener("keyup",e=>{(e.key==="Alt"||e.key==="Meta")&&(d=!1)});
