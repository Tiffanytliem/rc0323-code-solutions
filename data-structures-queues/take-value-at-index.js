export default function takeValueAtIndex(queue, index) {
  if (queue.peek()) {
    let count = 0;
    while (count < index) {
      const value = queue.dequeue();
      queue.enqueue(value);
      count++;
    }
    return queue.dequeue();
  } else {
    return undefined;
  }
}
