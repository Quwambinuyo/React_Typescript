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
  // isAwesome = 'shake and bake' //

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
  let isBool: boolean = true;
  isBool = isNum1 < isNum2;
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

  return <div>App</div>;
};

export default App;
