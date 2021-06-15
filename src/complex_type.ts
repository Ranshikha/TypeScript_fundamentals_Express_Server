//Complex type

//Array as a list- It will only type of datatype which is being declared


let subjects : string[];
subjects=["History","civics"];
console.log(subjects[0])

let userHabits:string[];
userHabits=["Singing","dancing"]
userHabits=["Singing","dancing"]
userHabits.push("coding")
console.log(userHabits)


//Tuples - Types of sets-can have any type of datatype

// let veggies=[0,false,"chilly"]
let veggies :[number,string]
veggies=[44,"chilly"]
console.log(veggies)

//Array of tuples or list of tuples
//First we will go on tuples then on the tuples
let listOfVeggies:[number,string][];
listOfVeggies=[
    [1,"chilly"],
    [2,"patato"],
];
console.log(listOfVeggies)

//Maps

let slots = new Map()
slots.set("timing","4 PM")
slots.set("patient","ranshikha")
console.log(slots.get("timing"))

//Check this map as a key or not
console.log(slots.has("timing"))

//Map Iteration

 for (let values of slots.values()){
     console.log(values)
 }

 for (let values of slots.keys()){
    console.log(values)   
}
