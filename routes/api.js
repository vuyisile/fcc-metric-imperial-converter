/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      
      var input = {measurement: RegExp(req.query.measurement).test('%2F') === true?req.query.measurement.replace('%2F','/'):req.query.measurement, unit: req.query.unit};
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var initUnit =input.unit;
      var returnNum = convertHandler.convert(initNum, initUnit);
    console.log('convert:',returnNum)
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      // res.json();
    });
    
};
