<?php

  $send = $_REQUEST['send'];
  $to = 'feedback@grape.me';
  
  if (isset($send)) {
    $data = $_REQUEST['data'];
    include_once ('lib/mail.class.php');
    $mail = new mail('utf-8');
    $mail -> To($to);
    $mail -> Subject('Обратная связь с сайта pingapp.me: "'.$data['subject'].'"');
    $mail -> Body('Name: '.$data['name']."\n".'E-mail: '.$data['email']."\n".'Inquiry: '.$data['inquiry']."\n".'Message: '.$data['message']);
    $mail -> Priority(3);
    $mail -> Send();
    echo $mail -> Get();
  }
  
  $mail -> Get();

?>