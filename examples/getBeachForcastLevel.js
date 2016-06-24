var BeachWaterQuality = require('../index');
var bwq = new BeachWaterQuality();

bwq.getBeachForcastLevel('BW').then(function(forecast) {
  console.log(forecast);
});
