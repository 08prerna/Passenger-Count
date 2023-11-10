var h2Element = document.getElementById('counter');
var deatils=document.getElementById('history');
var count=0;

function increment() {
    count=count+1;
    h2Element.innerHTML=count;
}

function save() {
    var str=count+" - ";
    deatils.innerHTML=deatils.innerHTML+str;
    h2Element.textContent=0;
    count=0;
}
