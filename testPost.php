<?php

/**
* Basic example of adding a lead programatically to the Simple Lead Tracker application
* Secret key is required and is found on the settings page of the user
*/


//all values are optional
$contact = "Test Name";
$company = "Simple Lead Tracker";
$phone = "555-555-5555";
$email = "test@test.com";
$category = "";
$website = "www.simpleleadtracker.com";
$secretKey = 'API Key Goes Here';


//create the data array
$data = array('apiToken'=>'keyGoesHere',
              'contact'=>$contact,
              'company'=>$company,
              'phone'=>$phone,
              'email'=>$email,
              'category'=>$category,
              'website'=>$website
 );


//create a curl request to send the data to the sever
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://www.simpleleadtracker.com/api/addLead");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);\

$output= curl_exec($ch);
curl_close($ch);

//Output will contain array with index 0 value 200 on success and error code on failure
//index 1 will contain more info
var_dump($output);

?>
