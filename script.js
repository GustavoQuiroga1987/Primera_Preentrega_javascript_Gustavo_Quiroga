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

    localStorage.setItem(`usuario1` , JSON.stringify(usuario1))
    let usuario1LS = JSON.parse(localStorage.getItem("usuario1"))

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


//variables del DOM   
let depositar = document.getElementById("depositar");
let extraccion = document.getElementById("extraccion");
let consultar = document.getElementById("consultar");
let resultadoOperaciones = document.querySelector(".resultado-operaciones")
let formDeposito = document.querySelector(".form-deposito")
let formExtraccion = document.querySelector(".form-extraccion")


//eventos

depositar.onclick=ingresarDinero
extraccion.onclick=retirarDinero
consultar.onclick=checkearDatosUsuario



//funciones

function ingresarDinero(){

    let deposito = parseInt(formDeposito.value)
    console.log(deposito);
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
        formDeposito.value=""  
}
    else{
        resultadoOperaciones.className= "my-3 p-3  alert alert-danger";
        resultadoOperaciones.innerHTML=`<p>"Los datos ingresados no son validos</p>`
        formDeposito.value="" 
}
}


function retirarDinero(){
    let retiro = parseInt(formExtraccion.value)
    if(retiro >= usuario1.saldo || isNaN(retiro)){
        resultadoOperaciones.className= "my-3 p-3  alert alert-danger";
        resultadoOperaciones.innerHTML=`<p>Saldo insuficiente o los datos ingresados son invalidos</p>`
        formExtraccion.value="" 
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
        formExtraccion.value="" 

    }  
}
    
    
function checkearDatosUsuario(){
    fetch(`usuarios.json`)
    .then(respuesta=>respuesta.json())
    .then(data=>{
        let contenido="";
        for(const usuario of  data){
        if(usuario.id==1){
            contenido=`<div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${usuario.nombre} ${usuario.apellido}</li>
            <li class="list-group-item">DNI:${usuario.dni}</li>
            <li class="list-group-item">Domicilio:${usuario.domicilio}</li>
            <li class="list-group-item">Localidad:${usuario.localidad}</li>
            <li class="list-group-item">Codigo Postal:${usuario.codigopostal}</li>
            </ul>
        </div>`
    } 
}   

document.getElementById("contenido").innerHTML=contenido
    })
}