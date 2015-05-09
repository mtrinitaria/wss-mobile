<?php

define( "RECIPIENT_NAME", "Mckay Stewart" ); //UPDATE THIS TO YOUR NAME
define( "RECIPIENT_EMAIL", "duncan@mckaystewart.com" ); //UPDATE THIS TO YOUR EMAIL ID
define( "EMAIL_SUBJECT", "Contact" ); //UPDATE THIS TO YOUR SUBJECT
/*
 $post_check1=0;
 $post_check2=0;
 $post_check3=0;
 $post_check4=0;
*/
$post_fname=htmlspecialchars($_POST["name1"]);
$post_lname=htmlspecialchars($_POST["name2"]);
$post_company=htmlspecialchars($_POST["name3"]);
$post_type=htmlspecialchars($_POST["selectrsvp"]);
$post_phone=htmlspecialchars($_POST["name5"]);
$post_info=htmlspecialchars($_POST["name6"]);
$post_email=htmlspecialchars($_POST["name4"]);
$post_subject=htmlspecialchars($_POST["check"]);

$message = "Request Type: $post_type<br/><br/>First Name: $post_fname<br/><br/>Last Name: $post_lname <br/><br/>
Company: $post_company <br/><br/>
Phone Number: $post_phone<br/><br/>Subject: $post_subject<br/><br/>Message Text: $post_info
<br/><br/>Email-adrress: $post_email";

/*
if (!preg_match("/^[a-zA-Z ]*$/",$post_fname)) {
  $post_check1 = 1; 
}

if (!preg_match("/^[a-zA-Z ]*$/",$post_lname)) {
  $post_check2 = 2; 
}

if (!ctype_digit($post_phone)) {
  $post_check3 = 3; 
}


if (!filter_var($post_email, FILTER_VALIDATE_EMAIL)) {

$post_check4 = 4; 

}

*/

$senderName="halocreativeagency";
$senderEmail="halocrea@a2s83.a2hosting.com";

$recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
 $headers = "From: " . $senderName . " <" . $senderEmail . ">\n";
 $headers .= "MIME-Version: 1.0\n"; 

 $headers .= "Content-Type: text/HTML; charset=ISO-8859-1\n";







 if(  @mail( $recipient, EMAIL_SUBJECT, $message, $headers )){

echo "<script>alert('MESSAGE SENT');location.href='http://m.westsideswordy.com/index.html';</script>";

}






?>