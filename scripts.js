const galeria=[
{src:'https://okdiario.com/img/2023/08/26/no-mires-arriba-la-razon-de-los-atardeceres-tenidos-de-rojos-no-esta-en-el-cielo.jpg'},
{src:'https://i.pinimg.com/564x/ed/63/2a/ed632aceea976a4ed370c9d691494e68.jpg'},
{src:'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2023/01/07/16730475271964.jpg'},
{src:'https://c8.alamy.com/compes/kfcyra/icono-de-altas-palmeras-estilo-de-dibujos-animados-kfcyra.jpg'}
]
const container = document.querySelector('.containerImg')

for(i=0;i<30;i++){
  const random = Math.floor(Math.random()*galeria.length)
  const imagenSeleccionada= galeria[random]
  const imagen = document.createElement('img')
  imagen.src = imagenSeleccionada.src
  container.appendChild(imagen)
}
