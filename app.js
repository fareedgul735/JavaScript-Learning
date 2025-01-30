// // (1) ways to print in JavaScript
// //  console.log("Hello World");
// // alert("yes");
// // document.write('this is a document')

// // (2) JavaScript Console API
// //  console.log("Hello World");
// // console.warn('this is warning')
// // console.error('this is error')

// // (3) JavaScript Variables
// // what are Variables ? container to store to data values

// var number1 = 32;
// var number2 = 98;
// console.log(number1 + number2);

// // 4 data types in javascript
// // Numbers
// var number = 43;
// var number = 93.45;
// // String
// var str1 = "This is a String";
// var str2 = "This is a String";
// // s
// var marks = {
//   jack: 54,
//   mack: 65,
//   back: 54,
// };
// console.log(marks);

// // Boolean
// var a = true;
// var b = false;
// console.log(b, a);

// var und = undefined;
// console.log(und);

// var n = null;
// console.log(n);

// // At a very high level,there are two types
// // of data types in JavaScript

// // 1 : Primitive data types: Undefined ,null,number,strings,boolean,symbol
// // 2 : Reference Data types : Arrays ,and s

// var arr = [1, 2, 3, 4, 5];
// console.log(arr);

// // operators bin JavaScript
// // Arithmatic Operators
// var a = 99;
// var b = 132;

// console.log("The Value of a+b is", a + b);
// console.log("The Value of a-b is", a - b);
// console.log("The Value of a*b is", a * b);
// console.log("The Value of a/b is", a / b);

// Assignment Operators
// var c = b;
//  c += 2;
//  c -= 2;
//  c *= 2;
//  c /= 2;
//  console.log (c)

// Comparison-Operators

// var x = 65;
// var y = 435;
// console.log (x<=y)

// logical- operators
// logical and
// console.log (true&&true)
// console.log (false&&true)
// console.log (false&&false)
// console.log (true&&false)

// logical-or
// console.log (true||true)
// console.log (false||true)
// console.log (false||false)
// console.log (true||false)

// logical-not

// function sendHello() {
//   alert("say hello");
// }
// console.log(!false);
// console.log(!true);

// console.log(typeof _name, "name");
// var _name;
// _name = "Freed";
// // var name = "Saeed Gul";
// console.log(typeof _name, "name");

// _name = 1000;
// console.log(typeof _name, "name");

// _name = true;
// console.log(typeof _name, "name");

// There are three types of variable
// 1- Var 2- let 3- const
// These above variables has own scope
// var scope global scope / function scope
// let block scope {}
// const block scope

// Var case
// console.log(age)
// var age ;
// var age = "Saeed Gul";
// var age = true;
// console.log("age--- var scope", age);
// var ageVariable = 30;
// function _name() {

//   function age() {
//     console.log(ageVariable, "age----- function  ");
//   }

//   age();
// }

// console.log(window.window, "gloabal objet-----");
// _name();
// console.log(ageVariable, "age-----");

// var definition
// var is the keyword that tells JavaScript you're declaring a variable.
//  x is the name of that variable. = is the operator that tells JavaScript
//  a value is coming up next. 100 is the value for the variable to store.
// var & let difference
// Scope: var is function-scoped, while let and const are block-scoped.
// let case

// let age2 = 29;
// console.log(age2, "age2--");
// age2 = "saeed";
// let age3 = 300;
// console.log(age2, age3, "age----- let case");
// let age4 = 300;
// console.log(age2, age3, "age----- let case");
// console.log(this, "global object");
// age2 = true;

// if (true) {
//   let age4 = 300;
//   console.log(age4, "in outer of if age4");
//   console.log(age4, "in if age4");
// }
// alert ("Your age is not a 18+")

// var age = 18;
// console.log(age);

// var object = "man";
// console.log(object);

// var object = "man";
// console.log(typeof object);

// var complete = false;
// console.log(complete);

// var complete = false;
// console.log(complete);

// var number = 28;
// console.log(number);

// number = number = 4;
// console.log(number);

// console.clear();

// alert (3/65)

// var operator = 23;
// var operator = operation +12;
// console.log(operator,operation);

// let definition

// The let keyword in
// JavaScript is used to declare
// a block-scoped local variable,
//  optionally initializing it to a value.

/////////////////////////////

//  chapter 1 Alert

// alert (`please check your email:`)
// alert ('please check your email:')
// alert ("please check your email:")

// let name = "fareed_gul";
// let f_Name = "taweez_gul";
// let names = "fareed_gul" + "taweez_gul";

// console.log( names);

// alert("please check your email")
// alert(`please check your email`)
// alert('please check your email')

// let gulKhan = "pathan";
// let zaheerKhan = "musalman";

// let $names = "pathan"+"muslman";
// $names = Number($names);
// alert("MashaAllah")
// console.log( typeof $names);

// let age = 19;
// let height = 5.8;

// let basic_Information=age+height;
// console.log(typeof basic_Information);

// let male = true;
// let female = false;

// console.log(typeof male,female);

// legal

// let $name = "farheen";
// let  _f_name = "farooq";
// let religion123= "islam";

// illegal

// let 123_name = "farhan";
// let &fareed = "age";
// wagiro wagiro

// familiar operators

// let popular_Number= 4+45;
// console.log(popular_Number);

// let popular_Number= 4-45;
// console.log(popular_Number)

// let popular_Number= 4/45;
// console.log(popular_Number)

// let popular_Number= 4*45;
// console.log(popular_Number)

// let popular_Number= 4%45;
// console.log(popular_Number)

// let small_Number= 54;
// let large_Number = 665;
// let $total_Number = small_Number+large_Number;

// Table //
// let table = prompt("Enter Tables !");
// table = Number(table);
// for (let i = 1; i <= 10; i++) {
//   console.log(table + " X " + i + " = ", table * i);
// }

// console.log($total_Number);

// unfamiliar operators
// let number = 5;
// number++
// console.log(number);

// let _number = 88;
// _number--;
// console.log(_number);

// let number = 54;
// ++number ;
// console.log(number);

// let number = 54;
// --number ;
// console.log(number);

// eliminating amibiguity

// let $totalCost = 1+3*65;
// alert($totalCost);

// let $totalCost = (1+3*65);
// alert($totalCost);

// let $totalCost = (1+3)*65;
// alert($totalCost);

// let result = (2+6) * (5+9);
// alert(result)

// conctenate

// let concatenate = "Thanks For Message !"
// alert(concatenate)

// let userName = "fareed";
// alert("Thanks ,"+userName+ " !");
// let message = "Thanks "
// let userName = "fareed";
// let banger = " !"
// let all_Above = message+userName+banger;
// alert(all_Above)
// prompts

// let Special = prompt("Hello User" ,"Name")

// let User = 'Enter User'
// let Name = 'Human'

// let Joined = prompt(User,Name)

// var numberOfCats = prompt("How many cats?");
//  var tooManyCats = numberOfCats + 1;
//  alert(tooManyCats);

//  var numberOfCats = prompt("How many cats?");
//  var tooManyCats = numberOfCats;
//  alert(tooManyCats)

/////////////////////////////

// chapter 2 variable of strings

// var khan = "pathan";
// console.log(typeof khan);

// var usman = "panjabi";
// console.log(typeof usman);

// var adnan = "sindhi";
// console.log(typeof adnan);

/////////////////////////////

// chapter 3 variables of numbers

// var khan_result = 65;
// console.log(typeof khan_result);

// var usman_result = 45;
// console.log(typeof usman_result);

// var saqib_result = 35;
// console.log(typeof saqib_result);

/////////////////////////////

// chapter 4 variables names legal & illegal

// legal-variables
// var $myResult = "This is my Result";
// console.log($myResult);

// var _myName = "fared-gul";
// console.log(_myName);

// var khan123 = "khan-numbers";
// console.log( khan123);

// Illegal-variables

// var !myExamalation = "this is my exmalation";
// var 123myNumbers = "myNumbers";

/////////////////////////////

// chapter 5 math experssion familiar operators

// var num = 12+3;
// alert(num);

// var num = 43;
// var myNumber = 31;

// alert(num+myNumber);

// var number = 12*6;
// alert(number);

// var subNum = 32-12;
// alert(subNum);

// var divideNumber = 36/3;
// alert(divideNumber);

// var modulusNumber = 32%3
// alert(modulusNumber);

// var myNumber = 4;
// var yourNumber = 65;
// alert(myNumber%yourNumber);

/////////////////////////////

// chapter 6 mat expression Unfamiliar Operators
// var num = 4;
// var num2 = num+5;
// alert(num2)

// var num = 4;
// var num2 = num++;
// alert(num2)

// var num = 5;
// num-- //5
// --num //4
// num++ //4
// ++num //5
// alert(num)

/////////////////////////////

// chapter 7 math expression  Eliminating ambiguity

// var eliminating = 1+3*4;
// alert(eliminating);

// Kiyo aya 13 answer kiyo kay yai ?
//BODMAS//hai/

// agr yahi cheez baracket mai ki jaye  tu completly answer appko desakta hai

// var numbers = (3+3)*6;
// console.log(numbers);

// var myNumbers = (43 + 2) * (43 + 2);
// alert(myNumbers);

/////////////////////////////

// chapter 8 Concatenating text strings

// var userName = "Thanks " + "user"+ "!";
// alert(userName)

// var userName = "Thank ";
// var bring = "user";
// var my_Exam= "!";
// alert(userName+bring+my_Exam)

// var userName = "Thank ";
// var bring = "user";
// var my_Exam = "!";
// var all_Name = userName+bring+my_Exam;

// alert(all_Name)

/////////////////////////////

//  familar or non familar

// let math = 90;
// let islamait = 80;
// let urdu = 70;
// let pyhscis = 80;
// let chemistry = 60;
// let totalMarks = 425;
// let percentage = 100;

// find out
// let obtainedMarks = 0;
// let totalPercentage = 0;

// obtainedMarks = math + islamait + urdu + pyhscis + chemistry;
// console.log(obtainedMarks, "obtainedMarks");

// totalPercentage = (obtainedMarks / totalMarks) * percentage;

// console.log(totalPercentage.toFixed(1), "totalPercentage.toFixed(1)");

// let totalRupees = 1230;
// let totalStudents = 43;
// let average = totalRupees / totalStudents;

// console.log(Math.round(24.4), "average");
// console.log(4 - "a", "concatenate");

// let num = 1;
// let newNum = num++;
// console.log("newNum", newNum);

// let num2 = 1;
// let newNum2 = ++num2;
// console.log("newNum", newNum2);
// var totalCost = 1 + 3 * 4;
// console.log("totalCost", totalCost);

// const userName = "Fareed Gul";
// alert("Thanks, " + userName + " !");
// alert(`Thanks ${userName} hope you are doing well !`);

// let _totalMarks = prompt("Enter Total marks");
// let _obtainedMarks = prompt("Enter obtained marks");

// console.log("prompt values", _totalMarks, _obtainedMarks);
// const _percentage = (_obtainedMarks / _totalMarks) * 100;
// alert(`Your percentage is: ${_percentage.toFixed(2)}%`);
// console.clear();

// if else statements

// == only check ke value dono same honi chayeee e.g 2=='2'
// === ye value be check karta hai or data type be check karta hai e.g 2===2
// >= equal or greater then x>=18
// <= equal or less then x<=18
//  else if (x >= 18 && x < 35) {
//     console.log("yes your category is adult");
//   } else if (x >= 35 && x < 60) {
//     console.log("yes your category is middle age");
//   } else {
//     console.log("yes your category is old age");
//   }
// } else {
//   console.log("your value must be greater then ");
// }

// let x = prompt("enter your age for check your are adult or in child category");
// x = Number(x);
// console.log(typeof x);
// // x=0
// if ((x > 0 )&&(x <70)){
//   if (x > 0 && x < 18) {
//     console.log("yes your category is child-boy");
//   } else if (x >= 20 && x <= 34) {
//     console.log("yes you are a adult-man");
//   } else if (x >= 40 && x <= 65) {
//     console.log("yes you are a old-man");
//   }
// }else{
//     console.log("your Number is not a correct");
// }

//

// logical (AND = &) operators

// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

// logical (|| = OR) operators

// console.log(false || false);
// console.log(true || false);
// console.log(false || true);
// console.log(true || true);

// logicl not

// console.log(!false);
// console.log(!true);

// let y = prompt("My First JavaScript Tutorial");
// y = Number(y);
// console.log(typeof y);
// if (y > 0 && y < 40) {
//   if (y > 0 && y < 10) {
//     alert("yes you are a new javaScript Student");
//   } else if (y > 20 && y < 35) {
//     alert("yes you are a old student");
//   }
// } else {
//   alert(`your entry is not allowed`);
// }

// alert("This is a very Beautiful City");

// let _name  = prompt('What is your name?', "Guest")
// console.log(_name);

// let deletePost = confirm('Do you want delete post')

// if(deletePost){
//     console.log('yes your post is deleted');
// }else{
//     console.log('your post is not deleted');
// }

// ager 5 and 3 dono ke table me ata hai to console me fuzzbuzz leakh do
// ager sirf 5 ke table me ata hai to fuzz
// ager 3 ke table me ata hai to buzz

// let input = prompt("Enter number");

// input = Number(input);

// if (input % 5 === 0 && input % 3 === 0) {
//   console.log("fuzz_buzz");
// } else if (input % 5 === 0) {
//   console.log("fuzz");
// } else if (input % 3 === 0) {
//   console.log("buzz");
// }

// let email = prompt("Enter email");
// let password = prompt("Enter password");

// if (email === "" && password === "") {
//   alert("Both fields are required!");
// } else if (email === "") {
//   alert("Email field is required!");
// } else if (password === "") {
//   alert("Password field is required!");
// } else {
//   alert("You have loggedIn Successfully!");
// }

// let Experience = prompt("Enter Your Experience");
// let Education = prompt("Enter You Education");

// if (Experience === "" && Education === "") {
//   alert("Please Enter Your Experience & Education !");
// } else if (Experience === "") {
//   alert("Please Enter Your Experience !");
// }else if(Education === ""){
//     alert("Please Enter Your Education !")
// }else{
//     alert("Thankyou For Submitting !")
// }

// let PhoneNumber = prompt("Enter the Number");
// let Code = prompt("Enter the Code");

// if(PhoneNumber === "" && Code ===""){
//     alert("Please Enter the Number & Code !")
// }else if (PhoneNumber ===""){
//     alert("Please Enter the Number !")
// }else if(Code ===""){
//     alert("Please Enter the Code !")
// }else{
//     alert("ThankYou For Submitting !")
// }

// let Email = prompt("Enter the Email");
// let Authentication = prompt("Enter the AuthenticationCode");

// if (Email === "" && Authentication === "") {
//   alert("Please Enter the Email & Authentication ");
// } else if (Email === "") {
//   alert("Please Enter the Email");
// } else if (Authentication === "") {
//   alert("Please Enter the AuthenticationCode");
// }else{
//     alert("ThankyouFor Submitting")
// }

// let input = "sss";

// if (input > -1 && !isNaN < input) {
//   if (input % 2 === 0) {
//     alert("This is a Even Number !");
//   } else {
//     alert("This is a Odd Number !");
//   }
// } else {
//   alert("Please Number Must be Greater than -1");
// }

// if (input) {
//   alert(input);
// } else if (!input) {
//   alert("");
// }

// Array

// var city0 = "Atlanta";
// var city1 = "Baltimore";
// var city2 = "Chicago";
// var city3 = "Denver";
// var city4 = "Los Angeles";
// var city5 = "Seattle";

// alert("Welcome to " + city5);

// let fruits = [
//   "Apple",
//   "Banana",
//   "Water melon",
//   "Orange",
//   "Pine apple",
//   "Mango",
// ];

// fruits.slice

// fruits.splice(2, 0, "amrood","angoor","karboza");
// console.table(fruits);

// fruits.push("potato", "onion","eeee");
// console.table(fruits);

// fruits.pop();
// console.table(fruits);

// fruits.unshift("fareed", "saleem", "naeem");
// console.table(fruits);

// let delete_value = fruits.shift();
// console.table(fruits);
// console.log(delete_value);

// fruits.unshift("Fareed", "Saeed", 100);

// fruits.s;

// fruits.push("Grapes");
// fruits.pop()

// console.table(fruits);

// let shiftValue = fruits.pop();
// console.table(fruits);

// console.table(shiftValue);

// let deleteValue = fruits.splice(2, 2, "Pappita", "Rattia");
// console.table(fruits);
// console.log(deleteValue);

// alert(fruits[3]);

// let mixedArray = [];

// console.log("typeof", typeof mixedArray);

// let arrayINput = prompt("Enter a value for array");

// mixedArray.push(arrayINput);

// let arrayINput2 = prompt("Enter a value for array");
// mixedArray.push(arrayINput2);
// console.table(mixedArray);

// alert("We are pop element from an mixedArray");

// mixedArray.pop();

// console.table(mixedArray);

// condition ternary Operators

// var day =0;

// switch (day) {
//   case 0:
// document.write("Today is Monday")
//   break;
//   case 1:
//     document.write("Today is Tuesday")
//     break;
//   case 2:
//     document.write("Today is Wednesday")
//     break;
//   case 3:
//     document.write("Today is Thursday")
//     break;
//   case 4:
//     document.write("Today is Friday")
//     break;
//   case 5:
//     document.write("Today is Saturday")
//     break;
//   case 6:
//     document.write("Today is Sunday")
//     break;
//     default:
//       document.write("Today is valid week day")
// }

// var age = 35;
// switch (true) {
//   case age >= 15 && age <= 20:
//     document.write("You are eligible");
//     break;
//     case (age >=25 && age <=40):
//     document.write("you are not eligible");
//     break;
//     default:
//       document.write("Enter the valid age");

//   }

// let Email = "fareedgul735@gmail.com";
// let Password = "fareedgul804";

// let email = prompt("Please Enter the Email");
// let password = prompt("Please Enter the Password");

// if (email === Email && password === Password) {
//   alert("Login Successfully Welcome to Website ! ");
// } else if (email != Email) {
//   alert("Error: The Email you entered is incorrect");
// } else if (password != Password) {
//   alert("Error: The Password you entered is incorrect");
// } else {
//   alert("Error:Invalid credentials");
// }

// let Class_Fellow = ["fareed", "saleem", "huzaifa", "ayaz", "adeel", "jibran"];
// console.table(Class_Fellow);
// let delete_value = Class_Fellow.pop();
// console.table(Class_Fellow);
// console.log(delete_value);
// Class_Fellow.unshift("jibran", "farooq", "gul-khan");
// console.table(Class_Fellow);
// Class_Fellow.shift()
// console.table(Class_Fellow);

// Class_Fellow.splice(1, 0, "yaseen");
// console.table(Class_Fellow);

// Class_Fellow.slice(1, 3);
// console.table(Class_Fellow);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(0, 5);

// console.table(citrus);

// let day = 0;

// switch (day) {
//   case 0:
//     alert("Today is Monday");
//     break;
//   case 1:
//     alert("Today is Tuesday");
//     break;
//   case 2:
//     alert("Today is Wednesday");
//     break;
//   case 3:
//     alert("Today is Thursday");
//     break;
//   case 4:
//     alert("Today is Friday");
//     break;
//   case 5:
//     alert("Today is Saturday");
//     break;
//   case 6:
//     alert("Today is Sunday");
//     break;
//   default:
//     alert("Today is valid week day");
// }

// let fruits = 88;

// switch (fruits) {
//   case 0:
//     alert("Mango");
//     break;
//   case 0:
//     alert("Banana");
//     break;
//   case 0:
//     alert("Amrood");
//     break;
//   case 0:
//     alert("Pine-Apple");
//     break;
//   case 0:
//     alert("Salid");
//     break;
//   case 0:
//     alert("Grapes");
//     break;
//   case 0:
//     alert("Nashpati");
//     break;
//     default:
//         alert("Not this is a not a fruits")
// }

// let dummyArray = [1, 2, 344, 55, 66, 77, 88, 99, 55, 10];
// dummyArray.slice(2, 8);
// console.log("slice----", dummyArray.slice(3, 8));

// loop for loop
// for (let i = 0; i <= 100; i++) {
//   console.log("for loop" + i);
// }

// let cleanestCities = [
//   "Cheyenne",
//   "Santa Fe",
//   "Tucson",
//   "Great Falls",
//   "Honolulu",
// ];
// let cleanCity = "Great Falls";
// for (let a = 0; a < cleanestCities?.length; a++) {
//   console.log("a---", a, cleanestCities[a], cleanCity);
//   if (cleanCity === cleanestCities[a]) {
//     alert(`Yahoo this is clean city ${cleanestCities[a]}`);
//     break;
//   }
// }

// let subjects = [80, 65, 90, 60, 50];

// console.table(subjects);
// let _totalMarks = 0;
// for (let a = 0; a < subjects?.length; a++) {
//   _totalMarks = _totalMarks + subjects[a];
// }
// console.log("_total marks", _totalMarks);

// let f = 0;

// for (let a = 0; a <= 200; a++) {
// console.log(f+a);
// }
// for loop

// let fareed = 0;

// for(let d= 0;d<=1000;d++){
//     console.table(fareed+d);
// }
// for in loop
// let obj = {
//   $name: "fareed",
//   role: "programmer",
//   resources: "saylani",
// };

// for (let key in obj) {
//   console.log( key);
// }
// for of loop
// for (const c of "fareed") {
//     console.log(c);
// }

// for while loop

// let fareed = 0;
// while (fareed <= 1000) {
//   console.log(fareed);
//   fareed++;
// }

// do while loop

// let fareed = 10;
// do {
//     console.log(fareed);
//       fareed++;
// } while (fareed<6);

// let array = ["fareed", "saleem", "gulkhan", "farhan", "junaid", "jamshed"];
// console.table(array);

//   let delete_value=array.pop()
// console.table(array);
// console.log(delete_value);
// let delete_value1=array.pop()
// console.table(array);
// console.log(delete_value1);

// let dummyArray = [1, 2, 344, 55, 66, 77, 88, 99, 55, 10];
// dummyArray.slice(2, 8);
// console.log("slice----", dummyArray.slice(3, 8));

// let students = ["fareed", "saleem", "jawed", "talha","fayaz", "sallu", "jnaveed", "hawwaq"];
// students.slice(2,5)
// console.log("slice----",students.slice(2,6));

// let email = prompt("Enter the Email");
// let password = prompt("Enter the password");

// if (email === "" && password === "") {
//   alert("Please Enter the Email & Password");
// } else if (email === "") {
//   alert("Please Enter the Email");
// } else if (password === "") {
//   alert("Please Enter the Password");
// } else {
//   alert("Thankyou For Submmitting");
// }

// let dummyArray = [1, 2, 344, 55, 66, 77, 88, 99, 55, 10];
// dummyArray.slice(2, 8);
// console.log("slice----", dummyArray.slice(3, 9));

// let fruits = [
//   "mango",
//   "nash_pati",
//   "grapes",
//   "jamun",
//   "apple",
//   "banana",
//   "orange",
// ];
// fruits.slice(2, 5);
// console.log("slice---", fruits.slice(2, 5));

// let fareed = 0;

// for(let i = 0; i<100; i++){
//     console.log(fareed+i);
// }

// let v= 0;

// for(let a=0; a<=100; a++){
//     console.log(v+a);
// }

// let fareed = 1;

// for (let q = 0; q < 1000; q++) {
//   console.log(fareed+q);
// }

// let matric_marks = Number(prompt("Enter Your Matric Marks"));
// let test_marks = Number(prompt("Enter Your Test Marks"));
// let average = (matric_marks + test_marks) / 2;

// if (average < 70) {
//   alert("Your are not eligible for this course. Your average is " + average);
// } else {
//   alert(
//     "Congratulations! You are eligible for this course. Your average is: " +
//       average
//   );
// }

// array

// let fruits = ["Mango", "Banana", "ladyFinger", "Apple", "Grapes"];
// console.log(fruits);
// fruits.shift();
// console.table(fruits);
// fruits.shift();
// console.table(fruits);
// fruits.unshift("huzaifa")
// console.table(fruits);

// for loop

// for(var i=0;i<10; i+=2){
// console.log(i,"====loop");
// }

// revers chalana hai

// for (var i = 10; i > 0; i -= 2) {
//   console.log(i, "====loop");
// }

// for (var i = 1; i <= 10; i++) {
//   var resultOfTable = i * 2;
//   console.log("2 x", i, "=", resultOfTable);
// }

// var result =prompt("Enter Your Age");
// console.log(+result, typeof +"result");

// var numbers = [1, 9, 4, 2, 3, 4, 5, 6, 8, 9, 7];

// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
//   if (numbers[i] == 4) {
//     console.log(i);
//     break;
//   }
//   // console.log(numbers[i]);

// }
// for loop best concepts

// var shops = [
//   "gulkhan",
//   "Allah wali",
//   "javed nihari",
//   "hadimarket",
//   "lali changani",
// ];

// var pocketMoney = 0;
// for (var i = 0; i < shops.length; i++) {
//   if (shops[i] == "javed nihari") {
//     continue;
//   }
//   pocketMoney += 50;
//   console.log(pocketMoney, "====pocketoney");
// }

// for (var i = 0; i < 5; i++) {
//   console.log("outer", i);
//   for (var j = 0; j < 3; j++) {
//     console.log("inner", "j", j, "i", i);
//   }
// }

// changing case

// var isMarried = prompt("Enter Yes Or No")
// var isMarriedInlowe
// if(isMarried==="yes"){
// console.log("Welcome");
// }

// let fareed = 0;

// for (let i = 0; i <= 10; i++) {
//   console.log(fareed + i, "iteration-----");
// }

// var cleanestCities = [
//   "Cheyenne",
//   "Santa Fe",
//   "Tucson",
//   "Great Falls",
//   "Honolulu",
// ];

// let matchFound = "no";
// let input = prompt("Type something.....");

// for (let i = 0; i < cleanestCities.length; i++) {
//   if (input === cleanestCities[i]) {
//     matchFound = "yes";
//   }
// }

// if (matchFound === "yes") {
//   alert("Yahoo your input is correct!");
// } else {
//   alert("Sorry your input is wrong");
// }

// let firstNames = ["Saeed", "Fareed", "Ajab", "Umer", "Waleed", "Azaan"];
// let lastNames = ["Gul", "Zaman"];
// let fullName = [];

// for (let i = 0; i < firstNames.length; i++) {
//   for (let j = 0; j < lastNames.length; j++) {
//     fullName.push(firstNames[i] + " " + lastNames[j]);
//   }
// }
// console.log(fullName);

// let firstNames = ["Saeed", "Fareed", "Ajab", "Umer", "Waleed", "Azaan"];
// let lastNames = ["Gul", "khan", "zaman", "pathan", "shan", "afridi"];
// let fullName = [];

// for (let i = 0; i < firstNames.length; i++) {
// //   console.log("first loop i----->", i);
//   for (let j = i; j < i + 1; j++) {
//     // console.log("inner loop j----", j, i + 1);
//     fullName.push(firstNames[i] + " " + lastNames[j]);
//   }
// }
// console.table(fullName);

// let fareed = "Pathan";
// console.log(fareed.toLocaleUpperCase());

// let saeed = "Pathan";
// console.log(fareed.toLocaleUpperCase());

// let fareed = parseInt("string");
// console.log(typeof fareed);

// lower & uppercase

// var fareed ="pathan";
// console.log(fareed,fareed.toUpperCase());

// var fareed ="PatHan";
// console.log(fareed,fareed.toLocaleLowerCase());

//var  let  & const

// var declare bhi hosakta hai assighn bhi hosakta hai var 1 global scope hai
// var a = 1;
// var a = 1;
//  console.log(a);

// let declare nhi karsakte hai assign karsakte hai
// let a = 1;
// a = 2;
// console.log(a);

// const na declare hota hai na he assighn hota hai
// const a = 1;
// a = 1;
// console.log(a);

// array proto types .push etc

// proto type string ka (replace)

// chapter 22 23 & 24 25

// let country = "Pakistan";
// console.log(country.slice(0, 3));
// console.log(country.length);
// console.log(country[0]);
// console.log(country.indexOf("t"), "===index");
// console.log(country.indexOf("P"), "===index");
// console.log(country.charAt("0"), "===index");

// const lastIndex = country.length - 1;
// const lastElemnt = country.charAt(lastIndex);

// console.log(lastElemnt);
// console.clear();
// let newCountry = country.replace("P", "i");
// console.log(newCountry, country);

// newCountry = country.replace("P", "i");
// console.log(newCountry, country);

//  newCountry = country.replaceAll("a", "b");
// console.log(newCountry, country);

// chapter 26

// const bill = 12.6;
// const roundedBill = Math.round(bill);
// console.log(bill,roundedBill);

// chapter 31

// let date = new Date();

// document.write(date);

// let dummyString = "Saeed Gul";

// alert(dummyString.length);
// alert(dummyString.slice(6, 9));

// let month = prompt("Enter the month");

// let loopLength = month.length;
// let monthAbbrevation = "";
// // for (let i = 0; i < loopLength; i++) {
// if (month?.length >= 3) {
//   monthAbbrevation = month.slice(0, 3);
// }
// // }
// console.log(monthAbbrevation);

// let loopLength = month.length;
// alert(loopLength);

// for (let i = 0; i < loopLength; i++) {
//   if (month.slice(i, i + 2) === "  ") {
//     alert("No double spaces allow !");
//     break;
//   }
//   console.log("(month.slice", i, i + 2, month.slice(i, i + 2));
// }
// let text =
//   "The New Yorker magazine doesn't allow the phrase 'World War II' They say it should be 'the Second World War.' So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers. It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his.";

// let loopLength = text?.length;
// for (let i = 0; i < loopLength; i++) {
//   if (text.slice(i, i + 12) === "World War II") {
//     text = text.slice(0, i) + "Second World War" + text.slice(i, i + 12);
//   }
// }

// console.log("text", text);

// chapter 22 Strings:Measuring length  and extracting parts

// let fruits = "Grapes";
// alert(fruits.length);
// alert(fruits.slice(1, 4));

// lastIndexoF Concepts:

// let country = "Pakistan";
//  const lastIndex = country.length-3;
// const lastElemnt = country.charAt(lastIndex);

// console.log(lastElemnt);

// let _name = prompt("Enter the name !");

// let name_length = _name.length;
// let _nameAbbrevation = "";

// if (_name.length >= 5) {
//   _nameAbbrevation = _name.slice(0, 5);
// }

// alert(_nameAbbrevation);

// let Name = prompt("Enter the name !");

// let Name_length = Name.length;
// let Name_Abbr = "";

// if (Name.length >= 3) {
//   Name_Abbr = Name.slice(0, 3);
// }
// confirm(Name_Abbr);

// let Name = prompt("Enter Something.....................");
// let loopLength = Name.length;
// alert(loopLength);

// for (let i = 0; i < loopLength; i++) {
//   if (Name.slice(i, i + 2) === "  ") {
//     alert("No double spaces allow !");
//     break;
//   }
//   console.log("(Name.slice", i, i + 2, Name.slice(i, i + 2));
// }

// let country = "Pakistan";
// console.log(country.slice(0, 3));
// console.log(country.length);
// console.log(country[0]);
// console.log(country.indexOf("t"), "===index");
// console.log(country.indexOf("P"), "===index");
// console.log(country.charAt("0"), "===index");

// const lastIndex = country.length - 1;
// const lastElemnt = country.charAt(lastIndex);

// console.log(lastElemnt);

// let _Name = "Fareed Gul";
// console.log(_Name.indexOf("G"));

// let Country = "Pakistaknjhk";
// console.log(Country.lastIndexOf("k"));

// let Month = "January";
// console.log(Month.replace("January", "Feb"));

// let Education = "EnterContinue fareeedgulkhan is the power full is man ";

// console.log(Education.replaceAll("is", "an"));

// let Role = "Programmer";
// console.log(Role.charAt("4"));

// let table = prompt("Enter the table !");
// table = Number(table);
// for (let i = 1; i < 11; i++) {
//   console.log(table + " X " + i + " = ", table * i);
// }

// let numbers = Math.round(3.777);
// console.log(numbers);

// let Count = Math.ceil(2.34);
// console.log(Count);

// let Count = Math.floor(6.444);
// console.log(Count);

// let Name = "Fareed Gul";
// console.log(Name.length);

// let Name = "Fareed Gul";
// console.log(Name.slice(7, 11));

// let numbers = "44" - "66";

// console.log(numbers);

// let numbers = "56" + "66";

// console.log(numbers);

// let Name = prompt("Enter Something.....................");
// let loopLength = Name.length;
// alert(loopLength);

// for (let i = 0; i < loopLength; i++) {
//   if (Name.slice(i, i + 1) === " ") {
//     alert("No double spaces allow !");
//     break;
//   }
//   console.log("(Name.slice", i, i + 1, Name.slice(i, i + 1));
// }

// let Name = prompt("Enter Something.....................");
// let loopLength = Name.length;
// alert(loopLength);

// for (let i = 0; i < loopLength; i++) {
//   if (Name.slice(i, i + 2) === "  ") {
//     alert("No double spaces allow !");
//     break;
//   }
//   console.log("Name.slice", i, i + 2, Name.slice(i, i + 2));
// }

// let Name = prompt("Enter Something.....................");
// let loopLength = Name.length;
// alert(loopLength);

// for (let i = 0; i < loopLength; i++) {
//   if (Name.slice(i, i + 2) === "  ") {
//     alert("No double spaces allow !");
//     break;
//   }
//   console.log("Name.slice", i, i + 2, Name.slice(i, i + 2));
// }

// let Name = Math.round(45.7);
// console.log(Name);

// let Name = Math.ceil(45.4);
// console.log(Name);

// let Name = Math.floor(45.9);
// console.log(Name);

// let Money = 546.88;
// let paise = 65.999999;
// let total = Money + paise;
// console.log(total);
// let full_total = total.toFixed(3);
// console.log(full_total);

// chapter 31

// let date = new Date();

// alert(date);

// let Name = prompt("Enter Something.............");
// let length = Name.length;
// alert(length);

// for (let i = 0; i < length; i++) {
//   if (Name.slice(i, i + 2) === "  ") {
//     alert("Not double space allow !");
//     break;
//   }
//   console.log("Name.slice", i, i + 2, Name.slice(i, i + 2));
// }

// const Ceiling = Math.ceil(-0.000001);
// console.log(Ceiling);

// const floor = Math.floor(-0.000001);
// console.log(floor);

// const rounding = Math.round(0.000001);
// console.log(rounding);

// const rounding = Math.round(-0.000001);
// console.log(rounding);

// let letter = "fareed gul";

// console.log(letter.indexOf("d"),"idex......");

// let L_index = "Programmer";
// console.log(L_index.lastIndexOf("m"));

// let character = "Congrulations !";
// console.log(character.charAt("14"));

// let telling = "I am fareed gul I am a fareed";

// console.log(telling.replace("am", "an"));

// let telling = "I am fareed gul I am a fareed";

// console.log(telling.replaceAll("am", "an"));

// let convert = "Converting";

// console.log(convert.slice(0, 3));

// let lenghthing = prompt("Enter Some thing..............");
// let simpling = lenghthing.length;
// alert(simpling);

// let a = prompt("Enter Somethings..........");
// alert(a);

// Functions //

// function fareed() {
//   confirm("sorry your accounts isue ");
// }

// fareed();

// functions Parameters

// function hello(f_Name = "fareed", lname = "khan") {
//   console.log("hello" + "  " + f_Name + lname);
// }

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(55, 77);
// sum(77, 99);
// hello("fareed", "gul");
// hello("salman", "khan");

// sum(66.5 , 99);

// functions return value //
// function fullname(fname = "fareed", lname = "khan") {
//   let a = fname + " - " + lname;
//   return a;
// }

// let fn = fullname("fareed", "gul");
// console.log(fn);

// function sum(math, eng, cs) {
//   let s = math + eng + cs;
//   return s;
// }

// function percentage(tt) {
//   let per = (tt / 300) * 100;
//   console.log(per);
// }

// let total = sum(65, 99, 99);

// percentage(total);

// let Name = "fareed" - 150;
// console.log(typeof Name,"Name");

// let Name = "fareed" + 150;
// console.log(typeof Name, "Name");

// let Name = "fareed" % 150;
// console.log(typeof Name, "Name");

// let Name = "fareed" + "500";
// console.log(typeof Name);

// let Numbers = 24;
// Numbers = String(Numbers);
// console.log(typeof Numbers);

// let str = "fareed";
// str = Number(str);
// console.log(typeof str);

// var profit = "200" - "duck";
// console.log(profit);

// var currentAge = prompt("Enter your age.");
// var qualifyingAge = parseFloat(currentAge) + 10;
// console.log(qualifyingAge);

// var currentAge = prompt("Enter your age.");
// var qualifyingAge = parseInt(currentAge);
// console.log(typeof qualifyingAge);

// let number = 55;
// number = String(number);
// console.log(typeof number);

// let array = ["babar", "hafiz", "shaheen", "afridi", "umer"];
// console.table(array);
// dummyarray = array.slice(1, 4);
// console.table(dummyarray);

// let array = ["babar", "hafiz", "shaheen", "afridi", "umer"];
// console.table(array);
// array.splice(2, 1);
// console.table(array);

// for (let i = 0; i <=10; i++) {
//   console.log(i);
// }

// let students = prompt("Enter Some thing ...........................");
// let array = ["fareed", "gulkhan", "huzaifa", "ayaz", "basit", "adnan"];

// for (i = 0; i < array.length; i++) {
//   if (students === array[i]) {
//     alert("Yes you are a student");
//     break;
//   } else {
//     alert("you not a student");
//     break;
//   }
// }
// if (students === array[0]) {
//   alert("Yes you are a student");
// } else if (students === array[1]) {
//   alert("Yes you are a student");
// } else if (students === array[2]) {
//   alert("Yes you are a student");
// } else if (students === array[3]) {
//   alert("Yes you are a student");
// } else if (students === array[4]) {
//   alert("Yes you are a student");
// } else if (students === array[5]) {
//   alert("Yes you are a student");
// } else {
//   alert("you not a students");
// }
// var cityToCheck = prompt("enter");
// var cleanestCities = [
//   "Cheyenne",
//   "Santa Fe",
//   "Tucson",
//   "Great Falls",
//   "Honolulu",
// ];

// if (cityToCheck === cleanestCities[0]) {
//   alert("It's one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[1]) {
//   alert("It's one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[2]) {
//   alert("It's one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[3]) {
//   alert("It's one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[4]) {
//   alert("It's one of the cleanest cities");
// } else {
//   alert("It's not on the list");
// }

// let firstNames = ["fareed", "huzaifa", "ayaz", "gul", "basit"];
// let lastNames = ["khan", "jan", "pathan", "gul", "afridi"];
// let fullname = [];

// for (let i = 0; i < firstNames.length; i++) {
//   for (let j = 0; j < lastNames.length; j++) {
//     fullname.push(firstNames[i] + " " + lastNames[j]);
//   }
// }
// console.log(fullname);

// let firstNames = ["fareed", "huzaifa", "ayaz", "gul", "basit"];
// let lastNames = ["khan", "jan", "pathan", "gul", "afridi"];
// let fullname = [];

// for (let i = 0; i < firstNames.length; i++) {
//   for (let j = i; i + 1 < lastNames.length; j++) {
//     fullname.push(firstNames[i] + " " + lastNames[j]);
//   }
// }
// console.log(fullname);

// let change = "fareed";
// console.log(change.toUpperCase());

// let firstNames = prompt("Enter the something................");
// firstNames = firstNames.toUpperCase();
// console.log(firstNames);

// let firstNames = prompt("Enter the something................");
// firstNames = firstNames.toLowerCase();
// console.log(firstNames);

// let Country = "Australia";
// console.log(Country.slice(4, 8));

// let Country = "Austra   lia   ";
// alert(Country.length);

// let Country = "Australia";
// console.log(Country.indexOf("t"));

// let Country = "Ausatralia";
// console.log(Country.lastIndexOf("a"));

// let Country = "Ausatralia";
// console.log(Country.indexOf("a"));

// let Country = "Ausatralia";
// console.log(Country.charAt("5"));

// let Para = "huzaifa is good boy";
// alert(Para.replace("is", "of"));

// let player = "Sarfraz is a no 1 wiicketkeeper";

// alert(player.replace("Sarfraz", "Rizwan"))

// let para = "fareed is a good boy lekin fareed is very acha boy hai ";
// alert(para.replaceAll("fareed", "huzaifa "));

// let Numbers = Math.round(87.4);
// console.log(Numbers);

// let Numbers = Math.round(87.8);
// console.log(Numbers);

// let Numbers = Math.ceil(87.1);
// console.log(Numbers);

// let Numbers = Math.floor(87.7366);
// console.log(Numbers);

// let Name = Math.random();
// document.write(Name);

// let light = "Math" - "50";
// console.log(light);

// let light = "Math" + "50";
// console.log(light);

// let Numbers = 45;
// Numbers = String(Numbers);
// console.log(typeof Numbers);

// let Numbers = "fareed";
// Numbers = Number(Numbers);
// console.log(typeof Numbers);

// let marks = 65.9999;
// console.log(marks);
// marks = marks.toFixed(1);
// console.log(marks);

// let Current_Date = new Date();
// console.log(Current_Date);
// let Day = new Date();
// console.log(Day);
// let Days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// let Current_Day = Days[Day.getDay()];
// console.log(Current_Day);

// let F_students = prompt("Enter Something............");
// let Students = ["Huzaifa", "Fareed", "ayaz", "farooq", "farzan"];
// let matchFound = false;
// for (let i = 0; i < Students.length; i++) {
//   if (F_students === Students[i]) {
//     matchFound = true;
//     alert("Thanks !");
//   }
// }
// if (matchFound === false) {
//   alert("Sorry");
// }

// let day = new Date();
// let days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// let Current_Day = days[day.getDay()];
// confirm(Current_Day);

// let f_name = prompt("Enter Something.....");
// let Arrays = ["Babar", "Sarfraz", "Shaheen", "Naseem", "Ikhlaq"];
// let matchFound = false;
// for (let i = 0; i < Arrays.length; i++) {
//   if (f_name === Arrays[i]) {
//     matchFound = true;
//     alert("Yes You are a Enter");
//   }
// }
// if (matchFound === false) {
//   alert("No you are not a Enter");
// }

// Functions //

// function fareed() {
//   confirm("sorry your accounts isue ");
// }

// fareed();

// // functions Parameters

// function hello(f_Name = "fareed", lname = "khan") {
//   console.log("hello" + "  " + f_Name + lname);
// }

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(55, 77);
// sum(77, 99);
// hello("fareed", "gul");
// hello("salman", "khan");

// sum(66.5 , 99);

// // functions return value //

// function fullname(fname = "fareed", lname = "khan") {
//   let a = fname + " - " + lname;
//   return a;
// }

// let fn = fullname("fareed", "gul");
// console.log(fn);

// function sum(math, eng, cs) {
//   let s = math + eng + cs;
//   return s;
// }

// function percentage(tt) {
//   let per = (tt / 300) * 100;
//   console.log(per);
// }

// let total = sum(65, 99, 99);

// percentage(total);

// function harry() {
//   alert("Hello_Harry !");
// }

// harry();

// functions parameters

// function Name(f_Name = "gul", lname = "khan") {
//   console.log(f_Name + " " + lname);
// }
// function Sum(a, b) {
//   console.log(a + b);
// }
// Name();
// Name("Fareed", "Gul");
// Name("Salman", "Khan");

// Sum(55.99, 77);

// Functions Return values

// function F_name(u_name, paswrd) {
//   let a = u_name + "-" + paswrd;
//   return a;
// }
// let fn = F_name("fareed", "khan");
// console.log(fn);

// function subjets(math, cs, eng) {
//   let sum = math + cs + eng;
//   return sum;
// }
// function percentage(tt) {
//   let per = (tt / 300) * 100;
//   console.log(per);
// }

// let total = subjets(88, 99, 56);
// percentage(total);

// Global & local Variables
// Example:
// Global Ex:
// var a = "fareed";
// function Name() {
//   console.log(a);
// }
// Name();

// local Ex:

// function car() {
//   var z = "Something";
// }
// car();
// console.log(z);

// Js Events //

// function Names() {
//   alert("hello-world");
// }

// function resizeMethod(e) {
//   console.log("event", window.innerWidth);
//   if (window.innerWidth <= 1200) {
//     console.log("classNames", document.getElementById("box").classList);
//   } else {
//   }
// }
// document.getElementById("parent").addEventListener("dblclick", function (e) {
//   const x = e.clientX; // X-coordinate relative to the viewport
//   const y = e.clientY;
//   console.log("event", x, y);

//   document.getElementById("circle").style.left = `${x}px`;
//   document.getElementById("circle").style.top = `${y}px`;
// });

// function moveMoue(e) {
//   const x = e.clientX;
//   const y = e.clientY;
//   console.log("event", x, y);

//   document.getElementById("circle").style.left = `${x}px`;
//   document.getElementById("circle").style.top = `${y}px`;
// }

// function java() {
//   alert("hello");
// }

// While loop learning//

// let a = 1;

// while (a <= 10) {
//   document.write(a + ") Hello While Loop<br>");
//   a = a + 1;
// }

// let a = 10;

// while (a >= 1) {
//   document.write(a + ") Hello While Loop<br>");
//   a = a - 1;
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// let Enters = prompt("Enter Something.....");
// let Crickter = ["babar", "junaid", "naseem", "afridi", "gulKhan"];
// for (let i = 0; i < Crickter.length; i++) {
//   if (Enters === Crickter[i]) {
//     alert("Thanks !");
//     break;
//   } else {
//     alert("Sorry");
//     break;
//   }
// }

// Sir Abdullah  4/1/2025//

// let Country = "Afghanistan";
// console.log(Country.slice(0, 3));
// console.log(Country.charAt(5));
// console.log(Country[7]);
// console.log(Country.indexOf("s"));
// console.log(Country.lastIndexOf("a"));
// console.log(Country.replace("A", "P"));
// console.log(Country.replaceAll("a", "t"));

// // Mtah Rounded?//

// let Numbers = Math.round(14.66);
// console.log(Numbers);

// let Sum = Math.ceil(14.22);
// console.log(Sum);

// let New_Num = Math.floor(66.77);
// console.log(New_Num);

// console.clear();

// let tell = Math.random();
// console.log(tell);

// let focuses = 56.88888;
// console.log(focuses.toFixed(1));

// let highest = 0.8157845523873765 * 6;
// console.log(highest);
// let lowest = 0.8157845523873765 * 6;
// console.log(lowest);

// let bell = Math.random() *4;
// console.log(bell);
// Chapter 32///
// let date_part = new Date();
// console.log(date_part);
// console.log(date_part.getDay()), "---Day";
// console.log(date_part.getDate()), "---Date";
// console.log(date_part.getHours()), "---Hours";
// console.log(date_part.getMinutes()), "---Minutes";
// console.log(date_part.getSeconds()), "---Seconds";
// console.log(date_part.getMilliseconds()), "---mili-Seconds";
// console.log(date_part.getTime()), "---Time";
// console.log(date_part.getFullYear()), "---year";
// console.log(date_part.getMonth()), "---month";

// Chapter 33//

// Additional Function of new date//

// const Current_Time = new Date();
// const Future_Time = new Date("01,June,2050");
// console.log(Current_Time.getTime(), Future_Time.getTime()) /
//   1000 /
//   60 /
//   60 /
//   24;

// Chapter 34//
// let Current = new Date();
// console.log(Current);
// Current.setUTCFullYear(30);
// Current.setMonth(1);
// Current.setDate(5);
// Current.setHours(4);
// console.log(Current);
// color picker from random numb

// let Colors = ["#9F2B68", "#2596be", "#FF7F50","fareed"];
// let random_Num = parseInt(Math.random() * Colors.length);
// console.log(random_Num, Colors[random_Num]);

// let player = ["babar", "kholi", "afridi", "dhoni"];
// let kuch_bhi = parseInt(Math.random() * player.length);
// console.log(kuch_bhi, player[kuch_bhi]);

// let Today = new Date();
// let Array = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesdy",
//   "Thursday",
//   "Friaday",
//   "Saturday",
// ];

// let Current = Array[Today.getDay()];
// confirm(Current);
// console.log(Current);

// Functions Chapter 35 Starting //

// function fareed() {
//   confirm("Hello_fareed !");
// }
// fareed();

// Para metres Functions //

// function email(U_name, paswrd) {
//   confirm("Congrats !");
// }
// email("fareed", "gulkhan123");

// Sir Abdullah 5 01 2025///

// const User_BD_date = new Date();
// const B_date = prompt("Enter Your Date !");
// const B_Month = prompt("Enter Your Month !");
// const B_year = prompt("Enter Your Year !");
// User_BD_date.setDate(B_date);
// User_BD_date.setMonth(B_Month);
// User_BD_date.setFullYear(B_year);
// confirm(User_BD_date);

// Object //

// let myObj = {
//   Name: "fareed",
//   age: 19,
//   Education: "Matriculation",
// };

// console.log(myObj.Education);
// console.log(myObj.Name);
// console.log(myObj.age);
// console.log(myObj["Name"]);

// console.log(myObj);

// {
//   const Name = prompt("Enter Your name !");
//   const greet = "Welcome" + " " + Name;
//   confirm(greet);
// }

//       Functions ///

// num = 0;
// function greet() {
//   //   const Name = prompt("Enter Your name !");
//   //   const greet = "Welcome" + " " + Name;
//   //   confirm(greet);
//   num++;
//   console.log(num);
// }
// greet();
// greet();
// greet();
// greet();
// greet();

// const consoles ={
// log: Function log(){
//     console.log("hi");
// }

// }
// consoles.log();

// function sum(fname, lname) {
//   const result = fname + lname;
//   console.log(result);
// }
// sum(2, 67);

// let array = [0, 1, 2, 3, 4, 5];
// let returned = array.pop();
// let r = array.push(9);
// console.log(array, returned, r);

// Functions Revision ///

// function Name() {
//   const tell = prompt("Enter Your Name  ....");
//   confirm("Hello " + tell + " !");
// }

// Name();

// function fullname(fname = "fareed", lname = "khan") {
//   let a = "My name is " + fname + " - " + lname;
//   return a;
// }

// let fn = fullname();
// console.log(fn);

// function sum(math, eng, cs) {
//   let s = math + eng + cs;
//   return s;
// }

// function percentage(tt) {
//   let per = (tt / 300) * 100;
//   console.log(per);
// }

// let total = sum(65, 99, 99);

// percentage(total);

// Arrow Function //

// const func1 =(a)=>{
//     console.log("Hello");
// }
// func1();

// function SomeThing(Fname, Lname) {
//   let f = "My name is " + Fname  + Lname;
//   return f;
// }

// let full = SomeThing(prompt("Enter Your First  Name !"),prompt("Enter Your Last Name !"));
// alert(full);

// let  now = new Date();
// let  the_hr = now.getHours();
// let  the_Min = now.getMinutes();

// function telltime() {
//   let now = new Date();
//   let the_hr = now.getHours();
//   let the_Min = now.getMinutes();
//   alert("Current time : " + the_hr + ":" + the_Min);
// }
// telltime();

// function Name() {
//   alert("hello Function");
// }
// Name();

// function sum(math, cs, urdu) {
//   let add = math + cs + urdu;
//   alert("This is Your Total Marks  " + add + " !");
// }
// sum(
//   (math = parseInt(prompt("Enter Your Math Marks !"))),
//   (cs = parseInt(prompt("Enter Your CS Marks !"))),
//   (urdu = parseInt(prompt("Enter Your Urdu Marks !")))
// );

// function telling(Fname, lname) {
//   let a = "Hello " + Fname + lname + " !";
//   return a;
// }
// let fullname = telling(
//   prompt("Enter Your First Name !"),
//   prompt("Enter Your Last Name !")
// );

// alert(fullname);

// let Week_Days = parseInt(prompt("Enter Your Week The Best Day !"));

// switch (Week_Days) {
//   case 1:
//     alert("Today is Monday !");
//     break;
//   case 2:
//     alert("Today is Tuesday !");
//     break;

//   case 3:
//     alert("Today is Wednesday !");
//     break;

//   case 4:
//     alert("Today is Thursday !");
//     break;

//   case 5:
//     alert("Today is Friaday !");
//     break;

//   case 6:
//     alert("Today is Saturday !");
//     break;

//   case 7:
//     alert("Today is Sunday !");
//     break;

//   default:
//     alert("Your Date is UnValid !");
// }

// While loop ///

// let i = 1;

// while (i <= 100) {
//   document.write(i + ") Hello Fareed Khan !<br>");
//   i += 1; // This is a increment !
// }

// let i = 100;

// while (i >= 1) {
//   document.write(i + ") Hello World ! <br>");
//   i -= 1;
// }

// do While Loop ///
// let array = [
//   "Babar <br>" + "Afridi <br>" + "Shaheen <br>" + "Junaid <br>" + "Amir <br>",
// ];
// do {
//   document.write(array);
//   array += 1;
// } while (array <= 10);

// let Deleted = confirm("You Want To Delete Your Post !");

// if (Deleted) {
//   alert("Your Post Has Been Deleted !");
// } else {
//   alert("Your Post Has Not Deletd !");
// }

// function toggleHide() {
//   let butn = document.getElementById("butn");
//   let para = document.getElementById("para");
//   if (para.style.display != "none") {
//     para.style.display = "none";
//   } else {
//     para.style.display = "block";
//   }
// }

// Simple Function ////

// function Name() {
//   confirm("Hello " + prompt("Enter Your Name !") + " !");
// }
// Name();

// functions With Parameters ///

// function Fullname(Fname="Fareed ", Lname="Gul") {
//   let C_name = Fname + Lname;
//   console.log(C_name);
// }
// Fullname("Fareed"," Khan");
// Fullname("Fareed"," Khan");
// Fullname("Fareed"," Khan");
// Fullname("Fareed"," Khan");
// Fullname("Fareed"," Khan");

// Function With Return Value ///

// function Sum(Math, Cs, Physics) {
//   let S = Math + Cs + Physics;
//   return S;
// }
// let Total_Marks = Sum(
//   parseInt(prompt("Enter Your Math Marks !")),
//   parseInt(prompt("Enter Your Cs Marks !")),
//   parseInt(prompt("Enter Your Physics Marks !"))
// );
// alert("Total Marks: " + Total_Marks + " !");

// let array = parseInt(prompt("Enter Your List Number 1 to 5 !"));

// switch (array) {
//   case 1:
//     alert("Player One Babar !");
//     break;
//   case 2:
//     alert("Player Two Shaheen !");
//     break;
//   case 3:
//     alert("Player Three  Rizwan !");
//     break;
//   case 4:
//     alert("Player Four  Malik !");
//     break;
//   case 5:
//     alert("Player Five Afridi !");
//     break;
//   default:
//     alert("This Number Is Not A list !");
// }
//  Increment //
// let number = 2;
// while (number <= 10) {
//   console.log(number + ") Hello Fareed Khan !");
//   number += 2;
// }
// Decrement //
// let New = 100;
// while (New >= 10) {
//   console.log(New + ") Hello Fareed Khan !");
//   New--;
// }

// Do While Loop///

// let Equal = 1;
// do {
//   console.log(Equal + ") Hello Fareed Khan !");
//   Equal++;
// } while (Equal <= 10);

// function Name() {
//   alert("Hello world !");
// }
// Name();

// Functions With Parameters ///

// function fullName(Fname, lname) {
//   let fname = "hello " + Fname + lname + " !";
//   alert(fname);
// }
// fullName(prompt("Enter Your First Name !"), prompt("Enter Your Last Name !"));

// function Sum(Math, Cs, Physics) {
//   let S = Math + Cs + Physics;
//   return S;
// }
// let Total = Sum(
//   Number(prompt("Enter Your Math Marks !")),
//   Number(prompt("Enter Your Math Marks !")),
//   Number(prompt("Enter Your Math Marks !"))
// );
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);
// let a = 1;
// while (a<=10) {
//   console.log(a);
//   a++;
// }

// alert("Total_Marks " + Total + " !");

// function sum(...theArgs) {
//     let total = 0;
//     for (const arg of theArgs) {
//       total += arg;
//     }
//     return total;
//   }

//   console.log(sum(1, 2, 3));
//   // Expected output: 6

//   console.log(sum(1, 2, 3, 4))

// while loop //
// let condition = true
// let a= 1
// while(a<10){
// console.log(a);
// a++
// }

// do while loop///

// do{console.log("run in do while ");}while(false)

// console.dir(document.body.childNodes[3]);

// document.body.style.background = "yellow";

// Sir Abdullah ////
////                 12 jan 2025             ////
// Chapter 45 Events///

// prime Number

// let allCollected = false;

// let currentNumber = 1;
// let sum = 0;

// while (allCollected === true) {
//   currentNumber++;
//   const isPrimeNumber = false;
//   if (isPrimeNumber) sum += currentNumber;
//   // Find out and add prime number
//   if (sum >= 100) allCollected = true;
// }

// Dom Manipulations ///

// let score = 0
// const options = [1, 2, 3, "Exit", 4, 5, 6]

// function addPoints(option) {
//     const scoreElement = document.getElementById('score')
//     const prevScore = +scoreElement.innerText
//     scoreElement.innerText = option + prevScore
// }
// function getOption() {
//     let randomNumber = Math.random()
//     randomNumber = randomNumber * 6
//     randomNumber = Math.round(randomNumber)

//     const option = options[randomNumber]
//     return option
// }

// function showPoint() {
//     const option = getOption()
//     addPoints(option)

//     const diceElement = document.getElementById('dice')
//     diceElement.innerText = option
// }
//

// let arr = ["Babar", "Shaheen", "Junaid", "Amir", "Afridi", "Naseem"];
// // console.log("arrrr", ...arr); ////spread operators

// function mysplice(arr, startIndex, deleteItem, ...body) {  ///// rest parameters
//   console.log(arr, startIndex, deleteItem, body);
//   let newArray = [];
//   let start = [];
//   let end = [];
//   let deleteCount = Number(deleteItem);
//   if (isNaN(deleteCount)) {
//     alert("delete count must be a number");
//   } else {
//     if (startIndex >= 0 && startIndex < arr?.length - 1) {
//       if (deleteCount >= 0) {
//         for (let i = 0; i < startIndex; i++) {
//           start.push(arr[i]);
//         }
//         let end = arr.slice(startIndex + deleteCount);
//         newArray.push(...start, ...body, ...end);
//         return newArray;
//       } else {
//         alert("delete count be greater then -1.");
//       }
//     }
//   }
// }
// console.log(mysplice(arr, 2, 0, "Fareed", "Saeed"), "mySplice");
// if (
//   startIndex > -1 &&
//   startIndex < arr?.length - 1 &&
//   deleteItem < arr?.length - 1
// ) {
//   if (deleteItem >= 0) {
//     for (let i = 0; i < startIndex; i++) {
//       head.push(arr[i]);
//     }
//     console.log(head, "head");
//     tail = arr.slice(startIndex + deleteItem);
//     console.log(tail, "tail"); // Save the remaining part of the array
//     newArray.push(...head, ...middle, ...tail);
//     return newArray;
//   }
// } else {
//   alert("array out of index");
// }

// let arr = [
//   "Pepsi",
//   "Marinda",
//   "Fanta",
//   "Dew",
//   "CocaKloa",
//   "String",
//   "Redbull",
//   "Shilajit",
// ];

// function mysplice(arr, start, deleted, ...body) {
//   console.log(arr, start, deleted, body);
//   let newArr = [];
//   let first = [];
//   let end = [];
//   let num = Number(deleted);
//   if (isNaN(num)) {
//     alert("Please Enter Only Numbers !");
//   } else {
//     if (start >= 0 && start < arr?.length) {
//       if (num >= 0) {
//         for (let i = 0; i < start; i++) {
//           newArr.push(arr[i]);
//         }
//         let end = arr.slice(start + num);
//         console.log(end);
//         newArr.push(...first, ...body, ...end);
//         return newArr;
//       } else {
//         alert("Please must be greater than -1");
//       }
//     }
//   }
// }
// console.log(mysplice(arr, 2, 0, "7np", "Sprite"), "mysplice");

// let id = document.getElementById("head");
// console.dir(id);
// console.log(id);

// let c = document.getElementsByClassName("my-class");
// console.dir(c);
// console.log(c);

// let tag = document.getElementsByTagName("p");
// console.dir(tag);
// console.log(tag);

// let query = document.querySelector(".my-class");
// console.dir(query);
// console.log(query);

// let all = document.querySelectorAll(".my-class");
// console.dir(all);
// console.log(all);

// let spc = document.querySelector("div").innerText;
// console.log(spc);

// let spc = document.querySelector("div").innerHTML;
// console.log(spc);

// let chng = document.querySelector('div').innerText = "Allah-Hu-Akbar"
// console.log(chng);

// chng= document.querySelector('div').innerHTML = "<i>Allah-Hu Akbar</i>"
// console.log(chng);

// let chng = document.querySelector("h1").innerText;
// console.dir(chng);

// chng = document.querySelector("h1").innerText = chng + "From Fareed Gul !";

// let divs = document.querySelectorAll(".box");

// let index = 1;
// for (div of divs) {
//   div.innerText = `new unique div ${index}`;
//   index++;
// }

// let para = (document.querySelector("p").textContent = "GulKhan");
// console.dir(para);
// console.log(para);

// Function to check if a number is prime
// function isPrime(num) {
// if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
// console.log(num, "num-----");
// for (let i = 2; i <= Math.sqrt(num); i++) {
//   console.log(num % i === 0, num, i, Math.sqrt(num), "check condition false");
//   if (num % i === 0) return false; // Divisible by another number
// }
// //   console.log(num, "check condition true");
// return true; // Otherwise, it's prime
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     console.log(num, Math.sqrt(num), num % i, "num i loop");
//     if (num % i === 0) return false;
//     return true;
//   }
//   return true;
// }

// // Array of numbers
// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// // Filter prime numbers
// const primeNumbers = numbers.filter(isPrime);

// console.log(primeNumbers);

// Composite Number ///

// function myComposite(com) {
//   if (com <= 1) return false; // Exclude numbers less than or equal to 1
//   for (let i = 2; i <= Math.sqrt(com); i++) {
//     console.log(com % i === 0, com, i, Math.sqrt(com), "check condition false");
//     if (com % i === 0) {
//       return true; // If divisible by any number other than 1 and itself, it's composite
//     }
//   }
//   return false; // If no divisors found, it's not composite (it's prime)
// }

// // Array of numbers
// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// // Filter composite numbers
// const com_Numbers = numbers.filter(myComposite);

// console.log(com_Numbers); // Output: [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20]

// Function to check if a number is even
// function isEven(num) {
//   return num % 2 === 0;
// }

// // Function to check if a number is odd
// function isOdd(num) {
//   return num % 2 !== 0;
// }

// // Array of numbers
// const naumbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// // Filter even numbers
// const evenNumbers = naumbers.filter(isEven);

// // Filter odd numbers
// const oddNumbers = naumbers.filter(isOdd);

// console.log("Even Numbers:", evenNumbers); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// console.log("Odd Numbers:", oddNumbers);

// function isEven(number) {
//   return number % 2 === 0;
// }

// function isOdd(number) {
//   return number % 2 !== 0;
// }

// const numArray = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// const even_Num = numArray.filter(isEven);
// const odd_Num = numArray.filter(isOdd);

// console.log("Even-Number", even_Num);
// console.log("Odd-Number", odd_Num);

// function isEven(number) {
//   return number % 2 === 0;
// }
// function isOdd(number) {
//   return number % 2 !== 0;
// }

// const nom = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// const even_Num = nom.filter(isEven);
// const odd_Num = nom.filter(isOdd);
// console.log("Even", even_Num);
// console.log("Odd", odd_Num);

// let array = [1, 2, 3, 4, 5];
// console.log(array);
// let a = array.map((value, index, array) => {
//   console.log(value, index, array);
//   // value + 1;
// });
// // console.log(a);

// regular function
// function myName() {
//   console.log("Fareed Gul");
// }

// myName();

// Anonymous Function (without name)

// let sqaure = function (number) {
//   return number * number;
// };

// function expression
// let x = sqaure(5);
// console.log(x, sqaure);

// IIFE(Imediate Invoke function expression)

// (function (a, b) {
//   return a + b;
// })(3, 5);
// console.log();

//   let y=(function (math, cs) {
//     let sum = math + cs;
//     return sum;
//   })(65, 82);

//   console.log(y);

// let findEvenNumber = (number) => number % 2 === 0;

// // let findOddNumber = function (number) {
// //   number % 2 !== 0;
// // };

// console.log(findEvenNumber(4));

// array methods
// map ek new array return karta hain or us new array ko modify be kar sakthy ho

// const myModifyFunction = (arrayItem, arrayIndex, arrayLength) => {
//   console.log(
//     arrayItem + arrayItem,
//     arrayIndex,
//     arrayLength?.length,
//     "arrayIndex"
//   );
//   return arrayItem;
// };
// let modifyArray = array.map(myModifyFunction);

// console.log(array, "array");
// console.log(modifyArray, "modifyArray");

// let array = [1, 2, 3, 4, 5];

// let modify2 = array.map((item, index, arraylength) => {
//   console.log(item, index, arraylength?.length);
//   if (item % 2 === 0) {
//     return item + item;
//   } else {
//     return item;
//   }
// });

// console.log(modify2, "modify2");

// let array = [1, 2, 3, 4, 5];

// let myFunc = function (item, index, length) {
//   console.log(item + item+item, index, length);
//   return item;
// };
// let myArr = array.map(myFunc);
// console.log(myArr);
// console.log(array, "array");
// let array = [1, 2, 3, 4, 5];
// let myEven = function (item, index, length) {
//   console.log(item, index, length);
//   if (item % 2 === 0) {
//     return item + item;
//   } else {
//     return item;
//   }
// };
// let myModify = array.map(myEven);
// console.log(array);
// console.log(myModify);

// let array = [1, 2, 3, 4, 5];
// let myOdd = function (item, index, length) {
//   console.log(item, index, length);
//   if (item % 2 !== 0) {
//     return item + item;
//   } else {
//     return item;
//   }
// };
// let myModify = array.map(myOdd);
// console.log(array);
// console.log(myModify);

// regular function //

// function myFunc() {
//   console.log("Hello World !");
// }

// myFunc();

// Anonymus Function ///

// let myFunc = function () {
//   console.log("Hello World !");
// };
// myFunc();

// IIFE (Imidiate Invoke Function Expression)//

// console.log(
//   (function (a, b) {
//     return a + b;
//   })(2, 18)
// );

// let foo = (function (math, sci, eng) {
//   let sub = math + sci + eng;
//   return sub;
// })(70, 90, 100);
// console.log(foo);

// arrow function//////

// let myFunc = (a, b) => {
//   return a + b;
// };
// console.log(myFunc(2, 98));

// let score = 0;
// const options = [1, 2, 3, "Exit", 4, 5, 6];

// function addPoints(option) {
//   const scoreElement = document.getElementById("currentScore");
//   const totalScoreElement = document.getElementById("score");
//   const highScoreElement = document.getElementById("highScore");
//   const prevScore = +scoreElement.innerText;
//   if (option === "Exit") {
//     if (+highScoreElement.innerText < scoreElement.innerText) {
//       highScoreElement.innerText = scoreElement.innerText;
//     }
//     totalScoreElement.innerText = +totalScoreElement.innerText + prevScore;
//     scoreElement.innerText = 0;
//   } else {
//     scoreElement.innerText = option + prevScore;
//   }
// }
// function getOption() {
//   let randomNumber = Math.random();
//   randomNumber = randomNumber * 6;
//   randomNumber = Math.round(randomNumber);

//   const option = options[randomNumber];
//   return option;
// }

// function showPoint() {
//   const option = getOption();
//   addPoints(option);

//   const diceElement = document.getElementById("dice");
//   diceElement.innerText = option;
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i > 100);

// let a = 0;
// while (a > 10) {
//   console.log(a);
//   a++;
// }

// let myFunc = function () {
//   alert("Hello !")
// };

// let expand = () => {
//   document.getElementById("para").style.color = "blue";
//   document.getElementById("para").style.cursor = "pointer";
// };

// let out = () => {
//   document.getElementById("para").style.color = "black";
// };

// let myFunc = function () {
//   document.getElementById("input").style.backgroundColor = "black";
//   document.getElementById("input").style.color = "white";
// };

// let myFuncing = function () {
//   document.getElementById("input").style.backgroundColor = "white";
//   document.getElementById("input").style.color = "black";
// };

// let funcing = function () {
//   document.getElementById("value").style.cursor = "pointer";
//   let y = document.getElementById("input").value;
//   if (y === "") {
//     alert("Please field the fields !");
//   }
//   console.log(y);
// };

// let array = ["fareed", "saeed", "umer"];

// function mySplice(array, startIndex, delete_value, ...addEl) {
//   console.log(array, startIndex, delete_value, addEl);
//   let newArray = [];
//   let startArray = [];
//   let endingArray = [];
//   let notNumber = +delete_value;
//   if (isNaN(delete_value)) {
//     alert("Please enter the only number !");
//   } else {
//     if (startIndex >= 0 && startIndex < array?.length) {
//       if (notNumber >= 0) {
//         for (let i = 0; i < startIndex; i++) {
//           newArray.push(array[i]);
//         }
//       }
//       let endingArray = array.slice(startIndex + notNumber);
//       newArray.push(...startArray, ...addEl, ...endingArray);
//     } else {
//       alert("Please must be greater than -1");
//     }
//     return newArray;
//   }
// }
// console.log(mySplice(array, 0, 0, "khan"), "mySplice");

// function checkAddress() {
//   let value = document.getElementById("email").value;
//   if (value === "") {
//     alert("Please enter the fields !");
//   } else {
//     alert("Thankyou for submitting !");
//   }
// }

// chapter 50 //

// function fillCity() {
//   let cityName;
//   let coding = document.getElementById("code").value;
//   switch (coding) {
//     case "100":
//       cityName = "Peshawar";
//       break;
//     case "200":
//       cityName = "Balochistan";
//       break;
//     case "1000":
//       cityName = "Karachi";
//       break;
//     default: {
//       cityName = "This is wrong code !";
//     }
//   }
//   document.getElementById("city-code").value = cityName;
// }

// chapter 27 ////

// let rundom = Math.random();
// console.log(rundom);

// chapter 28///

// integer & decimal //

// let num = parseInt(23.8998);
// console.log(num);
// let num = parseFloat(23.8998);
// console.log(num);

// let pro = +prompt("Enter your number !");
// let new_value = parseInt(pro);
// console.log(new_value);

// chap 31//

// let date = new Date();
// console.log(date);

// let userBirthdayDate = new Date();
// console.log(userBirthdayDate);
// userBirthdayDate.setDate(+prompt("Enter your Bd date  !"));
// userBirthdayDate.setMonth(+prompt("Enter your BD month !"));
// userBirthdayDate.setFullYear(+prompt("Enter your BD year !"));
// alert(userBirthdayDate);

// let time = new Date();
// let current = time.getTime();
// console.log(current);

// functions///

// function huzaifa() {
//   alert("hello huzaifa !");
// }
// huzaifa();

// function fullName(fname, lname) {
//   let myName = "My name is " + fname + lname;
//   console.log(myName);
// }
// fullName("hafiz ", "huzaifa");

// function sum(math, cs, physics) {
//   let subjects = math + cs + physics;
//     return subjects;
// }
// let total = sum(
//   +prompt("Enter your out of 100 math marks !"),
//   +prompt("Enter your out of 100 cs marks !"),
//   +prompt("Enter your out of 100 physics marks !")
// );
// alert("Total Marks 300:" + total);

// let array = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thrusday",
//   "friday",
//   "saturday",
// ];
// let weekend = +prompt("Enter your weekend leave day !");

// switch (weekend) {
//   case 1:
//     alert(array[0]);
//     break;
//   case 2:
//     alert(array[1]);
//     break;
//   case 3:
//     alert(array[2]);
//     break;
//   case 4:
//     alert(array[3]);
//     break;
//   case 5:
//     alert(array[4]);
//     break;
//   case 6:
//     alert(array[5]);
//     break;
//   case 7:
//     alert(array[6]);
//     break;
//   default: {
//     alert("Error !");
//   }
// }

// function expandLoris() {
//   var expandedParagraph =
//     "Slow lorises are a group of several species of trepsirrhine primates which  make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of   distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several   distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several  adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time   Slow lorises have a toxic bite, a rare trait among mammals";
//   document.getElementById("slowLoris").innerHTML = expandedParagraph;
// }

//  function placeAList() {
//    var listToPlace = "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";
//    document.getElementById("divine").innerHTML = listToPlace;
//    }

// function hiden() {
//   document.getElementById("image").style.display = "none";
// }

// const paring = document.getElementById("para");

// addEventListener("mouseover", function () {
//   paring.classList.add("enlarge");
// });
// addEventListener("mouseout", function () {
//   paring.classList.remove("enlarge");
// });

// // function update() {
// //   let rvon = document.getElementById("para");
// //   rvon.classList.add("enlarge");
// // }

// // function removing() {
// //   let remo = document.getElementById("para");
// //   remo.classList.remove("enlarge");
// }

// function change(){
//   document.getElementById("leting").style.img
// }

// const pDiv = document.getElementById("parent");
// // console.log(document, pDiv);
// // const child = document.getElementsByTagName('p');
// const child = pDiv.getElementsByTagName("p");
// console.log(child);

// function filling() {
//   let input = document.getElementById("form").value;
//   let checkValue;
//   switch (input) {
//     case "100":
//       checkValue = "Peshawar";
//       break;
//     case "200":
//       checkValue = "Lahore";
//       break;
//     case "300":
//       checkValue = "Kashmir";
//       break;
//     case "400":
//       checkValue = "Balochistan";
//       break;
//     case "500":
//       checkValue = "Punjab";
//       break;
//     case "600":
//       checkValue = "Karachi";
//       break;
//     default: {
//       checkValue = "Your`s Zip Code is Wrong !";
//     }
//   }
//   document.getElementById("value").value = checkValue;
// }

// function moreText() {
//   let extraText =
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum eius  quia error aliquid cupiditate fuga, dolor distinctio tempora, amet  quibusdam natus praesentium nemo dolorem odit quasi quisquam vel enim.";
//   document.getElementById("text").innerHTML = extraText;
// }

// function list() {
//   let lists =
//     "<ul><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ul>";
//   document.getElementById("loris").innerHTML = lists;
// }

// function chngStyling() {
//   document.getElementById("text").className = "para";
// }

// function out() {
//   document.getElementById("text").className = "paring";
// }

// function swapPic() {
//   document.getElementById("pic").src =
//     "./WhatsApp Image 2024-11-28 at 11.15.04 PM (1).jpeg";
// }

// function outpic() {
//   document.getElementById("pic").src = "./Untitled.png";
// }
// function swap(eid, newpic) {
//   document.getElementById(eid).src = newpic;
// }

// function swap() {
//   document.getElementById('before').src = "./WhatsApp Image 2024-11-28 at 11.15.04 PM (1).jpeg";
// }
// function swap() {
//  let pic= document.getElementById("before");
// pic.src="./WhatsApp Image 2024-11-28 at 11.15.04 PM (1).jpeg"
// }

// function enlargeForm() {
//   let link = document.getElementById("link-1");
//   link.className = "jumbo";
// }

// chapter 55

// function styling() {
//   document.getElementById("para").className = "para";
// }

// function notStyling() {
//   document.getElementById("para").className = "paring";
// }

// function style() {
//   document.getElementById("p1").style.fontSize = "10em";
// }
// style()

// function styling() {
//   document.getElementById("image").style.cssFloat = "right";
// }

// function styling() {
//   document.getElementById("image").style.visibility = "hidden";
// }

// function styling() {
//   document.getElementById("image").style.margin = "0px 100px 0px 100px ";
// }

// chapter 56 Target all elements by tag name

// function element() {
//   let E = document.getElementsByTagName("p");
// //   for (let i = 0; i < E.length; i++) {
// //     E[i].innerHTML="Fareed gul is a greatest Man"
// //   }
//   //   console.log((E[1].innerHTML = "hello world"));
// }
// element();

// chapter 57 Target some elements by tag name

// function doming() {
//   //   let pars = document.getElementsByTagName("p");
//   //   let check = pars[4].innerHTML;
//   //   console.log(check);
//   //  (document.getElementById("para").style.backgroundColor = "red");

// //   let r = document.getElementById("tabling");
// //   let cells = r.getElementsByTagName("td");
// //   for (let i = 0; i < cells.length; i++) {
// //     cells[i].style.backgroundColor = "yellow";
// //   }
// }
// doming();

// chapter 58 The DOM //

// console.log(document.body);

// function checking() {
//   //   let e = document.getElementsByTagName("input");
//   //   console.log(e[0]);
//   //   let divs = document.getElementById("parent");
//   //   let get = divs.getElementsByTagName("p");
//   //   console.log(get[3].innerHTML);
//   //   let para = document.getElementsByTagName("p");
//   //   console.log((para[2].innerHTML = "Hello,World"));
//   //   let paragraph = document.getElementsByTagName("p");
//   //   console.log((paragraph[7].innerHTML = "AjabGul"));
//   //   let div = document.getElementById("parent");
//   //   let paragraph = div.getElementsByTagName("p");
//   //   console.log(paragraph[7].innerHTML);
//   //   let doc = document.childNodes;
//   //   console.log(doc);
//   //   let cNode = document.getElementById("2ndParent");
//   //   let y = cNode.childNodes;
//   //   console.log(y);
//   //   let cNode = document.getElementById("2ndParent");
//   //   let y = cNode.childNodes[2].innerHTML;
//   //   console.log(y);
//   //   let n = document.getElementById("parent");
//   //   let d = n.childNodes[1];
//   //   console.log(d);
//   //   console.log(d.nodeType);

//   // let div = document.getElementById("humpty");
//   // let pCounter = 0;
//   // for (let i = 0; i < div.childNodes.length; i++) {
//   //   if (div.childNodes[i].nodeType === 1) {
//   //     pCounter++;
//   //   }
//   //   if (pCounter === 3) {
//   //     div.childNodes[i].innerHTML = "all over thankyou !";
//   //     break;
//   //   }
//   // }
// }
// checking();

// chapter 62The DOM:
// More ways to target elements///

// let f = document.getElementById("parent").firstElementChild;
// let f = document.getElementById('parent').lastElementChild
// console.log(f);

// let kiding = document.getElementById("parent");
// let checking = kiding.parentNode;
// console.log(checking);

// let firstEl = document.getElementById("parent");
// // let secondEl = firstEl.nextSibling;
// let secondEl = firstEl.lastElementChild;
// console.log(secondEl);

// chapter 63 The DOM:
// Getting a target's name//

// let tell = document.getElementById("list");
// let enjoying = tell.nodeName;
// console.log(enjoying);

// let tell = document.getElementById("list");
// let target = tell.nodeValue;
// console.log(target);

// let tEl = document.getElementsByTagName("li");
// let leng = tEl.length;
// console.log(leng,"--li-length");

// let liElement = document.getElementsByTagName("li");
// let targeting = liElement.length;
// // console.log(targeting);

// for (let i = 0; i < targeting; i++) {
//   if (liElement[i].innerHTML === "") {
//     liElement[i].innerHTML = "Hello,world !";
//     liElement[i].style.fontStyle = "italic";
//     liElement[i].style.color = "blue";
//   }
// }

// let liParent = document.getElementById("list");
// let checkChildNode = liParent.parentNode;
// console.log(checkChildNode);

// let varinty = document.getElementById('parent');
// let lengthing = varinty.childNodes;
// console.log(lengthing);

// chapter 65 The DOM:
// Attributes

// let paragraph = document.getElementById("para");
// let addClass = paragraph.hasAttribute("style");
// console.log(addClass);

// let paragraph = document.getElementById("para");
// let addClass = paragraph.getAttribute("style");
// console.log(addClass);

// let unOList = document.getElementById("unOrderlist");
// let addClass = unOList.setAttribute(
// "class","para"
// );
// console.log(addClass);

// chapter 66 The DOM:
// Attribute names and values//

// let checks = document.getElementById("divs");
// let loing = checks.childNodes[1]
// console.log(loing);

// let checks = document.getElementById("divs");
// let loing = checks.parentNode
// console.log(loing);

// let checks = document.getElementById("divs");
// let loing = checks.firstElementChild
// console.log(loing);

// let paragraph = document.getElementById("para");
// let checkLength = paragraph.attributes;
// console.log(checkLength);

// chapter 67 68 The DOM:
// Adding nodes///

// let addTag = document.getElementById("divs");
// let create = (document.createElement("p"));
// let t = document.createTextNode("hello fareed");
// console.log(t);

// let divAdd = document.getElementById("parent");

// let createPara = document.createElement("div");
// createPara.style.backgroundColor = "yellow";
// let createText = document.createTextNode("I am a div !");

// createPara.appendChild(createText);
// divAdd.appendChild(createPara);

// let parentDiv = document.getElementById("parent");
// parentDiv.style.backgroundColor = "black";
// let parentChildDiv = document.getElementById("parentChild");
// parentChildDiv.style.backgroundColor = "pink";
// // parentDiv//
// let pdCreateEl = document.createElement("i");
// pdCreateEl.style.backgroundColor = "yellow";
// let pdCreateText = document.createTextNode("iam a italic !");
// // parentDiv//

// // parentChildDiv
// let pdcCreateEl = document.createElement("b");
// pdcCreateEl.style.backgroundColor = "green";
// pdcCreateEl.style.color = "black";
// let pdcCreateText = document.createTextNode("iam a bolder !");
// // parentChildDiv

// //parent appending /

// parentDiv.appendChild(pdCreateEl);
// pdCreateEl.appendChild(pdCreateText);
// //parent appending /

// // parentChildDiv appending //

// parentChildDiv.appendChild(pdcCreateEl);
// pdcCreateEl.appendChild(pdcCreateText);

// let a = document.getElementById("parent");
// let before = document.createElement("p");
// before.textContent = "iam a before p !";
// let after = document.createElement("p");
// after.textContent = "iam a after p !";
// a.insertAdjacentElement("beforebegin", before);
// a.insertAdjacentElement("afterend", after);

// let parent = document.getElementById("parent"); // Get the parent element
// let child = document.getElementById("child");

// parent.removeChild(child);

// let f = 6;
// function factorialNum(number) {
//   let array = Array.from(Array(number + 1).keys());
//   console.log(array.slice(1));
//   // let c = array.slice(1).reduce((a, b) => {
//   //   return a * b;
//   // });
//   // console.log(c);
// }
// factorialNum(f);

// matches/
// let div = document.getElementById("parent");
// let z = div.matches(".classes");
// console.log(z);

// let div = document.getElementById("parent");
// let z = div.matches(".class");
// console.log(z);

// closest /
// let div = document.getElementById("parent");
// let z = div.closest(".classe");
// console.log(z);

// let div = document.getElementById("parent");
// let z = div.closest(".class");
// console.log(z);

// contains //
// let d = document
//   .querySelector("body")
//   .contains(document.querySelector("#parent"));
// console.log(d);

// function factorialNum(number) {
//   let fac = number;
//   let dummyArray = [];
//   let sum = 1;
//   for (let i = 1; i <= number; i++) {
//     dummyArray.push(fac);
//     fac = fac - 1;
//   }
//   dummyArray?.map((item) => {
//     sum = sum * item;
//   });
//   console.log(dummyArray, sum);
//   return sum;
// }
// let input = prompt("Enter your factorial number !");
// input = Number(input);
// factorialNum(input);

// function factorialNum(num) {
//   let factorial = num;
//   let dummyArray = [];
//   let facResult = 1;
//   for (let i = 0; i < num; i++) {
//     dummyArray.push(factorial);
//     factorial = factorial - 1;
//   }
//   dummyArray.map((item) => {
//     facResult = facResult * item;
//     return facResult;
//   });
//   console.log(dummyArray, "---dummyArray");
//   console.log("factorialValue = ", facResult);
// }
// factorialNum(+prompt("Enter Factorial Numbers !"));

let arr = [
  "Pepsi",
  "Marinda",
  "Fanta",
  "Dew",
  "CocaKloa",
  "String",
  "Redbull",
  "Shilajit",
];

function mysplice(arr, start, deleted, ...body) {
  console.log(arr, start, deleted, body);
  let newArr = [];
  let first = [];
  let end = [];
  let num = deleted;
  if (start >= 0 && start < arr?.length) {
    if (num >= 0) {
      for (let i = 0; i < start; i++) {
        newArr.push(arr[i]);
      }
      let end = arr.slice(start + num);
      console.log(end);
      newArr.push(...first, ...body, ...end);
      return newArr;
    } else {
      alert("Please must be greater than -1");
    }
  }
}

console.log(mysplice(arr, 2, 4, "7np", "Sprite"), "mysplice");
