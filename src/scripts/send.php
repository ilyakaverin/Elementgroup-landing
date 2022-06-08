<?php
$apiToken = "5308589426:AAHiSuLvIFp-bccMLUQmpmnVoQQJq2x3sK8";
    if(isset($_POST["phone"]))
    {
        
        $data = [
            "chat_id" => "41850257", 
            "text" => $_POST['phone']
        ];
        $response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data) );    
    }
    if(isset($_POST["formFromCalculator"]))
    {
        $calculator = [
            "Тип жилья" => $_POST["type"],
            "Нужен ли дизайн-проект" => $_POST["design"],
            "Площадь помещения" => $_POST["area"],
            "Бюджет" => $_POST["budget"],
            "Количество комнат" => $_POST["rooms"],
            "Номер телефона контакта" => $_POST["telephone"]

        ]
        $data = [
            "chat_id" => "41850257", 
            "text" => $calculator
        ];
        $response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data) );

    }
?>