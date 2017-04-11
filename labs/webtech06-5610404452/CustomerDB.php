<?php
$customerID = $_POST['customerID'];
$citizenID = $_POST['citizenID'];
$fname = $_POST['fname'];
$lname = $_POST['lname'];


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webtech";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $sql = "INSERT INTO customers VALUES ($customerID, $citizenID, $fname, $lname)";
  echo "Insert successfully";
}
catch(PDOException $e){
  echo "Connection failed: " . $e->getMessage();
}
?>
