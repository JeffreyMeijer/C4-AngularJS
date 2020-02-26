<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "c4");

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit();
}

$result = $conn->query("SELECT bedrijfsnaam, adres, woonplaats,telnr FROM bedrijf");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  if ($outp != "") {$outp .= ",";}
  $outp .= '{"Naam":"'  . $rs["bedrijfsnaam"] . '",';
  $outp .= '"Adres":"'   . $rs["adres"]        . '",';
  $outp .= '"Woonplaats":"'. $rs["woonplaats"]     . '",';
  $outp .= '"Tel":"' . $rs["telnr"] . '"}';
}
$outp ='{"records":['.$outp.']}'; $conn->close();

echo($outp);
?>
