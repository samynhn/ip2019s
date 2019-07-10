function issueCard() {

for (var i=1; i <= 16; i++){
var r=Math.floor((Math.random() * 4));
switch(r){
 case 0: $('#d2').append('<img id="img' + i +'" class="issue club">');
         $('#d3').append('<img class="ref club">');
         break;
 case 1: $('#d2').append('<img id="img' + i + '" class="issue diamonds">');
         $('#d3').append('<img class="ref diamonds">');
         break;
 case 2: $('#d2').append('<img id="img' + i +  '" class="issue hearts">');
         $('#d3').append('<img class="ref  hearts">');
         break;
 case 3: $('#d2').append('<img id="img' + i + '" class="issue spades">');
         $('#d3').append('<img class="ref spades">');
        break;
   }
 }
   $('.issue').hide().fadeIn(8000);
}

function update() {
  $('.club') .attr("src","./ace-of-club.svg");
  $('.diamonds').attr("src","./ace-of-diamonds.svg");
  $('.hearts').attr("src","./ace-of-hearts.svg");
  $('.spades').attr("src","./ace-of-spades.svg");
  $('.back').attr("src","./joker-card.svg");
}



   $(function() {
     issueCard(); // 發牌
     update();

    // button listener
     $('#bl').on('click', function() {
         $('.issue').addClass("back");
         update();
     });

     flip=0;
     var first= '';
     var second= '';

     // card listener
    $('.issue').on('click', function() {
         flip= $('#il').val();

    $(this).removeClass("back");
    update();

    $(this).addClass("selected");

         if (flip == 0) {
           $('#il').val( 1 );
           $('#i4').val( this.id );

if ( $(this).hasClass("club") ) {
first='club';
 } else if ($(this).hasClass("diamonds")){
   first = 'diamonds';
 } else if ($(this).hasClass("hearts")){
   first = 'hearts';
 } else {
   first = 'spades';
 }
$('#i2').val(first);
} else if (flip==1) {

$('#i1').val(2);
$('#i5').val( this.id );

if ( $(this).hasClass("club") ) {
  second='club';
} else if($(this).hasClass("diamonds") ) {
  second='diamonds';
} else if($(this).hasClass("hearts") ) {
second='hearts';
} else {
  second='spades';
}
$('#i3').val(second);

var myidl='#'+ $('#i4').val();
var myid2='#'+ $('#i5').val();


if (first==second) {
setTimeout(function() {
//do something special
$(myidl).addClass('done');
//$(this).addClass('done');
$(myid2).addClass('done');
//alert('you win!');
    first ='';
    second ='';
    $('#i2').val(first);
    $('#i3').val(second);
  $('#i：L').val(0);
  $('#i4').val('');
  $('#i5').val('');
  }, 500);
} else {
setTimeout(function() {
               //do something special
               $(myidl).removeClass('selected');
               $(myid2).removeClass('selected');
               $(myidl).addClass('back');
               $(myid2).addClass('back');
               update();
               alert('try again!');
                first='';
                second='';
                $('#i2').val(first);
                $('#i3').val(second);
                $('#i1').val(0);
                $('#i4').val('');
                $('#i5').val('');
              },200);
}
}
update();
});
});

