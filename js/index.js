// Callback for when the side menu button is clicked
function showSideMenu(event) {
    const sideMenu = document.getElementById("SideMenu");
    sideMenu.classList.toggle('active');
}

// Callback for when the search bar input text changes
function onSearchBarInput(event) {
    console.log(event.target.value);
}

// Callback for when the search bar gets submitted
function onSearchBarSubmit(event) {
    // Return early if nothing in search bar
    const searchBoxText = event.target.value;
    if (searchBoxText === '' || searchBoxText === null)
        return;

    // Save query string as URL parameters for the next page
    const formElement = document.getElementById("form-search-bar");
    formElement.setAttribute("action", `gameDetails.html?search-box-text=${searchBoxText}`);
}

// When page loads
function onLoad() {
    console.log('Loaded');

    // Assign side menu button event callbacks
    const sideMenuButtonElement = document.getElementById("side-menu-button");
    sideMenuButtonElement.addEventListener("click", showSideMenu);

    // Assign search bar event callbacks
    const searchBarElement = document.getElementById("search-bar");
    searchBarElement.addEventListener("input", onSearchBarInput);
    searchBarElement.addEventListener("change", onSearchBarSubmit);
}