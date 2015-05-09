
$(document).ready(function(){
/*
$("#button").click(function() {


var number = $("textarea[name='bname1']").val();


var name = $("textarea[name='bname2']").val();



$("#ri #formback2,#ri #formback3").css("border","none");

if (name == ''|| number == '' ) {






if(number == ''){

$("#ri #formback2").css("border","2px solid red");

}


if(name == ''){
$("#ri #formback3").css("border","2px solid red");
}









} 

else {



//$(".balloon").css("visibility","hidden");

$.post( "rsvpform.php", {
number1: number,

name1: name,

}, function(data) {

if(data=="00"){

alert("Your message is sent!");

}
else{




if(data.search(1)!=-1){

$("#ri #formback3").css("border","2px solid red");

}

if(data.search(2)!=-1){

$("#ri #formback2").css("border","2px solid red");

}




}


 
});
}
});


*/

$("#button2").click(function() {



var request= $("select[name='selectrsvp'] option:selected").val();




var fname=$("input[name='name1']").val();

var lname=$("input[name='name2']").val();

var company=$("input[name='name3']").val();


var email=$("input[name='name4']").val();


var phone=$("input[name='name5']").val();

var guests= $("select[name='selectrsvp2'] option:selected").val();


var info= $("textarea[name='special2']").val();

if(document.getElementById("myCheck").checked){
var checkbox="Checked:I would like to be considered for future events";
}
else{
var checkbox="Unchecked:I would like to be considered for future events";
}


$("#rsvp #formback2,#rsvp #formback3,#rsvp #formback9,#rsvp #formback4,#rsvp #formback5,#rsvp #formback6").css("border","none");
$("#rsvp #formback2,#rsvp #formback3,#rsvp #formback9,#rsvp #formback4,#rsvp #formback5,#rsvp #formback6").css("border-bottom","1px solid #101010");

if (fname == ''|| lname == ''|| company == ''|| email == ''|| phone == '') {

//alert("Insertion Failed Some Fields are Blank....!!");




if(fname == ''){

$("#rsvp #formback2").css("border","2px solid red");
}


if(lname == ''){
$("#rsvp #formback3").css("border","2px solid red");
}


if(phone == ''){
$("#rsvp #formback6").css("border","2px solid red");
}



if(company == ''){
$("#rsvp #formback4").css("border","2px solid red");
}



if(email == ''){
$("#rsvp #formback5").css("border","2px solid red");
}




} 

else {

//$(".balloon").css("visibility","hidden");

$.post( "riform.php", {

request1: request,

fname1: fname,

lname1: lname,

company1: company,

email1: email,

phone1: phone,

guests1: guests,

info1: info,

checkbox1:checkbox,


}, function(data) {

if(data=="0000"){

alert("Your message is sent!");

}
else{



//$(".balloon").css("visibility","hidden");


if(data.search(1)!=-1){

$("#rsvp #formback2").css("border","2px solid red");

}

if(data.search(2)!=-1){

$("#rsvp #formback3").css("border","2px solid red");

}

if(data.search(3)!=-1){

$("#rsvp #formback6").css("border","2px solid red");

}
if(data.search(4)!=-1){

$("#rsvp #formback5").css("border","2px solid red");

}



}







 
});
}










});







$("#button3").click(function() {


var type= $("select[name='conselect'] option:selected").val();


var fname=$("input[name='cname1']").val();

var lname=$("input[name='cname2']").val();

var company=$("input[name='cname3']").val();


//var title=$("input[name='cname4']").val();


var phone=$("input[name='cname5']").val();

var email= $("input[name='cname6']").val();

var subject=$("input[name='cname7']").val();


var info= $("textarea[name='special3']").val();




$("#contact1 #formback2,#contact1 #formback3,#contact1 #formback6,#contact1 #formback7,#contact1 #formback10").css("border","none");
$("#contact1 #formback2,#contact1 #formback3,#contact1 #formback6,#contact1 #formback7,#contact1 #formback10").css("border-bottom","1px solid #101010");

if (fname == ''|| lname == ''|| email == ''|| subject == ''|| phone == '' ) {
//alert("Insertion Failed Some Fields are Blank....!!");




if(fname == ''){
$("#contact1 #formback2").css("border","2px solid red");
}


if(lname == ''){
$("#contact1 #formback3").css("border","2px solid red");
}


if(phone == ''){
$("#contact1 #formback6").css("border","2px solid red");
}



if(email == ''){
$("#contact1 #formback7").css("border","2px solid red");
}



if(subject == ''){
$("#contact1 #formback10").css("border","2px solid red");
}





} 

else {

//$(".balloon").css("visibility","hidden");

$.post( "contactform.php", {

type1: type,

fname1: fname,

lname1: lname,

company1: company,


phone1: phone,

email1: email,

info1: info,

subject1: subject,




}, function(data) {

if(data=="0000"){

alert("Your message is sent!");

}
else{



//$(".balloon").css("visibility","hidden");


if(data.search(1)!=-1){

$("#contact1 #formback2").css("border","2px solid red");

}

if(data.search(2)!=-1){

$("#contact1 #formback3").css("border","2px solid red");

}

if(data.search(3)!=-1){

$("#contact1 #formback6").css("border","2px solid red");

}

if(data.search(4)!=-1){

$("#contact1 #formback7").css("border","2px solid red");

}



}







 
});
}










});











});