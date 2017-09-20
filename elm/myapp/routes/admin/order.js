/**
 * Created by Administrator on 2017/8/31 0031.
 */

var express = require('express');
var session = require("express-session");
var router = express.Router();
var multiparty = require('multiparty');
/* GET users listing. */
var DB = require("../../model/db.js")

var async = require('async')
var MongoClient = require("mongodb").MongoClient;
var DbUrl =  "mongodb://60.205.226.107:27017/elm";
// var ObjectID=Mongo.ObjectID;

router.use(session({
    secret: 'keyboard cat',  // sign the session ID cookie. 加密方式
    resave: false,  //无论有没有修改session 都保存
    saveUninitialized: true,  //当未初始化的时候也保存session
    //cookie: { secure: true }  //和刚才讲的cookie一样  secure: 应用在https
}))

router.get('/', function(req, res, next) {

    var page=req.query.page;

    page=page?page:1;

    var pageSize=10;

    async.parallel({
        count:function(callback){

            DB.count('order',{},function(err,count){

                callback(null,count);

            })


        },
        list:function(callback){
            DB.find('order',{},{
                page:page,
                pageSize:pageSize

            },function(err,data){

                callback(null,data);

            })


        }


    },function(err,data){   /*并行*/
        //console.log(data);

        res.render('admin/order/index',{
            list:data.list,

            page:page,   /*当前页数*/
            totalPages:Math.ceil(data.count/pageSize),
            adminname:session.userinfo
        })

    })


});

module.exports = router;
