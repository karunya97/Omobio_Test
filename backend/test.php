<?php
    //print "sample data"; 
    $userlist = array("name" => "karu" , "city" => "jaffna");
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($userlist);
?>