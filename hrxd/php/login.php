<?php
/**
 * Created by PhpStorm.
 * User: Lenovo
 * Date: 2017/8/2
 * Time: 14:44
 */

//服务器端支持跨域
header('Access-Control-Allow-Origin:*');
header("Content-Type:text/html;charset=utf8");

//接收浏览器端提交的数据
$username = $_POST["username"];
$password = $_POST["password"];

//登录
$conn = new mysqli("127.0.0.1", "root", "", "mydb1") or die("连接失败");
$sql = "select * from user where username='$username' and password='$password'";
$result = $conn->query($sql);
if ($result && $result->num_rows>0) {
    //说明登录成功
    $res = new Res();
    $res->status = 1;
    $res->msg = "登录成功！";
    echo  json_encode($res);
}
else {
    //说明登录失败
    $res = new Res();
    $res->status = 0;
    $res->msg = "登录失败！";
    echo  json_encode($res);
}