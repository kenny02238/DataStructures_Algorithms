class Stack {
  #items = [];
  push(element) {
    this.#items.push(element);
  }
  pop() {
    return this.#items.pop();
  }
  peak() {
    return this.#items.at(-1);
  }
  isEmpty() {
    return this.#items.length === 0;
  }
  clear() {
    this.#items = [];
  }
  size() {
    return this.#items.length;
  }
}

function convert(num, base) {
  let number = num;
  let stack = new Stack();
  let string = "";
  let baseString = "0123456789ABCDEF";
  while (number > 0) {
    stack.push(number % base);
    number = Math.floor(number / base);
  }
  while (!stack.isEmpty()) {
    string += baseString[stack.pop()];
  }
  return string;
}

console.log(convert(30, 2));
