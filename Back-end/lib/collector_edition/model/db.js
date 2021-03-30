
const mongoose = require('mongoose');



const ceditionSchema = new mongoose.Schema({
    name: String,
    created_by: String,
    price: Number,
    no_of_content: Number,
    date_of_creation: {type: Date, default: Date.now },
    thumbnail: String,
    uid: String,
    game_name: String,
    genre: [{type: String}],
    images: [
        {type: String}
    ]
});


ceditionSchema.statics.findByCName = function(name,cb){
    this.find({name:name},cb);
};
ceditionSchema.statics.findByAuthorName = function(name,cb){
    this.find({created_by:name},cb);
};
ceditionSchema.statics.findByPrice = function(min_price,max_price,cb){
    this.find({price:{$lte: max_price , $gte: min_price }},cb);
};
ceditionSchema.statics.findByGame = function(game_name,cb){
    this.find({game_name:game_name},cb);
};

const CEdition = mongoose.model('Collectors Edition',ceditionSchema);


module.exports = CEdition;