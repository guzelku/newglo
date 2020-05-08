
//калькулятор
const  calc = (price = 100) =>{



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
export default  calc;