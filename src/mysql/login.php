<?php
    // include 'connect.php';
    require('connect.php');
    
    // 获取前端数据
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';

    // 密码md5加密
    // $password = md5($password);

    $sql = "select * from reg where username='$username' and password='$password'";

    // 获取查询结果
    $result = $conn->query($sql);

    if($result->num_rows > 0){
        echo 'success';
    }else{
        echo 'fail';
    }
    
    // 释放查询内存(销毁)
    $result->free();

    //关闭连接
    $conn->close();
?>