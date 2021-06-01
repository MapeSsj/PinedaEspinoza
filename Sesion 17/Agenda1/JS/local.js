function guardarDatos(){
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.movil = document.getElementById("movil").value;
}

function recuperarDatos(){
    if((localStorage.nombre != undefined) && (localStorage.movil != undefined)){
        document.getElementById("datos").innerHTML= "Nombre: " + localStorage.nombre + "<br> Num Celular: " + localStorage.movil;
    }else{
        document.getElementById("datos").innerHTML = "No existen datos registrados";
    }
}