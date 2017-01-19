/**
 * Created by hmh on 2016/12/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    /*user:[{type:number,ref:"user"}],*/
    username:{type:String,required:true},
    products:[{}]
});

module.exports = mongoose.model('Order',OrderSchema);