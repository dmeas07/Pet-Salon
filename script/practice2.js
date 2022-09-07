// Object Literal
let lion ={
    name:"Simba",
    food:"Carnivaore",
    isTheKingOfJungle: true,

}

// Object Constructor

function Animal(name,food,isTheKingOfJungle){
    this.name=name;
    this.food=food;
    this.king=isTheKingOfJungle;
    this.age=age;
}

let obj1 = new Animal("Simba","Carnivore",true, 20);
let obj2 = new Animal("Rafiki","Fruits", false, 50);

let Car ={
    year: 1993,
    make: "Mazda",
    model: "RX-7",
    turbo: false,
}

function Automotive(year,make,model,turbo){
    this.year=year;
    this.make=make;
    this.model=model;
    this.turbo=turbo;

}
let obj3 = new Automotive("1979","Mazda", "RX-7", false);
let obj4 = new Automotive("1998","Nissan", "Skyline", true);

