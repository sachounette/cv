const menu = document.querySelector('.nav-menu')
const menuItems = document.querySelectorAll('.menu-item')
const logo = document.querySelector('.logo')
const logoItems = document.querySelectorAll('.logo-item')


function toggleMenu() {
  menu.classList.toggle('open-menu') 
  logo.classList.toggle('open-logo') 

}
logo.addEventListener("click", toggleMenu)
menu.addEventListener("click", toggleMenu)


function closeMenu(){
   

    logoItems.forEach((el) => { menu.classList.remove('open-menu')
   

})

}
menu.addEventListener("click", closeMenu)

/*  slider  */




 let slides = document.querySelectorAll(".slider-item");
 let btnRight = document.querySelector(".arrow-right");
 let btnLeft= document.querySelector(".arrow-left");
 let slider = document.querySelector('.slider');

 let index = 0;
 slides[3].classList.remove('active')
 const activeSlides = n => { //номер активного слайда

for (let slide of slides) {
slide.classList.remove('active');
}
slides[n].classList.add('active')

 }

const nextSlide = () => {
if(index == slides.length - 1) {
  index=0;
  activeSlides(index)
}
else {
  index++;
  activeSlides(index)

}
}
btnRight.addEventListener('click', nextSlide)


const prevSlide = () => {
  if(index == 0) {
    index= slides.length-1
    
    activeSlides(index)
  }
  else {
    index--;
    activeSlides(index)
  
  }
  }
  btnLeft.addEventListener('click', prevSlide)

