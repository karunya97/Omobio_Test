
<?php
require_once('dbconfig.php');

$fullname = $_POST['fullname'];
$username = $_POST['username'];
$password = $_POST['password'];
$email 	  = $_POST['email'];
$cpassword   = $_POST['cpassword'];

$error;
if(empty($fullname))
{
	$error = "FullName is required";
}
else if(empty($username))
{
	$error = "Username is required";
}
else if(empty($password))
{
	$error = "password is required";
}
else if(empty($email))
{
	$error = "email is required";
}
else if(empty($cpassword))
{
	$error = "Confirm password is required";
}
else{
	
	$alreadyExistVal = mysqli_query($dbconn,"SELECT * FROM `users` WHERE `username` = $username");
	if(mysqli_num_rows($alreadyExistVal) == 0)
	{
	
	$insertQry = "INSERT INTO `users`(`name`, `username`, `password`, `email`, `cpassword`) 
	VALUES ('$fullname','$username','$password','$email','$cpassword')";
	
	$qry = mysqli_query($dbconn, $insertQry);
	
	if($qry)
	{
		$userId = mysqli_insert_id($dbconn);
		$response['status'] = true;
		$response['message'] = "Register sucessfully";
		$response['userId'] = $userId;
	}
	else{
		$response['status'] = false;
		$response['message'] = "Register failed";	
	}
	}
	else{
		$response['status'] = false;
		$response['message'] = "Already mobile number exist. Please do login";	
		
	}	
	
}


header('Content-Type: application/json; charset=UTF-8');
echo json_encode($response);

?>
