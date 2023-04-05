# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
To see if our codes are working the way we intended for them.

- What is a "model"?
a model is structured copy of a page

- Which "document" is being referred to in the phrase Document Object Model?
HTML

- What is the word "object" referring to in the phrase Document Object Model?
javascript object

- What is a DOM Tree?
a model of a web page

- Give two examples of `document` methods that retrieve a single element from the DOM.
document.getElementByID('');
document.querySelector('');

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
document.getElementsByClassName('');

- Why might you want to assign the return value of a DOM query to a variable?
To reuse that reference of the object.

- What `console` method allows you to inspect the properties of a DOM element object?
console.dir();

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
it let HTML loads before any JS loads.

- What does `document.querySelector()` take as its argument and what does it return?
it takes one selector as an argument and return the first element within the document that matches the specified selector.

- What does `document.querySelectorAll()` take as its argument and what does it return?
it takes one or more selectors as arguments and return a static NodeList - a list of the document's elements that match those selectors

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
