<?php
/**
 * Created by PhpStorm.
 * User: sviluppo
 * Date: 07/10/17
 * Time: 14.38
 */

$term = strtolower($_REQUEST['term']);

$result = array();
if (($handle = fopen("../resource/pshtt.csv", "r")) !== FALSE) {
    $column_headers = fgetcsv($handle); // read the row.
    foreach($column_headers as $header) {
        $result[$header] = array();
    }

    while (($data = fgetcsv($handle)) !== FALSE) {
        $i = 0;
        if ($term && !(strpos($data[0], $term) || strpos($data[1], $term) || strpos($data[2], $term))) {
            continue;
        }
        foreach($result as &$column) {

            $column[] = $data[$i++];
        }

    }
    fclose($handle);
}
$json = json_encode($result);
echo $json;