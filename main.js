let onbtn = document.getElementById("on1");
onbtn.addEventListener("click",function(){
    document.getElementById('bulb').src = "img/pic_bulbon.gif";
});

let offbtn = document.getElementById("off1");
offbtn.addEventListener('click', function(){
    document.getElementById('bulb').src = "img/pic_bulboff.gif";
});