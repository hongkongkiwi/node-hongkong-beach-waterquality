var Promise = require('bluebird');
var _ = require('underscore');
var soap = require('soap');

var BeachWQ = function(options) {
  this.options = _.extendOwn({
    userAgent: 'HongKongBeach/1.02 CFNetwork/758.4.3 Darwin/15.5.0',
    //wsdlUrl: 'http://www.waterman.hku.hk:8686/BeachServices.svc?wsdl'
    wsdlUrl: __dirname + '/wsdl/BeachServices.svc?wsdl'
  }, options);
};

BeachWQ.prototype._initClient = function(url,context,callback) {
  var options = {};
  if (context.client) {
    callback(null, context.client);
  } else {
    this.client = soap.createClient(url, options, function(err, client) {
      callback(err, client);
    });
  }
};

BeachWQ.prototype.getBeachForcastLevels = Promise.promisify(function(callback) {
  if (typeof callback !== 'function') callback = function() {};
  this._initClient(this.options.wsdlUrl, this, function(err, client) {
    if (err)
      return callback(err);

    client.GetForecastAndUpdateTimes(function(err, result) {
      callback(null, result.GetForecastAndUpdateTimesResult.Forecast);
    });
  });
});

BeachWQ.prototype.getBeachForcastLevel = Promise.promisify(function(beach_code, callback) {
  if (typeof callback !== 'function') callback = function() {};
  this._initClient(this.options.wsdlUrl, this, function(err, client) {
    if (err)
      return callback(err);

    client.GetForecastAndUpdateTimes(function(err, result) {
      var beachInfo = _.find(result.GetForecastAndUpdateTimesResult.Forecast,function(item) {
        return (item.BeachCode === beach_code);
      });
      callback(null, beachInfo);
    });
  });
});

BeachWQ.prototype.getBeachAlerts = Promise.promisify(function(callback) {
  if (typeof callback !== 'function') callback = function() {};
  this._initClient(this.options.wsdlUrl, this,  function(err, client) {
    if (err)
      return callback(err);

    client.GetAlerts(function(err, result) {
      callback(null, result.GetAlertsResult);
    });
  });
});

BeachWQ.prototype.getAllBeachDetails = Promise.promisify(function(callback) {
  if (typeof callback !== 'function') callback = function() {};
  this._initClient(this.options.wsdlUrl, this, function(err, client) {
    if (err)
      return callback(err);

    client.GetAllBeaches(function(err, result) {
      callback(null, result.GetAllBeachesResult.Beach);
    });
  });
});

BeachWQ.prototype.getBeachDetails = Promise.promisify(function(beach_code, callback) {
  if (typeof callback !== 'function') callback = function() {};
  this._initClient(this.options.wsdlUrl, this, function(err, client) {
    if (err)
      return callback(err);

    if (typeof beach_code === 'string' && beach_code.split(',').length > 1) {
      beach_code = beach_code.split(',');
    }

    if (typeof beach_code === 'object' && beach_code instanceof Array) {
      client.GetBeachesByCodes({codes: beach_code.join(',')}, function(err, result) {
        if (!(result.GetBeachesByCodesResult.Beach instanceof Array)) {
          result.GetBeachesByCodesResult.Beach = [result.GetBeachesByCodesResult.Beach];
        }
        callback(null, result.GetBeachesByCodesResult.Beach);
      });
    } else if (typeof beach_code === 'string') {
      client.GetBeachByCode({code: beach_code}, function(err, result) {
        callback(null, result.GetBeachByCodeResult);
      });
    }
  });
});

BeachWQ.prototype.getBeachImage = Promise.promisify(function(beach_code, callback) {
  if (typeof callback !== 'function') callback = function() {};
  this._initClient(this.options.wsdlUrl, this, function(err, client) {
    if (err)
      return callback(err);

    client.GetImageByCode({code: beach_code}, function(err, result) {
      var imageData = new Buffer(result.GetImageByCodeResult, 'base64');
      callback(null, imageData);
    });
  });
});

BeachWQ.prototype.getBeachImageWithName = Promise.promisify(function(beach_code, callback) {
  if (typeof callback !== 'function') callback = function() {};
  this._initClient(this.options.wsdlUrl, this, function(err, client) {
    if (err)
      return callback(err);

    client.GetImageWithNameByCode({code: beach_code}, function(err, result) {
      var imageData = new Buffer(result.GetImageWithNameByCodeResult, 'base64');
      callback(null, imageData);
    });
  });
});

BeachWQ.prototype.getBeachImageCodePair = Promise.promisify(function(beach_code, callback) {
  if (typeof callback !== 'function') callback = function() {};
  this._initClient(this.options.wsdlUrl, this, function(err, client) {
    if (err)
      return callback(err);

    client.GetImageCodePairByCode({code: beach_code}, function(err, result) {
      var imageData = new Buffer(result.GetImageCodePairByCodeResult.BeachImageStream, 'base64');
      callback(null, {beach_code: result.GetImageCodePairByCodeResult.BeachCode, image_data: imageData});
    });
  });
});

//console.log(client.describe().BeachServices.BeachServices);

module.exports = BeachWQ;
