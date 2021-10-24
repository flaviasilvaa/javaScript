let numbers = [42, 65, 0, 9, 73, 10, 11, 44];

let valNumbers = numbers.length;

for(let i = 0; i < valNumbers; i++) {
    console.log(numbers[i]+ 10);
}


////Another example using for and if and break///////
for(let i = 0; i <= 20; i++){
    if (i%2 !== 0){
        continue;
    }
    if (i  == 10){
        break;
    }
    console.log(i);
}
