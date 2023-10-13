# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
`event.target` is the element of the `event` from the addEventListener method

- Why is it possible to listen for events on one element that actually happen its descendent elements?
because of event bubbling. event starts at the most specific node and flows outwards to the least specific one.

- What DOM element property tells you what type of element it is?
event.target.tagName

- What does the `element.closest()` method take as its argument and what does it return?
it takes a selector as its argument and return the element of the closest ancestor of that element

- How can you remove an element from the DOM?
element.remove()

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
by adding the event listener to the container that contains all those individual elements

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
