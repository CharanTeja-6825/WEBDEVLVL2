# Introduction to Node Js and Express
## Lesson Plan Overview
### 1.Introduction to Node.js

 **Introduction To Node.js**
 - Node js is a runtime that is built on chrome's V8 javascript Engine .
 - It can handle asynchronous tasks, and macro(I/O and networking) and micro (promises) without and block overhead.
 - It is a Event-driven architecture where we can build or scale applications based on custom events which are triggered by the users.
 - It gives the promise kind of tasks a high priority.
 - This is an ideal runtime for real-world applications.
 - It's single threaded, without any block overhead or thread management.
 - npm (Node Package Manager) is used to handle dependencies.
 - It offers different kinds of packages such as fs(file system), io(input / output), http(server requests), events(emitter) kind of packages to build applications.
 
 **Properties**
 - Asynchronous
 - Single-Threaded
 - The code and runtime speed makes you feel in such a way that it is running a multi threaded process but it still does processes one by one.

### 2. Introduction to Express.js

 **Introduction to Express Js**
    
  **What is Express js and Why it is used ?**
    - Express js is a minimalist framework built on node js framework for mainly handling https routings and also the requests / responses efficiently and clearly.
    - It also simplifies the API integration and also static file serving.
    - It provides middleware and its functions to handle the requests and responses.

### 3. Modules and CommonJs

  **Modules**
    - Modules in Node js are used to export functionalities from other js files using a keyword "export" before the funciton declaration with which we can import the module using the import statement.
    - Usage : Used for large projects which require dynamic tracking of used and non-used code to leave space for bundling.
    - It is fast compared to CommonJs which is another method of importing files.
  
  **CommonJs**
    - CommonJs in Node js is also used to share functionality between js files, but the procedure is different i.e here the file functionalities are shared using a require() method which takes the file name as argument.
    - And also the file which is going to be exported should also contain something like this...
    ```js
    const add = (a, b) => {
      return (a+b);
    }
    const mul = (a, b) => {
      return (a * b);
    }
    module.export = {add, mul};
    ```
    - And while importing it looks like this...
    ```js
    const math = require("./math);
    // you can use the function as
    const result = math.add(23, 66);
    console.log(result); // result : 89
    ```
    
