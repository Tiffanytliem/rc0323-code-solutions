# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
to test our codes

- What is the purpose of events and event handling?
to respond to user's activities on the page

- Are all possible parameters required to use a JavaScript method or function?
no

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
addEventListener

- What is a callback function?
a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action

- What object is passed into an event listener callback when the event fires?
event

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
event.target is the html element of the event. I would check by logging it into the console. I could get more information about it on mdn

- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```
  passing a reference to the handleClick function as the second argument to the addEventListener method. The function is executed after the click event is triggered
    ```js
    element.addEventListener('click', handleClick())
    ```
  passing the return of the handleClick function as the second argument to the addEventListener method. the function is executed before the click event is triggered.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
  width: 100%;
}
```
