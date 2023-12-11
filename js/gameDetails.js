
let gameData = localStorage.getItem("gameData");
console.log(gameData); 
gameData = JSON.parse(gameData);


switch (gameData.ageRating.rating) {
    case 1:
        gameData.ageRating = "Three";
        break;
    case 2:
        gameData.ageRating = "Seven";
        break;
    case 3:
        gameData.ageRating = "Twelve";
        break;
    case 4:
        gameData.ageRating = "Sixteen";
        break;
    case 5:
        gameData.ageRating = "Eighteen";
        break;
    case 6:
        gameData.ageRating = "RP";
        break;
    case 7:
        gameData.ageRating = "EC";
        break;
    case 8:
        gameData.ageRating = "E";
        break;
    case 9:
        gameData.ageRating = "E10";
        break;
    case 10:
        gameData.ageRating = "T";
        break;
    case 11:
        gameData.ageRating = "M";
        break;
    case 12:
        gameData.ageRating = "AO";
        break;
    case 13:
        gameData.ageRating = "CERO_A";
        break;
    case 14:
        gameData.ageRating = "CERO_B";
        break;
    case 15:
        gameData.ageRating = "CERO_C";
        break;
    case 16:
        gameData.ageRating = "CERO_D";
        break;
    case 17:
        gameData.ageRating = "CERO_Z";
        break;
    case 18:
        gameData.ageRating = "USK_0";
        break;
    case 19:
        gameData.ageRating = "USK_6";
        break;
    case 20:
        gameData.ageRating = "USK_12";
        break;
    case 21:
        gameData.ageRating = "USK_16";
        break;
    case 22:
        gameData.ageRating = "USK_18";
        break;
    case 23:
        gameData.ageRating = "GRAC_ALL";
        break;
    case 24:
        gameData.ageRating = "GRAC_Twelve";
        break;
    case 25:
        gameData.ageRating = "GRAC_Fifteen";
        break;
    case 26:
        gameData.ageRating = "GRAC_Eighteen";
        break;
    case 27:
        gameData.ageRating = "GRAC_TESTING";
        break;
    case 28:
        gameData.ageRating = "CLASS_IND_L";
        break;
    case 29:
        gameData.ageRating = "CLASS_IND_Ten";
        break;
    case 30:
        gameData.ageRating = "CLASS_IND_Twelve";
        break;
    case 31:
        gameData.ageRating = "CLASS_IND_Fourteen";
        break;
    case 32:
        gameData.ageRating = "CLASS_IND_Sixteen";
        break;
    case 33:
        gameData.ageRating = "CLASS_IND_Eighteen";
        break;
    case 34:
        gameData.ageRating = "ACB_G";
        break;
    case 35:
        gameData.ageRating = "ACB_PG";
        break;
    case 36:
        gameData.ageRating = "ACB_M";
        break;
    case 37:
        gameData.ageRating = "ACB_MA15";
        break;
    case 38:
        gameData.ageRating = "ACB_R18";
        break;
    case 39:
        gameData.ageRating = "ACB_RC";
        break;
    default:
        gameData.ageRating = "N/A";
}

// Example usage:
console.log(gameData.ageRating);



let mainDiv = document.getElementById('main-div');

let homeButton = document.createElement('button');
let homeButtonImage = document.createElement('img');
homeButtonImage.src ="./resources/menuController.png";
homeButton.className = 'homebutton';
homeButtonImage.className = 'controllerMenu2';
homeButton.appendChild(homeButtonImage);
homeButton.addEventListener('click', function(){
  window.location.href='http://localhost:8080';
})


let gameTitleDiv = document.createElement('div');
gameTitleDiv.className = 'game-title-div';
let gameTitle = document.createElement('h1');

mainDiv.appendChild(homeButton);

gameTitle.className = 'game-title-detail-page';
gameTitle.innerHTML = gameData.title;
mainDiv.appendChild(gameTitle);

let dataDiv = document.createElement('div');
dataDiv.className = 'data-div';


let coverDiv = document.createElement("div");
coverDiv.className = 'cover-div';
let coverIMG = document.createElement('img');
coverIMG.className = 'cover-styling';
gameData.cover = `https://images.igdb.com/igdb/image/upload/t_cover_big/${gameData.coverID}.jpg`;
coverIMG.src = gameData.cover;

let gameSummaryDiv = document.createElement('div');
gameSummaryDiv.className = 'game-summary-div';
let gameSummary = document.createElement('p');
gameSummary.className = 'game-summary';
gameSummary.textContent = gameData.description;
gameSummaryDiv.appendChild(gameSummary);


let trailerPage = document.createElement('button');
trailerPage.className = 'charactersPageButton';
trailerPage.textContent = 'Video';
mainDiv.appendChild(trailerPage);

trailerPage.addEventListener('click', function(){
    window.location.href='http://localhost:8080/trailer.html';
})

gameTitleDiv.appendChild(gameTitle);
coverDiv.appendChild(coverIMG);
coverDiv.appendChild(gameSummaryDiv);
dataDiv.appendChild(coverDiv);


mainDiv.appendChild(gameTitleDiv);
mainDiv.appendChild(dataDiv);

var table = document.createElement('table');
table.className = 'table-data';

var row1 = document.createElement('tr');

var releaseDate = document.createElement('th');
releaseDate.textContent = 'RELEASED \u00A0\u00A0 |';
var rating = document.createElement('th');
rating.textContent = '\u00A0\u00A0 RATING';

row1.appendChild(releaseDate);
row1.appendChild(rating);

table.appendChild(row1);

var row2 = document.createElement('tr');

var cell1 = document.createElement('td');
cell1.textContent = gameData.releaseDate + "\u00A0\u00A0\u00A0 ";
row2.appendChild(cell1);

var cell2 = document.createElement('td');
cell2.textContent = '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' + gameData.ageRating;
row2.appendChild(cell2);

table.appendChild(row2);

dataDiv.appendChild(table);

dataDiv.appendChild(trailerPage);


let outterDiv = document.getElementById('outter-div');
let backButton = document.createElement('button');
backButton.className = 'back-button';
backButton.textContent = 'Back';
outterDiv.appendChild(backButton);

backButton.addEventListener('click', function(){
    window.location.href= localStorage.getItem('gdPageURL');

})



/*
let rDateDiv = document.createElement('div');
rDateDiv.className = 'release-date-div';
let rDate = document.createElement('p');
rDate.className = 'game-release';
rDate.textContent = 'Released: ' + gameData.releaseDate;
rDateDiv.appendChild(rDate);

let ratingDiv = document.createElement('div');
ratingDiv.className = 'rating-div';
let rating = document.createElement('p');
rating.className = 'game-rating';
rating.textContent = 'RATED: ' + gameData.ageRating;
ratingDiv.appendChild(rating);
*/