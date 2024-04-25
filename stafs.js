const prompt = require("prompt-sync")({ sigint: true });

class FizzBuzz {
  constructor() {
    this.n = this.getN();
  }

  getN() {
    const n = prompt("Cik skaitļus gribat pārbaudīt: ");

    return Number(n);
  }

  run() {
    for (let i = 1; i <= this.n; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} Fizz Buzz`);
        continue
      }

      if (i % 3 == 0) {
        console.log(`${i} Fizz`);
      }

      if (i % 5 == 0) {
        console.log(`${i} Buzz`);
      }
    }
  }
}

const fb = new FizzBuzz();

fb.run();
