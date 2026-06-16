

let P = 50000; 
let r = 5;     
let n = 1;    
let t = 3;    


let A = P * Math.pow((1 + (r / (100 * n))), (n * t));


let CI = A - P;

  
console.log("The compound interest after 3 years is:", Math.round(CI));