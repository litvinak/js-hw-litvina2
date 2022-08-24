




let n = parseInt(prompt('Enter your first number'), 10);

if (isNaN(n)) {
    n = parseInt(prompt('Enter number again'), 10)
}

let m = parseInt(prompt('Enter your second number'), 10);

if (isNaN(m)) {
    m = parseInt(prompt('Enter number again'), 10)
}

let skipPairNumbers = confirm("Need to skip pairs?");

let sum = 0;

for (let i = n; i <= m; i++) {
    if (!skipPairNumbers) {
         sum = sum + i;
         
    }  else {
        if (i % 2 !== 0) {
            sum = sum + i;
    }   
}
}


console.log(sum)

