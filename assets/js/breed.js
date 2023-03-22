// API Info
var keyHeader = "x-api-key";
var apiKeyValue = "live_jy5yM47I59NELyCljtxLRgpdPk3QeW6xI4JEfWjoBk4ODdKB3MQ9UyEU7EVF051D"

var header = {keyHeader : apiKeyValue}
var breeds = "https://api.thedogapi.com/v1/breeds"

// Console logs of data pull
var fetchDogs = function pullData() {
    return $.get(breeds).then(function(data){
        var allDogData = data
        console.log("---All Dog Data below:");
        console.log(allDogData);
        console.log("---Name first dog in array below:");
        console.log(allDogData[0].name);
        console.log("---id that is affiliated with breed for search purposes")
        console.log(allDogData[0].id);
        console.log("---Lifespan of first dog in array below:");
        console.log(allDogData[0].life_span);
        console.log("---Temperament of first dog in array below:");
        console.log(allDogData[0].temperament);
        console.log("---Image id of first dog in array below:");
        console.log(allDogData[0].image.id);
        console.log("---Image width of first dog in array below:");
        console.log(allDogData[0].image.width);
        console.log("---Image height of first dog in array below:");
        console.log(allDogData[0].image.height);
        console.log("---Image url of first dog in array below:");
        console.log(allDogData[0].image.url);
        return allDogData;
    })
}

fetchDogs().then(function(data){
    populateDogs(data);
});

// https://www.youtube.com/watch?v=0gmDnS7fEBY
var populateDogs = (breeds) => {
    var select = document.querySelector(".breed-select");
    var breedOptions = breeds.map(breed => {
        var option = document.createElement("option");
        option.text = breed.name;
        // the value of the dog name has to equal the ID I console logged above 
        option.value = breed.id
        // here I take the options I created and append it to the select
        select.appendChild(option);
        return option
    })
}

var changeDog = () => {
    // the importance of this value is that it targets the id associated with the dog in the populateDogs function
    // fetchDogs(event.target.value);
    var dogValue = event.target.value;
    dogValueConvertedToIndex = dogValue -1;
    console.log(dogValueConvertedToIndex)
    return dogValueConvertedToIndex;
}
var getDog = function compareUserInputToData(changeDog) {
    return $.get(breeds).then(function(data){
        for (i = 0; i < data[i].length ; i++)
            console.log("here")
            if (changeDog == [i]){
                console.log(data[i].name)
                console.log("help")
            }
        return data[i].name       
    })
}



// Query Selectors

// var sectionFind = document.querySelector("#find");

// function myPracticeFunction(){
//     var createPracticeDiv = document.createElement("div");
//     var newContent = document.createTextNode("My practice function displaying data on the page.");

//     var newDivAndContent = createPracticeDiv.appendChild(newContent);
//     sectionFind.appendChild(newDivAndContent);
// }

// myPracticeFunction()

// function fetchDog(){
//     var createFetchDiv = document.createElement("div");
//     var fetchName = document.createTextNode();
//     console.log(fetchName);

//     var myVariable = createFetchDiv.appendChild(fetchName);
//     sectionFind.appendChild(myVariable);
// }

// fetchDog()

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("{{endpoint}}v1/breeds?limit=10&page=0", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

//   console.log("dog")

// var fetchDogBreeds = () => {
//     fetch()
// }

// fetchDogBreeds();