const formulario = document.getElementById('formulario');
const listaClientes = document.getElementById('lista-clientes');
const clientes = [];

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    const telefono = document.getElementById('telefono').value;
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;

    const cliente = {
        correo,
        contraseña,
        telefono,
        nombre,
        fecha
    };

    clientes.push(cliente);
    agregarCliente(cliente);
    formulario.reset();
});

function agregarCliente(cliente) {
    const li = document.createElement('li');
    li.className = 'cliente';
    li.innerHTML = `
        <span class="label">Nombre:</span> <span>${cliente.nombre}</span>
        <span class="label">Correo:</span> <span>${cliente.correo}</span>
        <span class="label">Teléfono:</span> <span>${cliente.telefono}</span>
        <span class="label">Fecha:</span> <span>${cliente.fecha}</span>
        <button class="eliminar">Eliminar</button>
    `;
    listaClientes.appendChild(li);

    const eliminarBoton = li.querySelector('.eliminar');
    eliminarBoton.addEventListener('click', () => {
        eliminarCliente(cliente);
    });
}

function eliminarCliente(cliente) {
    const indice = clientes.indexOf(cliente);
    clientes.splice(indice, 1);
    listaClientes.innerHTML = '';
    clientes.forEach((cliente) => {
        agregarCliente(cliente);
    });
}