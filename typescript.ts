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
console.log(currentWeather);