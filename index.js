const http = require("https");
const fs = require("fs");

const url = "https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json";

http.get(url, function(res){
    const fileStream = fs.createWriteStream("countries.json")
    res.pipe(fileStream);
    fileStream.on("finish", function(){
        fileStream.close();
        console.log("Done!");
    });
});

const content = fs.readFileSync('countries.json', 'utf-8');

console.log(content);