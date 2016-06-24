var BeachWaterQuality = require('../index');
var bwq = new BeachWaterQuality();

bwq.getBeachImageWithName('CSU').then(function(imageBuffer) {
  console.log(imageBuffer);
});
