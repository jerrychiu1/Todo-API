const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://jerrychiu:hell0world@ds155278.mlab.com:55278/jchiu-todoapp');

module.exports = {mongoose};