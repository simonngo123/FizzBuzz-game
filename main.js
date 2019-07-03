/* Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”. */


// get the div
let text = document.querySelector('.container');

// for loop print into HTML page
for  (var i = 1; i <=100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        text.innerHTML += 'FizzBuzz' + '<br>';
    } else if (i % 3 == 0) { 
        text.innerHTML += 'Fizz' + '<br>';
    } else if (i % 5 == 0) {
        text.innerHTML += 'Buzz' + '<br>';
    } else {
        text.innerHTML += i + '<br>';
    }
}




// // for loop solution print into console
// for  (var i = 1; i <=100; i++) {
    
//     // if number is module of 5 and 3
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('FizzBuzz');
//     // if number is module of 3    
//     } else if (i % 3 == 0) {
//         console.log('Fizz');
//     // if number is module of 5 
//     } else if (i % 5 == 0) {
//         console.log('Buzz');
//     // print the number    
//     } else {
//         console.log(i);
//     }
// }

