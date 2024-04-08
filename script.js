let dayEl=document.getElementById("day")
let hourEl=document.getElementById("hour")
let minuteEl=document.getElementById("minutes")
let secondEl=document.getElementById("second")



let newyear=new Date("Jan 1,2025 00:00:00").getTime()

setInterval(updateCountdown,100)

function updateCountdown(){
    const now=new Date().getTime()
    const gap=newyear-now
    
    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24;

    const d=Math.floor(gap/day)
    const h=Math.floor((gap%day)/hour)
    const m=Math.floor((gap%hour)/minute)
    const s=Math.floor((gap%minute)/second)   

    dayEl.innerText=d
    hourEl.innerText=h
    minuteEl.innerText=m
    secondEl.innerText=s
}
