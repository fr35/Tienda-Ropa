const btnHome = document.getElementById('btn-home')
btnHome.addEventListener('click', () => {
    const borrarInvisible = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .remera, .buzo, .mujer, .vestido')
    borrarInvisible.forEach(function(prod) {
        prod.parentElement.className = 'producto ms-2 me-2'
    })
})


//Filtro Hombre
const btnHombre = document.getElementById('btn-hombre')
btnHombre.addEventListener('click', () => {
    const borrarInvisible = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .remera, .buzo, .mujer, .vestido')
    borrarInvisible.forEach(function(prod) {
        prod.parentElement.className = 'producto ms-2 me-2'
    })
    const filtroMujer = document.querySelectorAll('.mujer')
    filtroMujer.forEach(function(mujer) {
        mujer.parentElement.className = 'invisible'
    })
})

//Filtro Hombre Remera
const btnHombreRemera = document.getElementById('btn-hombre-remera')
btnHombreRemera.addEventListener('click', () => {
    const borrarInvisible = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .remera, .buzo, .mujer, .vestido')
    borrarInvisible.forEach(function(prod) {
        prod.parentElement.className = 'producto ms-2 me-2'
    })
    const filtroHomreRemera = document.querySelectorAll('.mujer, .buzo, .campera, .pantalon, .abrigo, .saco, .sweater')
    filtroHomreRemera.forEach(function(filtro) {
        filtro.parentElement.className = 'invisible'
    })
})

//Filtro Hombre Buzo 
const btnHombreBuzo = document.getElementById('btn-hombre-buzo')
btnHombreBuzo.addEventListener('click', () => {
    const borrarInvisible = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .remera, .buzo, .mujer, .vestido')
    borrarInvisible.forEach(function(prod) {
        prod.parentElement.className = 'producto ms-2 me-2'
    })
    const filtroHomreBuzo = document.querySelectorAll('.mujer, .remera, .campera, .pantalon, .abrigo, .saco, .sweater')
    filtroHomreBuzo.forEach(function(filtro) {
        filtro.parentElement.className = 'invisible'
    })
})

//Filtro Hombre Campera
const btnHombreCampera = document.getElementById('btn-hombre-campera')
btnHombreCampera.addEventListener('click', () => {
    const borrarInvisible = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .remera, .buzo, .mujer, .vestido')
    borrarInvisible.forEach(function(prod) {
        prod.parentElement.className = 'producto ms-2 me-2'
    })
    const filtroHomreCampera = document.querySelectorAll('.mujer, .buzo, .remera, .pantalon, .abrigo, .saco, .sweater')
    filtroHomreCampera.forEach(function(filtro) {
        filtro.parentElement.className = 'invisible'
    })
})

//Filtro Hombre Pantalon
const btnHombrePantalon = document.getElementById('btn-hombre-pantalon')
btnHombrePantalon.addEventListener('click', () => {
    const borrarInvisible = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .remera, .buzo, .mujer, .vestido')
    borrarInvisible.forEach(function(prod) {
        prod.parentElement.className = 'producto ms-2 me-2'
    })
    const filtroHomrePantalon = document.querySelectorAll('.mujer, .buzo, .campera, .remera, .abrigo, .saco, .sweater')
    filtroHomrePantalon.forEach(function(filtro) {
        filtro.parentElement.className = 'invisible'
    })
})

//Filtro Hombre Saco
const btnHombreSaco = document.getElementById('btn-hombre-saco')
btnHombreSaco.addEventListener('click', () => {
    const borrarInvisible = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .remera, .buzo, .mujer, .vestido')
    borrarInvisible.forEach(function(prod) {
        prod.parentElement.className = 'producto ms-2 me-2'
    })
    const filtroHomreSaco = document.querySelectorAll('.mujer, .buzo, .campera, .pantalon, .abrigo, .remera, .sweater')
    filtroHomreSaco.forEach(function(filtro) {
        filtro.parentElement.className = 'invisible'
    })
})

//Filtro Hombre Sweater 
const btnHombreSweater = document.getElementById('btn-hombre-sweater')
btnHombreSweater.addEventListener('click', () => {
    const borrarInvisible = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .remera, .buzo, .mujer, .vestido')
    borrarInvisible.forEach(function(prod) {
        prod.parentElement.className = 'producto ms-2 me-2'
    })
    const filtroHomreSweater = document.querySelectorAll('.mujer, .buzo, .campera, .pantalon, .abrigo, .saco, .remera')
    filtroHomreSweater.forEach(function(filtro) {
        filtro.parentElement.className = 'invisible'
    })
})

//Filtro Hombre Abrigo
const btnHombreAbrigo = document.getElementById('btn-hombre-abrigo')
btnHombreAbrigo.addEventListener('click', () => {
    const borrarInvisible = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .remera, .buzo, .mujer, .vestido')
    borrarInvisible.forEach(function(prod) {
        prod.parentElement.className = 'producto ms-2 me-2'
    })
    const filtroHomreAbrigo = document.querySelectorAll('.mujer, .buzo, .campera, .pantalon, .remera, .saco, .sweater')
    filtroHomreAbrigo.forEach(function(filtro) {
        filtro.parentElement.className = 'invisible'
    })
})


//Filtro Mujer
const btnMujer = document.getElementById('btn-mujer')
btnMujer.addEventListener('click', () => {
    const borrarInvisible = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .remera, .buzo, .mujer, .vestido')
    borrarInvisible.forEach(function(prod) {
        prod.parentElement.className = 'producto ms-2 me-2'
    })
    const filtroHombre = document.querySelectorAll('.hombre')
    filtroHombre.forEach(function(hombre) {
        hombre.parentElement.className = 'invisible'
    })
})

//Filtro Mujer Remera
const btnMujerRemera = document.getElementById('btn-mujer-remera')
btnMujerRemera.addEventListener('click', () => {
    const borrarInvisible = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .remera, .buzo, .mujer, .vestido')
    borrarInvisible.forEach(function(prod) {
        prod.parentElement.className = 'producto ms-2 me-2'
    })
    const filtroMujerRemera = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .vestido')
    filtroMujerRemera.forEach(function(filtro) {
        filtro.parentElement.className = 'invisible'
    })
})

//Filtro Mujer Pollera
const btnMujerPollera = document.getElementById('btn-mujer-pollera')
btnMujerPollera.addEventListener('click', () => {
    const borrarInvisible = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .remera, .buzo, .mujer, .vestido')
    borrarInvisible.forEach(function(prod) {
        prod.parentElement.className = 'producto ms-2 me-2'
    })
    const filtroMujerPollera = document.querySelectorAll('.hombre, .remera, .campera, .pantalon, .abrigo, .saco, .sweater, .vestido')
    filtroMujerPollera.forEach(function(filtro) {
        filtro.parentElement.className = 'invisible'
    })
})

//Filtro Mujer Campera 
const btnMujerCampera = document.getElementById('btn-mujer-campera')
btnMujerCampera.addEventListener('click', () => {
    const borrarInvisible = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .remera, .buzo, .mujer, .vestido')
    borrarInvisible.forEach(function(prod) {
        prod.parentElement.className = 'producto ms-2 me-2'
    })
    const filtroMujerCampera = document.querySelectorAll('.hombre, .pollera, .remera, .pantalon, .abrigo, .saco, .sweater, .vestido')
    filtroMujerCampera.forEach(function(filtro) {
        filtro.parentElement.className = 'invisible'
    })
})

//Filtro Mujer Pantalon
const btnMujerPantalon = document.getElementById('btn-mujer-pantalon')
btnMujerPantalon.addEventListener('click', () => {
    const borrarInvisible = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .remera, .buzo, .mujer, .vestido')
    borrarInvisible.forEach(function(prod) {
        prod.parentElement.className = 'producto ms-2 me-2'
    })
    const filtroMujerPantalon = document.querySelectorAll('.hombre, .pollera, .campera, .remera, .abrigo, .saco, .sweater, .vestido')
    filtroMujerPantalon.forEach(function(filtro) {
        filtro.parentElement.className = 'invisible'
    })
})

//Filtro Mujer Saco
const btnMujerSaco = document.getElementById('btn-mujer-saco')
btnMujerSaco.addEventListener('click', () => {
    const borrarInvisible = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .remera, .buzo, .mujer, .vestido')
    borrarInvisible.forEach(function(prod) {
        prod.parentElement.className = 'producto ms-2 me-2'
    })
    const filtroMujerSaco = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .remera, .sweater, .vestido')
    filtroMujerSaco.forEach(function(filtro) {
        filtro.parentElement.className = 'invisible'
    })
})

//Filtro Mujer Vestido
const btnMujerVestido = document.getElementById('btn-mujer-vestido')
btnMujerVestido.addEventListener('click', () => {
    const borrarInvisible = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .remera, .buzo, .mujer, .vestido')
    borrarInvisible.forEach(function(prod) {
        prod.parentElement.className = 'producto ms-2 me-2'
    })
    const filtroMujerVestido = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .remera')
    filtroMujerVestido.forEach(function(filtro) {
        filtro.parentElement.className = 'invisible'
    })
})

//Filtro Mujer Sweater
const btnMujerSweater = document.getElementById('btn-mujer-sweater')
btnMujerSweater.addEventListener('click', () => {
    const borrarInvisible = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .remera, .buzo, .mujer, .vestido')
    borrarInvisible.forEach(function(prod) {
        prod.parentElement.className = 'producto ms-2 me-2'
    })
    const filtroMujerSweater = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .remera, .vestido')
    filtroMujerSweater.forEach(function(filtro) {
        filtro.parentElement.className = 'invisible'
    })
})

//Filtro Mujer Abrigo
const btnMujerAbrigo = document.getElementById('btn-mujer-abrigo')
btnMujerAbrigo.addEventListener('click', () => {
    const borrarInvisible = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .abrigo, .saco, .sweater, .remera, .buzo, .mujer, .vestido')
    borrarInvisible.forEach(function(prod) {
        prod.parentElement.className = 'producto ms-2 me-2'
    })
    const filtroMujerAbrigo = document.querySelectorAll('.hombre, .pollera, .campera, .pantalon, .remera, .saco, .sweater, .vestido')
    filtroMujerAbrigo.forEach(function(filtro) {
        filtro.parentElement.className = 'invisible'
    })
})