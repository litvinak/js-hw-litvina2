let start = parseInt(prompt('Enter your first number'), 10);

if (isNaN(start)) {
    start = parseInt(prompt('Enter number again'), 10)
}

let end = parseInt(prompt('Enter your second number'), 10);

if (isNaN(end)) {
    end = parseInt(prompt('Enter number again'), 10)
}

let skipPairNumbers = confirm("Need to skip pairs?");

let sum = 0;

for (let i = start; i <= end; i++) {
    if (!skipPairNumbers) {
         sum = sum + i;
         
    }  else {
        let isEven = i % 2 !== 0
        if(skipPairNumbers && isEven) {
            sum = sum + i;
    }   
}
}


console.log(sum)

