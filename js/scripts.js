// СКРИПТЫ 1
// Скрипты открытия информации о городах
function open_info_spb(){
  if($('.spb_sm .info_gor').hasClass('none_block')){
  $('.spb_sm .info_gor').removeClass('none_block')
  $('.msk_sm .info_gor').addClass('none_block')
  $('.nsk_sm .info_gor').addClass('none_block')
  $('.irk_sm .info_gor').addClass('none_block')
  $('.krs_sm .info_gor').addClass('none_block')
  $('.udu_sm .info_gor').addClass('none_block')
  $('#spb_treug').addClass('sm_meny_rot');
  $('#msk_treug').removeClass('sm_meny_rot');
  $('#nsk_treug').removeClass('sm_meny_rot');
  $('#irk_treug').removeClass('sm_meny_rot');
  $('#krs_treug').removeClass('sm_meny_rot');
  $('#udu_treug').removeClass('sm_meny_rot');
  }else{
    $('.spb_sm .info_gor').addClass('none_block')
    $('#spb_treug').removeClass('sm_meny_rot');}
}
function open_info_msk(){
  if($('.msk_sm .info_gor').hasClass('none_block')){
  $('.msk_sm .info_gor').removeClass('none_block')
  $('.spb_sm .info_gor').addClass('none_block')
  $('.nsk_sm .info_gor').addClass('none_block')
  $('.irk_sm .info_gor').addClass('none_block')
  $('.krs_sm .info_gor').addClass('none_block')
  $('.udu_sm .info_gor').addClass('none_block')
  $('#spb_treug').removeClass('sm_meny_rot');
  $('#msk_treug').addClass('sm_meny_rot');
  $('#nsk_treug').removeClass('sm_meny_rot');
  $('#irk_treug').removeClass('sm_meny_rot');
  $('#krs_treug').removeClass('sm_meny_rot');
  $('#udu_treug').removeClass('sm_meny_rot');
  }else{$('.msk_sm .info_gor').addClass('none_block')
  $('#msk_treug').removeClass('sm_meny_rot');
  }
}
function open_info_nsk(){
  if($('.nsk_sm .info_gor').hasClass('none_block')){
  $('.nsk_sm .info_gor').removeClass('none_block')
  $('.msk_sm .info_gor').addClass('none_block')
  $('.spb_sm .info_gor').addClass('none_block')
  $('.irk_sm .info_gor').addClass('none_block')
  $('.krs_sm .info_gor').addClass('none_block')
  $('.udu_sm .info_gor').addClass('none_block')
  $('#spb_treug').removeClass('sm_meny_rot');
  $('#msk_treug').removeClass('sm_meny_rot');
  $('#nsk_treug').addClass('sm_meny_rot');
  $('#irk_treug').removeClass('sm_meny_rot');
  $('#krs_treug').removeClass('sm_meny_rot');
  $('#udu_treug').removeClass('sm_meny_rot');
  }else{$('.nsk_sm .info_gor').addClass('none_block')
  $('#nsk_treug').removeClass('sm_meny_rot');
  }
}
function open_info_irk(){
  if($('.irk_sm .info_gor').hasClass('none_block')){
    $('.nsk_sm .info_gor').addClass('none_block')
  $('.msk_sm .info_gor').addClass('none_block')
  $('.spb_sm .info_gor').addClass('none_block')
  $('.irk_sm .info_gor').removeClass('none_block')
  $('.krs_sm .info_gor').addClass('none_block')
  $('.udu_sm .info_gor').addClass('none_block')
  $('#spb_treug').removeClass('sm_meny_rot');
  $('#msk_treug').removeClass('sm_meny_rot');
  $('#nsk_treug').removeClass('sm_meny_rot');
  $('#irk_treug').addClass('sm_meny_rot');
  $('#krs_treug').removeClass('sm_meny_rot');
  $('#udu_treug').removeClass('sm_meny_rot');
  }else{$('.irk_sm .info_gor').addClass('none_block')
  $('#irk_treug').removeClass('sm_meny_rot');}
}
function open_info_krs(){
  if($('.krs_sm .info_gor').hasClass('none_block')){
    $('.nsk_sm .info_gor').addClass('none_block')
  $('.msk_sm .info_gor').addClass('none_block')
  $('.spb_sm .info_gor').addClass('none_block')
  $('.irk_sm .info_gor').addClass('none_block')
  $('.krs_sm .info_gor').removeClass('none_block')
  $('.udu_sm .info_gor').addClass('none_block')
  $('#spb_treug').removeClass('sm_meny_rot');
  $('#msk_treug').removeClass('sm_meny_rot');
  $('#nsk_treug').removeClass('sm_meny_rot');
  $('#irk_treug').removeClass('sm_meny_rot');
  $('#krs_treug').addClass('sm_meny_rot');
  $('#udu_treug').removeClass('sm_meny_rot');
  }else{$('.krs_sm .info_gor').addClass('none_block')
  $('#krs_treug').removeClass('sm_meny_rot');}
}
function open_info_udu(){
  if($('.udu_sm .info_gor').hasClass('none_block')){
    $('.nsk_sm .info_gor').addClass('none_block')
  $('.msk_sm .info_gor').addClass('none_block')
  $('.spb_sm .info_gor').addClass('none_block')
  $('.irk_sm .info_gor').addClass('none_block')
  $('.krs_sm .info_gor').addClass('none_block')
  $('.udu_sm .info_gor').removeClass('none_block')
  $('#spb_treug').removeClass('sm_meny_rot');
  $('#msk_treug').removeClass('sm_meny_rot');
  $('#nsk_treug').removeClass('sm_meny_rot');
  $('#irk_treug').removeClass('sm_meny_rot');
  $('#krs_treug').removeClass('sm_meny_rot');
  $('#udu_treug').addClass('sm_meny_rot');
  }else{$('.udu_sm .info_gor').addClass('none_block')
  $('#udu_treug').removeClass('sm_meny_rot');}
}
//  Скрипт появления мобильного меню 
function vyp_uslugi(){
    $('#open_md_sm').addClass('none_block');
    $('#close_md_sm').removeClass('none_block');
    $('.header').css('background-color', '#396777')
    $('.main').css('background-color', '#4D3236;');
    $('.main').css('padding', '0 0 500px');
    $('.menu_sm').removeClass('none_block');

    $('.steps').addClass('none_block');
    $('.advantages').addClass('none_block');
    $('.about').addClass('none_block');
    $('.footer').addClass('none_block');
    $('.static-form').css('z-index', '-1')
    $('.hero').addClass('hero_sm')
    $('#how').addClass('none_block')
        
// Услуги
    $('.main').addClass('none_block');
    $('.grid').addClass('bg_color_open');
    $('.grid').removeClass('bg_color_close');
    $('.sidebar').addClass('none_block');

    console.log('Показать мобильное окно')   
  }

//  Скрипт скрытия мобильного меню 
function hide_uslugi(){
    $('#open_md_sm').removeClass('none_block');
    $('#close_md_sm').addClass('none_block');
    $('.main').css('background-color', '#FFF');
    $('.main').css('padding', '0 0 18px');


    $('.static-form').css('z-index', '12')
    $('.hero').removeClass('hero_sm')
    $('#how').removeClass('none_block')
    $('.header').css('background-color', 'rgba(0, 0, 0, .4);')
    $('.menu_sm').addClass('none_block');

    $('.steps').removeClass('none_block');
    $('.advantages').removeClass('none_block');
    $('.about').removeClass('none_block');
    $('.footer').removeClass('none_block');
    
// УСЛУГИ
  
    $('.main').removeClass('none_block');
    $('.grid').addClass('bg_color_close');
    $('.grid').removeClass('bg_color_open');
    $('.sidebar').removeClass('none_block');


    console.log('Скрыть мобильное окно')
  }

// скрипт выпадающего списка на мобиле
function open_sm_us(){
  if($('.sub_sm').hasClass('none_block') == true){
    $('.sub_sm').removeClass('none_block');
    $('#menu_sm_treug').addClass('sm_meny_rot')
  }else{
    $('.sub_sm').addClass('none_block');
    $('#menu_sm_treug').removeClass('sm_meny_rot')
  }
}

//СКРИПТЫ 2
// СКРИПТ ВЫПАДАЮЩЕГО МЕНЮ 
function vypmodal(){ 
    if($('#how').hasClass('up_btn')==true){
      $('#how').removeClass('up_btn');
      $('#md_cart').removeClass("show_md_cart")
      console.log('Удаление классов классов');
    }else{
      $('#how').addClass('up_btn');
      $('#md_cart').addClass("show_md_cart")
      console.log('Добавление классов');  
    }
   }
// Скрипт скрытия элементов
  $(document).mouseup(function (e) {
var container = $("#how");
if (container.has(e.target).length === 0){
  $('#how').removeClass('up_btn');
  $('#md_cart').removeClass("show_md_cart")
  }
});

// СКРИПТЫ 3
// ранодомайзер
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}  
function hasOneDayPassed(){
    var date = new Date().toLocaleDateString();
    if( localStorage.yourapp_date == date ) 
    return false;
    localStorage.yourapp_date = date;
    return true;
}
function runOncePerDay(){
    if( !hasOneDayPassed() ) return false;
    var gruz = getRandomInt(100)+100;
    var ves = getRandomInt(20)+60;
    var ras = getRandomInt(6000)+12000 ;
    $(".gruz").html(gruz);
    $(".ves").html(ves);
    $(".ras").html(ras);
}
setInterval(runOncePerDay, 86400);       

// СКРИПТЫ 4
var price = [
//              min  0.1-1.5 -4.5   -7.5   -15    -26     +     40-300 -900   -1500  -3000  -5000    +
/*MSK - NSK*/  [260,  2700,  2650,  2600,  2550,  2500,  2400,  13.5,  13.2,  13.0,  12.7,  12.5,  12.0],
/*MSK - KRS*/  [400,  3750,  3700,  3650,  3590,  3500,  3450,  15,    14.9,  14.8,  14.7,  14.2,    14],
/*MSK - IRK*/  [460,  3860,  3810,  3760,  3660,  3600,  3550,  19.3,  19.1,  18.8,  18.3,  18.1,  17.8],
/*MSK - UU */  [1050, 5030,  4930,  4900,  4830,  4780,  4730,  25.2,  24.7,  24.4,  24.2,  23.9,  23.7],
/*SPB - KRS*/  [600,  4540,  4530,  4490,  4430,  4340,  4240,  22.6,  22.5,  22.3,  22.0,  21.6,  21.1],
/*SPB - NSK*/  [570,  3420,  3400,  3320,  3270,  3220,  3170,  14.1,  13.6,  13.5,  13.4,  13.1,  12.8],
/*SPB - IRK*/  [650,  4540,  4530,  4490,  4430,  4340,  4240,  22.6,  22.5,  22.3,  22.0,  21.6,  21.1],
/*SPB - UU */  [1050, 5570,  5420,  5310,  5160,  5060,  4960,  27.7,  26.9,  26.4,  25.7,  25.0,  24.4],
/*NSK - IRK*/  [260,  2020,  1970,  1920,  1870,  1820,  1770,  9.2,   9.0,   8.3,   8.0,   7.8,   7.2],
/*NSK - UU */  [670,  2740,  2710,  2640,  2570,  2490,  2430,  13.9,  13.4,  13.1,  12.8,  12.4,  12.1],
/*KRS - IRK*/  [200,  1500,  1480,  1450,  1400,  1300,  1200,  5.5,   5.4,   5.3,   5.2,   5.0,   5.0],
/*IRK - UU */  [420,  1880,  1820,  1770,  1720,  1670,  1620,  9.4,   9.1,   8.9,   8.6,   8.4,   8.1],
];


// перенос значений на главной маршрут
$('#how').on("DOMNodeInserted",function() {
  $('.is-placeholder').removeClass('is-placeholder');
  if($('.modal-routes__list li.is-active:eq(0)').attr('id') == 'p1') {i = 0; 
    console.log('p1')
    $('#obyom').val('0');
    $('#massa').val('0');
    $('.select__value:eq(0)').children().html("Москва");
    $('.select__value:eq(1)').children().html("Новосибирск");
    $('.select__value:eq(2)').children().html("Москва");
    $('.select__value:eq(3)').children().html("Новосибирск");
  }
  if($('.modal-routes__list li.is-active:eq(0)').attr('id') == 'p2') {i = 1; 
    console.log('p2')
    $('#obyom').val('0');
    $('#massa').val('0');
    $('.select__value:eq(0)').children().html("Москва");
    $('.select__value:eq(1)').children().html("Красноярск");
    $('.select__value:eq(2)').children().html("Москва");
    $('.select__value:eq(3)').children().html("Красноярск");
  }
  if($('.modal-routes__list li.is-active:eq(0)').attr('id') == 'p3') {i = 2; 
    console.log('p3')
    $('#obyom').val('0');
    $('#massa').val('0');
    $('.select__value:eq(0)').children().html("Москва");
    $('.select__value:eq(1)').children().html("Иркутск");
    $('.select__value:eq(2)').children().html("Москва");
    $('.select__value:eq(3)').children().html("Иркутск");
  }
  if($('.modal-routes__list li.is-active:eq(0)').attr('id') == 'p4') {i = 3; 
    console.log('p4')
    $('#obyom').val('0');
    $('#massa').val('0');
    $('.select__value:eq(0)').children().html("Москва");
    $('.select__value:eq(1)').children().html("Улан-Удэ");
    $('.select__value:eq(2)').children().html("Москва");
    $('.select__value:eq(3)').children().html("Улан-Удэ");
  }
  if($('.modal-routes__list li.is-active:eq(0)').attr('id') == 'p5') {i = 4;
    console.log('p5')
    $('#obyom').val('0');
    $('#massa').val('0');
    $('.select__value:eq(0)').children().html("Санкт-Петербург");
    $('.select__value:eq(1)').children().html("Новосибирск");
    $('.select__value:eq(2)').children().html("Санкт-Петербург");
    $('.select__value:eq(3)').children().html("Новосибирск");
  }
  if($('.modal-routes__list li.is-active:eq(0)').attr('id') == 'p6') {i = 5;
    console.log('p6')
    $('#obyom').val('0');
    $('#massa').val('0');
    $('.select__value:eq(0)').children().html("Санкт-Петербург");
    $('.select__value:eq(1)').children().html("Красноярск");
    $('.select__value:eq(2)').children().html("Санкт-Петербург");
    $('.select__value:eq(3)').children().html("Красноярск");
  }
  if($('.modal-routes__list li.is-active:eq(0)').attr('id') == 'p7') {i = 6;
    console.log('p7')
    $('#obyom').val('0');
    $('#massa').val('0');
    $('.select__value:eq(0)').children().html("Санкт-Петербург");
    $('.select__value:eq(1)').children().html("Иркутск");
    $('.select__value:eq(2)').children().html("Санкт-Петербург");
    $('.select__value:eq(3)').children().html("Иркутск");
  }
  if($('.modal-routes__list li.is-active:eq(0)').attr('id') == 'p8') {i = 7;
    console.log('p8')
    $('#obyom').val('0');
    $('#massa').val('0');
    $('.select__value:eq(0)').children().html("Санкт-Петербург");
    $('.select__value:eq(1)').children().html("Улан-Удэ");
    $('.select__value:eq(2)').children().html("Санкт-Петербург");
    $('.select__value:eq(3)').children().html("Улан-Удэ");
  }
  if($('.modal-routes__list li.is-active:eq(0)').attr('id') == 'p9') {i = 8;
    console.log('p9')
    $('#obyom').val('0');
    $('#massa').val('0');
    $('.select__value:eq(0)').children().html("Новосибирск");
    $('.select__value:eq(1)').children().html("Иркутск");
    $('.select__value:eq(2)').children().html("Новосибирск");
    $('.select__value:eq(3)').children().html("Иркутск");
  }
  if($('.modal-routes__list li.is-active:eq(0)').attr('id') == 'p10'){i = 9;
    console.log('p10')
    $('#obyom').val('0');
    $('#massa').val('0');
    $('.select__value:eq(0)').children().html("Новосибирск");
    $('.select__value:eq(1)').children().html("Улан-Удэ");
    $('.select__value:eq(2)').children().html("Новосибирск");
    $('.select__value:eq(3)').children().html("Улан-Удэ");
  }
  if($('.modal-routes__list li.is-active:eq(0)').attr('id') == 'p11'){i = 10;
    console.log('p11')
    $('#obyom').val('0');
    $('#massa').val('0');
    $('.select__value:eq(0)').children().html("Красноярск");
    $('.select__value:eq(1)').children().html("Иркутск");
    $('.select__value:eq(2)').children().html("Красноярск");
    $('.select__value:eq(3)').children().html("Иркутск");
  }
  if($('.modal-routes__list li.is-active:eq(0)').attr('id') == 'p12'){i = 11;
    console.log('p12')
    $('#obyom').val('0');
    $('#massa').val('0');
    $('.select__value:eq(0)').children().html("Иркутск");
    $('.select__value:eq(1)').children().html("Улан-Удэ");
    $('.select__value:eq(2)').children().html("Иркутск");
    $('.select__value:eq(3)').children().html("Улан-Удэ");
  }
     




// Переход к калькулятору
function perehod(){
    $('html, body').stop().animate({ 
    scrollTop: $($('#calculator')).offset().top 
  }, 900);
};
setTimeout(perehod, 1100);
console.log('Пролистывание до калькулятора');   
});

function result() {
  var otkuda_v = document.getElementById('otkuda').value
  var kuda_v = document.getElementById('kuda').value
  var obyom_v = document.getElementById('obyom').value
  var ves_v = document.getElementById('massa').value
  var i = 0;
  var sum = 0;

//СКРЫТИЕ ЭЛЕМЕНТОВ
  if(otkuda_v == 1){
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[0].style.display="block";
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[1].style.display="block";
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[2].style.display="block";
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[3].style.display="block";  
  }
  if(otkuda_v ==2){
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[0].style.display="block";
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[1].style.display="block";
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[2].style.display="block";
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[3].style.display="block";
  }
  if(otkuda_v ==3){
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[0].style.display="none";
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[1].style.display="none";
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[2].style.display="block";
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[3].style.display="block";
  }
  if(otkuda_v ==4){  
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[0].style.display="none";
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[1].style.display="none";
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[2].style.display="block";
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[3].style.display="none";
  }
  if(otkuda_v ==5){  
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[0].style.display="none";
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[1].style.display="none";
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[2].style.display="none";
    document.getElementsByClassName('select__list')[1].getElementsByClassName('select__item')[3].style.display="block";
  }

 
// Выбор маршрута
    if(otkuda_v == 1 && kuda_v == 3){i = 0;
      $('.select__value')[2].innerText = "Москва";
      $('.select__value')[3].innerText = "Новосибирск";
      $('.is-placeholder').removeClass('is-placeholder');
    }
    if(otkuda_v == 1 && kuda_v == 4){i = 1;
      $('.select__value')[2].innerText = "Москва";
      $('.select__value')[3].innerText = "Красноярск";
      $('.is-placeholder').removeClass('is-placeholder');
    }
    if(otkuda_v == 1 && kuda_v == 5){i = 2;
      $('.select__value')[2].innerText = "Москва";
      $('.select__value')[3].innerText = "Иркутск";
      $('.is-placeholder').removeClass('is-placeholder');
    }
    if(otkuda_v == 1 && kuda_v == 6){i = 3;
      $('.select__value')[2].innerText = "Москва";
      $('.select__value')[3].innerText = "Улан-Удэ";
      $('.is-placeholder').removeClass('is-placeholder');
    }
    if(otkuda_v == 2 && kuda_v == 4){i = 4;
      $('.select__value')[2].innerText = "Санкт-Петербург";
      $('.select__value')[3].innerText = "Новосибирск";
      $('.is-placeholder').removeClass('is-placeholder');
    }
    if(otkuda_v == 2 && kuda_v == 3){i = 5;
      $('.select__value')[2].innerText = "Санкт-Петербург";
      $('.select__value')[3].innerText = "Красноярск";
      $('.is-placeholder').removeClass('is-placeholder');
    }
    if(otkuda_v == 2 && kuda_v == 5){i = 6;
      $('.select__value')[2].innerText = "Санкт-Петербург";
      $('.select__value')[3].innerText = "Иркутск";
      $('.is-placeholder').removeClass('is-placeholder');
    }
    if(otkuda_v == 2 && kuda_v == 6){i = 7;
      $('.select__value')[2].innerText = "Санкт-Петербург";
      $('.select__value')[3].innerText = "Улан-Удэ";
      $('.is-placeholder').removeClass('is-placeholder');
    }
    if(otkuda_v == 3 && kuda_v == 5){i = 8;
      $('.select__value')[2].innerText = "Новосибирск";
      $('.select__value')[3].innerText = "Иркутск";
      $('.is-placeholder').removeClass('is-placeholder');
    }
    if(otkuda_v == 3 && kuda_v == 6){i = 9;
      $('.select__value')[2].innerText = "Новосибирск";
      $('.select__value')[3].innerText = "Улан-Удэ";
      $('.is-placeholder').removeClass('is-placeholder');
    }
    if(otkuda_v == 4 && kuda_v == 5){i = 10;
      $('.select__value')[2].innerText = "Красноярск";
      $('.select__value')[3].innerText = "Иркутск";
      $('.is-placeholder').removeClass('is-placeholder');
    }
    if(otkuda_v == 5 && kuda_v == 6){i = 11;    
      $('.select__value')[2].innerText = "Иркутск";
      $('.select__value')[3].innerText = "Улан-Удэ";
      $('.is-placeholder').removeClass('is-placeholder');
    }
    if(
      (otkuda_v == 3 && kuda_v != 5 && kuda_v != 6)  ||
      (otkuda_v == 4 && kuda_v != 5)  ||
      (otkuda_v == 5 && kuda_v != 6)                            
  ){console.log("В этот город нет доставки")
      document.getElementsByClassName('select__value')[1].innerText = "Куда";}
  
  // Минимальная стоимость
  if(ves_v < 40 && obyom_v < 0.1) {sum = price[i][0];console.log('Минимальная стоимость');}
  else{
  //рассчёт по объёму
      if(parseFloat(ves_v, 10)/parseFloat(obyom_v, 10) <= 200 ){
        if(obyom_v >= 0.1 && obyom_v < 1.5){j=1}
        if(obyom_v >= 1.5 && obyom_v < 4.5){j=2}
        if(obyom_v >= 4.5 && obyom_v < 7.5){j=3}
        if(obyom_v >= 7.5 && obyom_v < 15){j=4}
        if(obyom_v >= 15  && obyom_v <= 25){j=5}
        if(obyom_v > 25) {j=6}
        sum = obyom_v*price[i][j];
        console.log('рассчёт по объёму');
      }
  //рассчёт по весу
      if(parseFloat(ves_v, 10)/parseFloat(obyom_v, 10) > 200 ){
        console.log(parseFloat(ves_v, 10)/parseFloat(obyom_v, 10));
        if(ves_v >= 40   && ves_v < 300){j=7}
        if(ves_v >= 300  && ves_v < 900){j=8}
        if(ves_v >= 900  && ves_v < 1500){j=9}
        if(ves_v >= 1500 && ves_v < 3000){j=10}
        if(ves_v >= 3000 && ves_v < 5000){j=11}
        if(ves_v > 5000){j=12}
        sum = ves_v*price[i][j];
        console.log('рассчёт по весу')   
      }
}console.log(sum);
 document.getElementById('rez').innerText = Math.trunc(sum);
  // Добавление значений в форму заявки
  $('#mesto1 input')[0].value = obyom_v;
  console.log('Объём добавлен')
  $('#mesto1 input')[4].value = ves_v;
}
document.getElementById('otkuda').addEventListener('change', function(){result()})
document.getElementById('kuda').addEventListener('change', function(){result()})
document.getElementById('obyom').addEventListener('change', function(){result()})
document.getElementById('massa').addEventListener('change', function(){result()})


// СКРИПТЫ 5
//  Скрипт фикса для выпадающих городов
  window.onload = function() {
  // откуда в модалке
  $('.select:eq(2)').css('z-index','6')
  // куда в модалке
  $('.select:eq(3)').css('z-index','5')
  // откуда в калькуляторе
  $('.select:eq(0)').css('z-index','5')
  };
  

/* Скрипты всплывающих окон */
  document.getElementById('hider1').onclick = function() {
    var el=document.getElementById('zabrat');
        if(el.style.display=="block"){el.style.display="none";} 
        else {el.style.display="block";}
  }
  document.getElementById('hider2').onclick = function() {
        var el1=document.getElementById('otdat');
        if(el1.style.display=="block"){el1.style.display="none";} 
        else {el1.style.display="block";}
}

/* Скрипт выбора отправителя/получателя */
function showur(){
  $('#ur_men').addClass('colonka');
  $('#ur_men').removeClass('none_block');
  $('#fiz_men').removeClass('colonka');
  $('#fiz_men').addClass('none_block');
  $('#fiz_men_title').addClass('none_active_text');
  $('#ur_men_title').removeClass('none_active_text');
  $('#fiz_men input').removeAttr('required')
  $('#ur_men input').attr('required','required')
  console.log('Я РАБОТАЮ')
}
$(function(){$('#ur_person').on('click', showur);})

function showfiz(){
  $('#fiz_men').addClass('colonka');
  $('#fiz_men').removeClass('none_block');
  $('#ur_men').addClass('none_block');
  $('#ur_men').removeClass('colonka');
  $('#ur_men_title').addClass('none_active_text');
  $('#fiz_men_title').removeClass('none_active_text');
  $('#ur_men input').removeAttr('required');
  $('#fiz_men input').attr('required','required');
}
$(function(){$('#fiz_person').on('click', showfiz);})

function showur1(){
  $('#ur_men1').addClass('colonka');
  $('#ur_men1').removeClass('none_block');
  $('#fiz_men1').removeClass('colonka');
  $('#fiz_men1').addClass('none_block');
  $('#fiz_men_title1').addClass('none_active_text');
  $('#ur_men_title1').removeClass('none_active_text');
  $('#fiz_men1 input').removeAttr('required')
  $('#ur_men1 input').attr('required','required')  
}
$(function(){$('#ur_person1').on('click', showur1);})

function showfiz1(){
  $('#fiz_men1').addClass('colonka');
  $('#fiz_men1').removeClass('none_block');
  $('#ur_men1').addClass('none_block');
  $('#ur_men1').removeClass('colonka');
  $('#ur_men_title1').addClass('none_active_text');
  $('#fiz_men_title1').removeClass('none_active_text');
  $('#ur_men1 input').removeAttr('required')
  $('#fiz_men1 input').attr('required','required');
}
$(function(){$('#fiz_person1').on('click', showfiz1);})


// Скрипт открытия модального окна заявки
function open_modal(){
    $('body').addClass('blur');
    $('#modal_okno').addClass('is-open') 
    }

      
//  Закрытие модального окна  заявки
        // через крест
      function close_modal(){
        $('body').removeClass('blur');
        $('#modal_okno').removeClass('is-open')
      }

      // Через клик вне зоны
      $(document).mouseup(function (e) {
      var container = $('#modal_okno_content');
      var container1 = $('#ui-datepicker-div');
      
        if (container.has(e.target).length === 0 && container1.has(e.target).length === 0){
          $('body').removeClass('blur');
          $('#modal_okno').removeClass("is-open")
        }
      });

//  Скрипт добавления и уменьшения одинаковых мест
  function umF1(){if(+document.getElementById("odin_mest1").value > 1){
  document.getElementById("odin_mest1").value=+document.getElementById("odin_mest1").value-1;
  }else{console.log('Мест не может быть меньше нуля') } }
  function addF1(){ document.getElementById("odin_mest1").value=+document.getElementById("odin_mest1").value+1; }

  function umF2(){if(+document.getElementById("odin_mest2").value > 1){
  document.getElementById("odin_mest2").value=+document.getElementById("odin_mest2").value-1;
  }else{console.log('Мест не может быть меньше нуля') } }
  function addF2(){ document.getElementById("odin_mest2").value=+document.getElementById("odin_mest2").value+1; }

  function umF3(){if(+document.getElementById("odin_mest3").value > 1){
  document.getElementById("odin_mest3").value=+document.getElementById("odin_mest3").value-1;
  }else{console.log('Мест не может быть меньше нуля') } }
  function addF3(){ document.getElementById("odin_mest3").value=+document.getElementById("odin_mest3").value+1; }

  function umF4(){if(+document.getElementById("odin_mest4").value > 1){
  document.getElementById("odin_mest4").value=+document.getElementById("odin_mest4").value-1;
  }else{console.log('Мест не может быть меньше нуля') } }
  function addF4(){ document.getElementById("odin_mest4").value=+document.getElementById("odin_mest4").value+1; }

  function umF5(){if(+document.getElementById("odin_mest5").value > 1){
  document.getElementById("odin_mest5").value=+document.getElementById("odin_mest5").value-1;
  }else{console.log('Мест не может быть меньше нуля') } }
  function addF5(){ document.getElementById("odin_mest5").value=+document.getElementById("odin_mest5").value+1; }

  function umF6(){if(+document.getElementById("odin_mest6").value > 1){
  document.getElementById("odin_mest6").value=+document.getElementById("odin_mest6").value-1;
  }else{console.log('Мест не может быть меньше нуля') } }
  function addF6(){ document.getElementById("odin_mest6").value=+document.getElementById("odin_mest6").value+1; }

  function umF7(){if(+document.getElementById("odin_mest7").value > 1){
  document.getElementById("odin_mest7").value=+document.getElementById("odin_mest7").value-1;
  }else{console.log('Мест не может быть меньше нуля') } }
  function addF7(){ document.getElementById("odin_mest7").value=+document.getElementById("odin_mest7").value+1; }

  function umF8(){if(+document.getElementById("odin_mest8").value > 1){
  document.getElementById("odin_mest8").value=+document.getElementById("odin_mest8").value-1;
  }else{console.log('Мест не может быть меньше нуля') } }
  function addF8(){ document.getElementById("odin_mest8").value=+document.getElementById("odin_mest8").value+1; }

  function umF9(){if(+document.getElementById("odin_mest9").value > 1){
  document.getElementById("odin_mest9").value=+document.getElementById("odin_mest9").value-1;
  }else{console.log('Мест не может быть меньше нуля') } }
  function addF9(){ document.getElementById("odin_mest9").value=+document.getElementById("odin_mest9").value+1; }

  function umF10(){if(+document.getElementById("odin_mest10").value > 1){
  document.getElementById("odin_mest10").value=+document.getElementById("odin_mest10").value-1;
  }else{console.log('Мест не может быть меньше нуля') } }
  function addF10(){ document.getElementById("odin_mest10").value=+document.getElementById("odin_mest10").value+1; }
  
  $(function() {$('#min_odin1').on('click', umF1);})
  $(function() {$('#max_odin1').on('click', addF1);})

  $(function() {$('#min_odin2').on('click', umF2);})
  $(function() {$('#max_odin2').on('click', addF2);})

  $(function() {$('#min_odin3').on('click', umF3);})
  $(function() {$('#max_odin3').on('click', addF3);})

  $(function() {$('#min_odin4').on('click', umF4);})
  $(function() {$('#max_odin4').on('click', addF4);})

  $(function() {$('#min_odin5').on('click', umF5);})
  $(function() {$('#max_odin5').on('click', addF5);})

  $(function() {$('#min_odin6').on('click', umF6);})
  $(function() {$('#max_odin6').on('click', addF6);})

  $(function() {$('#min_odin7').on('click', umF7);})
  $(function() {$('#max_odin7').on('click', addF7);})

  $(function() {$('#min_odin8').on('click', umF8);})
  $(function() {$('#max_odin8').on('click', addF8);})

  $(function() {$('#min_odin9').on('click', umF9);})
  $(function() {$('#max_odin9').on('click', addF9);})

  $(function() {$('#min_odin10').on('click', umF10);})
  $(function() {$('#max_odin10').on('click', addF10);})

// Скрипт подсчёта общего объёма/веса
function oob1(){
  $('#ob1')[0].innerText=+$('#mesto1 .text-center')[0].value*(+$('#odin_mest1')[0].value);
  $('#ob11')[0].innerText=+$('#mesto1 .text-center')[1].value*+$('#mesto1 .text-center')[2].value*+$('#mesto1 .text-center')[3].value* 
  (+$('#odin_mest1')[0].value);
  $('#ov1')[0].innerText=+$('#mesto1 .text-center')[4].value*(+$('#odin_mest1')[0].value);
}
function oob2(){
  $('#ob2')[0].innerText=+$('#mesto2 .text-center')[0].value*(+$('#odin_mest2')[0].value);
  $('#ob21')[0].innerText=+$('#mesto2 .text-center')[1].value*+$('#mesto2 .text-center')[2].value*+$('#mesto2 .text-center')[3].value* 
  (+$('#odin_mest2')[0].value);
  $('#ov2')[0].innerText=+$('#mesto2 .text-center')[4].value*(+$('#odin_mest2')[0].value);
}
function oob3(){
  $('#ob3')[0].innerText=+$('#mesto3 .text-center')[0].value*(+$('#odin_mest3')[0].value);
  $('#ob31')[0].innerText=+$('#mesto3 .text-center')[1].value*+$('#mesto3 .text-center')[2].value*+$('#mesto3 .text-center')[3].value* 
  (+$('#odin_mest3')[0].value);
  $('#ov3')[0].innerText=+$('#mesto3 .text-center')[4].value*(+$('#odin_mest3')[0].value);
}
function oob4(){
  $('#ob4')[0].innerText=+$('#mesto4 .text-center')[0].value*(+$('#odin_mest4')[0].value);
  $('#ob41')[0].innerText=+$('#mesto4 .text-center')[1].value*+$('#mesto4 .text-center')[2].value*+$('#mesto4 .text-center')[3].value* 
  (+$('#odin_mest4')[0].value);
  $('#ov4')[0].innerText=+$('#mesto4 .text-center')[4].value*(+$('#odin_mest4')[0].value);
}
function oob5(){
  $('#ob5')[0].innerText=+$('#mesto5 .text-center')[0].value*(+$('#odin_mest5')[0].value);
  $('#ob51')[0].innerText=+$('#mesto5 .text-center')[1].value*+$('#mesto5 .text-center')[2].value*+$('#mesto5 .text-center')[3].value* 
  (+$('#odin_mest5')[0].value);
  $('#ov5')[0].innerText=+$('#mesto5 .text-center')[4].value*(+$('#odin_mest5')[0].value);
}
function oob6(){
  $('#ob6')[0].innerText=+$('#mesto6 .text-center')[0].value*(+$('#odin_mest6')[0].value);
  $('#ob61')[0].innerText=+$('#mesto6 .text-center')[1].value*+$('#mesto6 .text-center')[2].value*+$('#mesto6 .text-center')[3].value* 
  (+$('#odin_mest6')[0].value);
  $('#ov6')[0].innerText=+$('#mesto6 .text-center')[4].value*(+$('#odin_mest6')[0].value);
}
function oob7(){
  $('#ob7')[0].innerText=+$('#mesto7 .text-center')[0].value*(+$('#odin_mest7')[0].value);
  $('#ob71')[0].innerText=+$('#mesto7 .text-center')[1].value*+$('#mesto7 .text-center')[2].value*+$('#mesto7 .text-center')[3].value* 
  (+$('#odin_mest7')[0].value);
  $('#ov7')[0].innerText=+$('#mesto7 .text-center')[4].value*(+$('#odin_mest7')[0].value);
}
function oob8(){
  $('#ob8')[0].innerText=+$('#mesto8 .text-center')[0].value*(+$('#odin_mest8')[0].value);
  $('#ob81')[0].innerText=+$('#mesto8 .text-center')[1].value*+$('#mesto8 .text-center')[2].value*+$('#mesto8 .text-center')[3].value* 
  (+$('#odin_mest8')[0].value);
  $('#ov8')[0].innerText=+$('#mesto8 .text-center')[4].value*(+$('#odin_mest8')[0].value);
}
function oob9(){
  $('#ob9')[0].innerText=+$('#mesto9 .text-center')[0].value*(+$('#odin_mest9')[0].value);
  $('#ob91')[0].innerText=+$('#mesto9 .text-center')[1].value*+$('#mesto9 .text-center')[2].value*+$('#mesto9 .text-center')[3].value* 
  (+$('#odin_mest9')[0].value);
  $('#ov9')[0].innerText=+$('#mesto9 .text-center')[4].value*(+$('#odin_mest9')[0].value);
}
function oob10(){
  $('#ob10')[0].innerText=+$('#mesto10 .text-center')[0].value*(+$('#odin_mest10')[0].value);
  $('#ob101')[0].innerText=+$('#mesto10 .text-center')[1].value*+$('#mesto10 .text-center')[2].value*+$('#mesto10 .text-center')[3].value* 
  (+$('#odin_mest10')[0].value);
  $('#ov10')[0].innerText=+$('#mesto10 .text-center')[4].value*(+$('#odin_mest10')[0].value);
}

// срабатывание по изменению объёма/веса
// тут говнокод
$('#mesto1 .text-center')[0].addEventListener('change', function(){oob1()})
$('#mesto1 .text-center')[1].addEventListener('change', function(){oob1()})
$('#mesto1 .text-center')[2].addEventListener('change', function(){oob1()})
$('#mesto1 .text-center')[3].addEventListener('change', function(){oob1()})
$('#mesto1 .text-center')[4].addEventListener('change', function(){oob1()})

$('#mesto2 .text-center')[0].addEventListener('change', function(){oob2()})
$('#mesto2 .text-center')[1].addEventListener('change', function(){oob2()})
$('#mesto2 .text-center')[2].addEventListener('change', function(){oob2()})
$('#mesto2 .text-center')[3].addEventListener('change', function(){oob2()})
$('#mesto2 .text-center')[4].addEventListener('change', function(){oob2()})

$('#mesto3 .text-center')[0].addEventListener('change', function(){oob3()})
$('#mesto3 .text-center')[1].addEventListener('change', function(){oob3()})
$('#mesto3 .text-center')[2].addEventListener('change', function(){oob3()})
$('#mesto3 .text-center')[3].addEventListener('change', function(){oob3()})
$('#mesto3 .text-center')[4].addEventListener('change', function(){oob3()})

$('#mesto4 .text-center')[0].addEventListener('change', function(){oob4()})
$('#mesto4 .text-center')[1].addEventListener('change', function(){oob4()})
$('#mesto4 .text-center')[2].addEventListener('change', function(){oob4()})
$('#mesto4 .text-center')[3].addEventListener('change', function(){oob4()})
$('#mesto4 .text-center')[4].addEventListener('change', function(){oob4()})

$('#mesto5 .text-center')[0].addEventListener('change', function(){oob5()})
$('#mesto5 .text-center')[1].addEventListener('change', function(){oob5()})
$('#mesto5 .text-center')[2].addEventListener('change', function(){oob5()})
$('#mesto5 .text-center')[3].addEventListener('change', function(){oob5()})
$('#mesto5 .text-center')[4].addEventListener('change', function(){oob5()})

$('#mesto6 .text-center')[0].addEventListener('change', function(){oob6()})
$('#mesto6 .text-center')[1].addEventListener('change', function(){oob6()})
$('#mesto6 .text-center')[2].addEventListener('change', function(){oob6()})
$('#mesto6 .text-center')[3].addEventListener('change', function(){oob6()})
$('#mesto6 .text-center')[4].addEventListener('change', function(){oob6()})

$('#mesto7 .text-center')[0].addEventListener('change', function(){oob7()})
$('#mesto7 .text-center')[1].addEventListener('change', function(){oob7()})
$('#mesto7 .text-center')[2].addEventListener('change', function(){oob7()})
$('#mesto7 .text-center')[3].addEventListener('change', function(){oob7()})
$('#mesto7 .text-center')[4].addEventListener('change', function(){oob7()})

$('#mesto8 .text-center')[0].addEventListener('change', function(){oob8()})
$('#mesto8 .text-center')[1].addEventListener('change', function(){oob8()})
$('#mesto8 .text-center')[2].addEventListener('change', function(){oob8()})
$('#mesto8 .text-center')[3].addEventListener('change', function(){oob8()})
$('#mesto8 .text-center')[4].addEventListener('change', function(){oob8()})

$('#mesto9 .text-center')[0].addEventListener('change', function(){oob9()})
$('#mesto9 .text-center')[1].addEventListener('change', function(){oob9()})
$('#mesto9 .text-center')[2].addEventListener('change', function(){oob9()})
$('#mesto9 .text-center')[3].addEventListener('change', function(){oob9()})
$('#mesto9 .text-center')[4].addEventListener('change', function(){oob9()})

$('#mesto10 .text-center')[0].addEventListener('change', function(){oob10()})
$('#mesto10 .text-center')[1].addEventListener('change', function(){oob10()})
$('#mesto10 .text-center')[2].addEventListener('change', function(){oob10()})
$('#mesto10 .text-center')[3].addEventListener('change', function(){oob10()})
$('#mesto10 .text-center')[4].addEventListener('change', function(){oob10()})



// СРАБАТЫВАНИЕ ПО ДОБАВЛЕНИЮ ОДИНАКОВОГО МЕСТА
$(function() {$('#min_odin1').on('click', oob1);})
    $(function() {$('#max_odin1').on('click', oob1);})

    $(function() {$('#min_odin2').on('click', oob2);})
    $(function() {$('#max_odin2').on('click', oob2);})

    $(function() {$('#min_odin3').on('click', oob3);})
    $(function() {$('#max_odin3').on('click', oob3);})

    $(function() {$('#min_odin4').on('click', oob4);})
    $(function() {$('#max_odin4').on('click', oob4);})

    $(function() {$('#min_odin5').on('click', oob5);})
    $(function() {$('#max_odin5').on('click', oob5);})

    $(function() {$('#min_odin6').on('click', oob6);})
    $(function() {$('#max_odin6').on('click', oob6);})

    $(function() {$('#min_odin7').on('click', oob7);})
    $(function() {$('#max_odin7').on('click', oob7);})

    $(function() {$('#min_odin8').on('click', oob8);})
    $(function() {$('#max_odin8').on('click', oob8);})

    $(function() {$('#min_odin9').on('click', oob9);})
    $(function() {$('#max_odin9').on('click', oob9);})

    $(function() {$('#min_odin10').on('click', oob10);})
    $(function() {$('#max_odin10').on('click', oob10);})


//  Скрипт скрытия городов в заявке
function hidegor() {
      var otkuda_v = document.getElementById('otkudamd').value
      var kuda_v = document.getElementById('kudamd').value

      if(otkuda_v == 1){
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[0].style.display="block";
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[1].style.display="block";
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[2].style.display="block";
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[3].style.display="block";  
      }
      if(otkuda_v ==2){
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[0].style.display="block";
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[1].style.display="block";
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[2].style.display="block";
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[3].style.display="block";
      }
      if(otkuda_v ==3){
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[0].style.display="none";
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[1].style.display="none";
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[2].style.display="block";
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[3].style.display="block";
      }
      if(otkuda_v ==4){  
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[0].style.display="none";
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[1].style.display="none";
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[2].style.display="block";
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[3].style.display="none";
      }
      if(otkuda_v ==5){  
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[0].style.display="none";
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[1].style.display="none";
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[2].style.display="none";
        document.getElementsByClassName('select__list')[3].getElementsByClassName('select__item')[3].style.display="block";
      }
    
      if(otkuda_v == 1 && kuda_v == 3){i = 0;}
      if(otkuda_v == 1 && kuda_v == 4){i = 1;}
      if(otkuda_v == 1 && kuda_v == 5){i = 2;}
      if(otkuda_v == 1 && kuda_v == 6){i = 3;}
      if(otkuda_v == 2 && kuda_v == 4){i = 4;}
      if(otkuda_v == 2 && kuda_v == 3){i = 5;}
      if(otkuda_v == 2 && kuda_v == 5){i = 6;}
      if(otkuda_v == 2 && kuda_v == 6){i = 7;}
      if(otkuda_v == 3 && kuda_v == 5){i = 8;}
      if(otkuda_v == 3 && kuda_v == 6){i = 9;}
      if(otkuda_v == 4 && kuda_v == 5){i = 10;}
      if(otkuda_v == 5 && kuda_v == 6){i = 11;}
      if(
        (otkuda_v == 3 && kuda_v != 5 && kuda_v != 6)  ||
        (otkuda_v == 4 && kuda_v != 5)  ||
        (otkuda_v == 5 && kuda_v != 6)                            
    ){
        console.log("В этот город нет доставки")
        $('#hide_md .select__value')[0].innerText = "Куда";
      }    
      $('#otkudIn').val($('.select__value:eq(2)').text())
      $('#kudIn').val($('.select__value:eq(3)').text())  
}
document.getElementById('otkudamd').addEventListener('change', function(){hidegor()})
document.getElementById('kudamd').addEventListener('change', function(){hidegor()})


//  Скрипт для календаря

$.datepicker.regional['ru'] = {
closeText: 'Закрыть',
prevText: '&#x3c;Пред',
nextText: 'След&#x3e;',
currentText: 'Сегодня',
monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
'Июл','Авг','Сен','Окт','Ноя','Дек'],
dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
dateFormat: 'dd.mm.yy',
firstDay: 1,
isRTL: false
};
$.datepicker.setDefaults($.datepicker.regional['ru']);
$( function() {  $( "#datecalend" ).datepicker();} );
$( function() {  $( "#datecalendout" ).datepicker();} );

// Скрипт удаления мест
function del1(){$('#mesto1').addClass('hide');}
function del2(){$('#mesto2').addClass('hide');}
function del3(){$('#mesto3').addClass('hide');}
function del4(){$('#mesto4').addClass('hide');}
function del5(){$('#mesto5').addClass('hide');}
function del6(){$('#mesto6').addClass('hide');}
function del7(){$('#mesto7').addClass('hide');}
function del8(){$('#mesto8').addClass('hide');}
function del9(){$('#mesto9').addClass('hide');}
function del10(){$('#mesto10').addClass('hide');}

// Скрипт добавления мест
function addmesto(){
  $('.hide').first().removeClass('hide')
}
// Скрипт переключателя Габариты/объём
// 1место
function perekF1(){ 
      if($('.obyom1').css('display')=="block"){
        $('.touch1').css('margin','20px 2px');
        $('.obtext1').css('color','#B3B3B3');
        $('.gabtext1').css('color','#000');
        $('.obyom1').css('display','none');
        $('.gabar1').css('display','inline-block'); 
          } 
      else{
        $('.obyom1').css('display','inline-block'); 
        $('.gabar1').css('display','none'); 
        $('.touch1').css('margin', '2px');
        $('.obtext1').css('color','#000');
        $('.gabtext1').css('color','#B3B3B3');
      }
 }
//  2 место
function perekF2(){ 
          if($('.obyom2').css('display')=="block"){
             $('.touch2').css('margin','20px 2px');
             $('.obtext2').css('color','#B3B3B3');
             $('.gabtext2').css('color','#000');
             $('.obyom2').css('display','none');
             $('.gabar2').css('display','inline-block'); 
              } 
          else{
             $('.obyom2').css('display','inline-block'); 
             $('.gabar2').css('display','none'); 
             $('.touch2').css('margin', '2px');
             $('.obtext2').css('color','#000');
             $('.gabtext2').css('color','#B3B3B3');
          }
     }
// 3 место
function perekF3(){ 
          if($('.obyom3').css('display')=="block"){
             $('.touch3').css('margin','20px 2px');
             $('.obtext3').css('color','#B3B3B3');
             $('.gabtext3').css('color','#000');
             $('.obyom3').css('display','none');
             $('.gabar3').css('display','inline-block'); 
              } 
          else{
             $('.obyom3').css('display','inline-block'); 
             $('.gabar3').css('display','none'); 
             $('.touch3').css('margin', '2px');
             $('.obtext3').css('color','#000');
             $('.gabtext3').css('color','#B3B3B3');
          }
     }
// 4 место
function perekF4(){ 
          if($('.obyom4').css('display')=="block"){
             $('.touch4').css('margin','20px 2px');
             $('.obtext4').css('color','#B3B3B3');
             $('.gabtext4').css('color','#000');
             $('.obyom4').css('display','none');
             $('.gabar4').css('display','inline-block'); 
              } 
          else{
             $('.obyom4').css('display','inline-block'); 
             $('.gabar4').css('display','none'); 
             $('.touch4').css('margin', '2px');
             $('.obtext4').css('color','#000');
             $('.gabtext4').css('color','#B3B3B3');
          }
     }
// 5 место
function perekF5(){ 
          if($('.obyom5').css('display')=="block"){
             $('.touch5').css('margin','20px 2px');
             $('.obtext5').css('color','#B3B3B3');
             $('.gabtext5').css('color','#000');
             $('.obyom5').css('display','none');
             $('.gabar5').css('display','inline-block'); 
              } 
          else{
             $('.obyom5').css('display','inline-block'); 
             $('.gabar5').css('display','none'); 
             $('.touch5').css('margin', '2px');
             $('.obtext5').css('color','#000');
             $('.gabtext5').css('color','#B3B3B3');
          }
     }
// 6 место
function perekF6(){ 
          if($('.obyom6').css('display')=="block"){
             $('.touch6').css('margin','20px 2px');
             $('.obtext6').css('color','#B3B3B3');
             $('.gabtext6').css('color','#000');
             $('.obyom6').css('display','none');
             $('.gabar6').css('display','inline-block'); 
              } 
          else{
             $('.obyom6').css('display','inline-block'); 
             $('.gabar6').css('display','none'); 
             $('.touch6').css('margin', '2px');
             $('.obtext6').css('color','#000');
             $('.gabtext6').css('color','#B3B3B3');
          }
     }
// 7 место
function perekF7(){ 
          if($('.obyom7').css('display')=="block"){
             $('.touch7').css('margin','20px 2px');
             $('.obtext7').css('color','#B3B3B3');
             $('.gabtext7').css('color','#000');
             $('.obyom7').css('display','none');
             $('.gabar7').css('display','inline-block'); 
              } 
          else{
             $('.obyom7').css('display','inline-block'); 
             $('.gabar7').css('display','none'); 
             $('.touch7').css('margin', '2px');
             $('.obtext7').css('color','#000');
             $('.gabtext7').css('color','#B3B3B3');
          }
     }
// 8 место
function perekF8(){ 
          if($('.obyom8').css('display')=="block"){
             $('.touch8').css('margin','20px 2px');
             $('.obtext8').css('color','#B3B3B3');
             $('.gabtext8').css('color','#000');
             $('.obyom8').css('display','none');
             $('.gabar8').css('display','inline-block'); 
             console.log("8 переключатель")
              } 
          else{
             $('.obyom8').css('display','inline-block'); 
             $('.gabar8').css('display','none'); 
             $('.touch8').css('margin', '2px');
             $('.obtext8').css('color','#000');
             $('.gabtext8').css('color','#B3B3B3');
             console.log("8 переключатель элесе")
          }
     }
// 9 место
function perekF9(){ 
          if($('.obyom9').css('display')=="block"){
             $('.touch9').css('margin','20px 2px');
             $('.obtext9').css('color','#B3B3B3');
             $('.gabtext9').css('color','#000');
             $('.obyom9').css('display','none');
             $('.gabar9').css('display','inline-block'); 
              } 
          else{
             $('.obyom9').css('display','inline-block'); 
             $('.gabar9').css('display','none'); 
             $('.touch9').css('margin', '2px');
             $('.obtext9').css('color','#000');
             $('.gabtext9').css('color','#B3B3B3');
          }
     }
// 10 место
function perekF10(){ 
          if($('.obyom10').css('display')=="block"){
             $('.touch10').css('margin','20px 2px');
             $('.obtext10').css('color','#B3B3B3');
             $('.gabtext10').css('color','#000');
             $('.obyom10').css('display','none');
             $('.gabar10').css('display','inline-block'); 
              } 
          else{
             $('.obyom10').css('display','inline-block'); 
             $('.gabar10').css('display','none'); 
             $('.touch10').css('margin', '2px');
             $('.obtext10').css('color','#000');
             $('.gabtext10').css('color','#B3B3B3');
          }
     }

$(function() {$('.perekl1').on('click', perekF1);})
$(function() {$('.perekl2').on('click', perekF2);})
$(function() {$('.perekl3').on('click', perekF3);})
$(function() {$('.perekl4').on('click', perekF4);})
$(function() {$('.perekl5').on('click', perekF5);})
$(function() {$('.perekl6').on('click', perekF6);})
$(function() {$('.perekl7').on('click', perekF7);})
$(function() {$('.perekl8').on('click', perekF8);})
$(function() {$('.perekl9').on('click', perekF9);})
$(function() {$('.perekl10').on('click', perekF10);})

// Скрипт убирающий z-index
  $('#hide_md .select').css('z-index', 1 );
// Проверка согласия на обработку данных 
function test_terms1(){
    if($('#terms1').prop("checked") == true ){
      $('#but_zay').removeAttr('disabled');
    }else{
      $('#but_zay').attr('disabled','')
      }
}



