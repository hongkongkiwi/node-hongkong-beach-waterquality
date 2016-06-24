var BeachWaterQuality = require('../index');
var bwq = new BeachWaterQuality();

bwq.getBeachImage('CSU').then(function(imageBuffer) {
  console.log(imageBuffer);
});
