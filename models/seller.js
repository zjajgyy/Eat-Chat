/**
 * Created by hmh on 2016/12/21.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SellerSchema = new Schema({
    shopname:{type:String,required:true},
    phonenum:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    city:{type:String,required:true},
    postcode:{type:String,required:true},
    shippingaddress:{type:String,required:true}
});

module.exports = mongoose.model('Seller',SellerSchema);