<?php

function readFileMotto($motto){
  $nameOfFile = "fileData/motto/$motto.txt";
  $filenameUTF8 = iconv("utf-8", "tis-620", $nameOfFile);

  // case1
  $myfile = fopen($filenameUTF8, "r") or die("Unable to open file!");
  $textMotto = fread($myfile,filesize($filenameUTF8));
  fclose($myfile);

  // case2
  // $textMotto = file_get_contents($filenameUTF8);

  return $textMotto;
}

$motto = $_POST['callFuncReadFile'];
if(isset($motto)){
  echo(readFileMotto($motto));
}
?>
