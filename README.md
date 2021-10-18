# ts-projects

## [TypeScript](https://www.typescriptlang.org/docs/)

- superset of JavaScript
  - or extension

### Why Typescript is better?

- Getting errors in transpiler and not in run time
  - You see errors in your editor or console
- It is easiest to maintain and scale your app than JavaScript
  - Helps us to work with entities

### Do you need to learn TypeScript?
  
- Yes, a lot of companies use TypeScript
- Helps you write code better
- Helps you think of data types and how its use in your app

### Setting Up TypeScript tools

- install node.js
  - check to see if you have node.js on your system `node -v`

- install TypeScript
  - `npm install -g typescript`
  - check to see if you have TypeScript on your system `tsc -v`

### Tips

- need to transpiler your TypeScript file to JavaScript, because TypeScript does not run on a browser
  - `tsc (name of TypeScript file)` in terminal
  - watch mode `tsc (name of TyeScript file) -w` in terminal
  - TypeScript by default will transpiler in ES3
    - this will allow the app to work on every browser

- tsconfig.json is a file specifies the root files and the compiler options required to compile the project
  - You can setup your own options in the tsconfig.json file
  - make a file called `tsconfig.json` and place this object

    ```json
    {
      "compilerOptions":{
        "rootDir": "./src",
        "outDir": "./dis"
      } 
    }
    ```

  - the `rootDir` is where to put your TypeScript file
  - the `outDir` is where your output directory for compiled JavaScript code

- Or you can type in terminal `tsc --init`
  - [What is a tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

### Type Definitions

- Variables in TypeScript
  - var
  - const - can't be changed through reassignment, and it can't be redeclare.
  - let - declares a block-scoped local variable, optionally initializing it to a value.

  ```typescript
  let myName: string = '';
  let myAge: number = 0;
  let myLocation: boolean = true;
  let colors: string[] = ['blue', 'green', 'red']
  let colors: number[] = [10, 15, 23]
  ```

### Functions In TypeScripts

- Functions are like JavaScript in TypeScript but need to give types to arguments and the return

```typescript
const getFullName = (firstName:string, lastName: string): string => {
  return firstName + '' + lastName;
}
console.log(getFullName('Jon', 'Smith'));

```

### Interfaces

- Interfaces in TypeScript help us to describe entities in objects

#### Creating Objects

```typescript
const user: { name: string, age: number } = {
  name: 'Paul',
  age: 35
}
const user2: { name: string, age: number } = {
  name: 'Jon',
  age: 34
}
```

- A better way to write this with interface

```typescript
interface User{
  name:string;
  age: number;
}
const user: User = {
  name: 'Paul',
  age: 35
}
const user2: User = {
  name: 'Jon',
  age: 34
}
```

- put a `?` after the property will make the property not mandatory in an interface

```typescript
interface User{
  name:string;
  age?: number;

}
const user: User = {
  name: 'Paul',
  age: 35
}
const user2: User = {
  name: 'Jon'
}
```

#### Creating Functions

```typescript
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
```

### Types and Unions

#### Union Operator in TypeScript

`|`: is a Union Operator in TypeScript combine data types

```typescript
let pageName: string | number ='1';
```

