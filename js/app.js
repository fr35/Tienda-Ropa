let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

const selecTalles = document.getElementById('selecTalles')
const buscador = document.getElementById('search')

mostrarProductos()

function mostrarProductos() {
    stockProductos.forEach(el=> {
        let div = document.createElement('div')
        div.className = 'col-4 mb-5'
        div.innerHTML = `   <div class="card" style="width: 18rem;">
                                <img src="${el.img}" class="card-img-top" alt="${el.nombre}">
                                <div class="card-body">
                                    <h5 class="card-title">${el.nombre}</h5>
                                    <p class="card-subtitle mb-2 text-muted">${el.descrpcion}</p>
                                    <h5 class="card-title">$${el.precio}</h5>
                                    <a id="boton${el.id}" href="#" class="btn btn-danger">Agregar al Carrito</a>
                                </div>
                            </div>`
        contenedorProductos.appendChild(div)
        let btnAgregar = document.getElementById(`boton${el.id}`)
        btnAgregar.addEventListener('click',()=>{
            agregarAlCarrito(el.id)
        })
    })
}

function agregarAlCarrito(id) {
    let productoAgregar = stockProductos.find(item => item.id === id)
    carritoDeCompras.push(productoAgregar)
}

