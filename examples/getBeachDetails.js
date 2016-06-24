var BeachWaterQuality = require('../index');
var bwq = new BeachWaterQuality();

bwq.getBeachDetails('CSU').then(function(details) {
  console.log(details);
});

bwq.getBeachDetails(['CSU','GEM']).then(function(details) {
  console.log(details);
});

bwq.getBeachDetails('CSU,GEM').then(function(details) {
  console.log(details);
});
