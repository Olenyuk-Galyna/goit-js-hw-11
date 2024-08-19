import{S as u,i as a}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="45519676-8baf865f5b6a7e52cd4b281c8";function d(s){const o=new URLSearchParams({key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const f=document.querySelector("#gallery");function m(s){const o=s.map(e=>`
     <li class="image-card">
            <a href="${e.largeImageURL}"><img src="${e.webformatURL}" class="card-img" alt="${e.tags}" /></a>
        <ul class="description">
        <li><p>likes:</p><p>${e.likes}</p></li>
        <li><p>views:</p><p>${e.views}</p></li>
        <li><p>comments:</p><p>${e.comments}</p></li>
        <li><p>downloads:</p><p>${e.downloads}</p></li>
        </ul>
        </li>
    `).join("");f.insertAdjacentHTML("beforeend",o),h.refresh()}const h=new u(".image-card a",{captionsData:"alt",captionDelay:250}),l=document.querySelector(".serch-form"),g=document.querySelector("#gallery"),c=document.querySelector(".loader");l.addEventListener("submit",y);function y(s){s.preventDefault();const{serchInput:o}=s.currentTarget.elements,e=o.value.trim();if(g.innerHTML="",e==="")return a.error({position:"topRight",message:"Please fill in the fields"});c.classList.remove("hiden"),d(e).then(i=>{if(i.hits.length===0)return a.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});m(i.hits),l.reset()}).catch(i=>{a.error({position:"topRight",message:i.message})}).finally(()=>{c.classList.add("hiden")})}
//# sourceMappingURL=commonHelpers.js.map
