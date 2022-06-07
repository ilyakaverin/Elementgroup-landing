<?php
    if(isset($_POST['submit']))
    {
        $apiToken = "5308589426:AAHiSuLvIFp-bccMLUQmpmnVoQQJq2x3sK8";
        $data = [
            'chat_id' => '@elementgroupprobot', 
            'text' => $_POST['message']
        ];
        $response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data) );    
    }
?>