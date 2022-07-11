let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')

const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

const selecCategoria = document.getElementById('selecCategoria')
const buscador = document.getElementById('search')

const terminarCompra = document.getElementById('terminarCompra')


mostrarProductos()

function mostrarProductos() {
    stockProductos.forEach(el=> {
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
            Toastify({
                text: "El producto ha sido añadido al carrito",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style : {
                    background: "#121212"
                }
            }).showToast();
        })
    })
}

function agregarAlCarrito(id) {
    let productoAgregar = stockProductos.find(item => item.id === id)
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
        Toastify({
            text: "El producto ha sido eliminado del carrito",
            duration: 3000,
            gravity: "bottom",
            position: "right",
            style : {
                background: "#121212",
            }
        }).showToast();
        btnEliminar.parentElement.remove()
                carritoDeCompras = carritoDeCompras.filter(ele => ele.id !== productoAgregar.id)
                actualizarCarrito()
                localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
    })
}

function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.length
    precioFinish = precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.precio,0)
}

function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
    for (const elemento of recuperarLS) {
        mostrarCarrito(elemento)
        carritoDeCompras.push(elemento)
        actualizarCarrito()
    }
}




function terminar(precioFinish) {
    terminarCompra.addEventListener('click', () => {
        if (precioFinish > 0) {
            Swal.fire({
                title: 'Está seguro de realizar la compra?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Comprar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Muchas Gracias!',
                        'Su producto ha sido eliminado con exito',
                        'success'
                    )
                }
            })
        } else {
            Toastify({
                text: "No hay productos en el carrito",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style : {
                    background: "#121212",
                }
            }).showToast();
        }
    })
}
precioFinish()
terminar()
recuperar()