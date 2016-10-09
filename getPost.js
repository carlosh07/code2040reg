//Carlos A. Hernandez
var send =  {token:"ca15df8f74b55e0abf96b1d66b53f3ed", github:"https://github.com/carlosh07/code2040reg"} // data that I will send
var url = "http://challenge.code2040.org/api/register" // where I am sending it to
var exampleString =  "The Example";
//var theArrayOfCharsBckWrds = exampleString.split("").reverse(); //Makes the string into an array then reverses that array -- (String + Array Methods)
//var out  = theArrayOfCharsBckWrds.join(""); // Array Methods

var reverseString = function(string){
	var temp = string.split("").reverse();
	return temp.join("");
}


$(document).ready(function(){
  /*$.post(url,send,
        function(data,status){
            console.log("Data: " + data + "\nStatus: " + status);
        });// function prints out the the data response and then the status!  //Pt 1 */
      
    
}); //document.ready
