let hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let color = document.querySelector(".color");
let btn= document.getElementById("btn");

btn.onclick=()=>{
   let code=`#`;
   for(let i=0; i<6;i++){
       code+=hex[getRandomNumber()]
   }
//    console.log(code);
document.body.style.backgroundColor=code
color.innerText=code

}

 const getRandomNumber = ()  => Math.floor(Math.random()*hex.length);