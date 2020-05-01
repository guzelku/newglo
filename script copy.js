
window.addEventListener('DOMContentLoaded', function(){
   'use strict'; 

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

//валидация?

/*

const form = document.querySelector('form');

const validate = dataObj => {
  const invalidFields = [];
   const rules = {
     fullname: {
       pattern: new RegExp('(^[а-яё -]{3,50})$', 'igm'), 
       message: 'Invalid fullname'
     },
     email: {
       pattern: new RegExp('[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}', 'igm'),
       message: 'Invalid email address!'
     },
     message: {
       pattern: new RegExp('^[а-яё !:;.-]{3,500}$', 'igm'),
       message: 'Invalid message'
     },

     tel:{
      pattern: new RegExp('[\d]', 'igm'),
      message: 'Invalid message'
     }
   };
  
  dataObj.forEach((key, val) => {
     if(!key.match(rules[val].pattern)) {
       invalidFields.push(val);
     }
  });
  
  return invalidFields;
};

form.addEventListener('submit', e => {
   e.preventDefault();
  const formData = new FormData(form);
  const inputs = form.querySelectorAll('input, textarea');
  const dataObj = {};
  
  inputs.forEach(elem => {
     elem.classList.remove('not-valid');
  });
  
  formData.forEach((val, key) => {
     dataObj[key] = val;
  });
  
  const invalidFields = validate(formData);
  
  
});




*/
























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
        pattern: new RegExp('[\+]?[0-9]', 'igm'),
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
        //console.log(body[key]);
        //formData[key].value='0';
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
        errorData(request.status);
      }
    });
   
   
       request.open('POST', './server.php');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(body));
    
   
    
}
  
  }//end forEach

  );//end forEach
 
  

 
  
        

};
sendForm(); 
});










