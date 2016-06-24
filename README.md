Hong Kong Beach Water Quality API
=====================================

## What is this for?

TThis module gets the current pollution level at various beaches around Hong Kong.


## Install

`npm install --save hongkong-beach-waterquality`


## Usage

```javascript
var BeachWaterQuality = require("hongkong-beach-waterquality");

var bwq = BeachWaterQuality();

bwq.getBeachForcastLevels().then(function(forecast) {
  console.log(forecast);
});
```


## Supported Methods

* [`getAllBeachDetails()`](examples/getAllBeachDetails.js)
* [`getBeachDetails(beach_code)`](examples/getBeachDetails.js) - Takes an array or string
* [`getBeachForcastLevels()`](examples/getBeachForcastLevels.js)
* [`getBeachForcastLevel(beach_code)`](examples/getBeachForcastLevel.js)
* [`getBeachImage(beach_code)`](examples/getBeachImage.js)
* [`getBeachImageCodePair(beach_code)`](examples/getBeachImageCodePair.js)
* [`getBeachImageWithName(beach_code)`](examples/getBeachImageWithName.js)


## Example data

All methods return JSON, please see the examples linked above for more info on how to call each method. Here is an example of what you get with the [`getBeachForcastLevels()`](examples/getBeachForcastLevels.js) method.

```json
[ { "AlertType": "-1",
    "BeachCode": "TWM",
    "BeachForecastDate": "2016-06-24T10:00:00",
    "BeachForecastLevel": "1",
    "DataDate": "2013-08-04T00:00:00",
    "ImageDate": "2011-02-18T00:00:00" },
  { "AlertType": "-1",
    "BeachCode": "CW2",
    "BeachForecastDate": "2016-06-24T10:00:00",
    "BeachForecastLevel": "1",
    "DataDate": "2013-08-04T00:00:00",
    "ImageDate": "2011-02-10T00:00:00" } ]
```

## Other Handy Modules

* [hongkong-weather](https://www.github.com/hongkongkiwi/node-hongkong-weather) - For Hong Kong Weather Information.
* [hongkong-pollution](https://www.github.com/hongkongkiwi/node-hongkong-pollution) - For Hong Kong Pollution Information.
* [hongkong-trams](https://www.github.com/hongkongkiwi/node-hongkong-trams) - For Hong Kong Tram Information.


## Contributing

Feel free to submit any pull requests or add functionality, I"m usually pretty responsive.

If you like the module, please consider donating some bitcoin or litecoin.

__Bitcoin__

![LNzdZksXcCF6qXbuiQpHPQ7LUeHuWa8dDW](http://i.imgur.com/9rsCfv5.png?1)

__LiteCoin__

![LNzdZksXcCF6qXbuiQpHPQ7LUeHuWa8dDW](http://i.imgur.com/yF1RoHp.png?1)
