(() => {
 const bar=document.querySelector('.bar'), burger=document.querySelector('.burger'), progress=document.querySelector('.progress');
 function close(){bar.classList.remove('open');burger.setAttribute('aria-expanded','false');burger.setAttribute('aria-label','Open menu')}
 burger.addEventListener('click',()=>{const open=bar.classList.toggle('open');burger.setAttribute('aria-expanded',String(open));burger.setAttribute('aria-label',open?'Close menu':'Open menu')});
 bar.querySelectorAll('.menu a').forEach(link=>link.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 function update(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${max>0?window.scrollY/max:0})`;let current='';document.querySelectorAll('main section[id]').forEach(s=>{if(s.getBoundingClientRect().top<innerHeight*.4)current=s.id});bar.querySelectorAll('.nav a,.menu a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+current))}
 addEventListener('scroll',update,{passive:true});update();
})();
