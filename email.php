<?php
    $nombre = $_POST['nombre'];
    $tel = $_POST['telefono'];
    $email = $_POST['email'];
    $fechaReserva = $_POST['fechaReserva'];
    $personas = $_POST['personas'];
    $mensaje = $_POST['mensaje'];

    $header = 'From: ' . $email . "\r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";

    $mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
    $mensaje .= "Su Numero de teléfono es: " . $tel . " \r\n";
    $mensaje .= "Su e-mail es: " . $email . " \r\n";
    $mensaje .= "Quiere reservar para el día: " . $fechaReserva . " \r\n";
    $mensaje .= "Para: " . $personas . " personas \r\n";
    $mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
    $mensaje .= "Enviado el " . date('d/m/Y', time());

    $para = 'bartorcuatorestaurante@gmail.com';
    $asunto = 'Mensaje de mi sitio web';

    mail($para, $asunto, utf8_decode($mensaje), $header);
    mail($email,"Reserva Bar-Restaurante Torcuato","Gracias por ponerse en contacto con nosotros. Le confirmaremos su reserva lo antes posible.", "Bar-Restaurante Torcuato");

    header("Location:index.html");
?>