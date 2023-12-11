let gameData = localStorage.getItem("gameData");
console.log(gameData); 
gameData = JSON.parse(gameData);


let homeButton = document.createElement('button');
let homeButtonImage = document.createElement('img');
homeButtonImage.src ="./resources/menuController.png";
homeButton.className = 'homebutton';
homeButtonImage.className = 'controllerMenu2';
homeButton.addEventListener('click', function(){
  window.location.href='http://localhost:8080';
})
homeButton.appendChild(homeButtonImage);

let mainDiv = document.getElementById('main-div');
mainDiv.appendChild(homeButton);


let dataDiv = document.createElement('div');
dataDiv.className = 'data-div';



const iframe = document.createElement('iframe');
iframe.className = 'i-frame';

iframe.width = '1000';
iframe.height = '700';
iframe.src = `https://www.youtube.com/embed/${gameData.videos}`;
iframe.frameBorder = '0';
iframe.allowFullscreen = true;



dataDiv.appendChild(iframe);
mainDiv.appendChild(dataDiv);


let outterDiv = document.getElementById('outter-div');
let backButton = document.createElement('button');
backButton.className = 'back-button';
backButton.textContent = 'Back';
outterDiv.appendChild(backButton);

backButton.addEventListener('click', function(){
    window.location.href= 'gameDetails.html';

})