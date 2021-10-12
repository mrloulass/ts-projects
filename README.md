# ts-projects

## TypeScript

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
  - const
  - let
