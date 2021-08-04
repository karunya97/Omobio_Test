<?php
$dbconn = mysqli_connect('localhost','root','','exam');
if($dbconn)
{
    echo "connected successfully";
}
else{
    die("connection failed". mysqli_connect_error());
}

?>