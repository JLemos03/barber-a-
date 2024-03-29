// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "abrigo-01",
        titulo: "Latafa",
        imagen: "./img/Perfumes Hombre/latafa.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: "$150.000"
    },
    {
        id: "camiseta-02",
        titulo: "Eros",
        imagen: "./img/Perfumes Hombre/Eros.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: "$128.000"
    },
    {
        id: "pantalones-03",
        titulo: "One million",
        imagen: "./img/Perfumes Hombre/one million.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: "$117.000"
    }
    // },
    // {
    //     id: "abrigo-04",
    //     titulo: "Abrigo 04",
    //     imagen: "./img/abrigos/04.jpg",
    //     categoria: {
    //         nombre: "Abrigos",
    //         id: "abrigos"
    //     },
    //     precio: 1000
    // },
    // {
    //     id: "abrigo-05",
    //     titulo: "Abrigo 05",
    //     imagen: "./img/abrigos/05.jpg",
    //     categoria: {
    //         nombre: "Abrigos",
    //         id: "abrigos"
    //     },
    //     precio: 1000
    // },
    // // Camisetas
    // {
    //     id: "camiseta-01",
    //     titulo: "Camiseta 01",
    //     imagen: "./img/camisetas/01.jpg",
    //     categoria: {
    //         nombre: "Camisetas",
    //         id: "camisetas"
    //     },
    //     precio: 1000
    // },
    // {
    //     id: "camiseta-02",
    //     titulo: "Camiseta 02",
    //     imagen: "./img/camisetas/02.jpg",
    //     categoria: {
    //         nombre: "Camisetas",
    //         id: "camisetas"
    //     },
    //     precio: 1000
    // },
    // {
    //     id: "camiseta-03",
    //     titulo: "Camiseta 03",
    //     imagen: "./img/camisetas/03.jpg",
    //     categoria: {
    //         nombre: "Camisetas",
    //         id: "camisetas"
    //     },
    //     precio: 1000
    // },
    // {
    //     id: "camiseta-04",
    //     titulo: "Camiseta 04",
    //     imagen: "./img/camisetas/04.jpg",
    //     categoria: {
    //         nombre: "Camisetas",
    //         id: "camisetas"
    //     },
    //     precio: 1000
    // },
    // {
    //     id: "camiseta-05",
    //     titulo: "Camiseta 05",
    //     imagen: "./img/camisetas/05.jpg",
    //     categoria: {
    //         nombre: "Camisetas",
    //         id: "camisetas"
    //     },
    //     precio: 1000
    // },
    // {
    //     id: "camiseta-06",
    //     titulo: "Camiseta 06",
    //     imagen: "./img/camisetas/06.jpg",
    //     categoria: {
    //         nombre: "Camisetas",
    //         id: "camisetas"
    //     },
    //     precio: 1000
    // },
    // {
    //     id: "camiseta-07",
    //     titulo: "Camiseta 07",
    //     imagen: "./img/camisetas/07.jpg",
    //     categoria: {
    //         nombre: "Camisetas",
    //         id: "camisetas"
    //     },
    //     precio: 1000
    // },
    // {
    //     id: "camiseta-08",
    //     titulo: "Camiseta 08",
    //     imagen: "./img/camisetas/08.jpg",
    //     categoria: {
    //         nombre: "Camisetas",
    //         id: "camisetas"
    //     },
    //     precio: 1000
    // },
    // // Pantalones
    // {
    //     id: "pantalon-01",
    //     titulo: "Pantalón 01",
    //     imagen: "./img/pantalones/01.jpg",
    //     categoria: {
    //         nombre: "Pantalones",
    //         id: "pantalones"
    //     },
    //     precio: 1000
    // },
    // {
    //     id: "pantalon-02",
    //     titulo: "Pantalón 02",
    //     imagen: "./img/pantalones/02.jpg",
    //     categoria: {
    //         nombre: "Pantalones",
    //         id: "pantalones"
    //     },
    //     precio: 1000
    // },
    // {
    //     id: "pantalon-03",
    //     titulo: "Pantalón 03",
    //     imagen: "./img/pantalones/03.jpg",
    //     categoria: {
    //         nombre: "Pantalones",
    //         id: "pantalones"
    //     },
    //     precio: 1000
    // },
    // {
    //     id: "pantalon-04",
    //     titulo: "Pantalón 04",
    //     imagen: "./img/pantalones/04.jpg",
    //     categoria: {
    //         nombre: "Pantalones",
    //         id: "pantalones"
    //     },
    //     precio: 1000
    // },
    // {
    //     id: "pantalon-05",
    //     titulo: "Pantalón 05",
    //     imagen: "./img/pantalones/05.jpg",
    //     categoria: {
    //         nombre: "Pantalones",
    //         id: "pantalones"
    //     },
    //     precio: 1000
    // }

]; 

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll('.boton-categoria')
const tituloPrincipal = document.querySelector('#titulo-principal')
let botonesAgregar = document.querySelectorAll(".producto-agregar") 


function cargarproductor(productoElegido){

    contenedorProductos.innerHTML=" "
    productoElegido.forEach(producto => {
        

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `

                    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">${producto.precio}</p>
                        <button class="producto-agregar" id="${producto.id}">agregar</button>
                    </div>
                
        `;
        contenedorProductos.append(div)
    })
    acutaulizarBoton()
    console.log(botonesAgregar)

}

cargarproductor(productos)

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton=>boton.classList.remove("active"))
        e.currentTarget.classList.add("active")

        if (e.currentTarget.id != "todos"){
            const productoCategoria = productos.find( producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerHTML = productoCategoria.categoria.nombre

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarproductor(productosBoton)
        } else{
            tituloPrincipal.innerHTML = "Todos los productos "
            cargarproductor(productos)
        }

 
    })
})

function acutaulizarBoton (){
    botonesAgregar = document.querySelectorAll('.producto-agregar') 

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito)
    })

}

const productosEnCarrito = []

function agregarAlCarrito (e){

    const idBoton = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idBoton)

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
       const index= productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++
    }else{
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado)

    }

    console.log(productosEnCarrito)
    
}