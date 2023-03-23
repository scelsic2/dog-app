// API Info
var keyHeader = "x-api-key";
var apiKeyValue =
  "live_jy5yM47I59NELyCljtxLRgpdPk3QeW6xI4JEfWjoBk4ODdKB3MQ9UyEU7EVF051D";

var header = { keyHeader: apiKeyValue };
var breeds = "https://api.thedogapi.com/v1/breeds";

// Console logs of data pull from API
function fetchDogs() {
  return $.get(breeds).then(function (data) {
    var allDogData = data;
    console.log("---All Dog Data below:");
    console.log(allDogData);
    console.log("---Name first dog in array below:");
    console.log(allDogData[0].name);
    console.log("---id that is affiliated with breed for search purposes");
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
  });
}

var select = document.querySelector(".breed-select");
var breedOption = document.querySelector(".breed-option");
var findSection = document.querySelector("#find");

select.addEventListener("change", function (eventOnChild) {
  var element = eventOnChild.target.value;
  var selectDog = parseInt(element);
  compareUserInputToData(selectDog);
});

// Now I am saying that I want to call fetchDogs function and then run populateData with that data that the API gave me
const dogData = fetchDogs().then(function (data) {
  populateDogs(data);
  return data;
});

// Here I am taking all the dog breeds and placing them in a drop-down menu
// https://www.youtube.com/watch?v=0gmDnS7fEBY
var populateDogs = (breeds) => {
  var breedOptions = breeds.map((breed) => {
    var option = document.createElement("option");
    option.text = breed.name;
    // the value of the dog name has to equal the ID I console logged above
    option.value = breed.id;
    // here I take the options I created and append it to the select
    select.appendChild(option);
    return option;
  });
};

// The dog was selected, now I'm trying to match it with the correct index so that I can pull other data about it
//function that takes in a select dog and finds the dog from the array of dog information =>returns select dog
// I tried to run my fetchDog function earlier but couldn't because the page loaded too quickly, so we then ran it again but waiting until it was inside the .then so that it wouldn't run until the API was ready with information to return
function compareUserInputToData(selectDog) {
  console.log(selectDog);
  fetchDogs().then(function (data) {
    const foundDog = data.find((dog) => dog.id === selectDog);
    console.log(foundDog)
  
    var createFetchDiv = document.createElement("div");
    createFetchDiv.classList.add("fetch-div")
    // var grabFetchDiv = document.querySelector(".fetch-div");
    // console.log(grabFetchDiv);

    var fetchName = document.createTextNode(foundDog.name);
    var fetchLifeSpan = document.createTextNode(foundDog.life_span);
    var fetchTemperament = document.createTextNode(foundDog.temperament);
    
    var createImage = document.createElement("img");
    var fetchImage = document.createElement(src = "foundDog.image.url");
    
    createFetchDiv.appendChild(fetchName);
    createFetchDiv.appendChild(fetchLifeSpan);
    createFetchDiv.appendChild(fetchTemperament);

    createImage.appendChild(fetchImage);

    findSection.appendChild(createFetchDiv);
    findSection.appendChild(createImage);

    return foundDog;
    
  }).catch(err=>console.error(err))













  // $.get(breeds).then(function(data){
  //     for (i = 0; i < data.length ; i++){
  //         var idLocationInArray = data[i].id
  //         if (idLocationInArray.find(selectDog == i)){
  //             console.log(selectDog + "is a match")
  //         };

  //     }
  // })
}

// previous attempts
// function compareUserInputToData(selectDog) {
//     $.get(breeds).then(function(data){
//         for (i = 0; i < data.length ; i++){
//             if (data.find(selectDog == i)){
//                 console.log(selectDog + "is a match")
//             };

//         }
//     })
// }
// function compareUserInputToData(selectDog) {
//     $.get(breeds).then(function(data){
//         for (i = 0; i < data.length ; i++){
//             var idLocation = data[i].id;
//             console.log(idLocation);
//             if (var selectedID = idLocation.find(selectDog == i)){

//             })

//             console.log(selectedID)
//         }
//         return selectedID
//     })
// }

// This works but duplicates the loop. (at index 19)
// function compareUserInputToData(selectDog) {
//     $.get(breeds).then(function(data){
//         for (i = 0; i < data.length ; i++){
//             var dogAtAnIndex = data[i].name;
//             if (selectDog == [i]){
//                 console.log(dogAtAnIndex)
//             }
//         }
//         return dogAtAnIndex
//     })
// }

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
