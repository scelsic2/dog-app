// var dogGif = 'https://api.giphy.com/v1/gifs/random?api_key=AsOE69Gb1WiVosz9hHIrk72VvvQflvai&tag=&rating=g'
// var dogGif ='https://api.giphy.com/v1/gifs/translate?api_key=AsOE69Gb1WiVosz9hHIrk72VvvQflvai&s=dog'
// // var dogURL = 'http://place-puppy.com';
// // fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1').then(function(resObj) {
// //     console.log(resObj);
// //     return resObj.json();
// // })

// fetch(dogGif).then(function(data){

//     return data.json();
// }).then(function(imageData){

//     console.log(imageData);
// var Giphy = document.querySelector('#Giphy');

// for (var gifObj of imageData.results) {
//     var li = document.createElement('li');
//     li.innerText = gifObj.data;

//     Giphy.append (li);






//     var Giphy = document.querySelector('#Giphy');

//     for (var imageObj of imageData.results) {
//         var li = document.createElement('li');

//         li.innerText = imageObj;
//         Giphy.ap
// }) 

var terms = ["dog"];

var searchTerm = terms[Math.floor(Math.random() * terms.length)];


var dogURL = "https://api.giphy.com/v1/gifs/search?api_key=AsOE69Gb1WiVosz9hHIrk72VvvQflvai&q=" + searchTerm + "&limit=10&offset=0&rating=g&lang=en";
console.log(dogURL)

function drawGif(url) {
    var gifDiv = document.getElementById('Giphy');
    var $img = document.createElement("img");
    $img.setAttribute("src", url)
    gifDiv.innerHTML = '';
    gifDiv.appendChild($img);
}
fetch(dogURL)
    .then(data => data.json())
    .then(apiData => {
        console.log(apiData)
        drawGif(apiData.data[0].images.original.url);
        const maxI = apiData.data.length;
        let i = 0;
        var interval = setInterval(function () {
            i++;
            if (i < maxI) {
                drawGif(apiData.data[i].images.original.url);
            } else {
                i = 0;
                drawGif(apiData.data[i].images.original.url);
            }

        }, 10 * 1000) // 10 seconds
        
    })