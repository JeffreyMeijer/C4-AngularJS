<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "c4");

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit();
}

$result = $conn->query("SELECT ID, Voornaam, Achternaam, Straat, Huisnummer, Postcode, Woonplaats, Telefoonnummer,TijdToegevoegd FROM personen");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  if ($outp != "") {$outp .= ",";}
  $outp .= '{"ID":"'  . $rs["ID"] . '",';
  $outp .= '"Voornaam":"'  . $rs["Voornaam"] . '",';
  $outp .= '"Achternaam":"'  . $rs["Achternaam"] . '",';
  $outp .= '"Straat":"'  . $rs["Straat"] . '",';
  $outp .= '"Huisnummer":"'   . $rs["Huisnummer"]        . '",';
  $outp .= '"Postcode":"'  . $rs["Postcode"] . '",';
  $outp .= '"Woonplaats":"'. $rs["Woonplaats"]     . '",';
  $outp .= '"Telefoonnummer":"' . $rs["Telefoonnummer"] . '",';
  $outp .= '"TijdToegevoegd":"'  . $rs["TijdToegevoegd"] . '"}';
}
$outp ='{"records":['.$outp.']}'; $conn->close();

echo($outp);
?>
