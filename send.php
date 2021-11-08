<?php
    $msg_box = ""; 
    $errors = array(); 

    // если форма без ошибок
    if(empty($errors)){     
        // собираем данные из формы
        $message = "Имя: " . $_POST['user_name'] . "<br/> Номер телефона: " . $_POST['user_tel'];
        send_mail($message); // отправим письмо
    }
     
    // функция отправки письма
    function send_mail($message){
        // почта, на которую придет письмо
        $mail_to = "front.end3r@gmail.com"; 
        // тема письма
        $subject = "Заявка на бесплатный замер";
         
        // заголовок письма
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: <front.end3r@gmail.com>\r\n"; // от кого письмо
         
        // отправляем письмо 
        mail($mail_to, $subject, $message, $headers);
    }
     
?>


<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1793690958:AAEQyEmj6ueE99XrHqkMVtCPSSoipnXB1k8";

//Сюда вставляем chat_id
$chat_id = "-541161619";

//Определяем переменные для передачи данных из нашей формы
$_POST['act'] == 'order' {
    $name = ($_POST['user_name']);
    $phone = ($_POST['user_tel']);
}

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Имя:' => $name,
        'Телефон:' => $phone
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

    //Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    }

//А здесь сообщение об ошибке при отправке
    else {
        alert('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.');
    }
}

?>

<?php
// формируем запись в таблицу google (изменить)
$url = "https://docs.google.com/forms/d/1FO2CwWtl8xxUEO9ZUbMMmQMnPIO1lwaXGsWcL0iGBQA/formResponse";

// массив данных (изменить entry, draft и fbzx)
$post_data = array (
 "entry.111111111" => $_POST['user_name'],
 "entry.222222222" => $_POST['user_tel'],
 "draftResponse" => "[,,&quot;-4886434818061337813&quot;]",
 "pageHistory" => "0",
 "fbzx" => "-4886434818061337813"
);

// Далее не трогать
// с помощью CURL заносим данные в таблицу google
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// указываем, что у нас POST запрос
curl_setopt($ch, CURLOPT_POST, 1);
// добавляем переменные
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
//заполняем таблицу google
$output = curl_exec($ch);
curl_close($ch);

?>