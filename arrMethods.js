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

//Array.prototype.filter

const words = ['hello','morning','bye','welcome'];

const threeLetterWords = words.filter(word => word.length == 3);

console.log(threeLetterWords);

//filter even numbers

const numbers = [1,2,3,4,5,6,7,8,9,10]

const evenNums = numbers.filter(number => number%2 ===0);

console.log(evenNums)



//Array.prototype.map


const doubledNums = numbers.map(x => x*2);

console.log(doubledNums);


//chain method;

const squreAndTriple = numbers
                        .map(number => Math.sqrt(number))
                        .map(sqrt => sqrt*3);

console.log(squreAndTriple);


//reduce
const initailVal = 0;

const sumNums = numbers.reduce(function(prevVal,currentVal){

    return prevVal+currentVal;

},initailVal)


console.log(sumNums)

//using arrow function
const sumNum1 = numbers.reduce((prev,curr)=> prev+curr,0);

console.log(sumNum1);