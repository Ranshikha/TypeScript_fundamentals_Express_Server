//classes

class Car{
    //members
    model: string;
    engine: string
    //Create constructor
    constructor(x:string,y:string){
        this.model=x;
        this.engine=y;
    }
    //method
carData(){
 return `model ${this.model} has ${this.engine} engine`;
}
}
const car1 = new Car("Audi","NHY")
console.log(car1.carData())

/*Classes will be giving some custom type
But
Interfaces will giving us only member of the data
 */
