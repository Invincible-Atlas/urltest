var http = require('http'),
fs = require('fs');
function split(arr,size){
    chunkSize = size;
    chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        chunks.push(chunk);
    }
    return(chunks);
}
function lines(text) {  
    return text.split('\n');
}
function arrayToString(values){
    var tempstring="";
    var arr1 = [];
    for (a in values){
      
      tempstring="[";
      for (i in values[a]) {
        
        tempstring = tempstring+'"'+values[a][i]+'",';
        
        
       };
       
       tempstring=tempstring.slice(0, tempstring.length - 1);
       tempstring = tempstring+"]";
       arr1.push(tempstring);
    };
return(arr1);

}
var text;
var links;
 // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
fs.readFile('foo.txt', (err, data) => {
    if (err) throw err; 
    text=(data.toString());
    links = lines(text);
    links=split(links,100);
    for(i in links){ 
        console.log(links[i]);
    }
    console.log(links.length);
});
fs.readFile('./index.txt', function (err, html) {
    if (err) {
        throw err; 
    }       
    text=(html.toString());
    textarr = text.split(':linklisthere:');
    console.log(textarr[0]+arrayToString(links)+textarr[1]);
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(textarr[0]+arrayToString(links)+textarr[1]);  
        response.end();  
    }).listen(8000);
});