const slider = () =>{

    const slide = document.querySelectorAll('.portfolio-item'),
          btn = document.querySelectorAll('.portfolio-btn'),
         
          ulDot = document.querySelector('.portfolio-dots'),
          slider = document.querySelector('.portfolio-content');
    
    let currentSlide = 0;//будет номер слайда
    let interval;
   
   
   
   
   for(let i=0; i<slide.length-1;i++){
   let li = document.createElement('li');
   li.classList.add ('dot');
   ulDot.appendChild(li);
   }
   
   const dot = document.querySelectorAll('.dot');
   
        const prevSlide = (elem, index, strClass) =>{
          elem[index].classList.remove(strClass);
        };
   
        const nextSlide = (elem, index, strClass) =>{
          elem[index].classList.add(strClass);
   
        };
   
   
    const autoPlaySlide = () =>{
     
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      
      currentSlide++;
     
      if(currentSlide >= slide.length){
        currentSlide = 0;
      }
   
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };
    
    const startSlide = (time = 1500) =>{
      interval=setInterval(autoPlaySlide, time);
    };
   
   
    const stopSlide = () =>{
      clearInterval(interval);
    };
    slider.addEventListener('click',(event)=>{
        event.preventDefault();
   let target = event.target;
   if(!target.matches('#arrow-left, #arrow-right,.dot')){
    return;
   }
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        
        
        if(target.matches('#arrow-right')){
          currentSlide++;
        }else if(target.matches('#arrow-left')){
          currentSlide--;
        } else if(target.matches('.dot')){
          dot.forEach((elem, index) =>{
            if(elem === target){
             currentSlide = index;
            }
          });
        }
    
        
      if(currentSlide >= slide.length){
        currentSlide = 0;
      }
    
        if(currentSlide <0){
          currentSlide =  slide.length-1;
        }
   
        nextSlide(slide, currentSlide, 'portfolio-item-active'); 
        nextSlide(dot, currentSlide, 'dot-active');
    });
   
    slider.addEventListener('mouseover',()=>{
      if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
        stopSlide();
      }
    });
   
    slider.addEventListener('mouseout',()=>{
      if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
        startSlide();
      }
    });
   
   
    startSlide(5000);
   
   };
export default slider;   