<?php
$apiToken = "5308589426:AAHiSuLvIFp-bccMLUQmpmnVoQQJq2x3sK8";
$_POST = json_decode(file_get_contents("php://input"),true);
    if(isset($_POST["data"]))
    {
        
        $data = [
            "chat_id" => "41850257", 
            "text" => $_POST['data']
        ];
        $response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data) );    
    } ;
?>