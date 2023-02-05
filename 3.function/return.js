//input will be firstname and last name and the out put is fullName with function
// function fullName(firstName,lastName){
//     let herFullName=firstName+' '+lastName;
//     return herFullName;
// }
// let fullNameResult= fullName('Mehedi','Hasan');
// console.log("fullNameResult:", fullNameResult)



// function makeSqure(numberforSqure){
//   let   numbertoSqure = numberforSqure * numberforSqure;
//   return numbertoSqure;
// }
// let resultSqure = makeSqure(6);
// console.log(resultSqure);




const pizza = {
    toppings : ['cheese','sauce','pepperoni'],
    crust:'deep dish',
    serves:2

}
let resultPizza = pizza.toppings[2];
// console.log(resultPizza);





function leapYear(years){
    if(years%4==0){
        return true;
        
    }else{
        return false;
    }
}
let resultLeapYear = leapYear(2024);
// console.log(resultLeapYear);








// let randomNumber = [5,5,6,4,4,5,7,8,18,14,21];
// function oddNumberSum(randomNumber){
//     let oddNumberSumOfArray =0;
//     for(i=0;i<randomNumber.length;i++){
//         if(randomNumber[i]%2==1){
//             oddNumberSumOfArray=oddNumberSumOfArray+randomNumber[i];
//             console.log(randomNumber[i]);
            
//         }
//     }
//     return oddNumberSumOfArray;
// }
// let oddNumberResult=oddNumberSum(randomNumber);
// console.log('The sum of odd number of the array is:',oddNumberResult);









// 7! means 7*6*5*4*3*2*1=?        how to get it

function factorialOfNum(num){
    let factorialMultiplication=1;
    for(i=num;i>=1;i--){
        factorialMultiplication=i * factorialMultiplication;
        console.log(i);
        
    }
    return factorialMultiplication;
}
let resultNumber= factorialOfNum(7);
console.log('factorial value of this number :',resultNumber);




