<?php
/**
 * Created by PhpStorm.
 * User: Lenovo
 * Date: 2017/8/2
 * Time: 14:19
 */

//服务器端支持跨域
header('Access-Control-Allow-Origin:*');
header("Content-Type:text/html;charset=utf8");


//接受浏览器端提交的数据
$username = $_POST["username"];
$password = $_POST["password"];


//类
class Res{
    public $status;
    public $msg;
}


//注册
$conn = new mysqli("127.0.0.1","root","","mydb1") or die ("连接失败");
$sql = "select * from user where username='username'";
$result = $conn ->query($sql);
if($result && $result->num_rows>0){
//检测是否有重复的用户名
//    echo"用户名已存在"
    $res =new Res();
    $res->status = 2;
    $res->msg = "用户名已存在";
    echo json_encode($res);

}
$sql2 = "insert into user (username,password) values ('$username','$password')";
$result2 = $conn ->query($sql);
if($result2){
    //echo "注册成功"；
    $res =new Res();
    $res->status = 1;
    $res->msg = "注册成功";
    echo json_encode($res);
}
else{
   // echo "注册失败"；
    $res =new Res();
    $res->status = 0;
    $res->msg = "注册失败";
    echo json_encode($res);
}