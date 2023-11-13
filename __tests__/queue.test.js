const Queue = require("../Queue");

/** Simple tests for basic queue operations */
describe("Queue", () => {
  test("peek() returns undefined if the queue is empty", () => {
    const queue = new Queue();
    expect(queue.peek()).toBeUndefined();
  });

  test("peek() returns the front of the queue without removing it", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
    expect(queue.peek()).toEqual(1);
  });

  test("enqueue() adds an element to the back of the queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
    queue.enqueue(2);
    expect(queue.peek()).toEqual(1);
  });

  test("dequeue() removes an element from the front of the queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.peek()).toEqual(2);
  });

  test("isEmpty() returns whether the queue is empty", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });

  test("size() returns the number of elements in the queue", () => {
    const queue = new Queue();
    expect(queue.size()).toEqual(0);
    queue.enqueue(1);
    expect(queue.size()).toEqual(1);
    queue.enqueue(2);
    expect(queue.size()).toEqual(2);
    queue.dequeue();
    expect(queue.size()).toEqual(1);
  });
});
