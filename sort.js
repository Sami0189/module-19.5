// const person = ['ralib','sakiv','er3dsf','erds','ersr'];
// const sortedPersons = person.sort();
// console.log(sortedPersons);


//sort means sajano.


// const numbers = [2,6,4,7,3,8,1,5];

// const num = numbers.sort();
// console.log(num);



// const numbers = [2,76,4,73,37,8,1,50];
// const nums = numbers.sort(); //not working properly
// console.log(nums);




const numbers = [2,76,4,73,37,8,1,50];
const nums = [...numbers].sort(funtion(a,b) {return a - b }); 
const nums = [...numbers].sort(funtion(a,b) {return b - a }); 
console.log(nums);
/**
 * assending-->smaller to larger[1,2,3,4,5,6,7,8]
 * 
 * desecnding-->larger to smaller
 */