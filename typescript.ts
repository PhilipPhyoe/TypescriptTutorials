//Multidimensional Array
const numbers: number [][] = [
    [1,2,3],
    [4,5,6],
]
//console.log(numbers);

//objects
const user: {name: string, email: string, phone: number} = {
    name: "Harry",
    email: "harry@gmail.com",
    phone: 123456,
}
//console.log(user);

//type
type User = {
    name: string,
    email: string,
    phone: string | number, //Unions
}

const printUserInfo = (user: User) => {
    return (`Name: ${user.name}, Email: ${user.email}, Phone: ${user.phone}`);
}

const result = printUserInfo({name: "Harry", email: "harry@gmail.com", phone: "123456"});
//console.log(result);

//Intersection Type &
type Moderator = {
    title: string,
    idcode: number,
}

type userModerator = User & Moderator;

const harry: userModerator = {
    name: "Harry",
    email: "harry@gmail.com",
    phone: "123456",
    title: "Admin",
    idcode: 123456,
}

//console.log(harry);

//Enums
enum WeatherCondition {
    Sunny = "Sunny",
    Rainy = "Rainy",
    Cloudy = "Cloudy",
    Windy = "Windy",
}
const currentWeather = WeatherCondition.Sunny;
//console.log(currentWeather);

//Interface

interface Person {
    name: string,
    age: number,
    gender: string,
}

function introPerson (Person: Person) {
    return `${Person.gender == ("Male" || "male") ? "Mr." : "Mrs."} ${Person.name} is ${Person.age} years old.`;
}

const Harry: Person = {
    name: "Harry",
    age: 56,
    gender: "Male",
}
const Jenny: Person = {
    name: "Jenny",
    age: 55,
    gender: "Female",
}

//console.log(introPerson(Harry));
//console.log(introPerson(Jenny));

//Generics

function print<T>(x: T): T {
    return x
}

//console.log(print<string>("Harry"));
//console.log(print<number>(32));

function BrandModel<S,N>(brand: S, model: S, make: N): [S,S,N] {
    return [brand, model, make];
}
interface car {
    name: string,
    model: string,
    make: number,
}

console.log(BrandModel<string,number>("Toyota", "MarkII", 1995));