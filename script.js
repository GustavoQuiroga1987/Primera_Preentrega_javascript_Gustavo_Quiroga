//Usuarios

function usuario(id , nombre , apellido , saldo , puntos , password ,dni , tarjetas){
    this.id = id
    this.nombre = nombre
    this.apellido = apellido
    this.saldo = saldo
    this.puntos = puntos
    this.password = password
    this.dni = dni
    this.tarjetas =tarjetas

}

//Creacion de usuarios
const usuario1 = new usuario(1 ,"gustavo", "quiroga",25000,650,2236,33106354,["visa debito" , "visa credito" ,"tarjeta de puntos"])
const usuario2 = new usuario(2 , "cecilia" ,"osiglio",39000,0,1234,32908422,["visa debito" , "visa credito" , "mastercard credito"])
console.log(usuario1)


//Menu Login

let online = false
let submit = document.getElementById("submit");
submit.onclick=logear

function logear(){

let loginNombre = document.getElementById("login-nombre").value;
let loginPassword = document.getElementById("login-password").value;


if (loginNombre==usuario1.nombre && loginPassword==usuario1.password) {
    online=true
    let contenido = document.querySelector(".contenido").innerHTML=`<div class="contenido-active">
    <h2>Bienvenido ${usuario1LS.nombre}</h2>
    <br>
    <h2>Tu salgo es de $${usuario1LS.saldo}</h2>
    <br>
    </div>`

    let operaciones = document.querySelector(".operaciones");
    operaciones.style.display="flex"   

}
else{

let resultado = document.querySelector(".resultado")

resultado.className= "my-3 p-3 border border-danger text-danger";
resultado.innerHTML="El usuario ingresado no existe"
}


}
//Menu app 

//Banco digital

//Local Storage
localStorage.setItem(`usuario1` , JSON.stringify(usuario1))
    let usuario1LS = JSON.parse(localStorage.getItem("usuario1"))

//variables del DOM   
let depositar = document.getElementById("depositar");
let extraccion = document.getElementById("extraccion");
let consultar = document.getElementById("consultar");
let resultadoOperaciones = document.querySelector(".resultado-operaciones")


//eventos

depositar.onclick=ingresarDinero
extraccion.onclick=retirarDinero
consultar.onclick=tieneTarjetaDePuntos



//funciones

function ingresarDinero(){
    let deposito = parseInt(prompt("Ingrese el monto a depositar"))
    if(!isNaN(deposito)){
        
        usuario1.saldo+=deposito
        resultadoOperaciones.className= "my-3 p-3 alert alert-primary";
        resultadoOperaciones.innerHTML=`<p>Deposito exitoso. Tu nuevo saldo es $${usuario1.saldo}</p>` 
        let contenido = document.querySelector(".contenido").innerHTML=`<div class="contenido-active">
        <h2>Bienvenido ${usuario1.nombre}</h2>
        <br>
        <h2>Tu saldo es de $${usuario1.saldo}</h2>
        <br>
        </div>`    
}
    else{
        resultadoOperaciones.className= "my-3 p-3  alert alert-danger";
        resultadoOperaciones.innerHTML=`<p>"Los datos ingresados no son validos</p>`
}
}


function retirarDinero(){
    let retiro = parseInt(prompt("Ingrese el monto a extraer"))
    if(retiro >= usuario1.saldo || isNaN(retiro)){
        resultadoOperaciones.className= "my-3 p-3  alert alert-danger";
        resultadoOperaciones.innerHTML=`<p>Saldo insuficiente o los datos ingresados son invalidos</p>`
    }
    else{
        usuario1.saldo-=retiro
        resultadoOperaciones.className= "my-3 p-3 alert alert-primary";
        resultadoOperaciones.innerHTML=`<p>Retiro exitoso. Tu nuevo saldo es $${usuario1.saldo}</p>` 
        let contenido = document.querySelector(".contenido").innerHTML=`<div class="contenido-active">
        <h2>Bienvenido ${usuario1.nombre}</h2>
        <br>
        <h2>Tu salgo es de $${usuario1.saldo}</h2>
        <br>
    </div>` 
    }  
}
    
    
function tieneTarjetaDePuntos(){
            let tarjetadepuntos = usuario1.tarjetas.find(item=>item=="tarjeta de puntos")
            if(tarjetadepuntos=="tarjeta de puntos"){
                resultadoOperaciones.className= "my-3 p-3 alert alert-primary";
                resultadoOperaciones.innerHTML=`<p>El usuario cuenta con ${usuario1.puntos} puntos en su tarjeta</p>`
            }else{
                resultadoOperaciones.className= "my-3 p-3  alert alert-danger";
                resultadoOperaciones.innerHTML=`<p>El usuario no cuenta con tarjeta puntos</p>`
            }
}
    
    