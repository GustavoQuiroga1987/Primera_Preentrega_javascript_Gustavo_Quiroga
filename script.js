//Usuarios

const usuario1= {
    id:1,
    nombre:"gustavo",
    apellido:"quiroga",
    passwordSaved:2236,
    dni:33106354,
    tarjetas:["visa debito","visa credito" ,"tarjeta de puntos"]
}

const usuario2= {
    id:2,
    nombre:"cecilia",
    apellido:"osiglio",
    passwordSaved:1234,
    dni:32908422,
    tarjetas:["visa debito","visa credito","mastercard credito"]
}

//Menu Login

let nombreUsuaruio = prompt("Ingrese su nombre de usuario");
let online = false;

if (nombreUsuaruio != false && nombreUsuaruio===usuario1.nombre) {
    alert(`Bienvenido   ${usuario1.nombre} ${usuario1.apellido}`);
    for (let i = 2; i >= 0; i--) {
        ingresarPassword = parseInt(prompt("ingrese su password de 4 digitos"));
        if (usuario1.passwordSaved ===ingresarPassword) {
            alert("Login exitoso");
            online = true;
            break
        } else {
            alert("El password ingresado es incorecto te quedan " +i+" intentos");
        }while(i==0){
            alert("La app se cerrara debido a que no se ingreso la contraseña correcta intentelo denuevo mas tarde")
            break
        }
    }
} else {
    alert("no se ingreso ningun dato o el usuario no existe");
}

//Menu app 
//Banco digital

    if(online){
        alert(`bienvenido al menu principal ${usuario1.nombre} ${usuario1.apellido}`);
        let saldo = 40000
        let opcion = prompt("Elegi una opcion: \n1-Saldo \n2- Retiro de dinero \n3- Deposito \n4- Cuenta con tarjeta de puntos\nPresione x para salir de sistema");
        while (opcion != "X" && opcion !="x"){
            switch(opcion){
                case "1": alert(`Tu saldo es $${saldo}`)
                    break
                case "2": retirarDinero()
                    break
                case "3": ingresarDinero()
                    break
                case "4": tieneTarjetaDePuntos()
            }

            opcion = prompt("Elegi una opcion \n 1 Saldo \n 2 Retiro de dinero \n 3 Deposito \n4- Cuenta con tarjeta de puntos \n Presione x para salir de sistema");
        }
        
        function retirarDinero(){
            let retiro = parseInt(prompt("Ingrese el monto a extraer"))
            if(retiro <= saldo){
                saldo-=retiro
                alert(`Retiro exitoso. Tu nuevo saldo es $${saldo}`)
            }else{
                alert("Saldo insuficiente")
            }
        }

        function ingresarDinero(){
            let deposito = parseInt(prompt("Ingrese el monto a depositar"))
            saldo+=deposito
            alert(`Deposito exitoso. Tu nuevo saldo es $${saldo}`)

        }

        function tieneTarjetaDePuntos(){
            let tarjetadepuntos = usuario1.tarjetas.find(item=>item=="tarjeta de puntos")
            if(tarjetadepuntos=="tarjeta de puntos"){
                alert("El usuario cuenta con tarjeta de puntos")
            }else{
                alert("El usuario no cuenta con tarjeta de puntos")
            }
        }
    }
