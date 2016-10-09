require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
 
    var $ = require("jquery")(window);
});

var token =  "ca15df8f74b55e0abf96b1d66b53f3ed"
var url = "http://challenge.code2040.org/api/register"


var jqxhr = $.ajax(url)
	.done(function() {
    alert( "success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "complete" );
  });

  console.log(jqxhr);