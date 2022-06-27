<?php

require_once("../includes/connection.php");

if(isset($_POST['id'])){
    $id = $_POST['id'];
    $sql = "SELECT * FROM `events_info` WHERE `id` = '$id'";
    $query = $connect->query($sql) or die ($connect->error);
    $row = $query->fetch_assoc();
    $output = $row['id'].','.$row['events_title'].','.$row['events_date'];
    echo $output;
}

?>