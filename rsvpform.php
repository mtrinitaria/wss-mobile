<?php

define( "RECIPIENT_NAME", "Harris Abbasi" ); //UPDATE THIS TO YOUR NAME
define( "RECIPIENT_EMAIL", "harrisabbasi01@hotmail.com" ); //UPDATE THIS TO YOUR EMAIL ID
define( "EMAIL_SUBJECT", "RSVP" ); //UPDATE THIS TO YOUR SUBJECT
 $post_check1=0;
 $post_check2 = 0;

$post_number=htmlspecialchars($_REQUEST["number1"]);
$post_name=htmlspecialchars($_REQUEST["name1"]);


$message = "Name: $post_name<br/><br/>RSVP Number: $post_number <br/>";


if (!preg_match("/^[a-zA-Z ]*$/",$post_name)) {
  $post_check1 = 1; 
}


if (!ctype_digit($post_number)) {
  $post_check2 = 2; 
}

$senderName="halocreativeagency";
$senderEmail="halocrea@a2s83.a2hosting.com";

$recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
 $headers = "From: " . $senderName . " <" . $senderEmail . ">\n";
 $headers .= "MIME-Version: 1.0\n"; 
 $headers .= "Content-Type: text/HTML; charset=ISO-8859-1\n";








$check=$post_check1.$post_check2;

if( $check=="00" )
{



 if(  @mail( $recipient, EMAIL_SUBJECT, $message, $headers )){

echo $check;

}





}
else{

echo $check;
}






?>