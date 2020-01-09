<?php
@$name_con = $_POST['name_con'];
@$tel_con = $_POST['tel_con'];
@$mail_con = $_POST['mail_con'];
@$qua_con = $_POST['qua_con'];


mail("help@topsite.studio", "Обратная связь с сайта РТС", 
"Имя: ".$name_con."
Телефон: ".$tel_con.'
Почтп: '.$mail_con.'
Время для звонка: '.$time_con.'
Сообщение: '.$qua_con,
"From: info@rustc.tw1.ru \r\n");
echo "
<script>
document.location.href = '../contacts.html';
alert('Ваш вопрос отправлен. В ближайшее время мы с вами свяжемся');
</script>
"

?>