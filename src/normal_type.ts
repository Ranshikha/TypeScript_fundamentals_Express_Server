//Normal types
function sumOfNumbers(x:number,y:number){
    return x+y;
}
console.log(sumOfNumbers(5,7))
 
//Explicit Type- Telling that the result will be a number
function sumOfNumbers1(x:number,y:number):number{
    return x+y;
}
console.log(sumOfNumbers1(11,11))

//Optinal Argument
function callMe(n:string,age?:number){
    return n + " was called by " +age;
}
console.log(callMe("Ranshikha",66))

