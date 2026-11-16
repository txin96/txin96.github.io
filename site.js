document.addEventListener('DOMContentLoaded',()=>{const btn=document.querySelector('.menu-toggle'),nav=document.querySelector('.mobile-nav');if(btn&&nav){btn.addEventListener('click',()=>{const open=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!open));nav.hidden=open});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.hidden=true;btn.setAttribute('aria-expanded','false')}));}document.querySelectorAll('.back-top').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}));});
// Close the language popover when focus moves outside, Escape is pressed, or the user clicks elsewhere.
document.addEventListener('DOMContentLoaded',()=>{
  const languageMenu=document.querySelector('details.language-switch');
  if(!languageMenu)return;
  document.addEventListener('pointerdown',event=>{
    if(languageMenu.open&&!languageMenu.contains(event.target))languageMenu.open=false;
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&languageMenu.open){languageMenu.open=false;languageMenu.querySelector('summary')?.focus();}
  });
});
