/* 4. Write a program that checks if a given string is a palindrome (using a loop).
A palindrome is a word, number, or other sequence of characters that reads the same forward and backward (assume there will be no spaces, tabs or punctuation).
*/

function checkPalindrome(textInput) {
    textInput = textInput.toLowerCase();
    if(textInput.length%2==0){
        let half = textInput.length/2;

        let a=half-1;
        let b=half;
        
        while(b<textInput.length){
            if(!(textInput.slice(a, a+1)==textInput.slice(b, b+1))){
                return false;
            }
            a--;
            b++;
        }
        return true;
    }
    else{
        let half = (textInput.length+1)/2;

        let a=half-2;
        let b=half;
        while(b<textInput.length){
            if(!(textInput.slice(a, a+1)==textInput.slice(b, b+1))){
                return false;
            }
            a--;
            b++;
        }
        return true;
    }
}

// Test for palindrome

let testString = "racecar"; // true
let testString2 = "hello"; // false

// TODO: display the result of the test strings in the console
console.log(checkPalindrome(testString));
console.log(checkPalindrome(testString2));
