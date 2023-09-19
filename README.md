# node-task
# Task 1 Fibonocci
Fibonacci Sequence Calculator
This JavaScript application calculates the Fibonacci number at a specified position in the Fibonacci series efficiently using recursion and memoization.

Usage
To use the Fibonacci sequence calculator, follow these steps:

Ensure you have Node.js installed on your system.

Copy the fibonacci function into your JavaScript project or use it directly in your code.

Call the fibonacci function with the desired position in the Fibonacci series as an argument.

The function will return the Fibonacci number at the specified position.

Display the result as needed in your application.

How It Works
The fibonacci function employs a recursive approach with memoization to efficiently calculate Fibonacci numbers. Here's how it works:

It accepts two parameters: n (the position in the series to calculate) and memo (a memoization object to store previously calculated values).

If the value for n is already stored in the memo object, the function retrieves and returns it directly, avoiding redundant calculations.

If n is 1 or 2, it returns 1 since the Fibonacci sequence starts with 1.

For other values of n, it calculates the Fibonacci number by recursively calling itself with n - 1 and n - 2, then summing the results. The result is stored in the memo object to speed up future calculations.

Finally, the function returns the Fibonacci number at position n.

# How to run
node taskone

# Task 2

Balanced Substrings Finder
This JavaScript function, getBalancedSubstrings, identifies and returns the longest balanced substrings in a given string. A balanced substring is defined as a substring that consists of exactly two different characters, and both of those characters appear the same number of times.

Usage
To use the getBalancedSubstrings function in your JavaScript project, follow these steps:

Copy the function into your JavaScript code or include it in your project.

Call the getBalancedSubstrings function with a string S as an argument.

The function will return an array containing the longest balanced substrings found in the input string S.

You can then process and display the result as needed in your application.

How It Works
The getBalancedSubstrings function works as follows:

It initializes an empty array called result to store the longest balanced substrings found in the input string.

It uses nested loops to iterate through the characters of the input string S.

The outer loop, controlled by the variable i, represents the starting index of the substring.

Inside the outer loop, a Map called charCounts is created to keep track of the characters and their counts in the current substring. The variable distinctChars is initialized to 1, indicating that we have seen one distinct character so far.

The inner loop, controlled by the variable j, iterates through the characters from i+1 to the end of the string.

When a new distinct character is encountered, it is added to the charCounts Map, and distinctChars is incremented. If more than two distinct characters are found, the inner loop breaks because we can't have more than two distinct characters in a balanced substring.

If the conditions for a balanced substring are met (exactly two distinct characters, and their counts are equal), the substring is added to the result array.

The outer loop continues until all possible substrings have been checked.

Finally, the function returns the result array containing the longest balanced substrings.
# HOW to RUN
node tasktwo
