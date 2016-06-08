module.exports = [
  {
    //calling commands: node test/index.js "hello world"
    input: ["hello world"],
    output: ["hello world"]
  },
  {
    //calling command: node test/index.js "'hello world'"
    input: ["'hello world'"],
    output: ["'hello world'"]
  },
  {
    //calling command: node test/index.js "'helloworld'"
    input: ["'helloworld'"],
    output: ["'helloworld'"]
  },
  {
    //calling command: node test/index.js 'hello world'
    input: ["'hello", "world'"],
    output: ["hello world"]
  },
  {
    //calling command: node test/index.js "hello 'world"
    input: ["hello 'world"],
    output: ["hello 'world"]
  },
  {
    //calling command: node test/index.js "hello'world"
    input: ["hello'world"],
    output: ["hello'world"]
  }
];
