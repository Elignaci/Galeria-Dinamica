

const arrayImagenes = [
{
    id: 1,
    src: 'assets/viajes-1.jpg',
    alt: 'alt imagen 1',
    title: 'title imagen 2',
},
    {
    id:2,
    src: 'assets/viajes-2.jpg',
    alt:'alt imagen 2',
    title:'title imagen 2'
},
    {
    id:3,
    src: 'assets/viajes-3.jpg',
    alt:'alt imagen 3',
    title:'title imagen 3'
}
]



arrayImagenes.forEach((item,index)=>{
    const imagen=document.createElement('IMG')
    const contenedor = document.getElementById("contenedorGaleria")

 

    imagen.src=item.src;
    imagen.alt=item.alt;
    imagen.title=item.title;
    imagen.id = "img"+index;

    //contenedor.classList.add(imagen);
    //console.log(imagen)

    contenedor.appendChild(imagen)

})

function cargaimg() {
    let newImg = document.getElementById("img0");
    newImg.src = "assets/viajes-4.jpg";
    let newImg2 = document.getElementById("img1");
    newImg2.src = "assets/viajes-5.jpg";
    let newImg3 = document.getElementById("img2");
    newImg3.src = "assets/viajes-6.jpg";
    
}


/* let imageGrande = document.getElemntById("imagenGrande")

let contenedorMiniaturas = document.getElemntById("contenedorMinis");

for(let i = 1; i <=4; i++){
    let nuevaImagen = document.createElement("img");
    nuevaImagen.setAttribute("src","img/pic" +i+".jpg")
    contenedorMiniaturas.appendChild(nuevaImagen);
} */

