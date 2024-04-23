
// isPalindrome

function isPalindrome(str) {
    // Base case: if the length of the string is 0 or 1, it's a palindrome
    if (str.length <= 1) {
        return true;
    }

    // Check if the first and last characters are the same
    if (str[0] === str[str.length - 1]) {
        // Recur on the substring excluding the first and last characters
        return isPalindrome(str.substring(1, str.length - 1));
    } else {
        return false; // Not a palindrome
    }
}

console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("hello")); // Output: false




