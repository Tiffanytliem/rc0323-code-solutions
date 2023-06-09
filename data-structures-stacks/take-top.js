export default function takeTop(stack) {
  if (typeof stack.peek() === 'undefined') {
    return undefined;
  } else {
    const value = stack.peek();
    stack.pop();
    return value;
  }
}
