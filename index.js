    const testimonials = document.querySelector('.testimonials');
    const scroller = testimonials.querySelector('.scroller');
    const nextBtn = testimonials.querySelector('.btn.next');
    const prevBtn = testimonials.querySelector('.btn.prev');
    const items = testimonials.querySelectorAll('.item');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
  
    nextBtn.addEventListener('click', scrollToNextItem);
    prevBtn.addEventListener('click', scrollToPrevItem);

    function scrollToNextItem() {
        if(currentIndex<items.length-1){
            currentIndex++;
            updateCarousel();
        }
        else{
            currentIndex = 0;
            updateCarousel();
        }
    }
    function scrollToPrevItem() {
        if(currentIndex>0){
            currentIndex--;
            updateCarousel();
        }
        else{
            currentIndex = items.length-1;
            updateCarousel();
        }
    }
    function updateCarousel(){
        const itemWidth = items[currentIndex].clientWidth;
        scroller.scrollTo({left: itemWidth*currentIndex, top: 0, behavior: 'smooth'});
        indicators.forEach((indicator, index)=>{
            indicator.classList.toggle('active', index==currentIndex);
        });
    }
    scroller.style.overflow = 'hidden';