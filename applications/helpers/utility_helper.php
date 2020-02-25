<?php

function format_number ($row, $key, $default = 0, $digits = 2) {
    $value = ($row && isset($row[$key]) && $row[$key]) ? $row[$key] : $default;
    return number_format($value, $digits);
}

function wrap_word ($row, $key, $default = 0, $break = '<br />') {
    $value = ($row && isset($row[$key]) && $row[$key]) ? $row[$key] : $default;
	$split = preg_split('/,/', $value, null, PREG_SPLIT_NO_EMPTY);
	return implode($break, $split);
}