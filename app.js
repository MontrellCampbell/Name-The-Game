const http = require('http');
const path = require('path');
const fs = require("fs");
const port = 8080

async function getGames(text){

    const url = "https://api.igdb.com/v4/games";
    const data = {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Client-ID': '705fk6ow0fc3due6uw5hms8y0yjpjs',
        'Authorization': 'Bearer yfkg9ztxccm863jnd1wo2ji3x7ojb5',
    },
    body: `fields *, videos.*; limit 10; where name ~ *"${text}"*;`
    };

    const response = await fetch(url,data);

    if(response.ok){
        return await response.json();
    }

    return{
        status: response.status,
        error:response.statusText
    };

History

}

async function getCoverUrls(text){

    const url = "https://api.igdb.com/v4/covers";
    const data = {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Client-ID': '705fk6ow0fc3due6uw5hms8y0yjpjs',
        'Authorization': 'Bearer yfkg9ztxccm863jnd1wo2ji3x7ojb5',
    },
    body: `fields url, image_id; where id = (${text.join()}); limit ${text.length};`
    };

    const response = await fetch(url,data);

    if(response.ok){
        return await response.json();
    }

    return{
        status: response.status,
        error:response.statusText
    };

}

async function getReleaseDate(text){

    const url = "https://api.igdb.com/v4/release_dates";
    const data = {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Client-ID': '705fk6ow0fc3due6uw5hms8y0yjpjs',
        'Authorization': 'Bearer yfkg9ztxccm863jnd1wo2ji3x7ojb5',
    },
    body: `fields human, date; where id = (${text.join()}); sort y asc;`
    };

    const response = await fetch(url,data);

    if(response.ok){
        return await response.json();
    }

    return{
        status: response.status,
        error:response.statusText
    };

}
async function getAgeRatings(text){

    const url = "https://api.igdb.com/v4/age_ratings";
    const data = {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Client-ID': '705fk6ow0fc3due6uw5hms8y0yjpjs',
        'Authorization': 'Bearer yfkg9ztxccm863jnd1wo2ji3x7ojb5',
    },
    body: `fields rating, rating_cover_url; where id = (${text.join()});`
    };

    const response = await fetch(url,data);

    if(response.ok){
        return await response.json();
    }

    return{
        status: response.status,
        error:response.statusText
    };

}

// Create the server and its functions
const server = http.createServer(async function (request, response) {
   
    // Don't try to load favicon to avoid error
    if (!request.url || request.url.match("favicon.ico"))
        return;

    if(request.method === "POST")
    {
        if(request.url.match("data")){

                const params = new URLSearchParams(request.url.split('?')[1]);
                const query = params.get("search");

                const gameData = await getGames(query);

                const coverIds  = gameData.map(x => x.cover).filter(x => x);
                const coverUrls = await getCoverUrls(coverIds);
                console.log(coverUrls);

                const releaseDatesIds = gameData.map(x => x.release_dates).filter(x => x).flat();
                const releaseDates = await getReleaseDate(releaseDatesIds);

                const ageRatingIds = gameData.map(x => x.age_ratings).filter(x => x).flat();
                const ageRatings = await getAgeRatings(ageRatingIds);


                let arrayOfGames = [];

                for(const game of gameData){

                    let cover = {url: "", image_id: ""};
                    if(game.cover !== undefined){
                       const coverObj = coverUrls.find(cover => cover.id === game.cover);
                       if(coverObj !== undefined)
                       {
                            cover = coverObj;
                       }
                    }

                    let video;
                    if(game.videos && game.videos.length >0){
                        video = game.videos[0].video_id;
                    }
                    
                    let releaseDate = {human: 'N/A'};
                    if(game.release_dates)
                    {
                        const dates = releaseDates.filter(date => game.release_dates.includes(date.id));

                        if(dates.length > 0){
                            releaseDate = dates.sort((date1, date2) => date1.date < date2.date)[0];
                        }
                    }

                    let gameAgeRating = 'N/A';
                    if(game.age_ratings !== undefined)
                    {
                        gameAgeRating = ageRatings.find(ageRating => game.age_ratings.includes(ageRating.id));
                    }

                    const gameObject = {
                    id: game.id,
                    cover: "https:"+ cover.url,
                    title: game.name,
                    description: game.summary,
                    ageRating: gameAgeRating,
                    releaseDate: releaseDate.human,
                    coverID: cover.image_id,
                    videos: video
                    };

                    arrayOfGames.push(gameObject);

                }

                response.writeHead(200, {"Content-Type": "Application/Json"});
                response.write(JSON.stringify(arrayOfGames));
                response.end();
            
            return;
            }

    }
   

    // Get file path
    let filePath = path.join(__dirname, request.url === "/" ? "index.html" : request.url);
    const contentType = request.headers.accept.split(',')[0];

    // Logic based on request url (specific html page)
    if (filePath.match("games.html")) {
        filePath = "games.html";
    }


    // Get the data from files
    console.log(contentType);
    console.log(filePath);
    fs.readFile(filePath, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write("Error: File Not Found");
        } else {
            // No error
            response.writeHead(200, { "Content-Type": contentType });
            response.write(data);
        }
        response.end();
    });
});



// Start server on port 8080
server.listen(port, function(err) {
    if (err) {
        console.log("Error: ", err);
        return;
    }
    console.log(`Server is listening on port ${port}`);
});

