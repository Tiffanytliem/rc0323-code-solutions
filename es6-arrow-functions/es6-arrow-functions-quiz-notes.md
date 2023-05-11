# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
(parameters) => expression;

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
with the curly braces, the block syntax is used, the function need to add the `return` keyword. The block syntax is not needed if the body of the arrow function is an expression. However, it is needed if the body of the function is a statement.

- When using _concise body syntax_, how do you return an object literal?
wrap the object literal inside parentheses ().

- In the expression
    ```js
    foo(() => 42);
    ```
  - Identify the arrow function
    foo

  - How many arguments does the arrow function take?
    0

  - What value does it return?
    42

  - How many arguments are passed to the function `foo`?
    0

  - What type of argument is passed to the function `foo`?
    no argument

- In the expression
    ```js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
    ```
    - Identify the arrow function
      bar

    - How many arguments does the arrow function take?
      1

    - What value does it return?
      `4y = ${4 * y}`

    - How many arguments are passed to the function `bar`?
      1

    - What type of argument is passed to the function `bar`?
      number

    - When does the arrow function's code get executed?
      when the function is called

- How does the value of `this` differ between standard functions and arrow functions?
The value of `this` in a standard function is defined by the calling object.
The value of `this` in an arrow function is taken from lexical scope.


## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
```

for HTML:
```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:
```css
div {
  width:100%
}
```
