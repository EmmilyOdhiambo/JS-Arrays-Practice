//find the last elements in the following arrrays?
// arr1=[5,50,256,"stethanie",false]
// arr2=["teachers","emmily",90, true]
let arr1 =[5,50,256,"stethanie",false]
let elements=arr1.slice(-1)
console.log(elements);
console.log(arr1.length);

let arr2=["teachers","emmily","oranges", true]
let lastElement = arr2.slice(-1)
console.log(lastElement);
console.log(arr2.sort())

let arr = arr2[1]
console.log(arr);

//write a js that will join the following array elements into a string
array=["Stephanie Emmily","student"]
array1=["Destiny Emmie","Doctor"]
let myChildren = array.concat(array1);
console.log(myChildren);

//Write a js to sort the following array 
let fruits = ["banana","oranges","apple","mangoo"]
console.log(fruits.sort ().reverse())

//Write a JavaScript program to sort the items of an array. Go to the editor
//Sample array:
 var arry = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
 let array2 = arry.sort((a,b) =>a-b)
 console.log(array2);


