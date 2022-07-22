import { getData } from "./getData.js";

let carritoDeCompras = []

// Obtengo del json el array de productos, le aplico un for each donde creo el html de las cards, le agrego nombre, imagen, precio y el boton de agregar. Con los talles lo que hice fue obtener el id, y si el value no es "" que agrege el producto al carrito
export const mostrarProductos = async () => {
    const productos = await getData();
    const contenedorProductos = document.getElementById("contenedor-productos");
    productos.sort((a,b) => Math.random()-0.5)
    productos.forEach(producto => {
    const allProducts = document.createElement('div');
    allProducts.className = 'producto ms-5 me-5';
    allProducts.setAttribute("id","producto")
    allProducts.innerHTML = `<div class="card border-light ${producto.sexo} ${producto.tipo} ${producto.nombre}">
                                <img src="${producto.img}" class="card-img-top img-product center" alt="${producto.nombre}">
                                <div class="card-body">
                                    <h5 class="card-title nombre-producto center" id="nombre-producto ${producto.id}">${producto.nombre}</h5>
                                        <h5 class="card-title center">$${producto.precio}</h5>
                                        <form class="form-talle center" id="form-talle">
                                            <select class="select-talle btn btn-prod mb-2" id="select-talle ${producto.id}">
                                                <option value="">Talle</option>
                                                <option value="l">Large</option>
                                                <option value="m">Medium</option>
                                                <option value="s">Small</option>
                                            </select>
                                        </form>
                                        <div class="center">
                                        <button class="btn btn-prod center" type="submit" id="boton${producto.id}">Agregar al Carrito</button>
                                        </div>
                                </div>
                            </div>`
    contenedorProductos.appendChild(allProducts);
    const btnAgregar = document.getElementById(`boton${producto.id}`);
    btnAgregar.addEventListener('click', () => {
        const talle = document.getElementById(`select-talle ${producto.id}`).value
        if (talle !== "") {
            AgregarAlCarrito(producto.id)
            Toastify({
                text: "El producto ha sido añadido al carrito",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style : {
                    background: "#121212"
                }
            }).showToast()
        } 
        })
    })
}


const AgregarAlCarrito = async (id) => {
    const productos = await getData();
    let productoAgregar = productos.find(item => item.id === id);
    carritoDeCompras.push(productoAgregar);
    mostrarCarrito(productoAgregar);
    actualizarCarrito();
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
}


const mostrarCarrito = async (productoAgregar) => {
    const contenedorCarrito = document.getElementById('carrito-contenedor')
    let div = document.createElement('div')
    div.className = 'productoEnCarrito'
    div.innerHTML = `   <p>${productoAgregar.nombre}</p>
                        <p>$${productoAgregar.precio}</p>
                        <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="bi bi-trash h5"></i></button>`
    contenedorCarrito.appendChild(div);
    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
    btnEliminar.addEventListener('click', () => {
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

const actualizarCarrito = async () => {
    const contadorCarrito = document.getElementById('contadorCarrito')
    const precioTotal = document.getElementById('precioTotal')
    contadorCarrito.innerText = carritoDeCompras.length
    precioTotal.innerText = carritoDeCompras.reduce((acc,el) => acc + el.precio,0)
    terminar()
}

export const recuperar = () => {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'));
    for (const elemento of recuperarLS) {
        mostrarCarrito(elemento)
        carritoDeCompras.push(elemento)
        actualizarCarrito()
    }
}

const terminar = () => {
    const terminarCompra = document.getElementById('terminarCompra')
    let precioFinish = parseInt(precioTotal.innerText)
    terminarCompra.addEventListener('click', () => {
    if ((precioFinish) > 0 ) {
        Swal.fire({
                title: 'Está seguro de realizar la compra?',
                icon: 'succes',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Comprar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Muchas Gracias!',
                        'Su compra ha sido realizada con exito',
                        'success'
                    )
                }
            }) 
        }
    })
}

