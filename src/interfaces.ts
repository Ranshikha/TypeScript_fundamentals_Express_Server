//interfaces- It is little bit same as custom type but the difference is the declared under object model
/* Always declare interface as Captial  */
// type car1Data = string| boolean;

interface DogData{
    name:string;
    breed :string;
    age:number;
}

const dog1 :DogData={
    name: "Bruno",
    breed :"German Shephard",
    age:10,
};
//Proprty of dodData

console.log(dog1.name)

//Interface is when we are building our authentication model

interface UserData{
    username:string,
    useremail: string,
}
//Create different users
const user2 :UserData={
    username:"Ranshikha",
    useremail:"ranshikha@gmail.com",
}

// let tempUserEmail;
// user2.useremail= tempUserEmail;