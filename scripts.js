import {galeria} from "./imagenes.js";
const body = document.querySelector('body')

const container = document.querySelector('.contenedorDeImagenes')

for(let i=0;i<100;i++){
  const random = Math.floor(Math.random()*galeria.length)
  const imagenSeleccionada= galeria[random]
  const imagen = document.createElement('img')
  const containerImg = document.createElement('div')
  containerImg.classList.add('divImagen')
  imagen.classList.add('imagen')
  imagen.src = imagenSeleccionada.src

  containerImg.appendChild(imagen)
  container.appendChild(containerImg)
}
////
const lista =document.querySelectorAll('.divImagen')
const nodeImagenes = [...lista]

nodeImagenes.forEach(div=>{div.addEventListener('click', ClickImagen)})

function ClickImagen(){
  const imagen = this.querySelector('img')
  const imagenCopia = document.createElement('img')
  imagenCopia.src= imagen.src
  const divNuevo = document.createElement('div')

  divNuevo.classList.add('divActiva')
  imagenCopia.classList.add('imagenActiva')
  divNuevo.addEventListener('click', ClickBorrar)

  const actividad = document.createElement('div')
  const input = document.createElement('imput')
  const corazon = document.createElement('img')

  input.classList.add('comentario')
  corazon.src='/icons/corazon.png'
  actividad.classList.add('actividad')
  corazon.classList.add('reacciones')


  actividad.appendChild(input)
  actividad.appendChild(corazon)

  divNuevo.appendChild(imagenCopia)
  divNuevo.appendChild(actividad)
  container.appendChild(divNuevo)
  

  
}
function ClickBorrar(){
  this.classList.remove('divActiva')
  this.classList.add('divEnd')
  cambiarColor();
  setTimeout(function(){
    const borrar=document.querySelector('.divEnd')
    borrar.remove();
  }
  ,200)
}

function cambiarColor(){
  const color1 = Math.floor(Math.random()*255)
  const color2 = Math.floor(Math.random()*255)
  const color3 = Math.floor(Math.random()*255)
  const color4 = Math.floor(Math.random()*10)/10
  
  body.style.backgroundColor= `rgb(${color1}, ${color2}, ${color3}, ${color4})`
}