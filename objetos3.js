let filaEspera = {
    clientes: [],
    capacidad: 7,

    agregar(nombre, edad) {
        if (this.clientes.length < this.capacidad) {
            let cliente = { nombre, edad };  // Cada cliente es un objeto
            this.clientes.push(cliente);
            console.log(`${nombre} ha sido agregado a la cola.`);
        } else {
            console.log("La cola está llena.");
        }
    },

    atender() {
        if (this.clientes.length > 0) {
            let atendido = this.clientes.shift();
            console.log(`${atendido.nombre} ha sido atendido.`);
        } else {
            console.log("No hay clientes en la cola.");
        }
    },

    mostrarClientes() {
        if (this.clientes.length > 0) {
            console.log("Clientes en la cola:");
            this.clientes.forEach((c, i) => console.log(`${i + 1}. ${c.nombre} (Edad: ${c.edad})`));
        } else {
            console.log("La cola está vacía.");
        }
    }
};

// Pruebas
filaEspera.agregar("Juan", 25);
filaEspera.agregar("Maria", 30);
filaEspera.agregar("Carlos", 28);
filaEspera.agregar("Jose", 22);
filaEspera.agregar("Marina", 35);
filaEspera.agregar("Eduar", 27);
filaEspera.agregar("El Gey", 40);
filaEspera.atender();
filaEspera.mostrarClientes();
