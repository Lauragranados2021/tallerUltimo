<?php
/*$idDelete = $_POST["code"];
$status = false;
while ($status != true) {
    if (file_exists('js\Estudiantes.json')) {
        $data = file_get_contents('js\Estudiantes.json');
        $newData = json_decode($data);

        foreach ($newData as $participant => $idSearch) {

            if ($idSearch->id == $idDelete) {
                unset($newData[$participant]);
                $status = true;
            }

        }
    }

    file_put_contents('js\Estudiantes.json', json_encode($newData, true));
}*/
$idDelete = $_POST["code"];
$finalData = [];
$status = false;
while ($status != true) {
    if (file_exists('js\Estudiantes.json')) {
        $data = file_get_contents('js\Estudiantes.json');
        $newData = json_decode($data);

        foreach ($newData as $participant => $idSearch) {

            if ($idSearch->id == $idDelete) {

                unset($newData[$participant]);

                $status = true;
            }

        }
    }
}

foreach ($newData as $participant) {
    array_push($finalData, $participant);
}

file_put_contents('js\Estudiantes.json', json_encode($finalData));