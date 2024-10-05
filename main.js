const request = require("request");
const cheerio = require("cheerio");
const getRepoPageHtml = require("./reposPage");

let url = "https://github.com/topics";

request(url,cb);

function cb(err,response,html){
    if(err){
        console.log("Found some error",err);
    }
    else{
        //console.log(html);
        getTopicsLink(html)
    }
}
function getTopicsLink(html){
   let  $ = cheerio.load(html);
   let LinkElementsArr = $("a.no-underline.d-flex.flex-column.flex-justify-center");
     //console.log(topic)
     for(let i=0;i<LinkElementsArr.length;i++){
        let href = $(LinkElementsArr[i]).attr("href");
        let topic = href.split("/").pop();
        let fullLink = "https://github.com"+href;
        console.log(fullLink);
        getRepoPageHtml(fullLink,topic);
     }
}