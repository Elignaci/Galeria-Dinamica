/* Peseudocodigo: 
Inicio
Leer imagen
Si reinicia pagina(bucle)
    Leer nueva imagen
Fin si 
Fin


*/
const seccion = document.querySelector
const fragment = document.createDocumentFragment()


/* const arrayImagenes = [
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
 */


const pintarImagenes = () => {

    arrayImagenes.forEach((item, index) => {
        const caja=document.createElement('DIV')
        caja.classList.add('miniaturas')
        caja.id=item.id
        console.log(caja)

        const imagen = document.createElement('IMG')//contenido donde se alamacenan las imagenes
        const contenedor = document.getElementById("contenedorGaleria")
        imagen.src = item.src;
        imagen.alt = item.alt;
        imagen.title = item.title;
        imagen.id = "img" + index;

        const titulo=document.createElement('H2')
        fragment.append(caja)

        //contenedor.classList.add(imagen);
        //console.log(imagen)

        contenedor.appendChild(imagen)

    })

    

   

}
pintarImagenes()

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

/* let imageGrande = document.getElemntById("imagenGrande")

let contenedorMiniaturas = document.getElemntById("contenedorMinis");

for(let i = 1; i <=4; i++){
    let nuevaImagen = document.createElement("img");
    nuevaImagen.setAttribute("src","img/pic" +i+".jpg")
    contenedorMiniaturas.appendChild(nuevaImagen);
} */

