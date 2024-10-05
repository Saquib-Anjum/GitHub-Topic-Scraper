const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const PDFDocument = require('pdfkit');
function getIssuesPageHtml(url,topic,RepoName){
    
request(url,cb);
function cb(err,response,html){
    if(err){
        console.log(err);

    }
    else{
       //console.log((html));
       getIssues(html);
    }
}
function getIssues(html){
    let  $ = cheerio.load(html);
    let issueElementArr = $("a.Link--primary.v-align-middle.no-underline.h4");
    
let arr=[];
console.log();
console.log("Repository Name :  ",RepoName );
console.log();
    for(let i=0;i<issueElementArr.length;i++){
        let link=    $(issueElementArr[i]).attr("href");
        let fullLink = "https://github.com"+link;
        console.log(fullLink);
        arr.push(fullLink);
        let FolderPath=path.join(__dirname,topic);
        dirCreater(FolderPath);
        let FilePath = path.join(FolderPath,RepoName+".pdf");
        let text = JSON.stringify(arr)
        // fs.writeFileSync(FilePath,JSON.stringify(arr));
        

        let pdfDoc = new PDFDocument;
        pdfDoc.pipe(fs.createWriteStream(FilePath));
        pdfDoc.text(text);
        pdfDoc.end();
            }
}
function dirCreater(FolderPath){
    if(fs.existsSync(FolderPath)==false){
        fs.mkdirSync(FolderPath);
    }
}
}
module.exports = getIssuesPageHtml;