//Carlos A. Hernandez
var send =  {token:"ca15df8f74b55e0abf96b1d66b53f3ed"};
var url = "http://challenge.code2040.org/api/prefix" // where I am sending it to


$(document).ready(function(){
    $.ajaxSetup({async:false});  //execute synchronously
    var prefix = null;
    var theListOfWords;
    $.post(url,send,
        function(data,status){
            prefix =data.prefix;
            theListOfWords = data.array;
            console.log("Data" +  data + "\nStat: " + status + "\nprefix: " + prefix + "\nArray: "  + theListOfWords); 
                
        }//function
        );//post
        var wordsWithoutPrefix =[];
        console.log("\nThe prefix length is : " + prefix.length); //want to know the length just in case it changes.
        for(a=0; a < theListOfWords.length; a++){
            // console.log("\nPrefix is :" + prefix + "\nSubstring is :" + theListOfWords[a].substr(0,prefix.length-1) );
            if(theListOfWords[a].substr(0,prefix.length) != prefix){
                // console.log("\nFOUND AT " + a);
                wordsWithoutPrefix.push(theListOfWords[a]);
            }//if the prefix matched add
        }//for

        console.log(wordsWithoutPrefix);

        var send2 = {token:"ca15df8f74b55e0abf96b1d66b53f3ed", array:wordsWithoutPrefix};                
        var url2 = "http://challenge.code2040.org/api/prefix/validate";
        console.log("S " + send2.array[2]);

        $.post(url2,send2,
        function(data,status){
            console.log("\nRecieved:" + data + "\nStat: " + status);  
        }//function
        );//post

}); //document.ready
