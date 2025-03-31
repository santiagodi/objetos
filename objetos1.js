function Habitacion(numero, ocupada) {
    return { numero, ocupada };
}

const habitaciones = {
    1: Habitacion(1, true),
    2: Habitacion(2, false),
    3: Habitacion(3, true),
    4: Habitacion(4, false),
    5: Habitacion(5, true)
};

function mostrarEstado() {
    console.clear();

    let disponibles = [];
    let ocupadas = [];

    for (let num in habitaciones) {
        let habitacion = habitaciones[num];
        if (habitacion.ocupada) {
            ocupadas.push("Habitación " + habitacion.numero);
        } else {
            disponibles.push("Habitación " + habitacion.numero);
        }
    }

    console.log("** Estado de las habitaciones **");
    console.log("Disponibles:", disponibles.length > 0 ? disponibles : "Ninguna");
    console.log("Ocupadas:", ocupadas.length > 0 ? ocupadas : "Ninguna");
}

mostrarEstado();

