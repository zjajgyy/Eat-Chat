/**
 * Created by hmh on 2016/12/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    shop:{type:String,required:true},//对应seller的phonenum
    name:{type:String,unique:true},
    price:{type:String,required:true},
    detail:String,
    quantity:Number,
    saveUrl:{type:String,required:true}
});

module.exports = mongoose.model('Product',ProductSchema);