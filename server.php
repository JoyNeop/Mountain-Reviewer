<?php
header('Content-Type:application/x-javascript');
$post_url = 'https://raw.githubusercontent.com/JoyNeop/Mountain-Reviewer/master/main.js';
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $post_url);
curl_setopt($curl, CURLOPT_HEADER, 0);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$data = curl_exec($curl);
curl_close($curl);
var_dump($data);
?>