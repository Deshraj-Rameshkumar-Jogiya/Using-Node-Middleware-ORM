'use strict';

//importing requirements
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//declaring schema
var TaskSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: 'pending'
  }
});

//finally exporting the schema for main file
module.exports = mongoose.model('Tasks', TaskSchema);