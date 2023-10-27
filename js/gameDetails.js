

// When page loads
function onLoad() {
    console.log('Loaded');

    // Get the information from the url parameters
    const parameters = new URLSearchParams(window.location.search);
    const queryString = parameters.get("search-query");
    console.log(`Data from search bar: '${queryString}'`);

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