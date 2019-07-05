/*

*/


function start(e) {

var name = [
{
    char:'單',
    big5:'B3E6',
    cns:'1-5E4C',
    unicode:'55AE'
},
{
    char:'綿',
    big5:'BAF8',
    cns:'1-6A41',
    unicode:'7DBF'
},
{
    char:'恆',
    big5:'ABED',
    cns:'1-5131',
    unicode:'6046'
}
];

var ele =document.getElementById("div1");
for (var i=0;i<3;i++) {
    ele.innerHTML +=name[i].char;
    ele.innerHTML += 'big5 =' ;
    ele.innerHTML +=name[i].big5;
    ele.innerHTML += 'cns =' ;
    ele.innerHTML +=name[i].cns;
    ele.innerHTML += 'unicode =' ;
    ele.innerHTML +=name[i].unicode;
    ele.innerHTML +='<br>';
}
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
