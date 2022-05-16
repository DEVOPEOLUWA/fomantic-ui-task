$('#diacriticsexample')
.search({
    ignoreDiacritics: true,
    fullTextSearch:'exact',
    source: [
        { title: 'Jollof rice'},
        { title: 'Beans'},
        { title: 'ice cream'},
        { title: 'lemonade'},
        { title: 'pork'},
        { title: 'Pounded Yam'},
        { title: 'Égusi'},
       
    ]
});

$('.image')
.transition('bounce')
;
$('.shape')
  .shape('set next side', '.second.side')
  .shape('flip up')
;

$('.ui.rating')
  .rating();


 $('.ui.yellow.rating')
  .transition('tada')
 
$('.selection.dropdown')
  .dropdown()
;
$('.ui.calendar').calendar({
  type: 'date'
});
$('.ui.radio.checkbox')
  .checkbox()
;

let btn  = document.querySelector('#btn');

btn.onclick = () =>{
  $('.ui.modal')
  .modal('show');
}

let btns  = document.querySelector('#btns');

btns.onclick = () =>{
  btns.classList.add('toggle');
  btns.innerHTML = 'Order Placed';

 
}
let menu = document.querySelector('#menu-bar') ;

menu.onclick = () =>{
$('.ui.sidebar')
  .sidebar('toggle');
}
