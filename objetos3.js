const filaEspera = (function() {
    let clientes = [];
    let capacidad = 7;

    function agregar(nombre, edad) {
        if (clientes.length < capacidad) {
            let cliente = { nombre, edad };
            clientes.push(cliente);
            console.log(`${nombre} ha sido agregado a la cola.`);
        } else {
            console.log("La cola está llena.");
        }
    }

    function atender() {
        if (clientes.length > 0) {
            let atendido = clientes.shift();
            console.log(`${atendido.nombre} ha sido atendido.`);
        } else {
            console.log("No hay clientes en la cola.");
        }
    }

    function mostrarClientes() {
        if (clientes.length > 0) {
            console.log("Clientes en la cola:");
            clientes.forEach((c, i) => console.log(`${i + 1}. ${c.nombre} (Edad: ${c.edad})`));
        } else {
            console.log("La cola está vacía.");
        }
    }

    return { agregar, atender, mostrarClientes };
})();

filaEspera.agregar("Juan", 25);
filaEspera.agregar("Maria", 30);
filaEspera.agregar("Carlos", 28);
filaEspera.agregar("Jose", 22);
filaEspera.agregar("Marina", 35);
filaEspera.agregar("Eduar", 27);
filaEspera.agregar("El Gey", 40);
filaEspera.atender();
filaEspera.mostrarClientes();
