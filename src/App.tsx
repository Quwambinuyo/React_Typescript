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
  let names = ["peter", "susan", 7, true]; // inferred as (string | number | boolean)[]
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

  console.log(user);

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

  // Assert that parsed objects are of type Bird
  let bird = birdObject as Bird;
  let dog = dogObject as Bird; // ❗ Caution: dogObject does not have `name`, but we're asserting it is a Bird

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
    status: statusValue as Status, // ✅ Trusted assertion: "pending" matches Status.Pending
  };

  // Output the user object
  console.log(userAssert);

  return <div>App</div>;
};

export default App;
