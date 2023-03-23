/*This is a demo task.

Write a function:

function solution(A); that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.
Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

function minPossit(arr) {
    for(var i = 1;  i< arr.length+1; i++) {
        if(arr.includes(i)){
            if(i == arr.length) {
            return(i+1); 
            }
        }else{        
            return(i);  
       }
    }
}

function solution(A) {
    // Implement your solution here

    A.sort((a, b) => (a < b ? -1 : 0));
    const postA = A.filter(a => a > 0);
    if(postA.length == 0){
     return (1);
    }
    const solution = minPossit(postA)

    return(solution)
}

console.log(solution( [-3, -2, 1]));