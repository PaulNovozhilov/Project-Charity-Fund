<?php
  header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Credentials: true');
  session_start();
  $mysqli = new mysqli('localhost','psnov555_fond','&BpPQ2yc','psnov555_fond');
	if(!empty($_SESSION['id'])){
		$id = $_SESSION['id'];
		$result = $mysqli->query("SELECT * FROM `users` WHERE `id`='$id'");
		echo json_encode($result->fetch_assoc());
	}else{
		echo json_encode(['result'=>'error']);
	}
?>