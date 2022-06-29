let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

const selecCategoria = document.getElementById('selecCategoria')
const buscador = document.getElementById('search')


mostrarProductos()

function mostrarProductos() {
    stockMujerPollera.forEach(el=> {
        let div = document.createElement('div')
        div.className = 'producto'
        div.innerHTML = `   <div class="card border-light">
                                <img src="${el.img}" class="card-img-top" alt="${el.nombre}">
                                <div class="card-body">
                                    <h5 class="card-title">${el.nombre}</h5>
                                    <p class="card-subtitle mb-2 text-muted">${el.descrpcion}</p>
                                    <h5 class="card-title">$${el.precio}</h5>
                                    <a id="boton${el.id}" href="#" class="btn btn-prod">Agregar al Carrito</a>
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
    let productoAgregar = stockMujerPollera.find(item => item.id === id)
    carritoDeCompras.push(productoAgregar)
    mostrarCarrito(productoAgregar)
    actualizarCarrito()

    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
}

function mostrarCarrito(productoAgregar) {
    let div = document.createElement('div')
    div.className = 'productoEnCarrito'
    div.innerHTML = `   <p>${productoAgregar.nombre}</p>
                        <p>Precio: $${productoAgregar.precio}</p>
                        <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="bi bi-trash h5"></i></button>` 
    contenedorCarrito.appendChild(div)

    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
    btnEliminar.addEventListener('click',()=>{
        btnEliminar.parentElement.remove()
        carritoDeCompras = carritoDeCompras.filter(ele => ele.id !== productoAgregar.id)
        actualizarCarrito()
        localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
    })
}

function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.length
    precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.precio,0)
}

function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
    for (const elemento of recuperarLS) {
        mostrarCarrito(elemento)
        carritoDeCompras.push(elemento)
        actualizarCarrito()
    }
}

recuperar()