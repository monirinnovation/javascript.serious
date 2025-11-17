// var x = "monir";
// console.log(x);
// var name = "sadurddin";
// console.log(name)
//  var isRich = true;
//  console.log(typeof isRich)

//  var applePrice = 20 ;
//  var goavaPrice = parseInt('30') ;

//  console.log(applePrice);
//  console.log(goavaPrice);
//  console.log( applePrice + goavaPrice);

//  var price1 = 30 ;
//  var price2 = 20 ;
//  var totalPrice = price1 + price2 ;
//  console.log(totalPrice)

//  let apple1 = 50 ;
//  let apple2 = 10 ;
//  let totalApple = apple1 - apple2 ;
//  console.log (totalApple);

//  let ban1 = 30 ;
//  let ban2 = 10 ;
//  let totalBan = ban1 * ban2 ;
//  console.log(totalBan);

//  let man1 = 100 ;
//  let man2 = 25 ;
//  let allMan = man1 / man2 ;
//  console.log (allMan);

//  let modulo = 100 ;
//  let modulo2 = 22 ;
//  let allMo = modulo % modulo2;
//  console.log (allMo)

//  let gun1 = 22 ;
//  let gun2 = 4 ;
//  let gun = gun1 * gun2 ;
//  console.log (gun);

//  let biyog1 = 100 ;
//  let biyog2 = 88 ;
//  let biyog = biyog1 - biyog2 ;
//  console.log (biyog);

//  let x = 22000 ;
//  let y = 80 ;
//  let z = x * y ;
//  console.log(z)


 /*

* Greater than : >
* less than  : <
* greater than or equal = >=
* less than or equal : <=
* equal : ==
* not equal : !=
*  and : &&
* or : ||


  */


// let price = 250 ;
// if( price < 300 ){
//    console.log( 'Give me');
// }   

// if (8 < 10) {
//   console.log( "is it ok");
// }

// const salary = 25000 ;
// const isBCS =  true ;
// if (salary > 20000) {
//   console.log( "su-----patro");
// }

// else{
//   console.log ("no----way");
// }





// const price = 5000 ; 
// if (price >= 5000){

//   const discount = price * 10 / 100;
//   const payAmount = price - discount ;
//   console.log(payAmount);
// }


// const age = 18 ;
 
// age >= 18 ? console.log ('Vote dio') : console.log ('Ghumai thako')


// let pri = 5000 ;
// if ( isLeader === true){
//   if (pri > 1000){
//     pri = pri / 2
//   }
// }
// else {
//   pri = pri ;
// }
// console.log( pri)


// let isLeader = false ; 
// if (isLeader){
//   console.log("chair saro")
// }
// else{
//   console.log("dukte dibi na");
// }


let isPassed = false ;
if(!isPassed){
  console.log("shona moni")
}
else{
  console.log("biya")
}

let isPasse = false ;
if (! isPasse){
  console.log('tumi amar noyoner momi')
}

else {
  console.log('biya diya dimu')
}


let x = 8;
if (x > 8 ){
  console.log('it is big number');
}
else if (x == 8){
  console.log('it is equal number');
}

else{
  
 console.log('it is small number');
}



let shoppingDone = true ;


if (shoppingDone === false){
  console.log('Child will get allowance 10 tk')

}
else (
  console.log('Child will get 5 tk')
)


let weather = 'l' ;
if (weather == 'sunny'){
  console.log('Good i like it ')
}

else if (weather == 'rainy'){
  console.log('my wife like it ')
}

else if (weather == 'overcast'){
  console.log(' better')
}

else {
  console.log('i do not know')
}



let burger = 600 ;
if (burger > 500 ){
  console.log ('You will get free coke')
}
else {
  console.log('Coke price is 30 tk')
}


let bmi = 20 ;

if(bmi < 18.5){
  console.log('You are underweight');
}

else if (bmi >= 18.5 && bmi <= 24.9 ){

    console.log("You are normal")

}

else if ( bmi >= 25 && bmi < 29.9 ) {
  console.log("You are overweight")
}


else {
  console.log ("You are obes")
}


const numbers = [ 12, 34, 56, 78, 90]
console.log(numbers[3])

numbers [1] = 500;

console.log(numbers)


let ages = [98, 87, 65, 74, 43, 21]
console.log(ages);
ages.push(1000);
console.log(ages);


let friends = ['balam', 'kalam', 'salam', ]
console.log(friends)

friends. push('gelam');
console.log(friends)

friends.pop()
console.log(friends)
friends.pop()
console.log(friends)



let fruits = [ 'apple', 'comola', 'piyara', 'chalta']

console.log( fruits.includes('apple'))
console.log(fruits.indexOf('comola'))

console.log( Array.isArray(fruits))
console.log( Array.isArray(ages))



let laptop = [ 'intel', 'bintel', 'ghintel', 'mintel'];

console.log(laptop);



// let mobile = [ 'Apple', 'Techno', 
//   'Realme', 'Samsung' ];

//   console.log(mobile);


// let mobile = ['Apple', 'Techno', 'Realme', 'Samsung'];
// console.log(mobile)
// console.log(mobile[0])
// console.log(mobile[3])
// mobile.push('Vibo');
// console.log(mobile);
// mobile.unshift('Oppo');
// console.log(mobile);

let mobile = [ 'Apple', 'Techno', 'Realme', 'Samsung'];
console.log(mobile);
console.log(mobile[2])
mobile.push('Vibo');
console.log(mobile);
mobile.unshift('Oppo');
console.log(mobile);
mobile.pop();
console.log(mobile);
mobile.shift();
console.log(mobile);