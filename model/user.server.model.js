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
    },
    totalBalance: {
        type: Number,
        default: 0
    },
    groups: [{type: Schema.Types.ObjectId, ref: 'Group'}],
    transactions: [{type: Schema.Types.ObjectId, ref: 'Transaction'}]
});

var groupSchema = new Schema({
   groupname: {
       type: String,
       required: true
   },
    balance: {
        type: Number,
        default: 0
    },
    users: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

var transactionSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        default: 0
    },
    transaction_date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    user_to: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    User_from: {
        type: Schema.types.ObjectId,
        ref: 'User'
    }

});

var User = mongoose.model('User', userSchema);

var Group = mongoose.model('Group', groupSchema);

var Transaction = mongoose.model('Transaction', transactionSchema);