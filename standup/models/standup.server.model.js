var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var standupSchema = new Schema({
  memberName: String,
  project: String,
  workYesterday: String,
  workToday: String,
  impediment: String,
  createdOn: { type: Date, default: Date.now }
});

//expose (export) a model...
module.exports = mongoose.model('Standup', standupSchema);





//disable (if we don't want id for some reason but usually mongoose creates one for us)
// var noIdSchema = new Schema({ name: String}, {_id: false});

//example of using schema.add...you can also add multiple schema the same way..
// var exampleSchema = new Schema;
// exampleSchema.add({memberName: String});
