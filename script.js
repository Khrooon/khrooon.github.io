const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#menu');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));document.querySelector('#year').textContent=new Date().getFullYear();const toast=document.querySelector('#toast');let timeout;document.querySelectorAll('[data-unpublished]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();toast.textContent=`${a.dataset.unpublished}: página propia próximamente`;toast.classList.add('visible');clearTimeout(timeout);timeout=setTimeout(()=>toast.classList.remove('visible'),3500)}));

// Visual color moods, with neutral as the default.
const themeButtons = document.querySelectorAll('[data-theme]');
function setTheme(value){document.body.dataset.theme=value;themeButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.theme===value)));}
themeButtons.forEach(button=>button.addEventListener('click',()=>setTheme(button.dataset.theme)));
setTheme('neutro');
