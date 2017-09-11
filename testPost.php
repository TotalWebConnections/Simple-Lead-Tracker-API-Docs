<?php

$name = "Test Name";
$company = "Simple Lead Tracker";
$phone = "555-555-5555";
$email = "test@test.com";
$category = "";
$website = "www.simpleleadtracker.com";
$secretKey = 'API Key Goes Here';


$data = array('apiToken'=>$secretKey,
              'name'=>$name,
              'company'=>$company,
              'phone'=>$phone,
              'email'=>$email,
              'category'=>$category,
              'website'=>$website
          );


$ch = curl_init();

curl_setopt($ch, CURLOPT_URL,"https://www.simpleleadtracker.com/api/addLead");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$output= curl_exec ($ch);

curl_close ($ch);

// further processing ....
var_dump($output);

?>
