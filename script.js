//!Session practice
class Car {
  constructor(brand, color, model, type, price, section) {
    this.brand = brand;
    this.color = color;
    this.model = model;
    this.type = type;
    this.price = price;
    this.section = section;
  }
}
const cardetails = new Car(
  "Kia",
  "Black",
  "Carens",
  "7-Seater X-Line",
  "12 Lakhs",
  "SUV"
);
console.log(cardetails);

//! Task 1(a): Constructor for the class Movie
/*
    class Movie{
        constructor(title,studio,rating){
            this.title=title;
            this.studio=studio;
            this.rating=rating;
        }
    }
    const film=new Movie("Jailer","Sun Prodcutions","8")
    console.log(film);
    */

//! Task 1(b): Constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided
/*
    class Movie{
        constructor(title,studio,rating="PG"){
            this.title=title;
            this.studio=studio;
            this.rating=rating;
        }
    }
    const Star=new Movie("leo","7 Screen Studio","7.2")
    console.log(Star);
*/

//! Task 1(c): 
class Movie{
  constructor(title,studio,rating="PG"){
      this.title=title;
      this.studio=studio;
      this.rating=rating;
  }
}
const Star=new Movie("leo","7 Screen Studio","7.2")
const Power=new Movie("Avenger","marvel studios")
const Release= new Movie("Wonka","Hollywood","7.0")
const Super = new Movie("Godzilla","CG")
const Comedy = new Movie("Kung fu Panda 4","VFX")
console.log(Star);
console.log(Power);
console.log(Release);
console.log(Super);
console.log(Comedy);

//! Task 1(d):  creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
/*
class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const Hollywood = new Movie("Casino Royale", "Eon Productions", "PG­13");
console.log(Hollywood);
*/

//! Task 2:
/*
class Circle{
  constructor(radius,color){
      this.radius=radius;
      this.color = color;
  }
  get Radius(){
      return this.radius
  }
  set Radius(n){
      this.radius = n;
  }
  get Color(){
      return this.color;
  }
  set Color(c){
      this.color = c
  }
  get toString(){
      return `"Circle[radius= ${this.radius} ,color = ${this.color}]"`
  }
  get area(){
      return Math.PI*Math.pow(this.radius,2)
  }
  get circumference(){
      return 2*Math.PI*this.radius
  }
}
let obj = new Circle(1.0,"red") 
console.log(obj.Color);
console.log(obj.Radius);
console.log(obj.toString);
console.log(obj.area);
console.log(obj.circumference);
obj.Radius=3.5
console.log(obj.Radius);
obj.Color="green"
console.log(obj.Color);
*/

//! Task 3: Constructor for a class Person to hold all the details
class Person{
    constructor(name,age,gender,MartialStatus,contact,gmail){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.MartialStatus=MartialStatus;
        this.contact=contact;
        this.gmail=gmail;
    }
}
    const information=new Person("John Wesley","22","male","single","6381301756","johnwesley2307r@gmail.com")
    console.log(information);

//! Task 4: Constructor for a class to calculate the Uber price.
class Uber{
  constructor(kilometer,price){
    this.kilometer=kilometer;
    this.price=price;
  }
  set Price(n){
     this.price=n;
  }
  get Price(){
    return kilometer*n;
  }
}
let obj= new Uber(10,20)
console.log(obj);