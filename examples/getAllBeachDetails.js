var BeachWaterQuality = require('../index');
var bwq = new BeachWaterQuality();

bwq.getAllBeachDetails().then(function(details) {
  console.log(details);
});
