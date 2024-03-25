

//Menu Login

let submit = document.getElementById("submit");
submit.onclick=logear

function cargarUsuarios(){
fetch(`usuarios.json`)
.then(respuesta=>respuesta.json())
.then(data=>{
    localStorage.setItem("users",JSON.stringify(data))
}) 
}
cargarUsuarios()

function logear(){ 
let users = JSON.parse(localStorage.getItem(`users`))
let loginNombre = document.getElementById("login-nombre").value;
let loginPassword = document.getElementById("login-password").value;


if(usuarioOnline=users.find(user=>user.nombre===loginNombre && user.password===parseInt(loginPassword))){

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
let cerrar =document.getElementById("cerrar-seccion")
let resultadoOperaciones = document.querySelector(".resultado-operaciones")
let formDeposito = document.querySelector(".form-deposito")
let formExtraccion = document.querySelector(".form-extraccion")


//eventos

depositar.onclick=ingresarDinero
extraccion.onclick=retirarDinero
consultar.onclick=checkearDatosUsuario
cerrar.onclick=cerrarSeccion



//funciones

function ingresarDinero(){ 

    let contenido = document.querySelector(".contenido").innerHTML=`<div class="contenido-active">
    <h2>Bienvenido ${usuarioOnline.nombre}</h2>
    <br>
    <h2>Tu salgo es de $${usuarioOnline.saldo}</h2>
    <br>
    </div>`

    let deposito = parseInt(formDeposito.value)
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

function cerrarSeccion() {
    location.reload()
}   

    
