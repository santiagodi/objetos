let hotel = {
    habitaciones: {
        1: { ocupada: true },
        2: { ocupada: false },
        3: { ocupada: true },
        4: { ocupada: false },
        5: { ocupada: true }
    },

    mostrarEstado() {
        console.clear();

        let disponibles = [];
        let ocupadas = [];

        for (let num in this.habitaciones) {
            if (this.habitaciones[num].ocupada) {
                ocupadas.push(`Habitación ${num}`);
            } else {
                disponibles.push(`Habitación ${num}`);
            }
        }

        console.log("** Estado de las habitaciones **");
        console.log("Disponibles:", disponibles.length > 0 ? disponibles.join(", ") : "Ninguna");
        console.log("Ocupadas:", ocupadas.length > 0 ? ocupadas.join(", ") : "Ninguna");
    }
};

hotel.mostrarEstado();
