export const abrirSide = () => {
    const botonBurger = document.getElementById('botonBurger')
    const menu = document.getElementById('menu')
    botonBurger.addEventListener('click', () => {
        let div = document.createElement('div')
        div.className = "offcanvas offcanvas-start sidebar"
        div.setAttribute("tabindex","-1")
        div.setAttribute("id","offcanvasNavbar")
        div.setAttribute("aria-labelledby","offcanvasNavbarLabel")
        div.innerHTML += `  <div class="offcanvas-header">
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav flex-grow-1 pe-3" id="sidebar-container">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="../../index.html">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Hombre</a>
                                        <ul class="sidebar-container-items">
                                            <li><a href="hombre/remera/remera-hombre.html" class="sidebar-items" id="hombre-remera">Remera</a></li>
                                            <li><a href="hombre/buzo/buzo-hombre.html" class="sidebar-items" id="hombre-buzo">Buzo</a></li>
                                            <li><a href="hombre/campera/campera-hombre.html" class="sidebar-items" id="hombre-campera">Campera</a></li>
                                            <li><a href="hombre/pantalon/pantalon-hombre.html" class="sidebar-items" id="hombre-pantalon">Pantalón</a></li>
                                            <li><a href="hombre/sweater/sweater-hombre.html" class="sidebar-items" id="hombre-sweater">Sweater</a></li>
                                            <li><a href="hombre/saco/saco-hombre.html" class="sidebar-items" id="hombre-saco">Saco</a></li>
                                            <li><a href="hombre/abrigo/abrigo-hombre.html" class="sidebar-items" id="hombre-abrigo">Abrigo</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Mujer</a>
                                        <ul class="sidebar-container-items">
                                            <li><a href="Mujer/remera/remera-mujer.html" class="sidebar-items" id="mujer-remera">Remera</a></li>
                                            <li><a href="Mujer/vestido/vestido-mujer.html" class="sidebar-items" id="mujer-vestido">Vestido</a></li>
                                            <li><a href="Mujer/campera/campera-mujer.html" class="sidebar-items" id="mujer-campera">Campera</a></li>
                                            <li><a href="Mujer/pantalon/pantalon-mujer.html" class="sidebar-items" id="mujer-pantalon">Pantalón</a></li>
                                            <li><a href="Mujer/pollera/pollera-mujer.html" class="sidebar-items" id="mujer-pollera">Pollera</a></li>
                                            <li><a href="Mujer/sweater/sweater-mujer.html" class="sidebar-items" id="mujer-sweater">Sweater</a></li>
                                            <li><a href="Mujer/saco/saco-mujer.html" class="sidebar-items" id="mujer-saco">Saco</a></li>
                                            <li><a href="Mujer/abrigo/abrigo-mujer.html" class="sidebar-items" id="mujer-abrigo">Abrigo</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>`
        menu.appendChild(div)
    })
}