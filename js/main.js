/* Peseudocodigo: 
Inicio
Leer imagen
Muestra imagen
Mientras seleccion de otra imagen
    Cambia de imagen
Fin mientras
Si reinicia pagina(bucle)
    Leer nueva imagen
Fin si 
Fin
*/




const btnCierra = document.querySelector('#btn-cierra');
const btnAdelante = document.querySelector('#btn-delante');
const btnAtras = document.querySelector('#btn-atras')
//declaracion de id para cerrar, y pasar imagenes por seleccion
const imagenes = document.querySelectorAll('#galeria img')
const divimagenes = document.getElementById('galeria')
//seleccion de alt galeria
const lightbox = document.querySelector('#contenedor-principal');

const imagenActiva = document.querySelector('#img-activa');
let indiceImagen = 0;

const abreLightbox = (event) => {
    imagenActiva.src = event.target.src;
    lightbox.style.display = 'flex'
    console.log("seleccion de imagen")
    indiceImagen = Array.from(imagenes).indexOf(event.target);
    

    divimagenes.style.bottom = "10px";
    divimagenes.style.zindex = "999";
    console.log("hola otro flex")

};

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', abreLightbox);
    
});

/* btnCierra.addEventListener('click', () => {
    ///lightbox.style.display = 'none';
}); *///no hace nada


const inicioImagen = () => {

    if (indiceImagen === imagenes.length - 1) {
        indiceImagen = -1;

    }
    imagenActiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;//seleccion de nueva imagen
    console.log("seleccion de nueva imagen")
};

btnAdelante.addEventListener('click', inicioImagen)

const finImagen = () => {

    if (indiceImagen === 0) {
        indiceImagen = imagenes.length;
    }
    imagenActiva.src = imagenes[indiceImagen - 1].src;
    indiceImagen--;
};

btnAtras.addEventListener('click', finImagen)

















/* const seccion = document.querySelector// CODIGO ANTIGUO
const fragment = document.createDocumentFragment()


const arrayImagenes = [
    {
        id: 1,
        src: 'assets/viajes-1.jpg',
        alt: 'alt imagen 1',
        title: 'title imagen 2',
    },
    {
        id: 2,
        src: 'assets/viajes-2.jpg',
        alt: 'alt imagen 2',
        title: 'title imagen 2'
    },
    {
        id: 3,
        src: 'assets/viajes-3.jpg',
        alt: 'alt imagen 3',
        title: 'title imagen 3'
    },
    {
        id: 4,
        src: 'assets/viajes-4.jpg',
        alt: 'alt imagen 4',
        title: 'title imagen 4'
    }
]
let headerImg =[]


const aleatorioImg=()=>{
    let aleatorio = Math.float(Math.random() * headerImg.length);
    arrayImagenes.src = headerImg(aleatorio).src;
} */




/* const pintarImagenes = () => {

    arrayImagenes.forEach((item, index) => {
        const caja = document.createElement('DIV')
        caja.classList.add('miniaturas')
        caja.id = item.id
        console.log(caja)

        const imagen = document.createElement('IMG')//contenido donde se alamacenan las imagenes
        const contenedor = document.getElementById("contenedorGaleria")
        imagen.src = item.src;
        imagen.alt = item.alt;
        imagen.title = item.title;
        imagen.id = "img" + index;

        const titulo = document.createElement('H2')
        fragment.append(caja)

        //contenedor.classList.add(imagen);
        //console.log(imagen)

        contenedor.appendChild(imagen)

    })

    const num = Math.floor(Math.random() * arrayImagenes.length);
    console.log(num)

    arrayImagenes.src = arrayImagenes[num].src;
    arrayImagenes.title = arrayImagenes[num].title;

    arrayImagenes.onclick = fuction(); {
        window.location = arrayImagenes[num].arrayImagenes.cookie;
    }

} */
/* pintarImagenes()

function cargaimg() {
    let newImg = document.getElementById("img0");
    newImg.src = "assets/viajes-4.jpg";
    let newImg2 = document.getElementById("img1");
    newImg2.src = "assets/viajes-5.jpg";
    let newImg3 = document.getElementById("img2");
    newImg3.src = "assets/viajes-6.jpg";

}
const bucleImg = () => {



}
 */
/* let imageGrande = document.getElemntById("imagenGrande")

let contenedorMiniaturas = document.getElemntById("contenedorMinis");

for(let i = 1; i <=4; i++){
    let nuevaImagen = document.createElement("img");
    nuevaImagen.setAttribute("src","img/pic" +i+".jpg")
    contenedorMiniaturas.appendChild(nuevaImagen);
} */

