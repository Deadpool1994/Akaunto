/**
 * Created by ramijayeshbhai on 22-03-2016.
 */
var mongoose = require( 'mongoose');
require( 'mongoose-type-email');
var Schema = mongoose.Schema;

var userSchema;
userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: String,
    lastname: String,
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true
    }
});