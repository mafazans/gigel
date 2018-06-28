import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import validator from 'validator';
import mongodbErrorHandler from 'mongoose-mongodb-errors';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
		validate : [validator.isEmail, 'Invalid Email'],
		required: 'Please enter an email address'
	},
	password: {
		type: String,
		required: 'Please enter your password'
	},
	name: {
		type: String,
		trim: true,
        required: 'Please enter your name'
    },
    about: String,
    phone: {
        type: String,
        required: 'Please enter your number',
    },
    address: String,
    photo: String,
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        defualt: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

userSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

userSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);



