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
 };

 export default countTimer;