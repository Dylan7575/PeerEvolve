<?php
header("Access-Control-Allow-Origin: *");
$data = json_decode(file_get_contents("php://input"));

$CD=$data[0];
$DD=$data[1];
$OD=$data[2];

$f=rand(0,10000);

$con =mysqli_connect("localhost","root","","test") or die(json_encode("fail"));


$sql= "INSERT INTO evaltemplates (EvalTemplateID,OpenDate,DueDate,ClosedDate) VALUES('$f','$data[0]','$data[1]','$data[2]')";

if(mysqli_query($con ,$sql)){
    echo json_encode( "yea");
}
else{
    echo json_encode("NO");
}
//echo json_encode("no");
