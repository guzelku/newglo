
const sendForm = () =>{

    const loadMessage = 'загрузка',
        errorMessage = 'что то пошло не так',
        successMessage = 'ваше сообщение отправлено';
   
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size:2rem;color:#fff;';
   
   
    const form = document.querySelectorAll('form');
   
   //валидация
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
          pattern: new RegExp('(\\+?7|8)[0-9]{10,18}', 'g'),
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
   
   
   //перебирем массив форм и вешаем событие
   
    form.forEach((item, i)=> {
      form[i].addEventListener('submit', (event) =>{
        event.preventDefault();
    
        form[i].appendChild(statusMessage);
        const inputs = form[i].querySelectorAll('input');
    
   //очистка формы 
        const clear =  () =>{inputs.forEach((item, i) => {
          inputs[i].value='';});
           };
    // получаем данные с формы
        const formData = new FormData(form[i]);
        
        let body = {};
    
        formData.forEach((val, key) =>{
          body[key]=val;
         
          formData[key]=val;
   
        
         });
        
      statusMessage.textContent = loadMessage;
   
   
      const invalidFields = validate(formData);
      if(invalidFields.length !== 0) {
        console.log(invalidFields);
        console.log('error');
        statusMessage.textContent = errorMessage;
        clear();
   
        }else{
        //вызываем функцию передачи данных  на сервер (она ниже)
       postData(body)
        .then((response) =>{
          if(response.status !==200){
            throw new Error('status network not 200');
          }
         statusMessage.textContent = successMessage; })
   
        .catch((error)=> {statusMessage.textContent = errorMessage;console.log('error');});
        clear();
         }
   
      });
      
    //сама функция
   const postData =(body) =>{
   
     return fetch('./server.php', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(body)
     });
   };
    
    }//end forEach
   
    );//end forEach
   
      
   
   };
   export default sendForm;