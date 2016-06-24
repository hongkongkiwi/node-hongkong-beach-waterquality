var BeachWaterQuality = require('../index');
var bwq = new BeachWaterQuality();

bwq.getBeachImageCodePair('CSU').then(function(imageBuffer) {
  console.log(imageBuffer);
});
