<?php
    require('connect.php');//include 'connect.php'

    $sql = "select * from goods";

    $res = $conn->query($sql);

    $row = $res->fetch_all(MYSQLI_ASSOC);


    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>