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
  
  const primeCount = countPrimeNumbers();
  console.log(`Number of prime numbers between 2 and 100: ${primeCount}`);
  