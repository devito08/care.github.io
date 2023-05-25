<?php
// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get form data
  $researchPaper = $_FILES['research-paper'];
  $appeal = $_POST['appeal'];
  $name = $_POST['name'];
  $email = $_POST['email'];

  // Store form data in a text file
  $data = "Research Paper: " . $researchPaper['name'] . "\n";
  $data .= "Appeal for Publication: " . $appeal . "\n";
  $data .= "Name: " . $name . "\n";
  $data .= "Email: " . $email . "\n";

  $filename = 'form_data.txt';
  file_put_contents($filename, $data, FILE_APPEND | LOCK_EX);

  // Output success message
  $message = "Form submission successful. Your data has been recorded.";
}
?>
