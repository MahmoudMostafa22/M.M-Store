<?php
$servername = "localhost";
$username = 'root';
$password = '';
$database = 'm.m_store';

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    echo "sds";
  die("Connection failed: " . $conn->connect_error);
} 

?>