<?php
header('Content-Type:text/plain');
header('Access-Control-Allow-Origin: *');
// $post_url = 'https://raw.githubusercontent.com/JoyNeop/Mountain-Reviewer/master/main.js';
$post_url = 'http://mountain-reviewer.joyneop.com:8012/' . $_GET['title'];
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $post_url);
curl_setopt($curl, CURLOPT_HEADER, 0);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$data = curl_exec($curl);
curl_close($curl);
?>

document.getElementsByClassName("zu-edit-button")[1].click();
document.getElementsByTagName("select")[0].options[0].value = "共创没有 typo 的知乎 http://t.cn/8sBOavE";
var t = document.getElementsByClassName("zm-editable-editor-input")[0].value;
document.getElementsByClassName("zm-editable-editor-input")[0].value = '<?php echo $data; ?>';
// document.getElementsByClassName("zm-editable-editor-input")[0].value = '如何安装 Photoshop？';
document.getElementsByClassName("zg-r3px")[0].click();