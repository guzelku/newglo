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
 export default  togglePopUp;