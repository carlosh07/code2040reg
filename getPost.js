//Carlos A. Hernandez
var send1 =  {token:"ca15df8f74b55e0abf96b1d66b53f3ed", github:"https://github.com/carlosh07/code2040reg"} // data that I will send pt 1
var send2 =  {token:"ca15df8f74b55e0abf96b1d66b53f3ed"};
var url = "http://challenge.code2040.org/api/reverse" // where I am sending it to
var exampleString =  "The Example";
//var theArrayOfCharsBckWrds = exampleString.split("").reverse(); //Makes the string into an array then reverses that array -- (String + Array Methods)
//var out  = theArrayOfCharsBckWrds.join(""); // Array Methods

var reverseString = function(string){
	var temp = string.split("").reverse();
	return temp.join("");
}


$(document).ready(function(){
  $.post(url,send2,
        function(data,status){
            console.log("The string should be: " + data + "\nStatus: " + status);
            var reversed =reverseString(data);
            console.log(reversed);
            send2 = {token:"ca15df8f74b55e0abf96b1d66b53f3ed", string:reversed};
            url ="http://challenge.code2040.org/api/reverse/validate";
            $.post(url,send2,function(data,status){
				console.log(data);
	        });
        });// function prints out the the data response and then the status!   
      
    
}); //document.ready
