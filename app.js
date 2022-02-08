


let color = document.querySelector(".color");
let btn= document.getElementById("btn");
btn.addEventListener("click",()=>{
    document.body.style.backgroundColor=`rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`
    color.innerText=document.body.style.backgroundColor
});

 const getRandomNumber = ()=>Math.round(Math.random()*255);