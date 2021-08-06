<?php 
if(isset($_POST['submit'])){
    $to = "amitkiit1994@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $uname = $_POST['uname'];
    $subject = "Amit's Space";
    $subject2 = "Thank you!";
    $message = $uname . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $uname . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "I received your message. Thank you " . $uname . ", I will reply you back shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>