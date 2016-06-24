var BeachWaterQuality = require('../index');
var bwq = new BeachWaterQuality();

bwq.getBeachForcastLevels().then(function(forecast) {
  console.log(forecast);
});
