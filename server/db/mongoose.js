const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds155278.mlab.com:55278/jchiu-todoapp');

module.exports = {mongoose};