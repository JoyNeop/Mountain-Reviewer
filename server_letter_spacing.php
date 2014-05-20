/* This JavaScript file is developed by vinta and released at https://github.com/vinta/paranoid-auto-spacing */
/* Under the MIT License */
<?php
header('Content-Type:text/plain');
header('Access-Control-Allow-Origin: *');
$post_url = 'https://raw.githubusercontent.com/vinta/paranoid-auto-spacing/master/src/pangu.js';
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $post_url);
curl_setopt($curl, CURLOPT_HEADER, 0);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$data = curl_exec($curl);
curl_close($curl);
echo $data;
?>