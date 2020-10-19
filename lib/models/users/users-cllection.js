'use strict';
const schema = require ('./uses-shema');
const Model = require ('../mongo');
class users extends Model{
  constructor(){
    super(schema);
  }
}

module.exports = new users;