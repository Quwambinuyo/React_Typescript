const App = () => {
  let awesomeName: string = "Shake and Bake";
  awesomeName = "something";
  awesomeName = awesomeName.toUpperCase();
  console.log(awesomeName);
  // awesomeName = 20;

  let amount: number = 20;
  amount = 12 - 5;
  console.log(amount);
  // amount = "Pant";

  let isAwesome: boolean = true;
  isAwesome = false;
  console.log(isAwesome);
  // isAwesome = 'shake and bake'

  let isNumber1: number = 10;
  let isNubmber2: number = 40;
  let isNumber3: number = isNubmber2 / isNumber1;
  console.log(isNumber3);

  let isString1: string = "Hello ";
  let isString2: string = "World";
  console.log(isString1.length);
  console.log(isString2.charAt(0));
  console.log(isString2.indexOf("o"));

  let isNum1 = 10;
  let isNum2 = 20;
  let isBool: boolean = true;
  isBool = isNum1 < isNum2;
  console.log(isBool);

  let tax: number | string = 10;
  tax = 100;
  tax = "$100";
  console.log(tax);

  let requestStatus: "pending" | "success" | "error" = "pending";
  requestStatus = "success";
  console.log(requestStatus);

  let notSure: any = 4;
  notSure = "maybe a string intead";
  notSure = false;
  console.log(notSure);

  return <div>App</div>;
};

export default App;
