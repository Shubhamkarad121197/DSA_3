// Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses 
// substring
// .

 

// Example 1:

// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
// Example 2:

// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".
// Example 3:

// Input: s = ""
// Output: 0
 

var longestValidParentheses = function(s) {
    let stack=[-1];//stack to store the index of the last unmatched '('
    let maxLength=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=='('){
            stack.push(i)//push the index of '('
        }
        else{
            stack.pop();//pop the index of '('

            if(stack.length==0){
                stack.push(i)//push the index of ')' as the last unmatched ')'
            }
            else{
                maxLength=Math.max(maxLength,i-stack[stack.length-1]) //calculate the length of the valid substring
            }
            
        }
    }
    return maxLength;//return the length of the longest valid substring
    
};

// Time complexity: O(n)
// Space complexity: O(n)

console.log(longestValidParentheses("(()"));//2
console.log(longestValidParentheses(")()())"));//4
console.log(longestValidParentheses(""));//0
console.log(longestValidParentheses("()"));//2
console.log(longestValidParentheses("()(()"));//2