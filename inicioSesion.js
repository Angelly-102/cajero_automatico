let saldo= 1500
let continuar= true;


let movimientos= [{
    fecha: new Date().toLocaleString(),
    tipo: "saldo inicial",
    monto: 1500,
    saldoResultante:1500
}
];

let nombreUsuario= "";
let contraseña= "";
let intentos= 0;
const Max_Intentos= 3;
const clave_Correcta= "4321";
let cuentaBloqueada= false;

while(intentos< Max_Intentos){
    nombreUsuario= prompt("ingrese su nombre de usuario: ");
    if (nombreUsuario === null) break;

    contraseña= prompt("ingrese su contraseña: ");
    if (contraseña === null) break;

    if(contraseña === clave_Correcta) {
    if (intentos === 0){
        let saldoIngresado= parseFloat(prompt("ingrese su saldo inicial: "));
        if (!isNaN(saldoIngresado) && saldoIngresado >= 0){
            saldo= saldoIngresado;
            movimientos=[{
                fecha: new Date().toLocaleString(),
                tipo: "saldo inicial",
                monto: saldo,
                saldoResultante: saldo
               }];
            }
        }

        
      break;
    }

     intentos++; 

    }


if(intentos === Max_Intentos){
    cuentaBloqueada= true;
    alert("cuenta bloqueada se acabaron los intentos");
    continuar= false;
}
