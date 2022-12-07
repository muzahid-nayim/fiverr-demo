const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");



nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

// =================================================

const btnav_card1 = document.getElementById('btnav_card1');
const btnav_card2 = document.getElementById('btnav_card2');
const btnav_card3 = document.getElementById('btnav_card3');
const btnav_card4 = document.getElementById('btnav_card4');
const btnav_card5 = document.getElementById('btnav_card5');
const btnav_card6 = document.getElementById('btnav_card6');
const btnav_card7 = document.getElementById('btnav_card7');
const btnav_card8 = document.getElementById('btnav_card8');
const btnav_card9 = document.getElementById('btnav_card9');

const angle1 = document.getElementById('angle1');
const angle2 = document.getElementById('angle2');
const angle3 = document.getElementById('angle3');
const angle4 = document.getElementById('angle4');
const angle5 = document.getElementById('angle5');
const angle6 = document.getElementById('angle6');
const angle7 = document.getElementById('angle7');
const angle8 = document.getElementById('angle8');
const angle9 = document.getElementById('angle9');

// console.log(angle);

let exapndFunction = (clcname)=>{

  if(clcname == 1){
    expF(btnav_card1,angle1);
  }
  else if(clcname == 2){
    expF(btnav_card2,angle2);
  }
  else if(clcname == 3){
    expF(btnav_card3,angle3);
  }
  else if(clcname == 4){
    expF(btnav_card4,angle4);
  }
  else if(clcname == 5){
    expF(btnav_card5,angle5);
  }
  else if(clcname == 6){
    expF(btnav_card6,angle6);
  }
  else if(clcname == 7){
    expF(btnav_card7,angle7);
  }
  else if(clcname == 8){
    expF(btnav_card8,angle8);
  }
  else if(clcname == 9){
    expF(btnav_card9,angle9);
  }


}


let counter = true;
function expF(containerName,angle){

  if(counter == true){
    containerName.style.height = "auto";
    angle.style.transform = "rotate(180deg)"
    counter = false;

  }
  else{
    containerName.style.height = 30 + "px"
    angle.style.transform = "rotate(0deg)"
    counter = true
  }

}


const bars = document.getElementById('bars');
const sider = document.getElementById('sider');
const header = document.getElementById('header');
const nav = document.getElementById('nav');
bars.onclick = ()=> sider.style.left = 0 + "px";
header.onclick = ()=> sider.style.left = -250 + "px";
    
  
  
 


   