import {galeria} from "./imagenes.js";
const body = document.querySelector('body')

const container = document.querySelector('.contenedorDeImagenes')

for(let i=0;i<100;i++){
  const random = Math.floor(Math.random()*galeria.length)
  const imagenSeleccionada= galeria[random]
  const imagen = document.createElement('img')
  const containerImg = document.createElement('div')
  containerImg.classList.add('divImagen')

  imagen.src = imagenSeleccionada.src

  containerImg.appendChild(imagen)
  container.appendChild(containerImg)
}
////
const lista =document.querySelectorAll('.divImagen')
const nodeImagenes = [...lista]

nodeImagenes.forEach(div=>{div.addEventListener('click', function(event){

  const imagen = this.querySelector('img')
  const imagenCopia = document.createElement('img')
  imagenCopia.src= imagen.src
  const divNuevo = document.createElement('div')

  divNuevo.classList.add('divDefecto')
  divNuevo.appendChild(imagenCopia)
  container.appendChild(divNuevo)
  

  
 setTimeout(function retraso (){ divNuevo.classList.add('divActiva')
  imagenCopia.classList.add('imagenActiva')},1)
  
  divNuevo.addEventListener('click', borrar)
  
  function borrar(){ 
    const color1 = Math.floor(Math.random()*255)
    const color2 = Math.floor(Math.random()*255)
    const color3 = Math.floor(Math.random()*255)
    const color4 = Math.floor(Math.random()*10)/10
    
    body.style.backgroundColor= `rgb(${color1}, ${color2}, ${color3}, ${color4})`

    divNuevo.classList.remove('divDefecto')
    divNuevo.classList.toggle('divActiva')
    divNuevo.classList.toggle('divEnd')

    setTimeout(function(){divNuevo.remove()},1)


  }
  
})})


