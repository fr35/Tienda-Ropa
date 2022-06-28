const btnSidebar = document.querySelector('.toggle-btn')
btnSidebar.addEventListener('click',()=> {
    document.getElementById('sidebar').classList.toggle('active')
})