<?php
  header("content-type:application/json;char-set:UTF-8");
  echo(json_encode(["error"=>"","data"=>["result"=>["liked"=>$_GET["liked"]=="true"?true:false,"disliked"=>$_GET["disliked"]=="true"?true:false]]]));
?>
