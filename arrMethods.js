//for Each

const fruits = ["Apple", "Banana", "Orange", "Kiwi"];

fruits.forEach((fruit) => console.log(fruit));

fruits.forEach((fruit,index) => console.log(`${index} is ${fruit}`));


function listFruits(arr){
    console.log(arr);
}

fruits.forEach(listFruits);

const websiteObj = [{name:'google',url:'www.google.com'},{name:'facebook',url:'www.facebook.com'},{name:'youtube',url:'www.youtube.com'}]


websiteObj.forEach((website)=>console.log(website.name + ' is at ' +website.url));
