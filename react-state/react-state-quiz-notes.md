# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
hooks in React are functions that are only available when React is rendering. They let you "hook into" different React features.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
hooks are function starting with use and can only be called at the top level of your components or your own hooks. Hooks cannot be called inside conditions, loops, or other nested functions.

- What is the purpose of state in React?
the purpose of state in React is to retain data between renders, and trigger React to render the component again

- Why can't we just maintain state in a local variable?
because local variables do not retain data between renders and changes in local variable does not trigger React to rerender the component

- What two actions happen when you call a `state setter` function?
1. Retain data between renders
2. Trigger React to render the component with new data

- When does the local `state variable` get updated with the new value?
when the state setter function is called

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
