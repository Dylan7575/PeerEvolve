<?php

$server ='helska.cefns.nau.edu';
$username = 'cspeerevolve';
$password = "3162647";
$database = 'cspeerevolve';

mysqli_connect($server,$username,$password)or die("WHY");
echo json_encode("connect success");