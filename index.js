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
 // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
    /*
fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});
*/
function lines(text) {  
    return text.split('\n');
  }
 var text;
fs.readFile('foo.txt', (err, data) => {
  if (err) throw err;
 
 text=(data.toString());
 var links = lines(text);
links=split(links,100);
for(i in links){ 
console.log(links[i]);
}
console.log(links.length);


});
