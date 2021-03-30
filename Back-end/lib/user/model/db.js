const { connect, Schema, model } = require('mongoose');

connect('mongodb://127.0.0.1:27017/', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    profile_pic: String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        // unique: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        // required: [true, "Email required"]
    },
    contact_no: Number,
    date_of_joining: {
        type: Date,
        default: Date.now
    },
    age: Number,
    name: {
        type: String,
        // required: [true, "Name is required"]
    },
    handles: {
        facebook: String,
        linkedin: String,
        instagram: String,
        gitHub: String,
        website: String,
        steamProfile: String
    }
});

UserSchema.statics.getDetails = async function (username) {
    try {
        return await User.findOne({ username: username }, { '_id': 0, '__v': 0 }).lean();
    }
    catch {
        return null;
    }
}

const User = model('User', UserSchema);

module.exports.getDetails = async function (username) {
    return User.getDetails(username);
}

module.exports.adduser = async function (user_data) {
    try {
        const user = await new User({
            username: user_data["username"],
            name: user_data["name"],
            handles: { steamProfile: user_data["profile"] }
        });

        user.save();
    }
    catch {
        console.log("Error Occured");
    }
}