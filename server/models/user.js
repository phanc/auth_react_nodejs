import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.methods.showEmail = function() {
    console.log("Hello, my email is " + this.email);
}

const UserModel = mongoose.model('User', userSchema);

export default UserModel;