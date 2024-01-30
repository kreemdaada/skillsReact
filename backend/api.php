<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Optionen-Anfrage beantworten
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header("HTTP/1.1 200 OK");
  exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  // API-Endpunkt zum Abrufen von Daten
  $result = $conn->query("SELECT * FROM form");
  $data = array();
  while ($row = $result->fetch_assoc()) {
    $data[] = $row;
  }
  echo json_encode($data);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // API-Endpunkt zum Hinzufügen von Daten
  $postData = json_decode(file_get_contents("php://input"), true);
  $stmt = $conn->prepare("INSERT INTO form (vorname, nachname, email, telefonnummer, gender, nachricht, land) VALUES (?, ?, ?, ?, ?, ?, ?)");
  $stmt->bind_param("sssssss", $postData['vorname'], $postData['nachname'], $postData['email'], $postData['telefonnummer'], $postData['gender'], $postData['nachricht'], $postData['land']);

  if ($stmt->execute()) {
    echo "Data added to the database";
  } else {
    echo "Error adding data to the database";
  }
}

$conn->close();
?>
