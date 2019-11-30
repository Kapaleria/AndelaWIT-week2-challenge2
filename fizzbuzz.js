
function fizzBuzz(list1, list2) {
var sumOfArrayLengths=list1.length + list2.length;
    /*returns Fizz if the
combined length of the lists is divisible by 3, Buzz if it is divisible by 5, Fizzbuzz if it
is divisible by both 5 and 3 or the combined length of the list.
*/
    if(sumOfArrayLengths%3 == 0 && sumOfArrayLengths%5!== 0 ){
        return "Fizz"; 
 /*returns Fizz if the
combined length of the lists is divisible by 3
*/
    }
    else if(sumOfArrayLengths%5 == 0 && sumOfArrayLengths%3!== 0){
        return "Buzz";
/*returns Buzz if it is divisible by 5
*/
    }
    else if(sumOfArrayLengths %3 == 0 && sumOfArrayLengths%5== 0 ){
        return "Fizzbuzz" ;
/*returns Fizzbuzz if it
is divisible by both 5 and 3 or the combined length of the list.
*/
    }
    else if(sumOfArrayLengths%3!== 0 && sumOfArrayLengths%5 !== 0){
        return sumOfArrayLengths ;
    }
}
module.exports = fizzBuzz;