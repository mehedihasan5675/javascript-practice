//Module 19.5


//24 no problem

// var myBudget = 35000;
// if(myBudget>80000){
//     console.log('Ami Mac kinbo ingshaallah,Jobor hobi ingshah allah');
// }else if(myBudget>60000){
//     console.log('Ami Gaming laptop kinbo,Jobor hobi ingshah allah');
// }else if (myBudget>40000){
//     console.log('Ami Lenovo yoga kinbo .jobor test hobini ingshahallah');
// }else if (myBudget>20000){
//     console.log('Ami Puraton laptop kinbo .jobor test hobini ingshahallah');
// }else{
//     console.log('Amr Mobile Phone diye kaj chaliye nibo .jobor test hobini ingshahallah');

// }








//Problem no 25
// var monValoNei=1;
// while(monValo<40){
//     console.log(monValoNei +". Ajke amar mon valo nei");
//     monValoNei++;
// }











//problem no 29
// var num1=58;
// while(num1<99){
//     console.log(num1);
//     num1++;
// }

// for (i=58;i<99;i++){
//     console.log(i);
// }












//Problem no 30
//  var oddNumberinArray=[];
// for(i= 412;i<457;i++){
//     if(i % 2 ==0){
//         oddNumberinArray.push(i);

//     }
// }
// console.log(oddNumberinArray);












//Problem 31
// var evenNumInArray=[];
// for (i = 581; i<624;i++){
//     if(i % 2==1){
//         evenNumInArray.push(i)
//     }
// }
// console.log(evenNumInArray);







// Problem no 33
// var createdArray = ['Rahim', 'Karim', 'Abdul Jobbar', 'Tasnim', 'Rafi'];
// for(i = 0; i< createdArray.length; i++){
//     var resultcreateedArray = createdArray[i];// or direct console.log(createdArray[i])
//     console.log(i+". " + resultcreateedArray);
// }












//Problem 35
// for (i = 30; i<87; i++){
//     if(i==45){
//         break;
//     }
//     console.log(i);

//     // else if(i==50){
//     //     break;
//     // }

// }












//Problem no 36
// var bookPrice = [520, 225, 145, 55 ,77,201,512,36,541,189,165,22,111,257,138];
// var bookPriceNewUnder200=[];
// for(i=0; i<bookPrice.length;i++){
//     if(bookPrice[i]>200){
//         continue;
//     }
//     bookPriceNewUnder200.push(bookPrice[i]);
// }
// console.log(bookPriceNewUnder200);










//conceptual session class problem

//Problem no 2
// for(i=1;i<21;i++){
//     if(i%2==0){
//         console.log(i+'-'+'aita akta Jor songkha');
//     }else{
//         console.log(i+'-'+'eita akta bejor songkha')
//     }
// }












//Problem3
// var nonSerialNum = [5, 4 , 1, 2, 8, 51, 11, 6, 13, 21, 17];
// nonSerialNum.sort();
// console.log(nonSerialNum)





//problem 5
// for(i=1;i<51;i++){
//     if(i%3==0 && i%5==0){
//         console.log(i)
//     }
// }






// problem no 6

// var friends=['rahim','karimul', 'abdul', 'saddam', 'mohammad','mehedi hasan','sobhan'];
// var nameLength=0;
// var longestName;
// for(i=0;i<friends.length;i++){
//     // nameLength.push(friends[i].length);
//     // if(Math.max(friends[i].length)){
//     //     console.log(friends[i])
//     // }
//     if(friends[i].length>nameLength){
//         var nameLength=friends[i].length;
//         longestName=friends[i];
//     }
   
//    }
// console.log(longestName)


// var friendsName=['rahim','rony','majedul','tamim khan','mehedi hasan','mohammad','billal','jia',];
// var nameLength=0;
// var longestName;
// for(i=0;i<friendsName.length;i++){
//     if(friendsName[i].length > nameLength){
//         var nameLength = friendsName[i].length;
//         longestName =friendsName[i];
//     }
// }
// console.log(longestName)






// another way to solve it
// var friendsName=['rahim','rony','majedul','tamim khan','mehedi hasan','mohammad','billal','jia',];
// let nameLength=0;
// let longestName;
// for(i=0;i<friendsName.length;i++){
//     if(friendsName[i].length > nameLength){
//          nameLength = friendsName[i].length;
//         longestName =friendsName[i];
//     }
// }
// console.log(longestName)









// another way to solve it 

// var friendsName=['rahim','rony','majedul','tamim khan','mehedi hasan','mohammad','billal','jia',];
// let longestName=friendsName[0];
// for (i=0;i<friendsName.length;i++){
//     if(friendsName[i].length > longestName.length){
//          longestName=friendsName[i];
//     }
// }
// console.log(longestName)













// Problem no 7

// var number = [1,2,3,3,4,-5,-5,4,5,6,7,8,8,9,9,10];
// var uniq=0;
// var withoutDuplicate =[];
// for(i=0;i< number.length;i++){
//     if(number[i]!= uniq){ // ekhane number[i] > uniq dile (-5) negative value  asto na tai != condition dewa hoyese
//         var uniq = number[i];
//         withoutDuplicate.push(uniq)
//     }
// }
// console.log(withoutDuplicate)










// Problem no 8
// var number = [1,2,3,3,4,-5,55,4,5,6,7,8,9,10];
// var biggestNumber=Math.max(...number);
// console.log(biggestNumber)