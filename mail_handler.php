<?PHP
if (isset($_POST['email']) && $_POST['email'] !='' && isset($_POST['submit'])){
    $to = "amit@amitkumar-das.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $uname = $_POST['uname'];
    $subject = "Amit's Space";
    $subject2 = "A Warm Welcome From Amit!";
    $message = $uname . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Thanks for writing in " . $uname . "! I will do my best to get back to you as soon as I can!\n\nThanks and Regards,\n\nAmit Kumar Das";
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    header('Location: index.php');
}
?>