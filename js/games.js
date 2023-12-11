// When page loads
async function onLoad() {
    console.log('Loaded');

    // Get the information from the url parameters
    const parameters = new URLSearchParams(window.location.search);
    const queryString = parameters.get("search-box-text");
    console.log(`Data from search bar: '${queryString}'`);

    const url = `http://localhost:8080/data?search=${queryString}`;
    const response = await fetch(url,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
   });

   const gameData = await response.json();

   console.log(gameData);
   let main = document.getElementById("main-div");
   
    let homeButton = document.createElement('button');
    let homeButtonImage = document.createElement('img');
    homeButtonImage.src ="./resources/menuController.png";
    homeButton.className = 'homebutton';
    homeButtonImage.className = 'controllerMenu2';
    homeButton.appendChild(homeButtonImage);
    homeButton.addEventListener('click', function(){
    window.location.href='http://localhost:8080';
    })

    main.appendChild(homeButton);


   for(let i = 0; i < gameData.length; i++)
   {
        let newDiv = document.createElement('div');
        newDiv.className = 'grid-div-styling';
        let divHeader = document.createElement('h3');
        let gameCover = document.createElement('img');
        gameCover.className = 'grid-img-styling';
        let divButton = document.createElement('button');
        divButton.className = 'grid-button-styling';
        divButton.textContent = 'Details';
        divHeader.innerHTML = gameData[i].title;
        gameCover.src = gameData[i].cover;

        newDiv.appendChild(divHeader);
        newDiv.appendChild(gameCover);
        newDiv.appendChild(divButton);

        let gridlayout = document.getElementById('gridlay');
        gridlayout.appendChild(newDiv);
        
        divButton.addEventListener("click", function(){
            
            let gData = JSON.stringify(gameData[i]);
            localStorage.setItem("gameData", gData);
            localStorage.setItem('url',url);
            window.location.href='http://localhost:8080/gameDetails.html';

        })
   }
    
    // Ideal way to retrieve data from endpoint
    // const data = getGame(queryString);
    //    
    //    Object will contain these fields:
    //    
    //    id: 0,
    //    cover: null,
    //    title: "",
    //    description: "",
    //    ageRating: "",
    //    totalRating: 0,
    //    category: "",
    //    releaseDate: "1900-01-01"
    //    [videos]
    //
}
