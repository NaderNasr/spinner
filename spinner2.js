const symbolArr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '/', '-', '\\', '|', '/', '-', '\\', `\n` ];

let countdown = 0;

for (let char of symbolArr) {
  setTimeout(() => {
    
    process.stdout.write(`\r \t ${char}`);
  }, countdown);
  countdown += 400;
}