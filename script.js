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




//Menu Login

let submit = document.getElementById("submit");
submit.onclick=logear

function logear(){

fetch(`usuarios.json`)
.then(respuesta=>respuesta.json())
.then(data=>{
    localStorage.setItem("users",JSON.stringify(data))
})  
    
let users = JSON.parse(localStorage.getItem(`users`))
console.log(users);
let loginNombre = document.getElementById("login-nombre").value;
let loginPassword = document.getElementById("login-password").value;


if(usuarioOnline=users.find(user=>user.nombre===loginNombre && user.password===parseInt(loginPassword))){

console.log(usuarioOnline);

    let contenido = document.querySelector(".contenido").innerHTML=`<div class="contenido-active">
    <h2>Bienvenido ${usuarioOnline.nombre}</h2>
    <br>
    <h2>Tu salgo es de $${usuarioOnline.saldo}</h2>
    <br>
    </div>`


    let operaciones = document.querySelector(".operaciones");
        operaciones.style.display="flex"   

}
else{


let resultado = document.querySelector(".resultado")
resultado.innerHTML=`<p class="my-3 p-3 border border-danger text-danger">El usuario ingresado no existe</p>`

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

    let contenido = document.querySelector(".contenido").innerHTML=`<div class="contenido-active">
    <h2>Bienvenido ${usuarioOnline.nombre}</h2>
    <br>
    <h2>Tu salgo es de $${usuarioOnline.saldo}</h2>
    <br>
    </div>`

    let deposito = parseInt(formDeposito.value)
    console.log(deposito);
    if(!isNaN(deposito)){
        usuarioOnline.saldo+=deposito
        resultadoOperaciones.className= "my-3 p-3 alert alert-primary";
        resultadoOperaciones.innerHTML=`<p>Deposito exitoso. Tu nuevo saldo es $${usuarioOnline.saldo}</p>` 
        let contenido = document.querySelector(".contenido").innerHTML=`<div class="contenido-active">
        <h2>Bienvenido ${usuarioOnline.nombre}</h2>
        <br>
        <h2>Tu saldo es de $${usuarioOnline.saldo}</h2>
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
    let contenido = document.querySelector(".contenido").innerHTML=`<div class="contenido-active">
    <h2>Bienvenido ${usuarioOnline.nombre}</h2>
    <br>
    <h2>Tu salgo es de $${usuarioOnline.saldo}</h2>
    <br>
    </div>`


    let retiro = parseInt(formExtraccion.value)
    if(retiro > usuarioOnline.saldo || isNaN(retiro)){
        resultadoOperaciones.className= "my-3 p-3  alert alert-danger";
        resultadoOperaciones.innerHTML=`<p>Saldo insuficiente o los datos ingresados son invalidos</p>`
        formExtraccion.value="" 
    }
    else{
        usuarioOnline.saldo-=retiro
        resultadoOperaciones.className= "my-3 p-3 alert alert-primary";
        resultadoOperaciones.innerHTML=`<p>Retiro exitoso. Tu nuevo saldo es $${usuarioOnline.saldo}</p>` 
        let contenido = document.querySelector(".contenido").innerHTML=`<div class="contenido-active">
        <h2>Bienvenido ${usuarioOnline.nombre}</h2>
        <br>
        <h2>Tu salgo es de $${usuarioOnline.saldo}</h2>
        <br>
    </div>` 
        formExtraccion.value="" 

    }  
}
    
    
function checkearDatosUsuario(){
    
        let contenido="";
        
            contenido=`<div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${usuarioOnline.nombre} ${usuarioOnline.apellido}</li>
            <li class="list-group-item">DNI:${usuarioOnline.dni}</li>
            <li class="list-group-item">Domicilio:${usuarioOnline.domicilio}</li>
            <li class="list-group-item">Localidad:${usuarioOnline.localidad}</li>
            <li class="list-group-item">Codigo Postal:${usuarioOnline.codigopostal}</li>
            </ul>
        </div>`

        document.getElementById("contenido").innerHTML=contenido
    } 

    

    
