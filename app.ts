import Hobby from "./modules/Hobby";
import User from "./modules/User";

var userInfo:string = `${new User("Shakil").getName()} loves ${new Hobby("Coding").getHobby()} as a hobby!`;

console.log(userInfo);
