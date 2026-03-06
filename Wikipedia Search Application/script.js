let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
const spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(searchItems){
    searchResultsEl.innerHTML+=
    `
        <a href= "${searchItems.link}" class="result-title" > ${searchItems.title} </a> <br>
        <a href= "${searchItems.link}" class="result-url"> ${searchItems.link} </a>
        <p class="link-description"> ${searchItems.description} </p>
    `;
}


function displayResults(jsonData){
    jsonData.forEach(i=>{
         createAndAppendSearchResult(i);
    });
}

function searchWikipedia(event){
    // Check if the pressed key is "Enter"
    if (event.key === "Enter"){
        
        // Get the value typed in the search input box
        let searchInputValue = searchInputEl.value;
        
        searchResultsEl.textContent = "";
        
        //  Show the loading spinner
        spinnerEl.classList.remove("d-none");
        
         // Create the API URL with the search text
        let url = `https://apis.ccbp.in/wiki-search?search=${searchInputValue}`;
        
        // Send request to the Wikipedia API
        fetch(url,{
            method : "GET"
            }
        )
        // Convert the response into JSON format
        .then(res => res.json())
         // Handle the JSON data received from API
        .then(jsonData => {
             // Hide the spinner after data is received
            spinnerEl.classList.add("d-none");
            
            displayResults(jsonData.search_results);
        });
        
    }
}
searchInputEl.addEventListener('keydown',searchWikipedia);