<?php
$tit = $_POST['title'];
function edit_title($tit) {
	$re = $tit;
	// TODO
	return $re;
}
header('Content-Type:text/plain');
header('Access-Control-Allow-Origin: *');
echo edit_title($tit);
?>