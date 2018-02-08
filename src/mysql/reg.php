<?php
    // 引入其他文件
    require('connect.php');//include 'connect.php'

    $username = isset($_GET['username']) ? $_GET['username'] : null;
    $password = isset($_GET['password']) ? $_GET['password'] : null;
    $uscon=isset($_GET['uscon']) ? $_GET['uscon'] : null;
    // 判断用户名是否存在
    // $data = $conn->query("select * from reg where username='$username'");

    if($uscon=='yy'){
         $data = $conn->query("select * from reg where username='$username'");
        if($data->num_rows == 0){
            echo "none";
        }else{
            echo "ext";
        }
    }

    if($uscon=='nn'){
        $data = $conn->query("select * from reg where username='$username'");
        if($data->num_rows == 0){
        // 密码md5加密
        // $password = md5($password);
        
        // 写入数据sql语句
        $sql = "insert into reg(username,password) values('$username','$password')";
        $res = $conn->query($sql);
        if($res){
            echo "success";
        }else{
            echo "fail";
        }
    }
}
           
?> 