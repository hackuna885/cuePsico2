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

// 🔥 CONFIGURACIÓN RÁPIDA
// $email = 'ovelazquez@corsec.com.mx';
// $appPassword = 'oifh ogvh bdli klvf'; // ⚠️ CAMBIAR ESTO
$email = 'depto.psicologia@utfv.edu.mx';
$appPassword = 'dxoj hrau gjmi uibg'; // ⚠️ CAMBIAR ESTO

// Entradas Form
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$matricula = (isset($_POST['matricula'])) ? ($_POST['matricula']) : '';
$correoInst = (isset($_POST['correoInst'])) ? ($_POST['correoInst']) : '';
$passUsr = (isset($_POST['passUsr'])) ? ($_POST['passUsr']) : '';
$passUsrDos = (isset($_POST['passUsrDos'])) ? ($_POST['passUsrDos']) : '';
$nombre = (isset($_POST['nombre'])) ? mb_strtoupper($_POST['nombre'], 'utf-8') : '';
$aPaterno = (isset($_POST['aPaterno'])) ? mb_strtoupper($_POST['aPaterno'], 'utf-8') : '';
$aMaterno = (isset($_POST['aMaterno'])) ? mb_strtoupper($_POST['aMaterno'], 'utf-8') : '';
$selectedSexo = (isset($_POST['selectedSexo'])) ? mb_strtoupper($_POST['selectedSexo'], 'utf-8') : '';
$fechaNa = (isset($_POST['fechaNa'])) ? ($_POST['fechaNa']) : '';
$telPersonal = (isset($_POST['telPersonal'])) ? ($_POST['telPersonal']) : '';
$selectedDivision = (isset($_POST['selectedDivision'])) ? mb_strtoupper($_POST['selectedDivision'], 'utf-8') : '';
$selectedSpecialty = (isset($_POST['selectedSpecialty'])) ? mb_strtoupper($_POST['selectedSpecialty'], 'utf-8') : '';
$nomTutor = (isset($_POST['nomTutor'])) ? mb_strtoupper($_POST['nomTutor'], 'utf-8') : '';
$nomRed = (isset($_POST['nomRed'])) ? mb_strtoupper($_POST['nomRed'], 'utf-8') : '';
$telRed = (isset($_POST['telRed'])) ? ($_POST['telRed']) : '';
$turno = (isset($_POST['turno'])) ? mb_strtoupper($_POST['turno'], 'utf-8') : ''; 


$nombre = eliminar_tildes($nombre);
$aPaterno = eliminar_tildes($aPaterno);
$aMaterno = eliminar_tildes($aMaterno);
$selectedDivision = eliminar_tildes($selectedDivision);
$selectedSpecialty = eliminar_tildes($selectedSpecialty);
$nomTutor = eliminar_tildes($nomTutor);
$nomRed = eliminar_tildes($nomRed);
$turno = eliminar_tildes($turno);

// Conexion a DB
$con = new SQLite3("../data/data.db");

if ($opcion === 1) {
	if($matricula === '' || $correoInst === '' || $passUsr === '' || $passUsrDos === '' || $nombre === '' || $aPaterno  === '' || $aMaterno === '' || $fechaNa === '' || $telPersonal === '' || $selectedDivision === '' || $nomRed === '' || $telRed === ''){
		echo json_encode('
			<div class="alert alert-danger text-center animate__animated animate__fadeIn" role="alert">
				Llena todos los campos
			</div>
			');
	}else{
		
		
		$correoCript = md5($correoInst);
		$passCript = md5($passUsr);

		$nombreComUsr = $nombre.' '.$aPaterno.' '.$aMaterno;
		$userMd5 = md5($nombreComUsr);

		$varNavega = $info["browser"];	
		$varVersio = $info["version"];
		$varSitemaO = $info["os"];
		$fechaCap = date('d-m-Y');
		$horaCap = date('g:i:s a');
		$fechaHoraReg = $fechaCap . ' ' . $horaCap;

		
		$cs = $con -> query("SELECT correoCript FROM registro WHERE correoCript = '$correoCript'");
	
		while ($resul = $cs -> fetchArray()) {
			$correoMd5 = $resul['correoCript'];
		}	
		
				
		$correoMd5 = (isset($correoMd5)) ?  $correoMd5 : '';

		if($correoMd5 === $correoCript){

			echo json_encode('
			<div class="alert alert-danger text-center animate__animated animate__fadeIn" role="alert">
				¡Error! Correo registrado anteriormente
			</div>
			');

		}else{
			$cs = $con -> query("INSERT INTO registro (matricula, correoInst, passUsr, nombre, aPaterno, aMaterno, nombreComUsr, sexo, fechaNa, telPersonal, selectedDivision, selectedSpecialty, nomTutor, nomRed, telRed, turno, correoCript, passCript, userMd5, varNavega, varVersio, varSitemaO, fechaHoraReg, per1, per2) VALUES('$matricula', '$correoInst', '$passUsr', '$nombre', '$aPaterno', '$aMaterno', '$nombreComUsr', '$selectedSexo', '$fechaNa', '$telPersonal', '$selectedDivision', '$selectedSpecialty', '$nomTutor', '$nomRed', '$telRed', '$turno', '$correoCript', '$passCript', '$userMd5', '$varNavega', '$varVersio', '$varSitemaO', '$fechaHoraReg', '1', '1')");
			
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
			$mail->Subject = 'Bienvenido(a) la Plataforma de Citas - Área de Atención Psicológica UTFV';
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
				<p>
				<h1>Hola '.$nombreComUsr.'</h1>
				<br>
				<br>
				Te damos la bienvenida a la plataforma digital del Área de Atención Psicológica de la UTFV.
				<br>
				<br>
				<b>Tus datos de acceso son:</b>
				</p>
			
				<p>
					Usuario: '.$correoInst.'
					<br>
					Contraseña: '.$passUsr.'
				</p>
			
				<p><b>Accede en: <a
							href="https://atenpsicologica.utfv.net/menu.aspx?id=sesion">https://atenpsicologica.utfv.net/menu.aspx?id=sesion</a></b>
					<br>
					<br>
					Esta herramienta te permitirá agendar citas de forma rápida y sencilla para acceder a nuestros servicios
					gratuitos
					de apoyo psicológico. Nuestro objetivo es acompañarte en tu bienestar emocional y contribuir a tu éxito
					académico.
				</p>
			
				<p><b>Recomendaciones importantes:</b></p>
			
				<ul>
					<li>Agenda tu cita con al menos 24 horas de anticipación</li>
					<li>Si necesitas cancelar, hazlo con tiempo para que otros estudiantes puedan usar el espacio</li>
				</ul>
			
				<p>Para dudas técnicas o consultas sobre nuestros servicios, contacta: <a href="tel:+525526493159">5526493159</a>
					EXT: 297 / <a href="mailto:depto.psicologia@utfv.edu.mx">depto.psicologia@utfv.edu.mx</a></p>
			
				<p><b>Equipo de Atención Psicológica UTFV</b></p>
			
			</div>
			
			</html>
			';

			$mail->send();
			echo json_encode('correcto');			
		

		}
	}
}else{
	echo json_encode('');
}

$con -> close();

 ?>