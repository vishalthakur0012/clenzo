
<!--  -->
<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $usuarioname = htmlspecialchars($_POST['S_name']);
    $usuariomobile = htmlspecialchars($_POST['S_phone']);
    $usuarioemail = htmlspecialchars($_POST['S_email']);
    $usuarioservices = htmlspecialchars($_POST['S_services']);
    $usuariomessage = htmlspecialchars($_POST['message']);

    // Prepare email content
    $emailContent = "
    Full Name: $usuarioname
    Mobile: $usuariomobile
    Email: $usuarioemail
    Services: $usuarioservices
    Message: $usuariomessage
    ";

    // Email configuration
    $to = "info@eirmonsolutions.com";  // Replace with your email address
    $subject = "Clenzo Website";

    // Send email
    if (mail($to, $subject, $emailContent)) {
        echo "Thank you! Your enquiry has been submitted.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    // If the form is not submitted through POST method
    echo "Invalid request.";
}

?>
<SCRIPT LANGUAGE="JavaScript">
    location.href='thanks.html';
</SCRIPT>