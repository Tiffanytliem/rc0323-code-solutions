export default function getTop(stack) {
  if (typeof stack.peek() === 'undefined') {
    return undefined;
  } else {
    return stack.peek();
  }
}
