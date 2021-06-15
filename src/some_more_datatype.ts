//Union datatype- Its is take the datatype which is assign only not other than that.
/*It will the recent declare datatpe as an output*/
let decideType : boolean | string | number;
decideType=55;
decideType=false
decideType="55";
console.log(decideType)


//any keyword-It is like a dynamic
/*Avoide using any type because it will consider the least which which is recently declare */

let car: any
car=55;
car=["acbb"];
car=false;
console.log(car)

//Custom type- Here in the example the user1 is custom type of userUid

type userUid =string|number;
let user1:userUid;
// user1=false
user1=55
console.log(user1)


type carData =string;
let myCar:carData;
myCar="audi"
console.log(myCar)


//Type Intelligence-In below example the vs code will identify the datatype of the variable itself

let myHobbies=["slepping",false,30]