<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$params = json_decode(file_get_contents('php://input'));
$conn = new mysqli("localhost", "root", "", "c4");

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit();
}

$id = $params->id;
$query = "DELETE FROM personen WHERE ID=". $id;
if($conn->query($query) === TRUE) {
} else {
  echo "Error, could not delete";
}

$conn->close();

?>
