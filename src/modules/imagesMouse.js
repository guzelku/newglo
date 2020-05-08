  //картинки
  const imagesMouse = () =>{
 
  let commandPhoto =document.querySelectorAll('.command__photo'),
  command =document.querySelector('.command');
  let  default2;
  
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

  };
  export default  imagesMouse;