const typeWriter = (string) => {
  let array = string.split("");
  let delay = 0;
  for(let i = 0; i < array.length; i++) {
    setTimeout(() => {
      process.stdout.write(array[i]);
    }, delay);
    delay += 100;
  }
  setTimeout(() => {
    console.log("\n");
  }, delay += 100);
}


const sentence = "hello there from lighthouse labs";
typeWriter(sentence);