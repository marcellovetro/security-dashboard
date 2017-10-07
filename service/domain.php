<?php
/**
 * Created by PhpStorm.
 * User: sviluppo
 * Date: 07/10/17
 * Time: 14.38
 */

$term = strtolower($_REQUEST['term']);
header("Access-Control-Allow-Origin: *");
$result = array();
$headers = array();
if (($handle = fopen("../resource/pshtt.csv", "r")) !== FALSE) {
    $column_headers = fgetcsv($handle); // read the row.
    foreach($column_headers as $header) {
        $headers[] = lcfirst(str_replace(' ', '', $header));
    }

    while (($data = fgetcsv($handle)) !== FALSE) {
        $i = 0;
        if ($term && !(strpos($data[0], $term) || strpos($data[1], $term) || strpos($data[2], $term))) {
            continue;
        }
        $row = [];
        foreach($data as $index => $value) {
            $value = strtolower($value);
            $row[$headers[$index]] = ($value == 'false'? false : ($value == 'true'? true : $value));
        }
        $result[] = $row;
    }
    fclose($handle);
}
$json = json_encode($result);
echo $json;