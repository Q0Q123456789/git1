/**
 * Created by Administrator on 2017/8/31 0031.
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var DB=require('../model/db.js');

var ObjectId = require('mongodb').ObjectID;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('api首页');
});

router.get('/merchant', function(req, res, next) {
    var page = req.query.page;

    page =page?page:1;

    var pageSize =7;

   DB.find("merchant",{},{
       page:page,
       pageSize:pageSize
   },function (err,data) {
       res.json({"result":data});
   })
});


router.get('/search', function(req, res, next) {
    var name= req.query.val
    // console.log(req.query.val);
    // var rel=db.collection('user').find({"name": { $regex:new RegExp(name)} });
	if(name !=""){
		
		DB.find("merchant",{
			title: { $regex:new RegExp(name)}
		},function (err,data) {
			console.log(data);
			res.json({"result":data});
		})
	}
});


router.post('/marfind',function(req, res, next) {

    var  aidarrs=req.body.aidarrs
    aidarrs=aidarrs.split(",")

    for(var i=0;i<aidarrs.length;i++){
       
        aidarrs[i]=new ObjectId(aidarrs[i])
    }
    DB.find("merchant",{_id:{"$in":aidarrs}},function (err,data) {
        if(err){
            console.log(err)
        }else{
            // console.log(data)
            if(data.length>0){
                res.json({
                    success:1,
                    "result":data
                });
            }else{
                res.json({
                    "result":data
                });
            }
        }

    })

})

router.get('/article/:aid',function(req, res){
// console.log("33")
        DB.find("article",{"_id": new ObjectId(req.params.aid)},function (err,data) {
            res.json({"result":data});
        })
})
router.get('/article',function(req, res){
    // console.log("77")
    DB.find("article",{},function (err,data) {
            res.json({"result":data});
        })
})



router.get('/business', function(req, res, next) {
    DB.find("merchant",{},function (err,data) {
        res.json({"result":data});
    })
});


router.post('/orderList',function(req, res, next) {
    DB.find("order",req.body,function (err,data) {
        if(err){
            console.log(err)
        }else{
            console.log(data)
            if(data.length>0){
                res.json({
                    success:1,
                    "result":data
                });
            }else{
                res.json({
                    "result":data
                });
            }
        }

    })
})

router.get('/goods', function(req, res, next) {
    var page = req.query.page;
    page = page?page:1;
    var pageSize = 7
   DB.find("merchant",{},{page:page,pageSize:pageSize},function (err,data) {
       res.json({"result":data});
   })
});

router.get('/good', function(req, res, next) {
    // console.log(req.query)
    DB.find("merchant",{_id:new ObjectId(req.query._id)},function (err,data) {
        res.json({"result":data});
    })
});

router.get('/user',function(req, res, next) {
    DB.find("user",{},function (err,data) {
        res.json({"result":data});
    })
})
router.post('/user',function(req, res, next) {
    DB.find("user",{},function (err,data) {
        res.json({"result":data});
    })
})

router.post('/register',function(req, res, next) {
    // console.log(req.body);
    DB.find("user",req.body,function (err,data) {

        console.log(data);
        if(data.length>1){
            res.json({"result":"该用户已注册"});
        }else{
            DB.insertOne("user",req.body,function (err,data) {
                res.json({"result":"注册成功"});
            })
        }

    })
})

// router.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1');
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });
module.exports = router;
