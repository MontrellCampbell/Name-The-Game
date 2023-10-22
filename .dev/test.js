

function onClickDropdown(id) {
    const dropdownElement = document.querySelector(`#dropdown-${id}`);

    console.log(dropdownElement);
}

function onInput(e) {
    console.log(e.target.value);
}

function onSubmit(e) {
    console.log(e.target.value);
}



// When page loads
function onLoad() {
    
    console.log('Loaded');

    const searchBarElement = document.querySelector("#search-bar");
    searchBarElement.addEventListener("input", onInput);
    searchBarElement.addEventListener("change", onSubmit);

}