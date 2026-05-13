// Nabad — shared scroll-reveal
(function(){
  if(!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  },{threshold:0.12, rootMargin:'0px 0px -40px 0px'});
  function bind(){ document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el)); }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();
