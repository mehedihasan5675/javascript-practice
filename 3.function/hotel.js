// function hotelIssue(days){
//     if(days<=10){
//         let oneTo10daysCost= 500 * days;
//         return oneTo10daysCost;
//     }else if(days>10 && days<=20 ){
//         let first10daysCost =10 * 500;
//         let remainingOf11To20days = days - 10;
//         let remainingOf11To20daysCost =remainingOf11To20days * 300;
//         let firstDayTo20daysAllCost = first10daysCost + remainingOf11To20daysCost;
//         return firstDayTo20daysAllCost;
//     }else{
//         let first10daysCost =10 * 500;
//         let remainingOf11To20daysCost = 10 * 300;
//         let extraDayOf20days = days - 20;
//         let extraDayOf20daysCost = extraDayOf20days * 100;
//         let oneToExtraOf20daysAllCost = first10daysCost + remainingOf11To20daysCost + extraDayOf20daysCost;
//         return oneToExtraOf20daysAllCost;
//     }
// }
// let days = 21;
// let varhotelIssue =hotelIssue(days);
// console.log(varhotelIssue);




// with for Loop
// function hotel(days){
//     let cost =0;
//     for(i=1;i<=days;i++){
//         if(i<=10){
//             cost+= 500;
//         }else if(i<20){
//             cost += 300;
//         }else{
//             cost +=100;
//         }
//     }
//     return cost;
// }
// let hotelCostIssu = hotel(11);
// console.log(hotelCostIssu);







//second highest number output 
let numberArray = [12,22,32,41,56,85,55,26,96,57,47,99,37,29,92,75,61];
let sortOfNumber = numberArray.sort();
let secondleargestNumber;
for(i=0;i< sortOfNumber.length;i++){
    if(i== (sortOfNumber.length-2)){
        secondleargestNumber=sortOfNumber[i];
    }
}
// console.log(secondleargestNumber);


// let highestNumber= Math.max(...numberArray)
// console.log(highestNumber);











let nameOfArray= ['Mohammad','Mehedi Hasan Miraj','Sakib Al Hasan','Noralom','iqbal','salah'];
// const arraySort = nameOfArray.sort(function(a,b){
//     return a.length -b.length;
// });
// console.log(arraySort);


let leargestName =nameOfArray[0];
for(i=0;i<nameOfArray.length;i++){
    if (nameOfArray[i].length> leargestName.length){
        leargestName=nameOfArray[i];
    }
}
console.log(leargestName);






