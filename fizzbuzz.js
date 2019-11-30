
function fizzBuzz(list1, list2) {
var sumOfArrayLengths=list1.length + list2.length;
    
    if(sumOfArrayLengths%3 == 0 && sumOfArrayLengths%5!== 0 ){
        return "Fizz";
    }
    else if(sumOfArrayLengths%5 == 0 && sumOfArrayLengths%3!== 0){
        return "Buzz";
    }
    else if(sumOfArrayLengths %3 == 0 && sumOfArrayLengths%5== 0 ){
        return "Fizzbuzz" ;
    }
    else if(sumOfArrayLengths%3!== 0 && sumOfArrayLengths%5 !== 0){
        return sumOfArrayLengths ;
    }
}
module.exports = fizzBuzz;