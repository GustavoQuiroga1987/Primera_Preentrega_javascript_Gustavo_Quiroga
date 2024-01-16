//Menu Login

let nombreUsuaruio = prompt("Ingrese su nombre de usuario");
let passwordSaved = 2236;
let online = false;

if (nombreUsuaruio != false) {
    alert("Bienvenido " + nombreUsuaruio);
    for (let i = 2; i >= 0; i--) {
        ingresarPassword = parseInt(prompt("ingrese su password de 4 digitos"));
        if (passwordSaved == ingresarPassword) {
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
    alert("no se ingreso ningun dato");
}

//Menu app 
//A definir de q va a ser la app 

const Menu =(online)
    if(online){
        alert("bienvenido al menu principal "+nombreUsuaruio+"\n Te contamos q en estos momentos nos encontramos en mantenimiento de la app\n Por favor disculpe las molestias")
    }
