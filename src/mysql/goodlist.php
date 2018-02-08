<?php
    require('connect.php');

    $pageno=isset($_GET['pageno'])?$_GET['pageno']:1;
    $qty=isset($_GET['qty'])?$_GET['qty']:10;

    $sql = "select * from goodlist";

    $res = $conn->query($sql);

    $row = $res->fetch_all(MYSQLI_ASSOC);

    // var_dump($row);
    // 根据分页截取数据
    $arr=array(
    'data'=>array_slice($row,($pageno-1)*$qty,$qty),
    'total'=>count($row),
    'pageno'=>$pageno,
    'qty'=>$qty
    );
    // var_dump($arr);
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>