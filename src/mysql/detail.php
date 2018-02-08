<?php
    require('connect.php');//include 'connect.php'

    $id = isset($_GET['id']) ? $_GET['id'] : '';
    $shou = isset($_GET['shou']) ? $_GET['shou'] : '';
    if($shou=='yes'){
        $sql = "select * from goods where id=$id";
    }else{
        $sql = "select * from goodlist where id=$id";
    }
    
    $res = $conn->query($sql);

    $row = $res->fetch_assoc();

    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>