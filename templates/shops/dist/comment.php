<?php
	header("content-type:application/json;char-set:UTF-8");
	echo(json_encode(["error"=>"","data"=>["a"=>$_POST]]));
?>
