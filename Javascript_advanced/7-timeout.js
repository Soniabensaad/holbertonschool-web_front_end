console.log('Start of the execution queue');

function delayedExecution() {
  console.log('Final code block to be executed');
}

setTimeout(delayedExecution, 0);

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log('End of the loop printing');
