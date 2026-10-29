(function(){
var num=document.getElementById('num'),msg=document.getElementById('msg'),out=document.getElementById('out'),link='';
function build(){
  var n=num.value.replace(/\D/g,'').replace(/^0+/,'');
  if(n.length<8){out.textContent='Enter a valid number with country code, for example 919876543210.';link='';return;}
  var m=msg?msg.value.trim():'';
  link='https://wa.me/'+n+(m?'?text='+encodeURIComponent(m):'');
  out.textContent=link;
}
document.getElementById('gen').onclick=build;
document.getElementById('copy').onclick=function(){build();if(!link)return;if(navigator.clipboard){navigator.clipboard.writeText(link).then(function(){out.textContent='Copied: '+link;});}};
document.getElementById('test').onclick=function(){build();if(link)window.open(link,'_blank','noopener');};
})();
