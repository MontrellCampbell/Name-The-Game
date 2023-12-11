
    
    let homeButton = document.createElement('button');
    let homeButtonImage = document.createElement('img');
    homeButtonImage.src ="./resources/menuController.png";
    homeButton.className = 'homebutton';
    homeButtonImage.className = 'controllerMenu2';
    homeButton.appendChild(homeButtonImage);
    homeButton.addEventListener('click', function(){
    window.location.href='http://localhost:8080';
    })
    
    let main = document.getElementById('maindiv');
    main.appendChild(homeButton);
    
    
    
    let videodiv = document.createElement('div');
    videodiv.className ='video';
    const iframe = document.createElement('iframe');
    iframe.className = 'i-frame';
    iframe.width = '1000';
    iframe.height = '700';
    iframe.src = 'https://www.youtube.com/embed/btTBsLXekwM';
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;

    let apiLink = document.createElement('a');
    apiLink.style.color = 'white';
    apiLink.href = 'https://api-docs.igdb.com/?javascript#getting-started';

    let apiImage = document.createElement('img');
    apiImage.className = 'api-image';
    apiImage.src = './resources/api.png';
    apiLink.appendChild(apiImage);

    let videoDiv = document.getElementById('video');
    videodiv.appendChild(iframe);
    videodiv.appendChild(apiLink);
    main.appendChild(videodiv);

    let aboutMeDiv = document.createElement('div');
    aboutMeDiv.className = 'about-me-div';
    let aboutMe = document.createElement('p');
    aboutMe.className = 'about-me-p';
    aboutMe.textContent = 'Hello, My name is Montrell Campbell. I am currently a senior studying Information Systems - Web/Application Developement. I was born and raised in Chicago and currently work as a software developer.'
    aboutMe.style.color = 'white';
    aboutMeDiv.appendChild(aboutMe);
    main.appendChild(aboutMeDiv);
    
