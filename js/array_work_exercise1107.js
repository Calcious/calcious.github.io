/**
 * Created by Calcious on 11/7/16.
 */
//Array Work
//Write a function to put the following array in alphabetical order:
//['e','a','g','c','i','d','f','b','h']
//a=1,b=7,c=3,d=5,e=0,f=6,g=2,h=8--index values


var arrayWork = ['e','a','g','c','i','d','f','b','h'];
var sortedArray = [];



for(var i = 0; i <= arrayWork.length; i++) {
    var arrayWorkIndex = arrayWork[1];
    if (arrayWorkIndex == 1){
        sortedArray.push(arrayWorkIndex);
    }
}
console.log(arrayWork);
console.log(sortedArray);