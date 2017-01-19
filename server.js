
//==================================

// call the packages we need
var express = require('express');
var path = require('path');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var index = require('./routes/index');
var users = require('./routes/users');
var Seller = require('./models/seller');
var User = require('./models/user');
var Product = require('./models/product');
var Order = require('./models/order');
var session = require('express-session');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//connect the db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/testDB');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var port = process.env.PORT || 8080;

//routes for the api
var router = express.Router();

// middleware to use for all requests
router.use(function (req, res, next) {
    console.log('something is happening.---middleware');
    next();
});

router.get('/',function(req, res){
    res.json({message:"hmh, welcome to our api"})
});

//user register api
//seller register api
router.route("/user/register")
    .post(function(req, res){
      console.log("In the user register");
      var user = new User();
      console.log("user has init  ");
      var response = {};

      user.phonenum = req.body.phonenum;
      user.password = req.body.password;
      console.log(user);
      user.save(function(err){
        if (err){
          response = {"error": true, "message": err};
        }else{
          response = {"error": false, "message": "user registed"};
        }
        res.json(response);
      });
    });
//user login api
router.route("/user/login")
    .post(function(req, res){
      console.log("In the user login");
      var user = new User();
      console.log("user has init  ");
      var response = {};
      //console.log(seller);
      var phonenum = req.body.phonenum;
      var password = req.body.password;
      console.log(phonenum);
      console.log(password);
      User.findOne({phonenum: phonenum}, function(err, doc){
        console.log("In the findOne");
        if(err){
          console.log("In the error page");
          response = {"error": true, "message": "error login"};
        }else if(!doc){
          // res.send({status:false,msg:'用户名不存在'});
          response = {"error": true, "message": "phonenum doesn't exist"};
        }else {
          console.log("in the login");
          console.log(password);
          console.log(doc);
          if (password == doc.password){
           // req.session.user=doc;
            //res.send({status: true, msg: doc.phonenum});
            response = {"error": false, "message": "you are now login"};
          }else{
            //res.send({status: true, msg: "Your password is not correct"});
            response = {"error": true, "message": "your password not correct"};

          }
        }
        res.json(response);
      });
    });
//seller login api
router.route("/seller/login")
    .post(function(req, res){
      console.log("In the seller login");
      var seller = new Seller();
      console.log("seller has init  ");
      var response = {};
      //console.log(seller);
      var phonenum = req.body.phonenum;
      var password = req.body.password;
      console.log(typeof(phonenum));
      console.log(typeof(password));
      Seller.findOne({phonenum: phonenum}, function(err, doc){
        console.log("In the findOne");
        if(err){
          console.log("In the error page");
          response = {"error": true, "message": "error login"};
        }else if(!doc){
            console.log("phonenum doesn't exist");
          response = {"error": true, "message": "phonenum doesn't exist"};
        }else {
          console.log("in the login");
          console.log(password);
          console.log(doc);
            if (password == doc.password){
                // req.session.user=doc;
                //res.send({status: true, msg: doc.phonenum});
                response = {"error": false, "message": "you are now login"};
            }else{
                //res.send({status: true, msg: "Your password is not correct"});
                response = {"error": true, "message": "your password not correct"};

            }
        }
        res.json(response);
      });
    });
//seller register api
router.route("/seller/register")
    .post(function(req, res){
      console.log("In the seller register");
      var seller = new Seller();
      console.log("seller has init  ");
      var response = {};
      seller.shopname = req.body.shopname;
      //console.log(seller.shopname);
      seller.phonenum = req.body.phonenum;
      seller.password = req.body.password;
      seller.city = req.body.city;
      seller.postcode = req.body.postcode;
      seller.shippingaddress = req.body.shippingaddress;
      console.log(seller);
      seller.save(function(err){
        if (err){
          response = {"error": true, "message": "error seller register"};
            console.log("error seller register");
        }else{
          response = {"error": false, "message": "seller registed"};
          console.log("seller registed");
        }
        res.json(response);
      });
    });
//get all the products
router.route('/products')
    .post(function (req, res) {
    var product = new Product();

        product.shopName = req.body.shopName;
        product.name = req.body.name;
        product.price = req.body.price;
        product.saveUrl= req.body.saveUrl;

        product.quantity = req.body.quantity;
        console.log("create product:" + req.body.name);
        product.save(function (err) {
        if (err)
          res.send(err);
        res.json({message:'product created'});
    })
})

    .get(function (req, res) {
        console.log("get 请求");
        Product.find(function (err,products) {
            if (err)
                res.send(err)
            res.json({products:products})
        })
    });


//get, update, delete a single product
router.route('/products/:name')
    .get(function (req, res) {
      Product.find({name:req.params.name},function (err, product) {
          console.log("get 请求" + req.params.name);
          if (err)
            res.send(err)
          //product.name = req.body.name;
          res.json({product:product})

      });
  })
  .put(function (req, res) {
      Bear.findById(req.params.name,function (err, product) {
          if (err)
              res.send(err)
          product.name = req.body.name;
          product.save(function (err) {
              if (err)
                  res.send(err);
              res.json({message:"product updated!"});
          });

      });
  })
    .delete(function (req, res) {
        Bear.remove({name:req.params.name},function (err, bear) {
            if (err)
              res.send(err)
            res.json({message:'successfully deleted'})
        });
    });

//for order(create)
router.route('/order')
    .post(function (req, res) {
        var order = new Order();
        console.log("create product:" + req.body.username+req.body.products);
        order.products = req.body.products;
        order.username = req.body.username;
        order.save(function (err) {
            if (err)
                res.send(err);
            res.json({message:'Order created'});
        })
    })
    .get(function (req, res) {
        Product.find({username:req.params.username},function (err, order) {
            console.log("get 请求" + req.params.username);
            if (err)
                res.send(err)
            //product.name = req.body.name;
            res.json(order)

        });
    });


router.route('/seller')
    .post(function (req, res) {
        var seller = new Seller();

        seller.shopName = req.body.shopName;
        seller.phone = req.body.phone;
        seller.password = req.body.password;
        seller.city = req.body.city;
        seller.postcode = req.body.postcode;
        seller.address = req.body.address;
        console.log("create seller:" + req.body.shopName);
        seller.save(function (err) {
            if (err)
                res.send(err);
            res.json({message:'seller created'});
        })
    });


//for upload a product
router.route('/seller/products')
    .post(multipartMiddleware,function (req, res) {
        console.log("进入uploadProduct");
        console.log(req.body);
        //req.render('/sellerGallery');
        var product = new Product();
         product.shop = req.body.shop;
         product.name = req.body.name;
         product.price = req.body.price;
         product.quantity = 0;
         product.detail = req.body.detail;
         product.saveUrl = req.body.saveUrl;

         product.save(function (err) {

             if (err){
                 res.send(err);
                 return
             }

             res.json({message:'Product created'});
         console.log("create product:" + product.shopName);
         })
    });
router.route('/seller/products/:shop')
    .get(function (req, res) {
        Product.find({shop:req.params.shop},function (err, products) {
            console.log("get 请求" + req.params.shop);
            if (err)
                res.send(err);
            //product.name = req.body.name;
            res.json({products:products})

        });
    })

app.use('/api',router);

app.get('/', function(req, res) {
    res.render('user');
});
app.listen(port);
console.log('magic happens on the port ' + port);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  res.json({"error": true, "message": "In the error page"});
});

module.exports = app;
