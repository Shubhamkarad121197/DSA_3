// Postfix expressions are an ordering of mathematical operations, where the operator(+,-,* etc) comes after the operands.

// For instance, an operation 2 + 3 (infix notation, which humans use) will be represented as 2 3 + in postfix notation. The computers can understand postfix notation.

// Your job is to evaluate the given postfix expression. The expression is given as a string where each token is separated by a space.

// The possible operators can be +, - and *

// Note that all operands(numbers) are assumed to be non-negative.

// Input format
// One line of input, containing the string S.

// Output format
// Print the result of the given expression

// Sample Input 1
// 2 3 +

// Sample Output 1
// 5

// Explanation 1
// 3 + 2 = 5

// Sample Input 2
// 2 3 1 * + 9 -

// Sample Output 2
// -4

// Explanation 2
// If the expression is converted into an infix expression, it will be 2 + (3 * 1) – 9 = 5 – 9 = -4.


//Optimized approach
function evaluatePostFixExpressionOptimize(str) {
    let stack = [];
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "+" || arr[i] === "-" || arr[i] === "*") {
            let a = stack.pop();
            let b = stack.pop();
            if (arr[i] === "+") {
                stack.push(b + a);
            } else if (arr[i] === "-") {
                stack.push(b - a);
            } else if (arr[i] === "*") {
                stack.push(b * a);
            }
        } else {
            stack.push(parseInt(arr[i]));
        }
    }
    console.log(stack[0]);
}