
let P = 50000;
let r = 0.10;   
let n = 1;     
let t = 3;     


let A = P * (1 + r / n) ** (n * t);

let CI = A - P;


console.log("The compound interest after 3 years is:", CI);
