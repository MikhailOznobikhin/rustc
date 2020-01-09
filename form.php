<?php
@$otkud = $_POST['otkud'];
@$kud = $_POST['kud'];

// 1место
@$ob1 = $_POST['obom1'];
@$ves1 = $_POST['ves1'];
@$om1 = $_POST['om1'];
@$gab1 = $_POST['gab1'];
@$gab2 = $_POST['gab2'];
@$gab3 = $_POST['gab3'];
@$desc1 = $_POST['desc1'];
// 2 место
@$ob2 = $_POST['obom2'];
@$ves2 = $_POST['ves2'];
@$om2 = $_POST['om2'];
@$gab21 = $_POST['gab21'];
@$gab22 = $_POST['gab22'];
@$gab23 = $_POST['gab23'];
@$desc2 = $_POST['desc2'];
// 3 место
@$ob3 = $_POST['obom2'];
@$ves3 = $_POST['ves2'];
@$om3 = $_POST['om2'];
@$gab31 = $_POST['gab31'];
@$gab32 = $_POST['gab32'];
@$gab33 = $_POST['gab33'];
@$desc3 = $_POST['desc3'];
// 4 место
@$ob4 = $_POST['obom4'];
@$ves4 = $_POST['ves4'];
@$om4 = $_POST['om4'];
@$gab41 = $_POST['gab41'];
@$gab42 = $_POST['gab42'];
@$gab43 = $_POST['gab43'];
@$desc4 = $_POST['desc4'];
// 5 место
@$ob5 = $_POST['obom5'];
@$ves5 = $_POST['ves5'];
@$om5 = $_POST['om5'];
@$gab51 = $_POST['gab51'];
@$gab52 = $_POST['gab52'];
@$gab53 = $_POST['gab53'];
@$desc5 = $_POST['desc5'];
// 6 место
@$ob6 = $_POST['obom6'];
@$ves6 = $_POST['ves6'];
@$om6 = $_POST['om6'];
@$gab61 = $_POST['gab61'];
@$gab62 = $_POST['gab62'];
@$gab63 = $_POST['gab63'];
@$desc6 = $_POST['desc6'];
// 7 место
@$ob7 = $_POST['obom7'];
@$ves7 = $_POST['ves7'];
@$om7 = $_POST['om7'];
@$gab71 = $_POST['gab71'];
@$gab72 = $_POST['gab72'];
@$gab73 = $_POST['gab73'];
@$desc7 = $_POST['desc7'];
// 8 место
@$ob8 = $_POST['obom8'];
@$ves8 = $_POST['ves8'];
@$om8 = $_POST['om8'];
@$gab81 = $_POST['gab81'];
@$gab82 = $_POST['gab82'];
@$gab83 = $_POST['gab83'];
@$desc8 = $_POST['desc8'];
// 9 место
@$ob9 = $_POST['obom9'];
@$ves9 = $_POST['ves9'];
@$om9 = $_POST['om9'];
@$gab91 = $_POST['gab91'];
@$gab92 = $_POST['gab92'];
@$gab93 = $_POST['gab93'];
@$desc9 = $_POST['desc9'];
// 10 место
@$ob10 = $_POST['obom10'];
@$ves10 = $_POST['ves10'];
@$om10 = $_POST['om10'];
@$gab101 = $_POST['gab101'];
@$gab102 = $_POST['gab102'];
@$gab103 = $_POST['gab103'];
@$desc10 = $_POST['desc10'];


@$obresh = $_POST['obresh'];
@$zagruz = $_POST['zagruz'];
@$naklad = $_POST['naklad'];
@$vygruz = $_POST['vygruz'];
@$teplo = $_POST['teplo'];
@$hrup = $_POST['hrup'];

// автоэкспедирование от
@$autoot = $_POST['autoot'];
    if($autoot == 'on'){
    $adresot = $_POST['adresot'];
    $dayin = $_POST['dayin'];
    $otime = $_POST['otime'];
    $dtime = $_POST['dtime'];
}

// автоэкспедирование от
@$autodo = $_POST['autodo'];
if($autodo == 'on'){
    $adresdo = $_POST['adresdo'];
    $dayout = $_POST['dayout'];
    $otime1 = $_POST['otime1'];
    $dtime1 = $_POST['dtime'];
}

@$ofamily = $_POST['ofamily'];
@$oname = $_POST['oname'];
@$ootche = $_POST['ootche'];

@    $oorg = $_POST['oorg'];
@    $oorgname = $_POST['oorgname'];
@$otel = $_POST['otel'];
@$omail = $_POST['omail'];
@$ogor = $_POST['ogor'];

@$dfamily = $_POST['dfamily'];
@$dname = $_POST['dname'];
@$dotche = $_POST['dotche'];

@   $dorg = $_POST['dorg'];
@   $dorgname = $_POST['dorgname'];
@$dtel = $_POST['dtel'];
@$dmail = $_POST['dmail'];
@$dgor = $_POST['dgot'];
@$terms = $_POST['terms'];
// Габариты/объём
// 1 место
if($gab1 != ""){
    $obione1 = "
Габариты: " .$gab1.'x'. $gab2.'x'. $gab3.'';
}else{$obione1 = "
Объём: ".$ob1.'';}
// 2 место
if($gab21 != ""){
    $obione2 = "
Габариты: " .$gab21.'x'. $gab22.'x'. $gab23.'';
}else{$obione2 = "
Объём: ".$ob2.'';}
// 3 место
if($gab31 != ""){
    $obione3 = "
Габариты: " .$gab31.'x'. $gab32.'x'. $gab33.'';
}else{$obione3 = "
Объём: ".$ob3.'';}
// 4 место
if($gab41 != ""){
    $obione4 = "
Габариты: " .$gab41.'x'. $gab42.'x'. $gab43.'';
}else{$obione4 = "
Объём: ".$ob4.'';}
// 5 место
if($gab51 != ""){
    $obione5 = "
Габариты: " .$gab51.'x'. $gab52.'x'. $gab53.'';
}else{$obione5 = "
Объём: ".$ob5.'';}
// 6 место
if($gab61 != ""){
    $obione6 = "
Габариты: " .$gab61.'x'. $gab62.'x'. $gab63.'';
}else{$obione6 = "
Объём: ".$ob3.'';}
// 7 место
if($gab71 != ""){
    $obione7 = "
Габариты: " .$gab71.'x'. $gab72.'x'. $gab73.'';
}else{$obione7 = "
Объём: ".$ob3.'';}
// 8 место
if($gab81 != ""){
    $obione8 = "
Габариты: " .$gab81.'x'. $gab82.'x'. $gab83.'';
}else{$obione8 = "
Объём: ".$ob8.'';}
// 9 место
if($gab91 != ""){
    $obione9 = "
Габариты: " .$gab91.'x'. $gab92.'x'. $gab93.'';
}else{$obione9 = "
Объём: ".$ob9.'';}
// 10 место
if($gab101 != ""){
    $obione10 = "
Габариты: " .$gab101.'x'. $gab102.'x'. $gab103.'';
}else{$obione10 = "
Объём: ".$ob10.'';}


// доп. услуги
$dop_usl = '';
if($obresh == 'on'){
    $dop_usl .= "Требуется обрешётка груза 
";
}
if($zagruz == 'on')
    $dop_usl .= "Требуется загрузка груза 
";

if($naklad == 'on')
    $dop_usl .= "Приём и выдача по накладным 
";

if($vygruz == 'on')
    $dop_usl .= "Требуется выгрузка груза 
";

if($teplo == 'on')
    $dop_usl .= "Перевозка в тепле 
";    

if($hrup == 'on')
    $dop_usl .= "Хрупкий груз 
";    

if($autoot == 'on')
    $dop_usl .="Автоэкспедирование от адреса: ".$adresot."
Дата: ".$dayin." 
Время с: ".$otime." Время до: ".$dtime; 

if($autodo == 'on')
    $dop_usl .="Автоэкспедирование до адреса: ".$adresdo."
Дата: ".$dayout." 
Время с: ".$otime1." Время до: ".$dtime1; 
    
if($ofamily != ""){
    $otpravitel = "Физическое лицо. Контактные данные: ".'
Фамилия - '.$ofamily.' 
Имя - '.$oname.' 
Отчество - '.$ootche;
}else{
    $otpravitel = "Юридическое лицо. Контактные данные: ".' 
Организация '.$oorg.' 
Контактное лицо '.$oorgname;
};
if($dfamily != ""){
    $poluchat = "Физическое лицо. Контактные данные: ".'
Фамилия - '.$dfamily.' 
Имя - '.$dname.' 
Отчество - '.$dotche;
}else{
    $poluchat = "Юридическое лицо. Контактные данные: ".' 
Организация - '.$dorg.' 
Контактное лицо - '.$dorgname;
};

if($dgor != ""){
    $dgorp = $dgor;
}else{
    $dgorp = '-';
}
if($dmail != ""){
    $dmailp = $dmail;
}else{
    $dmailp = '-';
}
if($ogor != ""){
    $ogorp = $ogor;
}else{
    $ogorp = '-';
}
if($omail != ""){
    $omailp = $omail;
}else{
    $omailp = '-';
}

$mestall = 'ГРУЗ:
';
// Формирование мест
if($desc1 != ''){
    $mestall=$mestall.'
    1 место
    '.$obione1.'
    Вес: '.$ves1.'
    Одинаковых мест: '.$om1.'
    Описание: '.$desc1; 
}
if($desc2 != ''){
    $mestall=$mestall.'
    2 место
    '.$obione2.'
    Вес: '.$ves2.'
    Одинаковых мест: '.$om2.'
    Описание: '.$desc2;
}
if($desc3 != ''){
    $mestall=$mestall.'
    3 место
    '.$obione3.'
    Вес: '.$ves3.'
    Одинаковых мест: '.$om3.'
    Описание: '.$desc3; 
} 
if($desc4 != ''){
    $mestall=$mestall.'
    4 место
    '.$obione4.'
    Вес: '.$ves4.'
    Одинаковых мест: '.$om4.'
    Описание: '.$desc4; 
} 
if($desc5 != ''){
    $mestall=$mestall.'
    5 место
    '.$obione5.'
    Вес: '.$ves5.'
    Одинаковых мест: '.$om5.'
    Описание: '.$desc5; 
}
if($desc6 != ''){
    $mestall=$mestall.'
    6 место
    '.$obione6.'
    Вес: '.$ves6.'
    Одинаковых мест: '.$om6.'
    Описание: '.$desc6; 
}
if($desc7 != ''){
    $mestall=$mestall.'
    7 место
    '.$obione7.'
    Вес: '.$ves7.'
    Одинаковых мест: '.$om7.'
    Описание: '.$desc7; 
}
if($desc8 != ''){
    $mestall=$mestall.'
    8 место
    '.$obione8.'
    Вес: '.$ves8.'
    Одинаковых мест: '.$om8.'
    Описание: '.$desc8; 
}
if($desc9 != ''){
    $mestall=$mestall.'
    9 место
    '.$obione9.'
    Вес: '.$ves9.'
    Одинаковых мест: '.$om9.'
    Описание: '.$desc9; 
}
if($desc10 != ''){
    $mestall=$mestall.'
    10 место
    '.$obione10.'
    Вес: '.$ves10.'
    Одинаковых мест: '.$om10.'
    Описание: '.$desc10; 
}

// $mail_otpr = "info@rustc.biz , Nataly@rustc.biz, Mtb-msk@mail.ru";
$mail_otpr = "help@topsite.studio";


mail($mail_otpr, "Заявка с сайта РТС", 
"               ИНФОРМАЦИЯ О ЗАЯВКЕ
".
"Город отправки: ".$otkud."
Город доставки: ".$kud.$obione.'
'.$mestall.'
Дополнительные услуги: 
'.$dop_usl.'
ОТПРАВИТЕЛЬ: '.$otpravitel."
Телефон: ".$otel.'
e-mail: '.$omailp.'
Город:'.$ogorp.'

ПОЛУЧАТЕЛЬ: '.$poluchat."
Телефон: ".$dtel.'
e-mail: '.$dmailp.'
Город:'.$dgorp,
"From: info@rustc.tw1.ru \r\n");
echo "
<script>
document.location.href = '../index.html';
alert('Ваша заявка отправлена');
</script>
"
?>