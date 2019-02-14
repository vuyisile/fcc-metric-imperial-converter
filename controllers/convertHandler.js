/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = parseInt(input.measurement);
    console.log('getNum',result)
    return result;
  };
  
  this.getUnit = function(input) {
    var result = input.unit;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result = initUnit;
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch(initUnit){
           
    case "gal":
        result = {num: initNum*galToL,unit:"l"};
        break;
      case "mi":
        result ={num: initNum*miToKm,unit:"km"};
        break;  
      case "lbs":
        result ={num: initNum/lbsToKg,unit:"kg"};
        break;
        
        case "l":
        result ={num: initNum/galToL,unit:"gal"};
        break;
      case "km":
        result ={num: initNum/miToKm,unit:"mi"};
        break;  
      case "kg":
        result ={num: initNum*lbsToKg,unit:"lbs"};
        break;
           }
    
  
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
