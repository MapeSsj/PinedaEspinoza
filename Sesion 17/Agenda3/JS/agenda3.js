function guardarDato() {
    const nombre= document.getElementById("nombre").value;
    const movil= document.getElementById("movil").value;
    const email= document.getElementById("email").value;

    const datos={
        'movil': movil,
        'email': email,

    };

    localStorage.setItem(nombre, JSON.stringify(datos));
    document.getElementById("nombre").value= "";
    document.getElementById("movil").value= "";
    document.getElementById("email").value= "";

    actualizarDatos();
}
   
function recuperarDato() {
    var nombre = document.getElementById("nombre").value;
    var datos = JSON.parse(localStorage.getItem(nombre));
    document.getElementById("movil").value = datos.movil;
    document.getElementById("email").value = datos.email;
}

function eliminarDato(){
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos() {
    var registro = "";
   
    if(localStorage.length === 0){
        registro='<li>vacio </li><br>';
    }
        else{
            for (var i=0; i< localStorage.length; i++){
                var key = localStorage.key(i);
                
                var datos = localStorage.getItem(key);
                datos = JSON.parse(datos);
 
                registro +='<tr><td>'+key+'</td>'+
                        '<td>'+datos.movil+'</td>'+
                        '<td>'+datos.email+'</td></tr>';
                                  
            }
        }
    document.getElementById("registros").innerHTML=registro;
}

/* 
function actualizarDatos() {
    var fila = "";
   
    if(localStorage.length === 0){
        fila='<li>vacio </li><br>';
    }
        else{
            for (var i=0; i< localStorage.length; i++){
                var key = localStorage.key(i);
                alert(key);
                var datos = localStorage.getItem(key);
                datos = JSON.parse(datos);
 
                fila +='<tr><td>'+key+'</td>'+
                        '<td>'+datos.celular+'</td>'+
                        '<td>'+datos.correo+'</td></tr>';
                        alert(fila)          
            }
        }
    document.getElementById("registros").innerHTML=fila;
} */