<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $company = $_POST['company'];
    $message = $_POST['message'];
    
    // Your email
    $to = "femdavid09@gmail.com";

    // Email subject
    $subject = "Form submission from $name";

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Company: $company\n";
    $email_content .= "Message: $message\n";

    // Send email
    mail($to, $subject, $email_content);

    // Redirect to a thank you page or a confirmation message
    header('Location: thank_you.html');
}
?>
