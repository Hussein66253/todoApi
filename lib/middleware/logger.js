'use strict';
/**
 * to print the time and the date that the rout had been used
 * @param {object} req 
 * @param {object} res 
 * @param {CallabackFunction} next 
 */
module.exports = (req, res, next) =>{
//   console.log(`request info: ${req.method}, ${req.path}`);

  // requesting time and consoling the info.
  let reqDate = new Date().toDateString();
  let reqTime = new Date().getHours();
  let reqTime1 = new Date().getMinutes();
  let reqTime2 = new Date().getSeconds();
  console.log(`request time: ${req.method}, ${req.path}, ${reqDate}, ${reqTime}:${reqTime1}:${reqTime2}`);
  
  next();
};