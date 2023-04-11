const container = document.querySelector('.opinions__slider');
const slides = Array.from(container.children);
const btnPrevious = document.querySelector('.opinions__btn--previous');
const btnNext = document.querySelector('.opinions__btn--next');
const dotContainer = document.querySelector('.opinions__dots');
const dots = Array.from(dotContainer.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) =>{ //repositioning slider in view inside the container
        slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition); // for every slide,set slide position

const moveToSlide = (currentSlide,targetSlide,container) =>{ //Method for moving slides
    container.style.transform = 'translateX(-' + targetSlide.style.left; + ')';
    currentSlide.classList.remove('active-slide');
    targetSlide.classList.add('active-slide');
}
const dotsToggle = (currentDot, targetDot) =>{ //Method for highlighting dots
    currentDot.classList.remove('active-dot');
    targetDot.classList.add('active-dot');
}

const hideShowArrows = (slides,btnPrevious,btnNext,targetIndex) =>{
if(targetIndex === 0){          // at first item, disable Previous Arrow
    btnPrevious.classList.add('disabled');
    btnNext.classList.remove('disabled');

}else if(targetIndex === slides.length - 1){ // at last item, disable Next Arrow
    btnPrevious.classList.remove('disabled');
    btnNext.classList.add('disabled');

}else{      // Every other case
    btnPrevious.classList.remove('disabled');
    btnNext.classList.remove('disabled');
 }
}

btnPrevious.addEventListener('click', () =>{
    const currentSlide = container.querySelector('.active-slide');
    const previousSlide = currentSlide.previousElementSibling;
    const currentDot = dotContainer.querySelector('.active-dot');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex( slide => slide === previousSlide);

    moveToSlide(currentSlide,previousSlide,container);
    dotsToggle(currentDot, prevDot);
    hideShowArrows(slides,btnPrevious,btnNext,prevIndex);
});
btnNext.addEventListener('click', () =>{
    const currentSlide = container.querySelector('.active-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotContainer.querySelector('.active-dot');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(currentSlide,nextSlide,container);
    dotsToggle(currentDot, nextDot);
    hideShowArrows(slides,btnPrevious,btnNext,nextIndex);
});






// var action = 1;

// container.forEach((item, i)=>{
//     btnPrevious[i].addEventListener('click', () =>{
//         item.scrollLeft -= 475;
//         if ( action == 3 ) {
//             document.getElementById("radio3").style.cssText ="height:1.3rem ;width:1.3rem;opacity:0.5";
//             document.getElementById("radio2").style.cssText ="height:1.9rem ;width:1.9rem;opacity:1";
//             action = 2;
//             btnPrevious[0].style.opacity = "1";
//             btnNext[0].style.opacity ="1";
//         } else if (action==2){
//             document.getElementById("radio2").style.cssText ="height:1.3rem ;width:1.3rem;opacity:0.5";
//             document.getElementById("radio1").style.cssText ="height:1.9rem ;width:1.9rem;opacity:1";
//             action = 1;
//             btnPrevious[0].style.opacity = "0.5";
//         }
//     });
//     btnNext[i].addEventListener('click', () =>{
//         item.scrollLeft += 475; 
//         if ( action == 1 ) {
//             document.getElementById("radio1").style.cssText ="height:1.3rem ;width:1.3rem;opacity:0.5";
//             document.getElementById("radio2").style.cssText ="height:1.9rem ;width:1.9rem;opacity:1";
//             action = 2;
//             btnPrevious[0].style.opacity = "1";
//             btnNext[0].style.opacity ="1";
//         } else if (action==2){
//             document.getElementById("radio2").style.cssText ="height:1.3rem ;width:1.3rem;opacity:0.5";
//             document.getElementById("radio3").style.cssText ="height:1.9rem ;width:1.9rem;opacity:1";
//             action = 3;
//             btnNext[0].style.opacity ="0.5";
//         }
//     });
// })