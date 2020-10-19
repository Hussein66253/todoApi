'use strict';
const schema = require ('./todo-schema');
const Model = require ('../mongo');
class todo extends Model{
  constructor(){
    super(schema);
  }
}

module.exports = new todo;