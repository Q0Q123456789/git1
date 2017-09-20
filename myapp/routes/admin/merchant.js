/**
 * Created by Administrator on 2017/8/31 0031.
 */
var express = require('express');
var router = express.Router();
var session = require("express-session");
var multiparty = require('multiparty');
var DB=require('../../model/db.js');
var MongoClient = require('mongodb').MongoClient;   /*封装好的方法 用来连接数据库操作数据库的*/

var async = require('async')
var DbUrl='mongodb://60.205.226.107:27017/elm';

var ObjectID = require('mongodb').ObjectID;  /*匹配系统自己生成的_id*/

router.use(session({
    secret: 'keyboard cat',  // sign the session ID cookie. 加密方式
    resave: false,  //无论有没有修改session 都保存
    saveUninitialized: true,  //当未初始化的时候也保存session
}))
/* GET users listing. */
router.get('/', function(req, res, next) {
    //连接数据库查询数据

    var page=req.query.page;

    page=page?page:1;

    var pageSize=10;

    async.parallel({
        count:function(callback){

            DB.count('merchant',{},function(err,count){

                callback(null,count);

            })

        },
        list:function(callback){
            DB.find('merchant',{},{
                page:page,
                pageSize:pageSize

            },function(err,data){

                callback(null,data);

            })


        }


    },function(err,data){   /*并行*/
        //console.log(data);

        res.render('admin/merchant/index',{
            list:data.list,

            page:page,   /*当前页数*/
            totalPages:Math.ceil(data.count/pageSize),
            adminname:session.userinfo
        })

    })


});

router.get('/edit',function(req,res){

    //res.send('修改');

    // console.log(req.query.id);


    MongoClient.connect(DbUrl,function(err,db){

        if(err){

            console.log('数据库连接失败');
            return;
        }
        var result=db.collection('merchant').find({"_id":new ObjectID(req.query.id)});


        result.toArray(function(error,data){

            res.render('admin/merchant/edit', {
                list: data[0],
                adminname: session.userinfo
            });
        })
    })
})

router.post('/doEdit',function(req,res) {



    //接收form表单提交的数据
    var form = new multiparty.Form();

    form.uploadDir = 'upload';
    form.parse(req, function (err, fields, files) {

        //console.log(fields);

        //console.log(files);
        var _id = fields.id[0];
        var title=fields.title[0];
        var description=fields.description[0];
        var old_price=fields.old_price[0];
        var price=fields.price[0];
        var status=fields.status[0];
        var product_content=fields.product_content[0];

        var img = files.img[0].path;


        var originalFilename = files.img[0].originalFilename;

        if (originalFilename) {  /*更新了图片*/

            var setData = {
                /*没有需改图片的时候更新的数据*/
                title,
                img,
                description,
                old_price,
                price,
                status,
                product_content

            }

        } else {
            var setData = {
                /*没有需改图片的时候更新的数据*/
                title,
                description,
                old_price,
                price,
                status,
                product_content
            }

        }
        MongoClient.connect(DbUrl, function (err, db) {

            if (err) {
                console.log('数据库连接失败');
                return;
            }
            db.collection('merchant').updateOne({"_id": new ObjectID(_id)}, {
                $set: setData
            }, function (error) {

                if (error) {

                    console.log('修改失败');
                    return;
                }

                res.redirect('./');

            })
        })


    });
})

// router.get('/delete',function(req,res){
//
//     var id = req.query.id;
//     //console.log(id);
//
//     MongoClient.connect(DbUrl, function (err, db) {
//
//         if (err) {
//             console.log('数据库连接失败');
//             return;
//         }
//         db.collection('merchant').deleteOne({"_id": new ObjectID(id)}, {
//             id:false
//         })
//         res.redirect('./');
//
//     })
// })

router.get('/delete', function(req, res) {


    var id = req.query.id; //获取
    // console.log(req.query.id);

    DB.deleteMany("merchant", { "_id": new ObjectID(id) }, function(error, data) {

        DB.find("merchant", { "_id": new ObjectID(id) }, function(err, data) {

            res.redirect("./") /*跳转到首页*/

        })

    })
})


router.get('/edit', function(req, res, next) {
    res.render('admin/merchant/edit',{
        adminname:session.userinfo
    });
});

router.get('/add', function(req, res, next) {
    res.render('admin/merchant/add',{
        adminname:session.userinfo
    });

});

router.post('/doAdd',function(req,res){
    var form = new multiparty.Form();
    form.uploadDir='upload';  /*上传的目录*/
    form.parse(req, function(err, fields, files) {
        //console.log(fields);
        // console.log(files.img[0].path);
        var title=fields.title[0];
        var description=fields.description[0];
        var old_price=fields.old_price[0];
        var price=fields.price[0];
        var status=fields.status[0];
        var product_content=fields.product_content[0];

        var img=files.img[0].path;
        MongoClient.connect(DbUrl,function(err,db){
            if(err){
                console.log('数据库连接失败');
                return;
            }
            db.collection('merchant').insertOne({
                title,
                img,
                description,
                old_price,
                price,
                status,
                product_content
            },function(error,data){
                if(error){
                    console.log(error);
                    return;
                }
                res.redirect('./');
            })
        })
    });

})

module.exports = router;
