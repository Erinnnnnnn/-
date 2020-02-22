const btn=document.querySelector('#fade-btn');
const obj=document.querySelector('#fade-obj');
obj.style.opacity=1;
var f=1;
btn.onclick=function() {
    if(obj.style.opacity==0)f=-1;
    btn.disabled=true;
    var int=window.setInterval(function() {
        obj.style.opacity-=f*0.1;
        if(obj.style.opacity<0||obj.style.opacity>1){
            clearInterval(int);
            btn.disabled=false;
            if(obj.style.opacity<0){btn.innerHTML="淡入";f=-1;}
            else {btn.innerHTML="淡出";f=1;}
        }
    },100);
}