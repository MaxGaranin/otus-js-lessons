const request = require('request');
var parseString = require('xml2js').parseString;
const mongoClient = require("mongodb").MongoClient;

process();

function process() {
    var queryStr = 'https://www.sports.ru/rss/all_news.xml';

    request(queryStr, {}, (err, res, body) => {
        if (err) { return console.log(err); }

        parseString(body, function (err, result) {
            if (err) { return console.log(err); }

            const url = "mongodb://localhost:27017/";
            mongoClient.connect(url, function (err, mongoClient) {
                if (err) { return console.log(err); }

                const db = mongoClient.db("rssnewsdb");
                const collection = db.collection("news");

                var elems = result.rss.channel[0].item;
                [].forEach.call(elems, function (elem) {
                    var rssItem = {
                        title: elem.title[0],
                        link: elem.link[0],
                        guid: elem.guid[0],
                        description: elem.description[0],
                        pubDate: elem.pubDate[0],
                        category: elem.category[0],
                    }

                    collection.insert(rssItem, function(err, result){
                        if(err) return console.log(err);
                        console.log(result);
                    });                    
                });

                mongoClient.close();
            });

        });

    });


}