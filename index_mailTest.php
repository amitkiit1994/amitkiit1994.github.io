<?PHP
    $to = "admin@amitkumar-das.com"; // this is your Email address
    $from = "asdasd@gmail.com"; // this is the sender's Email address
    $uname = "amit";
    $subject = "Amit's Space";
    $subject2 = "Thank you!";
    $message = $uname . " wrote the following:" . "\n\n Hello";
    $message2 = "Here is a copy of your message " . $uname . "\n\n Hello";

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
?>