(function(){
  document.querySelectorAll('.more').forEach(function(b){var t=document.getElementById(b.dataset.t);b.addEventListener('click',function(){var open=t.classList.toggle('clamp')===false;b.textContent=open?'Voir moins':'… voir plus';b.setAttribute('aria-expanded',open)})});
  var tr=document.getElementById('track'),p=document.getElementById('prev'),n=document.getElementById('next'),c=document.getElementById('cnt'),d=document.getElementById('dots').children,N=tr.children.length;
  function idx(){return tr.clientWidth?Math.round(tr.scrollLeft/tr.clientWidth):0}
  function upd(){var i=idx();c.textContent=(i+1)+' / '+N;p.disabled=i<=0;n.disabled=i>=N-1;for(var k=0;k<d.length;k++)d[k].classList.toggle('on',k===i)}
  function go(k){tr.scrollTo({left:(idx()+k)*tr.clientWidth,behavior:'smooth'})}
  p.addEventListener('click',function(){go(-1)});n.addEventListener('click',function(){go(1)});document.getElementById('hint').addEventListener('click',function(){go(1)});
  tr.addEventListener('scroll',function(){requestAnimationFrame(upd)},{passive:true});
  tr.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();go(1)}if(e.key==='ArrowLeft'){e.preventDefault();go(-1)}});
  function reset(){tr.style.scrollBehavior='auto';tr.scrollLeft=0;upd();tr.style.scrollBehavior=''}
  if('scrollRestoration' in history)history.scrollRestoration='manual';
  reset();window.addEventListener('load',reset);window.addEventListener('pageshow',reset);window.addEventListener('resize',upd);
  var pl=document.getElementById('play'),box=document.getElementById('vid');
  pl.addEventListener('click',function(){
    var src=box.dataset.src;if(!src)return;
    var v=document.createElement('video');v.src=src;v.controls=true;v.playsInline=true;v.autoplay=true;v.setAttribute('aria-label','Vidéo 47 % jamais diagnostiqués');
    box.innerHTML='';box.appendChild(v);v.play().catch(function(){});
  });
})();
