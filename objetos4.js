const maquinaExpendedora = (function() {
    let productos = [
        { nombre: "Chocolate", cantidad: 2 },
        { nombre: "Galletas", cantidad: 3 },
        { nombre: "Refresco", cantidad: 1 },
        { nombre: "Caramelos", cantidad: 0 },
        { nombre: "Papas Fritas", cantidad: 4 }
    ];

    function mostrarInventario() {
        console.log("Inventario de la máquina:");
        productos.forEach((producto, i) => {
            console.log(`${i}. ${producto.nombre} - Cantidad: ${producto.cantidad}`);
        });
    }

    function comprarProducto(codigo) {
        if (codigo < 0 || codigo >= productos.length) {
            console.log("Código inválido. Intente de nuevo.");
            return;
        }

        let producto = productos[codigo];

        if (producto.cantidad > 0) {
            console.log(`Producto entregado: ${producto.nombre}`);
            producto.cantidad--;
        } else {
            console.log(`El producto "${producto.nombre}" está agotado.`);
            sugerirProducto();
        }
    }

    function sugerirProducto() {
        let sugerencia = productos.find(p => p.cantidad > 0);
        if (sugerencia) {
            console.log(`Sugerencia: Puede comprar ${sugerencia.nombre}`);
        } else {
            console.log("Lo sentimos, no hay productos disponibles.");
        }
    }

    return { mostrarInventario, comprarProducto };
})();


maquinaExpendedora.mostrarInventario();
maquinaExpendedora.comprarProducto(2);
maquinaExpendedora.comprarProducto(2);
maquinaExpendedora.comprarProducto(3);
maquinaExpendedora.comprarProducto(1);
maquinaExpendedora.mostrarInventario();
