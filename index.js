function SumArray(params) {
    let sum = 0;
    for (i=0; i<params.length; i++) {
        sum = sum + params[i];
      }
      return sum;
    }

let s = SumArray([1,2,3,4,5]);
console.log('Sum = ' + s);
console.log('DevOps part B9.2.7 (Node.js, nmp, jquery)');