//Carlos A. Hernandez
var send =  {token:"ca15df8f74b55e0abf96b1d66b53f3ed"};
var url = "http://challenge.code2040.org/api/haystack" // where I am sending it to


$(document).ready(function(){
    $.ajaxSetup({async:false});  //execute synchronously
    var haystack = null;
    var index = null;
    $.post(url,send,
        function(data,status){
            haystack =data;
            console.log("Data" +  data + "\nStat: " + status);
            for(a  = 0 ; a < haystack.haystack.length; a++){
                if(haystack.needle == haystack[a])
                    index = a;
                    return;
            } //for    
        }//function
        );//post
        
    url = "http://challenge.code2040.org/api/haystack/validate";
    send = {token:"ca15df8f74b55e0abf96b1d66b53f3ed", needle:index};
     $.post(url,send,
        function(data,status){
            console.log("Data" +  data + "\nStat: " + status);
        }//function
        );//post


}); //document.ready
