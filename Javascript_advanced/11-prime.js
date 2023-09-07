function countPrimeNumbers() {
    const start = performance.now();
  
    function isPrime(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
  
      if (num % 2 === 0 || num % 3 === 0) return false;
  
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
      }
  
      return true;
    }
  
    let count = 0;
    for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
        count++;
      }
    }
  
    const end = performance.now();
    const executionTime = end - start;
  
    console.log(`Execution time of counting prime numbers was ${executionTime} milliseconds.`);
    return count;
  }
  
  // Use a loop to call countPrimeNumbers 100 times with setTimeout
  let totalExecutionTime = 0;
  let counter = 0;
  
  function runCountPrimeNumbers() {
    const s = performance.now();
    countPrimeNumbers();
    const e = performance.now();
    totalExecutionTime += e - s;
    counter++;
  
    if (counter < 100) {
      setTimeout(runCountPrimeNumbers, 0);
    } else {
      console.log(`Execution time of calculating prime numbers 100 times was ${totalExecutionTime} milliseconds.`);
    }
  }
  

  runCountPrimeNumbers();
  