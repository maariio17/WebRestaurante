//Obtener Datos Menu Completo 
let menuParaPicar=
$.ajax({
    url: 'cartaDigital.json',
    success: function(respuesta) {
        var idMenuCompleto = $(".parapicar");
        $.each(respuesta.Menu[0].ParaPicar, function(index, elemento){
            idMenuCompleto.append(
                '<div class="picar menu-restaurant">'+
                    '<span class="clearfix">'+
                        '<a href="#" class="menu-title" data-meal-img="">'+elemento.Nombre+'</a>'+
                        '<span class="menu-price">'+elemento.Precio+'</span>'+
                    '</span>'+
                '</div>'
            );
        });
    },
    error: function() {
        console.log("No se ha podido obtener la información");
    },
    timeout: '5000'
});

let menuCarnes=
$.ajax({
    url: 'cartaDigital.json',
    success: function(respuesta) {
        var idMenuCompleto = $(".carnes");
        $.each(respuesta.Menu[0].Carnes, function(index, elemento){
            idMenuCompleto.append(
                '<div class="picar menu-restaurant">'+
                    '<span class="clearfix">'+
                        '<a href="#" class="menu-title" data-meal-img="">'+elemento.Nombre+'</a>'+
                        '<span class="menu-price">'+elemento.Precio+'</span>'+
                    '</span>'+
                '</div>'
            );
        });
    },
    error: function() {
        console.log("No se ha podido obtener la información");
    },
    timeout: '5000'
});

let menuPescados=
$.ajax({
    url: 'cartaDigital.json',
    success: function(respuesta) {
        var idMenuCompleto = $(".pescados");
        $.each(respuesta.Menu[0].Pescados, function(index, elemento){
            idMenuCompleto.append(
                '<div class="picar menu-restaurant">'+
                    '<span class="clearfix">'+
                        '<a href="#" class="menu-title" data-meal-img="">'+elemento.Nombre+'</a>'+
                        '<span class="menu-price">'+elemento.Precio+'</span>'+
                    '</span>'+
                '</div>'
            );
        });
    },
    error: function() {
        console.log("No se ha podido obtener la información");
    },
    timeout: '5000'
});

let menuEnsaladas=
$.ajax({
    url: 'cartaDigital.json',
    success: function(respuesta) {
        var idMenuCompleto = $(".ensaladas");
        $.each(respuesta.Menu[0].Ensaladas, function(index, elemento){
            idMenuCompleto.append(
                '<div class="picar menu-restaurant">'+
                    '<span class="clearfix">'+
                        '<a href="#" class="menu-title" data-meal-img="">'+elemento.Nombre+'</a>'+
                        '<span class="menu-price">'+elemento.Precio+'</span>'+
                    '</span>'+
                    '<span class="menu-subtitle">'+elemento.Contenido+'</span>'+
                '</div>'
            );
        });
    },
    error: function() {
        console.log("No se ha podido obtener la información");
    },
    timeout: '5000'
});

let menuBocadillos=
$.ajax({
    url: 'cartaDigital.json',
    success: function(respuesta) {
        var idMenuCompleto = $(".bocadillos");
        console.log(respuesta.Menu[0].Bocadillos);
        $.each(respuesta.Menu[0].Bocadillos, function(index, elemento){
            idMenuCompleto.append(
                '<div class="picar menu-restaurant">'+
                    '<span class="clearfix">'+
                        '<a href="#" class="menu-title" data-meal-img="">'+elemento.Nombre+'</a>'+
                        '<span class="menu-price">'+elemento.Precio+'</span>'+
                    '</span>'+
                    '<span class="menu-subtitle">'+elemento.Contenido+'</span>'+
                '</div>'
            );
        });
    },
    error: function() {
        console.log("No se ha podido obtener la información");
    },
    timeout: '5000'
});

let menuHamburguesas=
$.ajax({
    url: 'cartaDigital.json',
    success: function(respuesta) {
        var idMenuCompleto = $(".hamburguesas");
        $.each(respuesta.Menu[0].Hamburguesas, function(index, elemento){
            idMenuCompleto.append(
                '<div class="picar menu-restaurant">'+
                    '<span class="clearfix">'+
                        '<a href="#" class="menu-title" data-meal-img="">'+elemento.Nombre+'</a>'+
                        '<span class="menu-price">'+elemento.Precio+'</span>'+
                    '</span>'+
                    '<span class="menu-subtitle">'+elemento.Contenido+'</span>'+
                '</div>'
            );
        });
    },
    error: function() {
        console.log("No se ha podido obtener la información");
    },
    timeout: '5000'
});

let menuRoscas=
$.ajax({
    url: 'cartaDigital.json',
    success: function(respuesta) {
        var idMenuCompleto = $(".roscas");
        $.each(respuesta.Menu[0].Roscas, function(index, elemento){
            idMenuCompleto.append(
                '<div class="picar menu-restaurant">'+
                    '<span class="clearfix">'+
                        '<a href="#" class="menu-title" data-meal-img="">'+elemento.Nombre+'</a>'+
                        '<span class="menu-price">'+elemento.Precio+'</span>'+
                    '</span>'+
                '</div>'
            );
        });
    },
    error: function() {
        console.log("No se ha podido obtener la información");
    },
    timeout: '5000'
});

let menuSandwhichs=
$.ajax({
    url: 'cartaDigital.json',
    success: function(respuesta) {
        var idMenuCompleto = $(".sandwhichs");
        $.each(respuesta.Menu[0].Sandwhichs, function(index, elemento){
            idMenuCompleto.append(
                '<div class="picar menu-restaurant">'+
                    '<span class="clearfix">'+
                        '<a href="#" class="menu-title" data-meal-img="">'+elemento.Nombre+'</a>'+
                        '<span class="menu-price">'+elemento.Precio+'</span>'+
                    '</span>'+
                    '<span class="menu-subtitle">'+elemento.Contenido+'</span>'+
                '</div>'
            );
        });
    },
    error: function() {
        console.log("No se ha podido obtener la información");
    },
    timeout: '5000'
});

let menuSopas=
$.ajax({
    url: 'cartaDigital.json',
    success: function(respuesta) {
        var idMenuCompleto = $(".sopas");
        $.each(respuesta.Menu[0].Roscas, function(index, elemento){
            idMenuCompleto.append(
                '<div class="picar menu-restaurant">'+
                    '<span class="clearfix">'+
                        '<a href="#" class="menu-title" data-meal-img="">'+elemento.Nombre+'</a>'+
                        '<span class="menu-price">'+elemento.Precio+'</span>'+
                    '</span>'+
                '</div>'
            );
        });
    },
    error: function() {
        console.log("No se ha podido obtener la información");
    },
    timeout: '5000'
});

let menuPostres=
$.ajax({
    url: 'cartaDigital.json',
    success: function(respuesta) {
        var idMenuCompleto = $(".postres");
        $.each(respuesta.Menu[0].Postres, function(index, elemento){
            idMenuCompleto.append(
                '<div class="picar menu-restaurant">'+
                    '<span class="clearfix">'+
                        '<a href="#" class="menu-title" data-meal-img="">'+elemento.Nombre+'</a>'+
                        '<span class="menu-price">'+elemento.Precio+'</span>'+
                    '</span>'+
                '</div>'
            );
        });
    },
    error: function() {
        console.log("No se ha podido obtener la información");
    },
    timeout: '5000'
});