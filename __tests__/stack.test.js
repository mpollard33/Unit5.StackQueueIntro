const Stack = require("../Stack");

/** Simple tests for basic stack operations */
describe("Stack", () => {
  test("peek() returns undefined if the stack is empty", () => {
    const stack = new Stack();
    expect(stack.peek()).toBeUndefined();
  });

  test("peek() returns the top element of the stack without removing it", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
    expect(stack.peek()).toEqual(1);
  });

  test("push() adds an element to the top of the stack", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  });

  test("pop() removes an element from the top of the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toEqual(2);
    expect(stack.peek()).toEqual(1);
  });

  test("isEmpty() returns whether the stack is empty", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test("size() returns the number of elements in the stack", () => {
    const stack = new Stack();
    expect(stack.size()).toEqual(0);
    stack.push(1);
    expect(stack.size()).toEqual(1);
    stack.push(2);
    expect(stack.size()).toEqual(2);
    stack.pop();
    expect(stack.size()).toEqual(1);
  });
});
