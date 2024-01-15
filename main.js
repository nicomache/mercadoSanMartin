const loginButton = document.getElementById('loginButton');
const loginForm = document.getElementById('loginForm');
const btnRegistrarme = document.querySelector(`.btnRegistrarme`)

/* evento login */   

loginButton.addEventListener('click', function() {
  loginForm.classList.toggle('activar');
  btnRegistrarme.classList.toggle('activar');
});


/*SOLICITUD DE PRODUCTOS*/
fetch("listaProductos.json")
.then(respuesta => respuesta.json())
.then(respuesta => {
  const listaProductos = document.getElementById("listaProductos");
  
  respuesta.forEach(item => {
    let frost

    if (item.producto == 'Heladera' && item.noFrost == true) {
      frost = "Si";
    } else if (item.producto == 'Heladera' && item.noFrost == false) {
      frost = "No";
    }
    else if(item.producto == !"heladera" ){
      remove.item.noFrost}

    const producto = document.createElement(`li`);
    producto.innerHTML = `<img src="${item.imagen}"><br>
    <p> ${item.producto}<br> 
    Precio: $${item.precio}<br>
    Marca: ${item.marca}<br>
    No-frost: ${frost}<br>
    Cantidad: ${item.cantidad}</p>`
    producto.classList.add(`productoItem`)
    listaProductos.appendChild(producto)
  });
})
.catch(error => console.error('Error al obtener datos:', error));