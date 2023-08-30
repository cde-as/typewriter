const sentence = "hello there from lighthouse labs";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, delay);
   delay += 50;
}

// Another way to solve this problem:
// const sentence = "hello there from lighthouse labs";
// for (let i = 0; i < sentence.length; i++) {
//   setTimeout(() => {
//     process.stdout.write(sentence[i]);
//   }, 50 * i);
// }