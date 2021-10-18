let hello: string = 'world';

console.log(hello)

const getFullName = (firstName: string, lastName: string): string => {
  return firstName + '' + lastName;
}

console.log(getFullName('Jon', 'Smith'));


interface User {
  name: string;
  age?: number;
  getMessage(): string;
}
const user: User = {
  name: 'Paul',
  age: 35,
  getMessage(){
    return 'Hello ' + user.name;
  }
}

const user2: User = {
  name: 'Jack',
  getMessage(){
    return 'Hello ' + user2.name;
  }
}
console.log(user.getMessage())

interface UserInterface {
  name: string
}

let username: string ='Louis';

let pageName: string | number ='1';

let errorMessage: string | null = null;

