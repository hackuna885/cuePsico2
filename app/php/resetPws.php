<?php 

error_reporting(E_ALL ^ E_DEPRECATED);
header("Content-Type: text/html; Charset=UTF-8");
date_default_timezone_set('America/Mexico_City');
session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpMailer/Exception.php';
require 'phpMailer/PHPMailer.php';
require 'phpMailer/SMTP.php';

include_once 'info.php';
// Codifica el formato json
$_POST = json_decode(file_get_contents("php://input"), true);

// Entradas Form
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$correoUrl = (isset($_POST['correoUrl'])) ? $_POST['correoUrl'] : '';
$passUsr = (isset($_POST['passUsr'])) ? $_POST['passUsr'] : '';

$email = 'depto.psicologia@utfv.edu.mx';
$appPassword = 'dxoj hrau gjmi uibg'; // ⚠️ CAMBIAR ESTO


// Conexion a DB
$con = new SQLite3("../data/data.db");

if ($opcion === 1) {
	if($correoUrl === '' || $passUsr === ''){
		echo json_encode('
			<div class="alert alert-danger text-center animate__animated animate__fadeIn" role="alert">
				Llena todos los campos
			</div>
			');
	}else{
		$correoUrl = preg_replace('([^A-Za-z0-9])', '', $correoUrl);
		$criptPass = md5($passUsr);
		
		$cs = $con -> query("SELECT * FROM registro WHERE correoCript = '$correoUrl'");
	
		while ($resul = $cs -> fetchArray()) {
			$nombreComUsr = $resul['nombreComUsr'];
			$correoInst = $resul['correoInst'];
			$correoMd5 = $resul['correoCript'];
		}
		
		$correoMd5 = (isset($correoMd5)) ?  $correoMd5 : '';

		if($correoMd5 === $correoUrl){
			$cs = $con -> query("UPDATE registro SET passUsr = '$passUsr', passCript = '$criptPass'  WHERE correoCript = '$correoUrl'");

			// ##################################
			// Inicia enviar correo
			// ##################################


			try {
				$mail = new PHPMailer(true);
				
				// Configuración mínima
				$mail->isSMTP();
				$mail->Host = 'smtp.gmail.com';
				$mail->SMTPAuth = true;
				$mail->Username = $email;
				$mail->Password = $appPassword;
				$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
				$mail->Port = 465;
				$mail->CharSet = 'UTF-8';
				
				// Email mínimo
				$mail->setFrom($email, 'SDAPI - UTFV');
				$mail->addAddress($correoInst);
				$mail->Subject = 'Cambio de contraseña exitoso - Plataforma de Citas - Área de Atención Psicológica UTFV';
				$mail->isHTML(true);
				$mail->Body = '
				<html>
				
				<head>
					<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
					<title>SDAP - UTFV</title>
				</head>
				<div style="width: 600px; font-family: Arial, sans-serif; font-size: 16px; padding: 20px;">
					<div>
						<img src="https://utfv.net/downloads/bannerLogoPsico.jpg" width="600px" height="auto" margin: 0px; padding:
							0px;>
					</div>
					<h1>¡Hola '.$nombreComUsr.'!</h1>
					<br>
					<p>Contraseña restablecida, exitosamente.</p>
					<br>
					<p>Tu nueva contraseña es: <b>'.$passUsr.'</b></p>
				
				</div>
				
				</html>
				';
			
			if ($mail->send()) {
				echo json_encode('correcto', JSON_UNESCAPED_UNICODE);
			} else {
				echo json_encode('error_envio', JSON_UNESCAPED_UNICODE);
			}
			
			} catch (Exception $e) {
			// Solo una respuesta según el tipo de error
			if (strpos($e->getMessage(), 'authenticate') !== false) {
			echo json_encode('Contraseña incorrecta', JSON_UNESCAPED_UNICODE);
			} else {
			echo json_encode('Error: ' . $e->getMessage(), JSON_UNESCAPED_UNICODE);
			}
			}
		

			// ##################################
			// Termina enviar correo
			// ##################################			

		}else{

			echo json_encode('
			<div class="alert alert-danger text-center animate__animated animate__fadeIn" role="alert">
				¡Error! Correo no registrado.
			</div>
			');

		}
	}
}else{
	echo json_encode('');
}

$con -> close();

 ?>