import renderer from "react-test-renderer";

class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }
  get peek() {
    return this.items[this.top];
  }
  onIndex(v) {
    return this.items[v];
  }
  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }
  pop() {
    this.items[this.top] = undefined;
    this.top -= 1;
  }
}

describe("My test", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("check page change", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toStrictEqual({});
  });

  it("asd", () => {
    stack.push("ninja");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("ninja");
  });

  it("asda", () => {
    stack.push("ninja");
    stack.push("gaming");
    const top = stack.top;
    stack.pop();
    expect(stack.onIndex(top)).undefined;
    expect(stack.top).toBe(top - 1);
    expect(stack.peek).toBe("ninja");
  });
});
