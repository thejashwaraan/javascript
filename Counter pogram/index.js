const decreasebt=document.getElementById("b3")
const resetbt=document.getElementById("b2")
const increasebt=document.getElementById("b1")

const countlabel=document.getElementById("l1")

let count=0;

increasebt.onclick=function(){
    count++;
    countlabel.textContent=count;
}
decreasebt.onclick=function(){
    count--;
    countlabel.textContent=count;
}
resetbt.onclick=function(){
    count=0;
    countlabel.textContent=count;
}