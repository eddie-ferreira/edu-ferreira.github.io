<?php

if(isset($_POST['email']) && !empty($_POST['email'])) {

$nome = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['message']);

$to = "eddie.friends.inbox@gmail.com";

$subject = "Contato - Página Github";

$body = "Nome: ".$nome."\n"."Email: ".$email."\n"."Mensagem: ".$mensagem;

$header = "From: eddy.fryends@gmail.com"."\r\n"."Reply-To:".$email."\r\n"."x-mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)){
	echo("E-mail enviado com sucesso!");
}else{
	echo("Erro ao enviar e-mail!");
}



}
?>	