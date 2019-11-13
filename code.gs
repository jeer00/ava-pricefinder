/**
 * Finds the last price of a stock-id (from avanza)
 *
 * @param {number} input The id from avanza.
 * @return The last price of stock.
 * @customfunction
 */


function lastPrice (input) {
var data = {"orderbookId":input,"chartType":"AREA","widthOfPlotContainer":558,"chartResolution":"MINUTE","navigator":true,"percentage":false,"volume":false,"owners":false,"timePeriod":"today","ta":[],"compareIds":[19002]};
var options = {
  'method' : 'POST',
 'muteHttpExceptions': true,
  'headers' : {
  'Content-Type' : 'application/json',
  'Cache-Control' : 'no-cahce'
  },
  'payload' : JSON.stringify(data)
};
var answer = UrlFetchApp.fetch('https://www.avanza.se/ab/component/highstockchart/getchart/orderbook', options);
 var resp = answer.getContentText();
  var json = JSON.parse(resp);
  var lastPrice = json['lastPrice'];
  return lastPrice;
};


/**
 * Finds the last known nav from a fund by id (from avanza)
 *
 * @param {number} input The id from avanza.
 * @return The last known nav.
 * @customfunction
 */
function nav (input) {
var answer = UrlFetchApp.fetch('https://www.avanza.se/_cqbe/fund/fund-trading-terms/' + input);
 var resp = answer.getContentText();
 var json = JSON.parse(resp);
 var nav = json['nav'];
  return nav;
}







