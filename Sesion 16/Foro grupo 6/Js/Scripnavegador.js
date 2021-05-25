$(document).ready(function()
        {
            // Cuando se pulsa el botón se lanzará 'error()' al no existir la
            // imagen que se pretende cargar (observa cómo encadenamos los métodos)
            $("#boton").click(function(){
                 $("#imagen").error(function(){
                    $("#log").text("Error al cargar la imagen");
                }).attr("href", "logo2.jpg").error();
            });
            // Al redimensionar la ventana
             $(window).resize(function(){
                $("#log").text("se ha redimensionado la ventana");
            });
            // Al hacer scroll en el documento
             $(window).scroll(function(){
                $("#log").text("se ha hecho scroll en la página");
            });
            // Al hacer scroll en 'div2'
             $("#div2").scroll(function(){
                $("#log").text("se ha hecho scroll en 'div2'");
            });
        });