const App = () => {
  // Declaring a string variable and modifying it
  let awesomeName: string = "Shake and Bake";
  awesomeName = "something";
  awesomeName = awesomeName.toUpperCase();
  console.log(awesomeName);
  // awesomeName = 20;

  // Number variable and basic arithmetic
  let amount: number = 20;
  amount = 12 - 5;
  console.log(amount);
  // Boolean variable example
  let isAwesome: boolean = true;
  isAwesome = false;
  console.log(isAwesome);
  // isAwesome = 'shake and bake'

  // Arithmetic between two numbers
  let isNumber1: number = 10;
  let isNubmber2: number = 40;
  let isNumber3: number = isNubmber2 / isNumber1;
  console.log(isNumber3);
  // Working with string methods
  let isString1: string = "Hello ";
  let isString2: string = "World";
  console.log(isString1.length);
  console.log(isString2.charAt(0));
  console.log(isString2.indexOf("o"));

  // Comparison with boolean result
  let isNum1 = 10;
  let isNum2 = 20;
  let isBool: boolean = isNum1 < isNum2;
  console.log(isBool);

  // Union type (can be a number or string)
  let tax: number | string = 10;
  tax = 100;
  tax = "$100";
  console.log(tax);

  // Literal type (only specific string values allowed)
  let requestStatus: "pending" | "success" | "error" = "pending";
  requestStatus = "success";
  console.log(requestStatus);

  // Using `any` type (can be reassigned to any type)
  let notSure: any = 4;
  notSure = "maybe a string intead";
  notSure = false;
  console.log(notSure);

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
  console.log(foundBook?.length);

  // Union type for discount
  let discount: number | string = 20;
  discount = "20%";

  // Another literal type example for order status
  let orderStatus: "processing" | "shipped" | "delivered" = "processing";
  orderStatus = "shipped";
  console.log(orderStatus, discount);

  // Arrays and Objects in TypeScript
  // An array of numbers
  let prices: number[] = [100, 75, 42];
  console.log(prices);

  // An array of strings
  let fruits: string[] = ["apple", "banana", "cashew"];
  console.log(fruits);

  // An array of any type values (not recommended unless necessary)
  let emptyValues1: any[] = ["hello", 100];
  console.log(emptyValues1);

  // An array with mixed types using union types
  let names = ["peter", "susan", 7, true]; // inferred as (string | number | boolean)[]
  let array: (string | number | boolean)[] = ["peter", "susan", 7, true];
  console.log(names, array);

  // Only numbers allowed in this array
  let temperatures: number[] = [20, 25, 30];
  // temperatures.push('hot') ❌ Invalid: 'hot' is a string
  console.log(temperatures);

  // Only strings allowed in this array
  let colors: string[] = ["red", "green", "blue"];
  // colors.push(true) ❌ Invalid: true is a boolean
  console.log(colors);

  // Mixed array with numbers and strings
  let mixedArray: (string | number)[] = [1, 2, 3, "four"];
  console.log(mixedArray);

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
  console.log(car1);

  // Array of objects with readonly `title` and optional `cost`
  let items: { readonly title: string; cost?: number }[] = [
    book,
    pen,
    notebook,
  ];
  // items[0].title = 'new book' ❌ Invalid: title is readonly
  console.log(items);

  // Object representing a bike
  let bike: { brand: string; year: number } = { brand: "yamaha", year: 2024 };
  // bike.year = 'old' ❌ Invalid: 'old' is not a number
  console.log(bike);

  // Another object for a laptop
  let laptop: { brand: string; year: number } = { brand: "Dell", year: 2023 };
  // laptop.brand = 4 ❌ Invalid: must be a string
  // let laptop2: { brand: string; year: number } = { brand: "HP" }; ❌ year missing
  console.log(laptop);

  // Objects with optional price field
  let product1 = { title: "shirt", price: 20 };
  let product2 = { title: "short" }; // price is optional

  // Array of product objects with optional `price`
  let products: { title: string; price?: number }[] = [product1, product2];
  // products.push({ title: 'shoes', price: true }) ❌ Invalid: true is not a number
  console.log(products);

  // Functions params and function returns
  // any - you can use any to get rid of the error
  // config - you can do the same by making changes to  your config file
  // type
  function sayHi(name: string) {
    console.log(`Hello there ${name.toUpperCase()}`);
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
  console.log(finalPrice);

  // A simple function that adds 3 to the provided number
  function addThree(number: any) {
    let anotherNumber: number = 3;
    return number + anotherNumber;
  }

  const result = addThree(3);
  const someValue = result;
  console.log(someValue); // Output: 6

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
    console.log(`${nameToCheck} is in the list`);
  } else {
    console.log(`${nameToCheck} is not in the list`);
  }

  // ===============================
  // Optional Parameters in TypeScript
  // ===============================

  // `discount` is optional and defaults to 0 if not provided
  function calculatePrice(price: number, discount?: number): number {
    return price - (discount || 0);
  }

  let priceAfterDiscount = calculatePrice(100, 20);
  console.log(priceAfterDiscount);

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

  console.log(scoreWithoutPenalty);
  console.log(scoreAfterPenalty);

  // ===============================
  // Rest Parameters in TypeScript
  // ===============================

  // Accepts multiple numbers, doubles them, sums them, and returns with a message
  function sum(message: string, ...numbers: number[]): string {
    const doubled = numbers.map((num) => num * 2);
    console.log(doubled);
    let total = numbers.reduce((prev, curr) => {
      return prev + curr;
    }, 0);

    return `${message} ${total}`;
  }

  let resultSum = sum("The total is : ", 1, 2, 3, 4, 5);
  console.log(resultSum);

  // ===============================
  // Simple Logger Function
  // ===============================

  function logMessage(message: string) {
    console.log(message);
  }

  logMessage(`Hello, Typescript`);

  // ===============================
  // Union Types and Type Narrowing
  // ===============================

  // challenge || Accepts either a string or number and processes accordingly
  function processInput(input: string | number) {
    if (typeof input === "number") {
      console.log(input * 2);
    } else {
      console.log(input.toUpperCase());
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

  console.log(first, second);

  // ===============================
  // Alternative Object Handling in Functions
  // ===============================

  // Function that takes a student object with `id` and `name`
  // Logs a welcome message (in uppercase) to the console
  function createStudent(student: { id: number; name: string }): void {
    console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
  }

  const newStudent = {
    id: 5,
    name: "anna",
  };

  // Will log the message but returns undefined (because return type is void)
  console.log(createStudent(newStudent));

  // Uncommenting the line below would work fine, even with extra props like `email`
  // as long as the required ones (`id` and `name`) are present.
  // console.log(createStudent({id:1, name: 'bob', email:'bobo@gmail.com'}));

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

  console.log(processData(6));
  console.log(processData("Bode"));
  console.log(processData("Bode", { reverse: true }));

  return <div>App</div>;
};

export default App;
