// Write a fetch request to the Giphy API
fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN`)
    .then(function(response){
        return response.json();
    })
// Then log the response in the console
.then(function(jsonData))
console.log(jsonData)