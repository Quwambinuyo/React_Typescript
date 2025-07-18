import { z } from "zod";
import React, { useEffect, useState } from "react";

const App = () => {
  // Declaring a string variable and modifying it
  let awesomeName: string = "Shake and Bake";
  awesomeName = "something";
  awesomeName = awesomeName.toUpperCase();
  // console.log(awesomeName);
  // awesomeName = 20;

  // Number variable and basic arithmetic
  let amount: number = 20;
  amount = 12 - 5;
  // console.log(amount);

  // Boolean variable example
  let isAwesome: boolean = true;
  isAwesome = false;
  // console.log(isAwesome);
  // isAwesome = 'shake and bake'

  // Arithmetic between two numbers
  let isNumber1: number = 10;
  let isNubmber2: number = 40;
  let isNumber3: number = isNubmber2 / isNumber1;
  // console.log(isNumber3);

  // Working with string methods
  let isString1: string = "Hello ";
  let isString2: string = "World";
  // console.log(isString1.length);
  // console.log(isString2.charAt(0));
  // console.log(isString2.indexOf("o"));

  // Comparison with boolean result
  let isNum1 = 10;
  let isNum2 = 20;
  let isBool: boolean = isNum1 < isNum2;
  // console.log(isBool);

  // Union type (can be a number or string)
  let tax: number | string = 10;
  tax = 100;
  tax = "$100";
  // console.log(tax);

  // Literal type (only specific string values allowed)
  let requestStatus: "pending" | "success" | "error" = "pending";
  requestStatus = "success";
  // console.log(requestStatus);

  // Using `any` type (can be reassigned to any type)
  let notSure: any = 4;
  notSure = "maybe a string intead";
  notSure = false;
  // console.log(notSure);

  // Array of books and finding a specific book
  const books = ["1984", "Brave New World", "Fahrenheit 451"];
  let foundBook: string | undefined;

  for (let book of books) {
    if (book === "1984") {
      foundBook = book;
      foundBook = foundBook.toUpperCase();
      break;
    }
  }

  // Safe access using optional chaining (if foundBook is defined)
  // console.log(foundBook?.length);

  // Union type for discount
  let discount: number | string = 20;
  discount = "20%";

  // Another literal type example for order status
  let orderStatus: "processing" | "shipped" | "delivered" = "processing";
  orderStatus = "shipped";
  // console.log(orderStatus, discount);

  // Arrays and Objects in TypeScript
  // An array of numbers
  let prices: number[] = [100, 75, 42];
  // console.log(prices);

  // An array of strings
  let fruits: string[] = ["apple", "banana", "cashew"];
  // console.log(fruits);

  // An array of any type values (not recommended unless necessary)
  let emptyValues1: any[] = ["hello", 100];
  // console.log(emptyValues1);

  // An array with mixed types using union types
  let names = ["peter", "susan", 7, true];
  let array: (string | number | boolean)[] = ["peter", "susan", 7, true];
  // console.log(names, array);

  // Only numbers allowed in this array
  let temperatures: number[] = [20, 25, 30];
  // temperatures.push('hot') ❌ Invalid: 'hot' is a string
  // console.log(temperatures);

  // Only strings allowed in this array
  let colors: string[] = ["red", "green", "blue"];
  // colors.push(true) ❌ Invalid: true is a boolean
  // console.log(colors);

  // Mixed array with numbers and strings
  let mixedArray: (string | number)[] = [1, 2, 3, "four"];
  // console.log(mixedArray);

  // An object with `brand` (string) and `year` (number)
  let car: { brand: string; year: number } = { brand: "Toyota", year: 2020 };
  car.brand = "Ford"; // ✅ Valid update
  // car.color = 'black' ❌ Invalid: `color` is not defined in the type

  // Another object of the same structure
  let car1: { brand: string; year: number } = { brand: "Audi", year: 2022 };

  // Objects for array of items
  let book = { title: "book", cost: 20 };
  let pen = { title: "pen", cost: 10 };
  let notebook = { title: "notebook" }; // cost is optional
  // console.log(car1);

  // Array of objects with readonly `title` and optional `cost`
  let items: { readonly title: string; cost?: number }[] = [
    book,
    pen,
    notebook,
  ];
  // items[0].title = 'new book' ❌ Invalid: title is readonly
  // console.log(items);

  // Object representing a bike
  let bike: { brand: string; year: number } = { brand: "yamaha", year: 2024 };
  // bike.year = 'old' ❌ Invalid: 'old' is not a number
  // console.log(bike);

  // Another object for a laptop
  let laptop: { brand: string; year: number } = { brand: "Dell", year: 2023 };
  // laptop.brand = 4 ❌ Invalid: must be a string
  // let laptop2: { brand: string; year: number } = { brand: "HP" }; ❌ year missing
  // console.log(laptop);

  // Objects with optional price field
  let product1 = { title: "shirt", price: 20 };
  let product2 = { title: "short" }; // price is optional

  // Array of product objects with optional `price`
  let products: { title: string; price?: number }[] = [product1, product2];
  // products.push({ title: 'shoes', price: true }) ❌ Invalid: true is not a number
  // console.log(products);

  // Functions params and function returns
  // any - you can use any to get rid of the error
  // config - you can do the same by making changes to  your config file
  // type
  function sayHi(name: string) {
    // console.log(`Hello there ${name.toUpperCase()}`);
  }

  sayHi("John");

  // Function return
  function calculateDiscount(price: number): number {
    const hasDiscount = true;
    if (hasDiscount) {
      return price;
      // this throw an error if my function does have a number as a type
      // return 'Discount Applied'
    }
    return price * 0.9;
  }

  const finalPrice = calculateDiscount(200);
  // console.log(finalPrice);

  // A simple function that adds 3 to the provided number
  function addThree(number: any) {
    let anotherNumber: number = 3;
    return number + anotherNumber;
  }

  const result = addThree(3);
  const someValue = result;
  // console.log(someValue); // Output: 6

  // ===============================
  // Challenge: Check if name exists in array
  // ===============================
  const namesChallenge: string[] = ["John", "Jane", "Jim", "Jill"];

  // Function to check if a name exists in the namesChallenge array
  function isNameInList(name: string) {
    return namesChallenge.includes(name);
  }

  let nameToCheck = "Jill";

  // Conditional logging based on the result
  if (isNameInList(nameToCheck)) {
    // console.log(`${nameToCheck} is in the list`);
  } else {
    // console.log(`${nameToCheck} is not in the list`);
  }

  // ===============================
  // Optional Parameters in TypeScript
  // ===============================

  // `discount` is optional and defaults to 0 if not provided
  function calculatePrice(price: number, discount?: number): number {
    return price - (discount || 0);
  }

  let priceAfterDiscount = calculatePrice(100, 20);
  // console.log(priceAfterDiscount);

  // ===============================
  // Default Parameters in TypeScript
  // ===============================

  // `penaltyPoint` defaults to 0 if not passed
  function calculateScore(
    initialScore: number,
    penaltyPoint: number = 0
  ): number {
    return initialScore - penaltyPoint;
  }

  let scoreAfterPenalty = calculateScore(40, 10);
  let scoreWithoutPenalty = calculateScore(400);

  // console.log(scoreWithoutPenalty);
  // console.log(scoreAfterPenalty);

  // ===============================
  // Rest Parameters in TypeScript
  // ===============================

  // Accepts multiple numbers, doubles them, sums them, and returns with a message
  function sum(message: string, ...numbers: number[]): string {
    const doubled = numbers.map((num) => num * 2);
    // console.log(doubled);
    let total = numbers.reduce((prev, curr) => {
      return prev + curr;
    }, 0);

    return `${message} ${total}`;
  }

  let resultSum = sum("The total is : ", 1, 2, 3, 4, 5);
  // console.log(resultSum);

  // ===============================
  // Simple Logger Function
  // ===============================

  function logMessage(message: string) {
    // console.log(message);
  }

  logMessage(`Hello, Typescript`);

  // ===============================
  // Union Types and Type Narrowing
  // ===============================

  // challenge || Accepts either a string or number and processes accordingly
  function processInput(input: string | number) {
    if (typeof input === "number") {
      // console.log(input * 2);
    } else {
      // console.log(input.toUpperCase());
    }
  }

  processInput(10);
  processInput("Hello");

  // ===============================
  // Objects as Parameters in Functions
  // ===============================

  // Function that accepts an object with an `id` property and returns an object with `id` and `isActive`
  // If the `id` is even, `isActive` is true; otherwise false
  function createEmployee({ id }: { id: number }): {
    id: number;
    isActive: boolean;
  } {
    // calculate if the remainder of id is equals to 0 to return isActive as a true else false
    return { id, isActive: id % 2 === 0 };
  }

  const first = createEmployee({ id: 1 });
  const second = createEmployee({ id: 2 });

  // console.log(first, second);

  // ===============================
  // Alternative Object Handling in Functions
  // ===============================

  // Function that takes a student object with `id` and `name`
  // Logs a welcome message (in uppercase) to the console
  function createStudent(student: { id: number; name: string }): void {
    // console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
  }

  const newStudent = {
    id: 5,
    name: "anna",
  };

  // Will log the message but returns undefined (because return type is void)
  // console.log(createStudent(newStudent));

  // Uncommenting the line below would work fine, even with extra props like `email`
  // as long as the required ones (`id` and `name`) are present.
  // console.log(createStudent({ id: 1, name: "bob", email: "bobo@gmail.com" }));

  // ===============================
  // Challenge: Process Data Function
  // ===============================

  // Function to process a number or string input
  function processData(
    input: number | string,
    config: { reverse: boolean } = { reverse: false }
  ): string | number {
    if (typeof input === "number") {
      return input * input;
    } else {
      // If reverse is true, reverse the uppercase string
      return config.reverse
        ? input.toUpperCase().split("").reverse().join("")
        : input.toUpperCase();
    }
  }

  // console.log(processData(6));
  // console.log(processData("Bode"));
  // console.log(processData("Bode", { reverse: true }));

  // ===============================
  // Type Alias and User Creation Example
  // ===============================

  // Define a type alias `User` representing the structure of a user object
  type User = {
    id: number;
    name: string;
    isActive: boolean;
  };

  const john = {
    id: 1,
    name: "John",
    isActive: true,
  };

  const susan = {
    id: 1,
    name: "Susan",
    isActive: false,
  };

  // Function that accepts a `User` object and returns a new `User` object
  function createUser(user: User): User {
    // console.log(`Hello there ${user.name.toUpperCase()}`);
    return {
      id: user.id,
      name: String(user.name),
      isActive: user.isActive,
    };
  }

  createUser(john);
  createUser(susan);

  // ===============================
  // Challenge: Union Types and Type Narrowing
  // ===============================

  // Define a type for an individual employee
  type Employee = {
    id: number;
    name: string;
    department: string;
  };

  // Define a type for a manager who manages multiple employees
  type Manager = {
    id: number;
    name: string;
    employees: Employee[];
  };

  // `Staff` can be either an Employee or a Manager
  type Staff = Employee | Manager;

  // Function that prints details based on whether the staff is an Employee or Manager
  function printStaffDetails(staff: Staff): void {
    // Use type narrowing with the `in` operator to check if 'employees' exists
    if ("employees" in staff) {
      // If true, the staff is a Manager
      // console.log(
      `${staff.name} is a manager with ${staff.employees.length} employees.`;
      // );
    } else {
      // Otherwise, the staff is a regular Employee
      // // console.log(
      //   `${staff.name} is an employee in the ${staff.department} department`
      // );
    }
  }

  // Create some sample employees
  const alice: Employee = { id: 1, name: "alice", department: "Sales" };
  const steve: Employee = { id: 1, name: "steve", department: "HR" };

  // Create a manager who supervises the above employees
  const bob: Manager = { id: 1, name: "bob", employees: [alice, steve] };

  // Call the function to print details for an employee and a manager
  printStaffDetails(alice);
  printStaffDetails(bob);

  /// ===============================
  // Intersection Type with a Union
  // ===============================

  // Define a base type for Book
  type Book = {
    id: number;
    name: string;
    price: number;
  };

  type DiscountedBook = Book & { discount: number };

  // Create two book objects of type Book
  const book1: Book = {
    id: 1,
    name: "How to cook a dragon",
    price: 15,
  };

  const book2: Book = {
    id: 1,
    name: "the secret life of unicorns",
    price: 18,
  };

  // Intersection type: Book & { discount: number }
  // This means the object must have all properties from both Book AND the discount
  // const discountedBook: Book & { discount: number } = {
  const discountedBook: DiscountedBook = {
    id: 3,
    name: "Gnomes vs. Goblins: The ultimate Guide",
    price: 25,
    discount: 0.5,
  };

  // Print all the book objects
  // console.log(discountedBook, book1, book2);

  // ===============================
  // Index Signature (Dynamic Property Names)
  // ===============================

  // Define a property name using a variable
  const propName = "age";

  // Define a type where the key is a string literal value ('age') and the value is a number
  type Animal = {
    [propName]: number;
  };

  // Create an animal object using dynamic key assignment
  let tiger: Animal = { [propName]: 5 }; // Equivalent to { age: 5 }

  // console.log(tiger); // Output: { age: 5 }

  // ===============================
  // Union Type Example
  // ===============================

  // Define a type that can either be a string or number
  type StringOrNumber = string | number;

  let value: StringOrNumber;

  value = "Hello";
  value = 123;
  // console.log(value);

  // ===============================
  // Literal Type Example
  // ===============================

  // Define a type that allows only two string values: "light" or "dark"
  type Theme = "light" | "dark";

  let theme: Theme;

  theme = "dark";
  theme = "light";

  // console.log(theme);

  // Function that sets the theme using the Theme literal type
  function setTheme(t: Theme) {
    theme = t;
  }

  setTheme("dark");

  // ===============================
  // Interface Fundamentals
  // ===============================

  // Define a `BookInterface` to describe the structure of a book object
  interface BookInterface {
    // `isbn` is read-only and cannot be changed after initialization
    readonly isbn: number;

    // Required string properties
    title: string;
    author: string;

    // Optional property (may or may not be included)
    genre?: string;

    // Method to print the author's name
    printAuthor(): void;

    // Method that takes a message and returns a string combining it with the title
    printTitle(message: string): string;

    printSomething: (someValue: number) => number;
  }

  // Create an object `deepWork` that implements the `BookInterface`
  const deepWork: BookInterface = {
    isbn: 123,
    title: "deep work",
    author: "cal newport",
    genre: "self-help",

    // Method implementation to print the author
    printAuthor() {
      // console.log(this.author);
    },

    // Method implementation to print the title with a custom message
    printTitle(message) {
      return `${this.title} ${message}`;
    },

    // Implementation of printSomething as required by the interface
    //first option

    printSomething: function (someValue: number) {
      return someValue;
    },

    //second option
    /** 
    printSomething: (someValue) => {
      // console.log(deepWork.author);

      return someValue;
    },
    */
    //third option
    /** 
    printSomething(someValue) {
      return someValue;
    },
    */
    /**
    // fourth option
    printAuthor: () => {
      // console.log(deepWork.author);
    },
     */
  };

  // Call the `printAuthor()` method to log the author's name
  deepWork.printAuthor();
  // Call the `printTitle()` method with a message and store the result
  const resultTitle = deepWork.printTitle("is an Interesting book");

  // Log the returned string from `printTitle()`

  // console.log(resultTitle);
  // Log the returned number from `printSomething()`
  // console.log(deepWork.printSomething(34));
  deepWork.printAuthor();

  // ===============================
  // Challenge: Interface with Optional and Readonly Properties
  // ===============================

  // Define the Computer interface
  interface Computer {
    // `id` is readonly — it can't be changed after object creation
    readonly id: number;

    // Required properties
    brand: string;
    ram: number;

    // Method to upgrade the RAM and return the new RAM value
    upgradeRam(increase: number): number;

    // Optional storage property
    storage?: number;
  }

  // Create an object `laptopInterface` based on the Computer interface
  const laptopInterface: Computer = {
    id: 1,
    brand: "random brand",
    ram: 8,

    // Implement the `upgradeRam` method
    upgradeRam(amount) {
      // Increase the current RAM by the amount passed
      this.ram += amount;
      return this.ram;
    },
  };

  // Add storage property after object creation (optional property)
  laptopInterface.storage = 256;

  // Upgrade the RAM by 4 and log the new RAM value
  // console.log(laptopInterface.upgradeRam(4)); // Output: 12

  // Log the entire object to see updated values
  // console.log(laptopInterface);

  interface Person {
    name: string;
    getDetails(): string;
  }

  interface DogOwner {
    dogName: string;
    getDogDetails(): string;
  }

  //Merging Interface
  interface Person {
    age: number;
  }

  const person: Person = {
    name: "john",
    age: 30,
    getDetails() {
      return `Name: ${this.name}, Age:${this.age}`;
    },
  };

  // console.log(person.getDetails());

  // Extending interface
  interface EmployeeInterface extends Person {
    employeeId: number;
  }

  const employee: EmployeeInterface = {
    name: "jane",
    employeeId: 123,
    age: 28,
    getDetails() {
      return `Name: ${this.name}, Age:${this.age}, Employee ID: ${this.employeeId}`;
    },
  };

  // console.log(employee.getDetails());

  interface ManagerInterface extends Person, DogOwner {
    managerPeople(): void;
  }

  const manager: ManagerInterface = {
    name: "bob",
    age: 24,
    dogName: "jack",

    getDetails() {
      return `Name: ${this.name}, Age:${this.age}, Employee ID: ${this.dogName}`;
    },
    getDogDetails() {
      return `Name: is ${this.dogName}`;
    },
    managerPeople() {
      // console.log("managing people");
    },
  };

  manager.managerPeople();

  //Challenge

  interface PersonChallenge {
    name: string;
  }

  interface DogOwnerChallenge extends PersonChallenge {
    dogName: string;
  }

  interface ManagerChallenge extends PersonChallenge {
    managePeople(): void;
    delegateTasks(): void;
  }

  function getEmployeeChallenge():
    | PersonChallenge
    | DogOwnerChallenge
    | ManagerChallenge {
    const random = Math.random();
    // console.log(random);

    if (random < 0.33) {
      return { name: "Jake" };
    } else if (random < 0.66) {
      return { name: "Max", dogName: "Buddy" };
    } else {
      return {
        name: "Alice",
        // managePeople: () => console.log("Managing team"),
        // delegateTasks: () => console.log("Delegating tasks"),
      };
    }
  }

  // Call the function and store the result (if you want to use it)
  const employeeChallenge = getEmployeeChallenge();
  function isManagerChallenge(
    obj: PersonChallenge | DogOwnerChallenge | ManagerChallenge
  ): obj is ManagerChallenge {
    return "managePeople" in obj;
  }

  if (isManagerChallenge(employeeChallenge)) {
    employeeChallenge.delegateTasks();
  }

  // console.log(employeeChallenge);
  // console.log(employeeChallenge.name);
  // console.log(isManagerChallenge(employeeChallenge));

  // Tuples
  let personTuples: [string, number] = ["john", 25];
  // console.log(personTurples);
  let dateTuples: [number, number, number] = [12, 17, 2001];
  dateTuples.push(22);
  // console.log(dateTuples, personTuples);

  function getPersonTurples(): [string, number] {
    return ["john", 25];
  }

  let randomPersonTuples = getPersonTurples();
  // console.log(randomPersonTuples[0]);
  // console.log(randomPersonTuples[1]);

  let susanTuples: [string, number?] = ["susan"];

  // enum in typescript
  enum ServerResponseStatus {
    // Success = "success",
    // Error = "error",
    Success = 200,
    Error = 500,
  }

  // console.log(ServerResponseStatus);
  Object.values(ServerResponseStatus).forEach((value) => {
    if (typeof value === "number") {
      // console.log(value);
    }
  });

  interface ServerResponse {
    result: ServerResponseStatus;
    data: string[];
  }

  function getServerResponse(): ServerResponse {
    return {
      result: ServerResponseStatus.Success,
      data: ["first item", "second item"],
    };
  }

  const response: ServerResponse = getServerResponse();
  // console.log(response);

  // Challenge
  enum UserRole {
    Admin,
    Manager,
    Employee,
  }

  type UserEnum = {
    id: number;
    name: string;
    role: UserRole;
    contact: [string, string];
  };

  function createUserEnum(user: UserEnum): UserEnum {
    return user;
  }

  const user: UserEnum = createUserEnum({
    id: 1,
    name: "john doe",
    role: UserRole.Admin,
    contact: ["john@gmail.com", "123-456-789"],
  });

  // console.log(user);

  // let phoneNo: number = 4;
  // let randomNumber: number = Math.floor(Math.random() * (phoneNo + 1));
  // console.log(randomNumber);

  // let phoneNo: number = 4;
  // let phoneCheck: boolean = phoneNo > 5;
  // phoneCheck = !phoneCheck;
  // console.log(phoneCheck);

  // let orderStatuses: "processing" | "shipped" | "delivered" = "processing";
  // console.log(orderStatuses);
  // orderStatus = "shipped";
  // orderStatus = "delivered";

  // let anyArray: (number | string)[] = [1, 2, "hello"];
  // console.log(anyArray);

  // let carOwner: { brand: string; year: number } = {
  //   brand: "toyota",
  //   year: 2020,
  // };
  // let carOwner: { brand: string; year: number }
  // carOwner = { brand: "toyota", year: 2020 };
  // console.log(carOwner);

  // function calculateDiscounts(price: number): number {
  //   // price.toUpperCase();
  //   const hasDiscount = true;
  //   if (hasDiscount) {
  //     return price;
  //     // return 'Discount Applied';
  //   }
  //   return price * 0.9;
  // }

  // const finalPrices = calculateDiscounts(200);
  // console.log(finalPrices);
  // Type Assertion: Treating a value of one type as another (here from `any` to `string`)
  let someValueAssertion: any = "this is a string";

  // Using type assertion to access `length` property on a string
  let strLength: number = (someValueAssertion as string).length;

  // Define a simple type for Bird
  type Bird = {
    name: string;
  };

  // JSON strings (from an API or DB, typically)
  let birdString = '{"name": "Eagle"}';
  let dogString = '{"breed": "Dog"}';

  // Parse the strings into JS objects
  let birdObject = JSON.parse(birdString);
  let dogObject = JSON.parse(dogString);
  // console.log(dogObject);

  // Assert that parsed objects are of type Bird
  let bird = birdObject as Bird;
  let dog = dogObject as Bird; // ❗ Caution: dogObject does not have `name`, but we're asserting it as a Bird

  // console.log(bird.name); // ✅ Safe
  // console.log(dog.name); // ⚠️ Runtime error: 'name' is undefined

  // Define an enum for user status values
  enum Status {
    Pending = "pending",
    Declined = "declined",
  }

  // Define a User type with a name and status
  type UserAssertion = {
    name: string;
    status: Status;
  };

  // Simulate getting a status string from a database
  const statusValue = "pending";

  // Use type assertion to treat the string as a Status enum
  const userAssert: UserAssertion = {
    name: "john",
    status: statusValue as Status,
  };
  // console.log(userAssert.status);

  // Output the user object
  // console.log(userAssert);

  // ------------------------
  // Type: unknown
  // ------------------------

  // `unknown` is a type-safe counterpart to `any` — you must narrow it before using
  let unknownValue: unknown;

  // `unknownValue` can hold any type, but you can’t access properties or call methods on it directly
  unknownValue = [1, 2, 3];
  unknownValue = 42.33455;

  // This line will cause an error because `unknownValue` might not be a number
  // unknownValue.toFixed(2)

  // You must check the type before using it safely
  if (typeof unknownValue === "number") {
    unknownValue.toFixed(2); // ✅ Safe now
  }
  // if (Array.isArray(unknownValue)) {
  //   console.log("yes it is an array");
  // }
  // ------------------------
  // Safe Error Handling with unknown thrown errors
  // ------------------------

  function runSomeCode() {
    const random = Math.random();

    if (random < 0.5) {
      throw new Error("there was an error...."); // Throws an Error object
    } else {
      throw "some error"; // Throws a string (not ideal, but possible)
    }
  }

  try {
    runSomeCode();
  } catch (error) {
    // TypeScript treats error as `unknown`, so we need to narrow it
    if (error instanceof Error) {
      // console.log(error.message); // ✅ Access safe Error properties
    } else {
      // console.log(error); // ⚠️ Could be anything — string, number, etc.
    }
  }

  // ------------------------
  // Type: never
  // ------------------------

  // Uncommenting this will cause an error: `never` means no value can ever be assigned
  // let someValueNever: never = 0;

  // A union type with limited literal values
  type ThemeNever = "light" | "dark";

  function checkTheme(theme: ThemeNever): void {
    if (theme === "light") {
      // console.log("light theme");
      return;
    }

    if (theme === "dark") {
      // console.log("dark theme");
      return;
    }

    // This line enforces exhaustiveness — theme should be `never` here if all cases are handled
    theme;
  }

  // checkTheme("light");

  // ------------------------
  // Exhaustive Checking with Enums and `never`
  // ------------------------

  enum Color {
    Red,
    Blue,
    Green,
  }

  function getColorName(color: Color) {
    switch (color) {
      case Color.Red:
        return "Red";
      case Color.Blue:
        return "Blue";
      case Color.Green:
        return "Green";
      default:
        // At compile time, this ensures all enum members are handled
        let unexpectedColor: never = color;

        // At runtime, if something slips through, we throw an error
        throw new Error(`unexpected color value: ${color}`);
    }
  }

  // Test all defined enum values
  // console.log(getColorName(Color.Red));
  // console.log(getColorName(Color.Blue));
  // console.log(getColorName(Color.Green));

  // ------------------------
  // Type Guarding with typeof
  // ------------------------

  // Union type that could be a string, number, or boolean
  type valueType = string | number | boolean;

  let valueGuard: valueType;

  // Randomly assign a value: string, number, or boolean
  const random = Math.random();
  valueGuard = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;

  // Function to check the type of value at runtime using typeof
  function checkValue(value: valueType): void {
    if (typeof value === "string") {
      // If the value is a string, convert to lowercase
      // console.log(value.toLowerCase());
      return;
    }

    if (typeof value === "number") {
      // If it's a number, format to 2 decimal places
      // console.log(value.toFixed(2));
      return;
    }

    // If it's a boolean, log it as a boolean
    // console.log(`boolean : ${value}`);
  }

  // checkValue(valueGuard);

  // ------------------------
  // Equality Narrowing with Discriminated Unions
  // ------------------------

  // Dog and Cat types with a shared 'type' property (discriminant)
  type Dog = { type: "dog"; name: string; bark: () => void };
  type Cat = { type: "cat"; name: string; meow: () => void };
  type AnimalNarr = Dog | Cat;

  // Type narrowing using equality check on the 'type' property
  function makeSound(animal: AnimalNarr) {
    if (animal.type === "dog") {
      // TypeScript now knows `animal` is a Dog
      animal.bark();
    } else {
      // Otherwise, it's a Cat
      animal.meow();
    }
  }

  // // 1. Define Dog and Cat types
  // type Dog = { type: "dog"; name: string; bark: () => void };
  // type Cat = { type: "cat"; name: string; meow: () => void };

  // // 2. Union type
  // type AnimalNarr = Dog | Cat;

  // // 3. Function that handles either Dog or Cat
  // function makeSound(animal: AnimalNarr) {
  //   console.log(`this is the type: ${animal.type}`);
  //   if (animal.type === "dog") {
  //     animal.bark();
  //   } else {
  //     animal.meow();
  //   }
  // }

  // // 4. Create a dog object
  // const dog: Dog = {
  //   type: "dog",
  //   name: "Spike",
  //   bark: () => console.log("Woof!"),
  // };

  // // 5. Call the function
  // makeSound(dog);

  // ------------------------
  // instanceof Type Guard: Error Handling Example
  // ------------------------

  // This demonstrates how to safely check if an error is an actual Error object
  // using `instanceof` inside a try/catch block

  // try {
  //   throw new Error("This is an error");
  // } catch (error) {
  //   // TypeScript treats caught errors as `unknown`
  //   // So we must narrow it using `instanceof Error`
  //   if (error instanceof Error) {
  //     console.log(`Caught an Error Object : ${error.message}`); // ✅ Safe to access `message`
  //   } else {
  //     console.log("unknown error..."); // Could be anything (e.g., string)
  //   }
  // }

  // ------------------------
  // instanceof Type Guard: Date vs String
  // ------------------------

  // Function accepts either a Date object or a string
  function checkInput(input: Date | string): string {
    // Use instanceof to check if the input is a Date object
    if (input instanceof Date) {
      // If it's a Date, extract the year and return as string
      return input.getFullYear().toString();
    }

    // Otherwise, it's a string, return as-is
    return input;
  }

  // Testing the function with a Date object
  const year = checkInput(new Date());

  // Testing the function with a string input
  const randomDate = checkInput("2020-05-05");

  // console.log(year);
  // console.log(randomDate);

  // ------------------------
  // Challenge: Discriminated Union + Exhaustive Check using `never`
  // ------------------------

  // Two action types with a discriminating `type` field
  type IncreamentAction = {
    type: "increment";
    amount: number;
    timestamp: number;
    user: string;
  };

  type DecreamentAction = {
    type: "decrement";
    amount: number;
    timestamp: number;
    user: string;
  };

  // Union of all possible actions
  type ActionDisc = IncreamentAction | DecreamentAction;

  // A reducer function to handle state changes based on the action
  function reducer(state: number, action: ActionDisc) {
    switch (action.type) {
      case "increment":
        return state + action.amount; // ✅ Handles increment case
      case "decrement":
        return state - action.amount; // ✅ Handles decrement case
      default:
        // 🔴 If a new action is added and not handled above, this triggers a compile-time error
        const unexpectedAction: never = action;
        throw new Error(`Unexpected action : ${unexpectedAction}`);
    }
  }

  // Using the reducer with a valid increment action
  const newState = reducer(15, {
    user: "john",
    type: "increment",
    amount: 5,
    timestamp: 123456,
  });
  // GENERICS IN TYPESCRIPT

  // ❌ Specific typed arrays (repetitive approach)
  // let array1: string[] = ["Apple", "Banana", "Mango"];
  // let array2: number[] = [1, 2, 3];
  // let array3: boolean[] = [true, false, true];

  // ✅ More generic syntax for arrays using Array<T>
  // let array1: Array<string> = ["Apple", "Banana", "Mango"];

  // ❌ Non-generic, repetitive function approach
  // function createString(arg: string): string {
  //   return arg;
  // }
  // function createNumber(arg: number): number {
  //   return arg;
  // }

  // ✅ Generic function — reusable for any type
  function genericFunction<T>(arg: T): T {
    return arg;
  }

  // Using the generic function with different types
  const someStringValue = genericFunction<string>("Hello World");
  const someNumberValue = genericFunction<number>(7);
  const someBoolValue = genericFunction<boolean>(7 < 6);

  // ✅ Generic interface — allows a flexible type for properties and methods
  interface GenericInterface<T> {
    value: T;
    getValue: () => T;
  }

  // Using the generic interface with a string type
  const genericString: GenericInterface<string> = {
    value: "Hello World",
    getValue() {
      return this.value;
    },
  };

  // ✅ Promise with a generic return type
  async function someFunc(): Promise<string> {
    return "hello world";
  }
  const resultGen = someFunc(); // resultGen is of type Promise<string>

  // ❌ Non-generic version of array creation
  function generateStringArray(length: number, value: string): string[] {
    let result: string[] = [];
    result = Array(length).fill(value);
    return result;
  }

  // ✅ Generic array creation function — reusable for any type
  function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    result = Array(length).fill(value);
    return result;
  }

  // Creating string and number arrays using the generic function
  let arrayStrings = createArray<string>(10, "Happy");
  let arrayNumbers = createArray<number>(10, 7);

  // ✅ Generics with multiple type variables (tuple return)
  function pair<T, U>(param1: T, param2: U): [T, U] {
    return [param1, param2];
  }
  let resultMultipleV = pair<number, string>(123, "hello"); // returns [123, "hello"]

  // ✅ Generics with type constraint (only string or number allowed)
  function processValue<T extends string | number>(value: T): T {
    return value;
  }
  processValue("hello"); // valid
  processValue(6); // valid
  // processValue(true); // ❌ invalid — boolean not allowed

  // ✅ Interface with default generic type (T defaults to `any` if not provided)
  interface StoreData<T = any> {
    data: T[];
  }

  // Specifying number type explicitly
  const storeNumbers: StoreData<number> = {
    data: [1, 2, 3, 4],
  };

  // Using default generic type (T = any) — allows mixed types
  const randomStuff: StoreData = {
    data: ["random", 1],
  };
  // ✅ Import zod at the top of your file
  // import { z } from "zod";

  // ✅ Define the API endpoint
  const url = "https://www.course-api.com/react-tours-project";

  // ✅ Define a Zod schema to validate the structure of each tour object
  const tourSchema = z.object({
    id: z.string(), // ID must be a string
    name: z.string(), // Name must be a string
    info: z.string(), // Info/description must be a string
    image: z.string(), // Image URL must be a string
    price: z.string(), // Price must be a string
  });

  // ✅ Infer the TypeScript type from the Zod schema
  type Tour = z.infer<typeof tourSchema>;

  // ✅ Fetch data from the API and validate it using Zod
  async function fetchData(url: string): Promise<Tour[]> {
    try {
      // Send HTTP GET request
      const response = await fetch(url);

      // If the request fails, throw an error
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the JSON response into raw data
      const rawData: Tour[] = await response.json();

      // Use Zod to validate the array of tour objects
      const result = tourSchema.array().safeParse(rawData);
      console.log(result); // Log result for debugging

      // If validation fails, throw an error with details
      if (!result.success) {
        throw new Error(`invalid data: ${result.error}`);
      }
      return result.data;
    } catch (error) {
      // Handle errors: log and return empty array
      const errorMsg =
        error instanceof Error ? error.message : "there was an error!...";
      // console.log(errorMsg); // Optional debug log
      return [];
    }
  }

  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    const getTours = async () => {
      const data = await fetchData(url);
      setTours(data);
    };
    getTours();
  }, []);

  return (
    <div>
      {tours.map((tour) => {
        // console.log(tour);

        return (
          <div key={tour.id}>
            <h2>{tour.name}</h2>
            {/* <p>{tour.info}</p> */}
            {/* <p>${tour.price}</p> */}
            {/* <img src={tour.image} alt={tour.name} width="200" /> */}
          </div>
        );
      })}
    </div>
  );
};

export default App;
