

// When page loads
function onLoad() {
    console.log('Loaded');

    const queryString = sessionStorage.getItem("search-query");
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