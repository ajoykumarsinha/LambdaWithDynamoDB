
/*
 * GET home page.
 */
// Load the SDK for JavaScript
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'eu-west-1'});

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};