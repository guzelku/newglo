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
export default toggleMenu;