// toggle icon navebar

 let menuIcon = document.querySelector('#menu-icon');
 let navbor =document.querySelector('.navbor');

 menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbor.classList.toggle('active');

 
};
  // / toggle icon navebar remove
window.onscroll=()=>{
    menuIcon.classList.remove('bx-x');
    navbor.classList.remove('active');
} 



