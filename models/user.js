/**
 * Created by hmh on 2016/12/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    phonenum:{type:String,required:true},
    password:{type:String,required:true}
});

module.exports = mongoose.model('User',UserSchema);