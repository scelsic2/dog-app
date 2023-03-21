var keyHeader = "x-api-key";
var apiKeyValue = "live_jy5yM47I59NELyCljtxLRgpdPk3QeW6xI4JEfWjoBk4ODdKB3MQ9UyEU7EVF051D"

var header = {keyHeader : apiKeyValue}
var breeds = "https://api.thedogapi.com/v1/breeds"

$.get(breeds).then(function(data){
    console.log("---All Dog Data below:");
    console.log(data);
    console.log("---Name first dog in array below:");
    console.log(data[0].name);
    console.log("---id that is affiliated with breed for search purposes")
    console.log(data[0].id);
    console.log("---Bred for details of first dog in array below:");
    console.log(data[0].bred_for);
    console.log("---Lifespan of first dog in array below:");
    console.log(data[0].life_span);
    console.log("---Temperament of first dog in array below:");
    console.log(data[0].temperament);
    console.log("---Image id of first dog in array below:");
    console.log(data[0].image.id);
    console.log("---Image width of first dog in array below:");
    console.log(data[0].image.width);
    console.log("---Image height of first dog in array below:");
    console.log(data[0].image.height);
    console.log("---Image url of first dog in array below:");
    console.log(data[0].image.url);
})











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