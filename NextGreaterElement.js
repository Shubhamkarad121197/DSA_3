// Given an array A having N elements, the task is to find the next greater element(NGE) for each element of the array in order of their appearance in the array. If no such element exists, output -1. This should be achieved with a time complexity of O(n).

// Input format
// There are 2 lines of input

// The first line contains an integer N denoting the size of the array.

// The second line contains N space separated positive integers denoting the values in the array A.

// Output format
// Print N space separated integers, which are the next greater element for each array element. If no such greater element exists for any element, output -1

// Function definition
// You have to implement the given function. It accepts the original array as an argument, and returns the new next greater element array.

// Constraints
// 1 <= N <= 10^5

// 0 <= Values in the array <= 10^9

// Sample Input 1
// 4

// 1 3 2 4

// Sample Output 1
// 3 4 4 -1





//Brute force approach

function nextGreaterElement(arr) {
  n = arr.length;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        newArr[i] = arr[j];
        found = true;
        break;
      }
    }
    if (!found) {
      newArr[i] = -1;
      -1;
    }
  }
  console.log(newArr);
}


//Optimized approach
function nextGreaterElementOptimize(arr) {
    n=arr.length;
    let newArr=[];
    let stack=[];
    for(let i=n-1;i>=0;i--){
        while(stack.length>0 && stack[stack.length-1]<=arr[i]){
            stack.pop();
        }
        if(stack.length==0){
            newArr.push(-1);
        }else{
            newArr.push(stack[stack.length-1]);
        }
        stack.push(arr[i]);
    }
    return newArr.reverse();
}
console.log(nextGreaterElement([1,3,2,4]));

console.log(nextGreaterElementOptimize([1,3,2,4]));