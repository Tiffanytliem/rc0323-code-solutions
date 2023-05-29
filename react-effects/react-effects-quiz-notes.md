# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
a component is mounted to the DOM after the initialization phase is completed

- What is a React Effect?
React Effect is a React hook that let you synchronize a component with an external system

- When should you use an Effect and when should you not use an Effect?
You should use an Effect when you need to connect your component to an external system
You should not use an Effect if you're not trying to synchronize with some external system

- When do Effects run?
Effects run after each render of the component where it's called

- What function is used to declare an Effect?
useEffect()

- What are Effect dependencies and how do you declare them?
Effect dependencies are a list of dependencies of side-effect, are props or state values
Declare dependencies as an empty array

- Why would you want to clean up from an Effect?
To optimize applicaiton for a good user experience, to prevent unexpected errors

- How do you clean up from an Effect?
by using the Cleanup function

- When does the cleanup function run?
it runs when a component unmounts and after each re-render

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
