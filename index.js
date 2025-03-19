import{a as y,S as p,i as h}from"./assets/vendor-DXaqCXe3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="49334882-a9a3b11390859b17c4f434c49";console.log("API KEY:",d);const L="https://pixabay.com/api/";async function w(o){try{return(await y.get(L,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Request error:",t),t}}const u=document.querySelector(".gallery"),i=document.querySelector(".loader");let l;function b(){u.innerHTML=""}function q(o){if(!u){console.error("Gallery element not found!");return}const t=o.map(({webformatURL:n,largeImageURL:a,tags:e="No description",likes:r,views:s,comments:g,downloads:m})=>`
        <li class="gallery-item">
          <a href="${a}" class="gallery-link">
            <img src="${n}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p><strong>Likes:</strong> ${r}</p>
            <p><strong>Views:</strong> ${s}</p>
            <p><strong>Comments:</strong> ${g}</p>
            <p><strong>Downloads:</strong> ${m}</p>
          </div>
        </li>`).join("");u.innerHTML=t,l?l.refresh():l=new p(".gallery a")}function E(){i&&(i.style.display="block")}function f(){setTimeout(()=>{i&&(i.style.display="none",console.log("Loader hidden"))},500)}console.log(i);function c(o){h.error({title:"Error",message:o})}document.addEventListener("DOMContentLoaded",()=>{f()});document.querySelector(".form").addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){c("Enter search query");return}E(),b();try{const n=await w(t);n.length===0?c("Sorry, there are no images matching your search query. Please try again!"):q(n)}catch{c("Something went wrong. Please try again!")}finally{f()}});
//# sourceMappingURL=index.js.map
