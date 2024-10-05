const request = require("request");
const cheerio = require("cheerio");
let getIssuesPageHtml = require("./issues")
function getReposPageHtml(url,topic){
request(url,cb);


function cb(err,response,html){
    if(err){
        console.log(err);
    }
    else{
        
        getReposLink(html);
    }
}
function getReposLink(html) {
    let $ = cheerio.load(html);

    // Select all <h3> tags with the class 'f3' that contain repo links
    let repoElements = $("h3.f3");
console.log();
console.log("TOPIC NAME :  ",topic )
console.log();
    // Loop through the repository elements
    for (let i = 0; i < 8; i++) {
        // Find the second <a> tag, which contains the repository link
        let twoAnchors = $(repoElements[i]).find("a");

        // The second anchor (index 1) should be the repository link
        let repoLink = $(twoAnchors[1]).attr("href");

        if (repoLink) {
            // Full repository link with issues
            let RepoNameARR = repoLink.split("/");
               let RepoName = RepoNameARR[1];
            let fullRepoLink = "https://github.com" + repoLink+ "/issues";
            console.log(fullRepoLink);
            getIssuesPageHtml(fullRepoLink,topic,RepoName)
        }
    }
}

}


module.exports = getReposPageHtml;