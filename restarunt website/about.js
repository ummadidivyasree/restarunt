





let boxes= document.querySelectorAll('.box')
boxes.forEach(element=>element.addEventListener('click',function(){
    RemoveActiveClasses()
   element.classList.toggle('active')
}))
function RemoveActiveClasses(){
    boxes.forEach(element=>element.classList.remove('active'))
}
let arrowDown=document.querySelector('#svg')
   arrowDown.forEach(element=>element.addEventListener('click',function(){
    RemoveActiveClasses()
   element.classList.toggle('active')
}))
