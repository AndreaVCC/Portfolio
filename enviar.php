<?php

<?php
$nombre = $_POST['nombre'];
$asunto = $_POST['email'];
$mensaje = $_POST['mensaje'];

echo "<h2>Informacion recibida desde PHP</h2>";
echo "El nombre recibido es: " . $nombre . "<br/>";
echo "El asunto recibido es: " . $asunto . "<br/>";
echo "El mensaje recibido es: " . $mensaje . "<br/>";

?>


/*e crea variable y le da el valor que tnga el input

$nombre = $_POST['nombre'];
$mail = $_POST['mail'];
$mensaje = $_POST['mensaje'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Texto: " . $mensaje . " \r\n";

$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'a.carreocoppo2@gmail.com';
$asunto = 'Mensaje de mi sitio web';

if (mail($para, $asunto, utf8_decode($mensaje), $header))
echo "<script type='text/javascript'>alert('Tu mensaje ha sido enviado exitosamente');</script>";
echo "<script type='text/javascript'>window.location.href='http://bluuweb.cl/plantilla-1/index.html';</script>";
*/



?>