'use strict';
/**
 * to print the date that the rout had been used
 * @param {object} req 
 * @param {object} res 
 * @param {CallabackFunction} next 
 */
function timestamp(req, res, next){
  let currentTime = new Date().toDateString();
  req.timestamp = currentTime;
  next();

}

module.exports = timestamp;