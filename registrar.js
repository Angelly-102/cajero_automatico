let usuarios=[];

function validarUsuario(nombre, cuenta,contraseña,saldoInicial){

    if(!nombre || !cuenta || !contraseña || isNaN(saldoInicial)){
        console.log("registro incorrecto, faltan datos o el saldo no es un numero")
        return false;
    }

    let usuarioExiste= usuarios.find( usuario => usuario.cuenta === cuenta);
    if (usuarioExiste){
        console.log( "La cuenta ya esta registrada");
        return false;
    }

    let nuevoUsuario={
        nombre: nombre,
        cuenta: cuenta,
        contraseña: contraseña,
        saldo: saldoInicial,
    };

    usuarios.push(nuevoUsuario);
    console.log("usuario registrado correctamente",nuevoUsuario);
    return true;
}

let registroCompleto = false;

while(!registroCompleto){
let nombre= prompt("ingrese su nombre:");
let cuenta= prompt("ingrese su numero de cuenta:");
let contraseña= prompt("ingrese su contraseña:");
let saldoInicial= parseFloat(prompt("ingrese su saldo inicial:"));

registroCompleto= validarUsuario(nombre,cuenta,contraseña,saldoInicial);

if(!registroCompleto){
    alert("error en el registro,intente de nuevo con datos validos")
}else{
    alert("¡registro exitoso!")
}

}

console.log("lista de usuarios actuales: ", usuarios);