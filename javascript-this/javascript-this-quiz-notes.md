# javascript-this-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is `this` in JavaScript?
this is an implicit parameter of all JavaScript functions, and the value of this is determined when the function is called.

- What does it mean to say that `this` is an "implicit parameter"?
it means that it is available in a function's code block even though it was never included in the function's parameter list or declared.

- _When_ is the value of `this` determined in a function; **call time** or **definition time**?
call time

- What does `this` refer to in the following code snippet?
    ```js
    const character = {
      firstName: 'Mario',
      greet: function () {
        const message = 'It\'s-a-me, ' + this.firstName + '!';
        console.log(message);
      }
    };
    ```
the character object

- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    character.greet();
    ```
`It's-a-me, Mario!`
  Because the greet method of the character object is being called and the code block was executed.

- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    const hello = character.greet;
    hello();
    ```
`It's-a-me, undefined!`
Because `hello` is assigned to the method greet, however, `this` is seperated from the object so now its .firstName property is undefined.

- How can you tell what the value of `this` will be for a particular function or method **definition**?
by looking at where `this` is placed in a function or method

- How can you tell what the value of `this` is for a particular function or method **call**?
by looking at the left side of the dot '.' when the function or method is called

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
