const mongoose = require('mongoose');

const FavouriteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
},
  city: { 
    type: String, 
    required: true }
});

const FavouriteModel = mongoose.model('favourite', FavouriteSchema);
module.exports = FavouriteModel;
