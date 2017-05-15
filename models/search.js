var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
    content: {type: String, required: true},
    contentType: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.index({content: "text"});

schema.post('remove', function (search) {
    User.findById(search.user, function (err, user) {
        user.searches.pull(search);
        user.save();
    });
});

module.exports = mongoose.model('Search', schema);