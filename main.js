//Loading de Carga
window.onload = function(){
    //this.alert("He cargado completamente la página");
    $('#onload').fadeOut();
    $('body').css('background-color', 'white')
    $('body').removeClass('hidden');
}

// El Menú pasa de ser transparente, a tener un color de fondo.
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Abrir Menú al pulsar las tres rayas en vistas pequeñas
function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}


//Comprobar que los inputs del formulario son correctos
var reNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
var reCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
var reTelefono = /^[0-9]{10}$/;

$(document).ready(function(){
    $("#enviarReserva").click(function(){
        let nombre = $("#nombre").val();
        let telefono = $("#telefono").val();
        let correo = $("#email").val();
    
        if (nombre == "" || !reNombre.test(nombre)){
            $("#nombre").css("border-color", "red");
            return false;
        } else{
            $("#nombre").css("border-color", "green");

            if(telefono == "" || reTelefono.test(telefono)){
                $("#telefono").css("border-color", "red");
                return false;
            } else{
                $("#telefono").css("border-color", "green");

                if(correo == "" || reCorreo.test(correo)){
                    $("#email").css("border-color", "red");
                    return false;
                } else{
                    $("#email").css("border-color", "green");
                }
            }
        }
    });
});


//Reservar con antelación (No se puede reservar el mismo día)
$(function(){
    var fechaActual = new Date();
    var fechaReserva = fechaActual.getFullYear()+ "-"+MESES[fechaActual.getMonth()]+ "-"+(fechaActual.getDate()+1);
    $("#fechaReserva").attr("min", fechaReserva);
    console.log("funcion");
});
const MESES = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
];


//Obtener Datos Menu 
let menu=
$.ajax({
    url: 'datosWeb.json',
    success: function(response) {
        var idMenu = $(".menuContent");
        $.each(response.Menu, function(index, elemento){
            idMenu.append(
                '<div class="box">' +
                    '<div class="imgBx">'+
                        '<img src='+elemento.Imagen+'>'+
                    '</div>'+
                    '<div class="text">'+
                        '<h3>'+elemento.Nombre+'</h3>'+
                    '</div>'+
                '</div>'
            );
        });
    },
    error: function() {
        console.log("No se ha podido obtener la información");
    },
    timeout: '5000'
});

let personal=
$.ajax({
    url: 'datosWeb.json',
    success: function(response) {
        var idMenu = $(".personal");
        $.each(response.Personal, function(index, elemento){
            idMenu.append(
                '<div class="card">' +
                    '<div class="imgBx">'+
                        '<img src='+elemento.Imagen+'>'+
                    '</div>'+
                    '<div class="text">'+
                        '<h3>'+elemento.Nombre+'</h3>'+
                        '<h3>('+elemento.Oficio+')</h3>'+
                    '</div>'+
                '</div>'
            );
        });
    },
    error: function() {
        console.log("No se ha podido obtener la información");
    },
    timeout: '5000'
});

//OBTENER DATOS TESTIMONIOS ALEATORIOS
let arrTestimonios=[]
let fTestimonios=$.ajax({
    url: "datosWeb.json",
    timeout: '5000',
    success: function (response) {
        $.each(response.Testimonios, function (index, el) {
            const box=$('<div>').attr("class", "box");
            const imgBx=$('<div>').attr("class", "imgBx");
            const img=$('<img>').attr('src',el.ImagenCliente);
            const text=$('<div>').attr("class", "text");
            const opinion=$('<p>').text(el.Comentario);
            const name=$('<h3>').text(el.NombreCliente);
            

            let art= $(box);
            let art2= $(imgBx).append(img);
            let art3= $(text)
            .append(name)
            .append(opinion)
            art.append(art2)
            art.append(art3)
            arrTestimonios.push(art);
        });

        function testimonioAleatorio(){
            let randomTestimonios=[];
            while (randomTestimonios.length < 3){
                var numeroAleatorio = Math.floor( Math.random() * (arrTestimonios.length));
                var existe = false;

                for (var i=0; i<randomTestimonios.length; i++){
                    if (randomTestimonios[i] == numeroAleatorio){
                        existe = true;
                        break;
                    }
                }
                if (!existe){
                    randomTestimonios[randomTestimonios.length] = numeroAleatorio;
                }
            }

            for (let i = 0; i < randomTestimonios.length; i++) {
                $('.testimonio').append(arrTestimonios[randomTestimonios[i]]);
            }
        }
        testimonioAleatorio();
        window.setInterval(
            function(){
                $(".testimonio").empty();
                testimonioAleatorio();
                
            }, 5000);
        
    },
    error: function() {
        console.error("No se ha podido obtener la información");
    }
});