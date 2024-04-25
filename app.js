
// Toss Task Started

// 0 Chaand
// 1 Masjid

const div = document.querySelector('.div');
let paragraph =document.querySelector('.paragraph');


function toss(clickBtn){
    
    let tossVal = Math.floor(Math.random()*2);
    console.log(tossVal);

if(tossVal===0){


div.innerHTML =`<p><img src="./image/Chaand.jpeg" width="200px" height="200px" alt=""></p>`

}else if(tossVal===1){

div.innerHTML = `<p><img src="./image/masjid.jpg" width="200px" height="200px" alt=""></p>`

} if(clickBtn === 'Chaand' && tossVal=== 0 || clickBtn ==='Masjid' && tossVal === 1){
    paragraph.innerHTML="You win the toss";

}else{
   paragraph.innerHTML= `You lose the toss`;

}
}




// Toss Task ended