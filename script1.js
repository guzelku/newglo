
window.addEventListener('DOMContentLoaded', function(){
    'use strict'; 
 //Таймер
 function countTimer(deadline){
     let timeHours = document.querySelector('#timer-hours'),
         timeMinutes = document.querySelector('#timer-minutes'),
         timeSeconds = document.querySelector('#timer-seconds');
 // функция вычисляет
 function getTimeRemaining(){
     let dateStop = new Date(deadline).getTime(),//конечная дата  и записываем в миллисекундах
     dateNow = new Date().getTime(),
     timeRemaining = (dateStop - dateNow)/1000 ,//текущая дата  в секундах(разделили милли на 1000)
     seconds = Math.floor(timeRemaining % 60),//округлили и сделали остаток от деления на 60
     minutes = Math.floor((timeRemaining/ 60) % 60), // сек/60 получили мимнуты
     hours = Math.floor(timeRemaining/ 60/ 60);//часы
     //day =Math.floor(timeRemaining/ 60/ 60/24) ;
 
     return {timeRemaining, hours, minutes, seconds};
     }
 
   const addNull= (num)=>{
             if(num <= 9){
             num = '0'+num;
             }else{
            num = num;
             }
         };
         
     
 function updateClock(){
         let timer = getTimeRemaining();
       
 
         console.log(timer.hours);
           
         timeHours.textContent = addNull(timer.hours);
         timeMinutes.textContent= addNull(timer.minutes);
         timeSeconds.textContent = addNull(timer.seconds);
 
 if(timer.timeRemaining<0){
     clearInterval(idInterval);
     timeHours.textContent ='00';
     timeMinutes.textContent = '00';
     timeSeconds.textContent = '00';
 } }
    let idInterval=setInterval(updateClock, 1000);
 }
 countTimer('April 23, 2020');
 
 
 
 
 
 //меню
 const toggleMenu = ()=>{
    const  btnMenu = document.querySelector('.menu'),
     menu = document.querySelector('menu'),
     closeBtn = document.querySelector('.close-btn'),
     menuItems = menu.querySelectorAll('ul>li');
 
     const hendlerMenu = ()=>{
         if(!menu.style.transform || menu.style.transform === `translate(-100%)`){
             menu.style.transform =`translate(0)`;
        }
        else{
         menu.style.transform =`translate(-100%)`;
        }
     };
 
   
 
 
     btnMenu.addEventListener('click', hendlerMenu );
 
     menu.addEventListener('click',(event)=>{
      let target = event.target;
      if(target.matches('.close-btn')){
      
        hendlerMenu();
      
      }else{target = target.closest('ul');
      if(!target){
        menu.style.transform =`translate(0)`;
      }
      else{ hendlerMenu();}
     
      }
  
     }
     
     );
 
     
 
  };
 toggleMenu();
 
 //popup модальное окно
 
 const togglePopUp = () =>{
     const popup = document.querySelector('.popup'),
     popupBtn = document.querySelectorAll('.popup-btn');
    
    
   popupBtn.forEach((elem) => {
           elem.addEventListener('click', () => {
               popup.style.display = 'block';
 
         if(screen.width > '768') {   
           let op=0;
         const addOpacity = () =>{
                       
               if(op <1){ 
                   op +=  0.01; 
               popup.style.opacity = op;
             setTimeout(addOpacity, 10);
               }
           };
           addOpacity();
       }
 
       });
 
   });
 
    
   popup.addEventListener('click', (event)=>{
       let target = event.target;
        if(target.classList.contains('popup-close')){
         popup.style.display = 'none'; 
         
         if(screen.width > '768')
         {popup.style.opacity = 0;}
 
        }else{
           target = target.closest('.popup-content');
       if(!target){
         popup.style.display = 'none';
       }
        }
 
     });
 
 
 };
 togglePopUp();
 
 
 /**функция, которая меняет контент  передавать в нее будем index нашего таба,
  *  эта функция будет преребирать все наши табы, находить соответсвующий 
  * и  его показвать, а остальны скрывать */
 
 
 
 //табы
 const tabs= () =>{
   const tabHeader = document.querySelector('.service-header'),
         tab = tabHeader.querySelectorAll('.service-header-tab'),
         tabContent = document.querySelectorAll('.service-tab');
 
   const toggleTabContent =(index)=>{
   for(let i=0; i< tabContent.length; i++){
       if(index === i){
         tab[i].classList.add('active');
         tabContent[i].classList.remove('d-none');
       }else{
         tab[i].classList.remove('active');
         tabContent[i].classList.add('d-none');
       }
   }
 
   };
 
 
 tabHeader.addEventListener('click', (event) =>{
   let target = event.target;
       target= target.closest('.service-header-tab');
 
   if(target){
     //console.log(target); проверяем таргет
     tab.forEach((item, i)=> {
       if(item === target){
         toggleTabContent(i);
         //console.log(tabContent[i]);
       }
     });
  }
 
 });
 };
 
 tabs();
 
 //пишем слайдер
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
 
 slider();
 
 //картинки
 let commandPhoto =document.querySelectorAll('.command__photo'),
 command =document.querySelector('.command');
 let  default2;
 
 //for(let i=0; i<commandPhoto.length; i++){
  
 //console.log(default2);
 //}
 
 
 
 command.addEventListener('mouseover', (event)=>{
   let target = event.target;
   commandPhoto.forEach((item, i)=> {
    
 
     if(item === target){ 
       default2=commandPhoto[i].getAttribute('src') ;
       commandPhoto[i].src= commandPhoto[i].dataset.img;
     }
 
   });
 });
 
 
 
 command.addEventListener('mouseout', (event)=>{
   let target = event.target;
   commandPhoto.forEach((item, i)=> {
     
    if(item === target){
     commandPhoto[i].src= default2;
     }
     
   });
 });
 //проверка  input у калькулятора
 
 const calcBlock = document.querySelector('.calc-block'),
 
      input = calcBlock.querySelectorAll('input');
 
 calcBlock.addEventListener('input', (event) =>{
   let target = event.target;
   input.forEach((item, i)=> {
     if(item === target){
    
      // input[i].value = input[i].value.match(/^[0-9]*$/);
      input[i].value = input[i].value.replace(/\D/g, '');
     }
 
   });
   
 });
 //калькулятор
  
 const  calc = (price = 100) =>{
   
 const calcBlock2 = document.querySelector('.calc-block'),
       calcType = document.querySelector('.calc-type'),
       calcSquare = document.querySelector('.calc-square'),
       calcCount = document.querySelector('.calc-count'),
       calcDay= document.querySelector('.calc-day'),
       totalValue = document.getElementById('total');
 
 const countSum =()=>{
     let total = 0,
     calcValue = 1,
     dayValue = 1;
     const typeValue = calcType.options[calcType.selectedIndex].value,
     //console.log(typeValue);
           squareValue = +calcSquare.value;
     //console.log(squareValue);  
     
     if(calcCount.value>1){
       calcValue += +(calcCount.value-1)/10;
     }
 
     if(calcDay.value &&  calcDay.value <5 ){
       dayValue *=2;
     }else if(calcDay.value  && calcDay.value < 10){
       dayValue *= 1.5;
     }
 
 
     if(typeValue && squareValue){
       total = price * typeValue * squareValue * calcValue * dayValue;
     } else {
       total = 0;
     }
     totalValue.textContent=total;
 
       };
 
 calcBlock2.addEventListener('change', (event)=>{
       const target = event.target;
         
     if(target.matches('select') || target.matches('input') ){
      countSum();
     }
     
        });
 
 } ;
 
 calc(100);
 //валидация?
 
 
 
 
 
 
 //форма отправки на сервер ajax
 
 
 const sendForm = () =>{
 
   const loadMessage = 'загрузка',
       errorMessage = 'что то пошло не так',
       successMessage = 'ваше сообщение отправлено';
 
   const statusMessage = document.createElement('div');
   statusMessage.style.cssText = 'font-size:2rem;color:#fff;';
  
 
   const form = document.querySelectorAll('form');
 
 
 
   const validate = body => {
     const invalidFields = [];
      const rules = {
       user_name: {
          pattern: new RegExp('(^[а-яё -]{0,50})$', 'igm'), 
          message: 'Invalid fullname'
        },
        user_email: {
          pattern: new RegExp('[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}', 'igm'),
          message: 'Invalid email address!'
        },
        user_message: {
          pattern: new RegExp('^[а-яё !:;.-]{3,500}$', 'igm'),
          message: 'Invalid message'
        },
   
        user_phone:{
         pattern: new RegExp('[0-9]$', 'igm'),
         message: 'Invalid message'
        }
      };
     
     body.forEach((key, val) => {
        if(!key.match(rules[val].pattern)) {
          invalidFields.push(val);
        }
     });
     
     return invalidFields;
   };
 
 
 
 
   form.forEach((item, i)=> {
     form[i].addEventListener('submit', (event) =>{
       event.preventDefault();
   
       form[i].appendChild(statusMessage);
       const inputs = form[i].querySelectorAll('input');
   
 
   // получаем данные с формы
       const formData = new FormData(form[i]);
       
       let body = {};
   
       formData.forEach((val, key) =>{
         body[key]=val;
        
         formData[key]=val;
 
         console.log(formData[key]);
        });
       
     statusMessage.textContent = loadMessage;
 
 
     const invalidFields = validate(formData);
     if(invalidFields.length !== 0) {
       console.log(invalidFields);
       console.log('error');
       statusMessage.textContent = errorMessage;
      
       inputs.forEach((item, i) => {
         inputs[i].value='';
        });
     }else{
       console.log('well');
      
       //вызываем функцию передачи данных  на сервер (она ниже)
      postData(body, ()=>{
       statusMessage.textContent = successMessage;
       
     
      }, (error)=>{
       statusMessage.textContent = errorMessage;
       console.log('error');
      });
      inputs.forEach((item, i) => {
      inputs[i].value='';
     });
     }
 
      
  
 
 
     });
     
   //сама функция
 const postData =(body, outputData, errorData ) =>{
   

     
   const request = new XMLHttpRequest();
     
 
       request.addEventListener('readystatechange', ()=>{
 
         if(request.readyState !==4){
             return;
         } if(request.status === 200){
           
            outputData();
         } else{
           redject(request.status);
         }
       });
     
     
         request.open('POST', './server.php');
       request.setRequestHeader('Content-Type', 'application/json');
       request.send(JSON.stringify(body));
       

 
 
    
     
 };
   
   }//end forEach
 
   );//end forEach
  
   
 
  
   
         
 
 };
 sendForm(); 
 });
 
 
 
 
 