// Callback for when the side menu button is clicked
function showSideMenu(e) {
    const sideMenu = document.querySelector("#SideMenu");
    sideMenu.classList.toggle('active');
}

// Callback for when the search bar input text changes
function onSearchBarInput(e) {
    console.log(e.target.value);
}

// Callback for when the search bar gets submitted
function onSearchBarSubmit(e) {
    // Return early if nothing in search bar
    const queryString = e.target.value;
    if (queryString === '' || queryString === null)
        return;

    // Save string to session storage
    sessionStorage.setItem("search-query", e.target.value);

    location.href = "./gameDetails.html";
}

// When page loads
function onLoad() {
    console.log('Loaded');

    // Assign side menu button event callbacks
    const sideMenuButtonElement = document.querySelector("#side-menu-button");
    sideMenuButtonElement.addEventListener("click", showSideMenu);

    // Assign search bar event callbacks
    const searchBarElement = document.querySelector("#search-bar");
    searchBarElement.addEventListener("input", onSearchBarInput);
    searchBarElement.addEventListener("change", onSearchBarSubmit);
}