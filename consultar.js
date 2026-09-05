while (continuar) {
    let opcion = prompt(
        "Bienvenido a el Cajero Automático\n\n" +
        "1. Consultar saldo\n" +
        "2. Depositar dinero\n" +
        "3. Retirar dinero\n" +
        "4. ver historial de movimientos\n" +
        "5. Salir\n\n" +
        "Elige una opción (1-5):"
    );

    // Convertimos la opción 
    opcion = parseInt(opcion);

    switch (opcion) {
        case 1:
            console.log(`Tu saldo actual es: $${saldo}`);
            alert(`Tu saldo actual es: $${saldo}`);
            break;

        case 2:
            let deposito = parseFloat(prompt("¿Cuánto deseas depositar?"));
            if (deposito > 0 && !isNaN(deposito)) {
                saldo += deposito;

                movimientos.push({
                    fecha: new Date().toLocaleString(),
                    tipo : "deposito",
                    monto: deposito,
                    saldoResultante: saldo
                });
                console.log(`Depósito exitoso. Nuevo saldo: $${saldo}`);
                alert(`Depósito exitoso. Nuevo saldo: $${saldo}`);
            } else {
                console.log("Cantidad no válida para depósito.");
                alert("Cantidad no válida.");
            }
            break;

        case 3:
            let retiro = parseFloat(prompt("¿Cuánto deseas retirar?"));
            if (retiro > 0 && !isNaN(retiro)) {
                if (retiro <= saldo) {
                    saldo -= retiro;

                      movimientos.push({
                    fecha: new Date().toLocaleString(),
                    tipo : "retiro",
                    monto: retiro,
                    saldoResultante: saldo
                });
                    console.log(`Retiro exitoso. Nuevo saldo: $${saldo}`);
                    alert(`Retiro exitoso. Nuevo saldo: $${saldo}`);
                } else {
                    console.log("Fondos insuficientes.");
                    alert("No tienes suficiente saldo.");
                }
            } else {
                console.log("Cantidad no válida para retiro.");
                alert("Cantidad no válida.");
            }
            break;

            case 4:
                let historial ="______HISTORIAL DE TRANSACCIONES_____";
                movimientos.forEach((m,i) =>{
                    historial += `\n${i + 1}. [${m.fecha}] - ${m.tipo.toUpperCase()}\n monto: $${m.monto} | saldo resultante :  $${m.saldoResultante}\n`;
                });
                console.log(historial);
                alert(historial);
                break;

        case 5:
            console.log("Gracias por usar el cajero. ¡Hasta luego!");
            alert("Gracias por usar el cajero.");
            continuar = false;
            break;

        default:
            console.log("Opción inválida, por favor elige del 1 al 4.");
            alert("Opción inválida.");
            break;
    }
}