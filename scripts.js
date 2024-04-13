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
var contadorClicks=0
const nodeImagenes =document.querySelectorAll('.divImagen')


nodeImagenes.forEach(div=>{div.addEventListener('click', function(event){
  contadorClicks=contadorClicks+1
  if(contadorClicks%2==0){
    const color1 = Math.floor(Math.random()*255)
    const color2 = Math.floor(Math.random()*255)
    const color3 = Math.floor(Math.random()*255)
    const color4 = Math.floor(Math.random()*10)/10
    
    body.style.backgroundColor= `rgb(${color1}, ${color2}, ${color3}, ${color4})`
  }



  this.classList.toggle('divImagen')
  this.classList.toggle('divActiva')
  const imagen = this.querySelector('img')
  imagen.classList.toggle('imagenActiva')
  
})})


