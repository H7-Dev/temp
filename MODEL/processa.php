<?php
  $value = filter_input(INPUT_POST, 'value', FILTER_SANITIZE_STRING);
  echo $value;
?>
