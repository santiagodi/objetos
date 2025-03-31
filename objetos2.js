const banco = (function() {
    let transacciones = [];

    function obtenerSaldo() {
        return transacciones.reduce((saldo, monto) => saldo + monto, 0);
    }

    function registrarTransaccion(monto) {
        transacciones = [...transacciones, monto].slice(-5);
    }

    function depositar(monto) {
        if (monto <= 0) return console.log("El monto debe ser mayor que 0.");
        registrarTransaccion(monto);
        console.log(`Depósito de $${monto} realizado. Saldo: $${obtenerSaldo()}`);
    }

    function retirar(monto) {
        if (monto <= 0 || monto > 500) return console.log("Monto inválido (máx. $500).");
        if (monto > obtenerSaldo()) return console.log("Fondos insuficientes.");
        registrarTransaccion(-monto);
        console.log(`Retiro de $${monto} realizado. Saldo: $${obtenerSaldo()}`);
    }

    function mostrarTransacciones() {
        console.log("Últimas transacciones:");
        transacciones.forEach((monto, i) => {
            console.log(`${i + 1}. ${monto > 0 ? "Depósito" : "Retiro"} de $${Math.abs(monto)}`);
        });
    }

    function mostrarMovimientos(tipo) {
        let movs = transacciones.filter(m => (tipo === "depósitos" ? m > 0 : m < 0));
        console.log(`${tipo.charAt(0).toUpperCase() + tipo.slice(1)} recientes:`, movs.length ? movs.join(", ") : "Ninguno");
    }

    return { depositar, retirar, obtenerSaldo, mostrarTransacciones, mostrarMovimientos };
})();

// Ejecución de pruebas
banco.depositar(200);
banco.depositar(300);
banco.retirar(100);
banco.retirar(50);
banco.retirar(600);

console.log(`Saldo actual: $${banco.obtenerSaldo()}`);
banco.mostrarTransacciones();
banco.mostrarMovimientos("depósitos");
banco.mostrarMovimientos("retiros");
