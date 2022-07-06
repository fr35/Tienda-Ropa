import { getData } from "./getData.js";

export const mostrarProductos = async () => {
  const productos = await getData();
  const contenedorProductos = document.getElementById("contenedor-productos");

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML += `  <div class="card border-light">
                            <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-subtitle mb-2 text-muted">${producto.descrpcion}</p>
                                <h5 class="card-title">$${producto.precio}</h5>
                                <a id="boton${producto.id}" href="#" class="btn btn-prod">Agregar al Carrito</a>
                            </div>
                        </div>`
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
      boton.addEventListener('click', () => {
        let btnAgregar = document.getElementById(`boton${producto.id}`)
        btnAgregar.addEventListener('click',()=>{
            Toastify({
                text: "El producto ha sido añadido al carrito",
                duration: 3000,
                gravity: "bottom",
                position: "right",
            }).showToast();
        })
        agregarAlCarrito(producto.id);
    });
  });
};

const agregarAlCarrito = (id) => {
  let productoAgregar = id.find(item => item.id === id) 
  carritoDeCompras.push(productoAgregar)
  mostrarCarrito(productoAgregar)
  
  
}











mostrarProductos()


