/**
 * Created by hmh on 2016/12/15.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
    name:String
});

module.exports = mongoose.model('Bear',BearSchema);
