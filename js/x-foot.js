var scroll=document.querySelector(".scroll")
window.onscroll=function(){
  var scrollT=document.body.scrollTop||document.documentElement.scrollTop;
  if(scrollT>=500){
      scroll.style.display="block";
  }
  else{scroll.style.display="none"}
}
scroll.onclick=function(){
  var scrollT=document.body.scrollTop||document.documentElement.scrollTop;
   var timer=setInterval(function(){
    scrollT-=300;
    if(scrollT<=0){
        clearInterval(timer);
        scrollT=0;
    }
    document.body.scrollTop=scrollT;
    document.documentElement.scrollTop=scrollT;
   },20)
}

