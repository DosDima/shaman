<?php
$data = file_get_contents('php://input');
$json = json_decode($data, true);

$to=$json["to"];
$subject=$json["subject"];
$message=$json["message"];

var_dump($json);

$headers =
    'From: lina@shamanictravel.ru' . "\r\n" .
    'MIME-Version: 1.0' . "\r\n" .
    'Content-type: text/html; charset="UTF-8"' . "\r\n" .
    'Reply-To: lina@shamanictravel.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
