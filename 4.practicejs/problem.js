// 1 থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো।
// function oneToTenNumberAdd(number){
//     let sumAllNumber =0;
//     for(i=1;i<=number;i++){
//         sumAllNumber = sumAllNumber + i;
        
//     }
//     return sumAllNumber
// }
// let result = oneToTenNumberAdd(100);
// console.log(result);



// ৩ এর নামতা লিখো জাভাস্ক্রিপ্ট ব্যাবহার করে।
// function multiplicationTable(number){
//     for(i=1;i<=10;i++){
//        let multiplicationOfNumber = number * i;
//        console.log (number,' * ',i,'=',multiplicationOfNumber);
//     }
// }
// let result = multiplicationTable(3);




// এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।
// ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10]
// আউটপুটঃ 3
// function arrayOfNumber(array){
//     let counter = 0;
//     for(i=0; i< array.length;i++){
//         if(array[i]>5){
//             counter = counter + 1;
//             //  console.log(array[i]);   

//         }  
//     }

//     return counter;
// }
// let result = arrayOfNumber([-1,2,-3,4,5,6,-7,8,-9,10,12,17]);
// console.log(result);





// তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।
// function friendsName(friendOne,friendTwo){
//     if(typeof(friendOne)!=="string" || typeof(friendTwo) !== 'string' ){
//         return "please entered a valid Name";
        
//     }else{
//         let friendOneLenght = friendOne.length;
//         let friendTwoLenght = friendTwo.length;
//         if(friendOneLenght>friendTwoLenght){
//            let  addLetter = '';
//             for(i= friendOneLenght - 1; i>=0; i--){
//                 let reverseLetter = friendOne[i];
//                 addLetter = addLetter + reverseLetter;
//                 // console.log(reverseLetter);
                
//             }
//             return addLetter;
//         } else if(friendOneLenght<friendTwoLenght){
//             let  addLetter = '';
//             for(i= friendTwoLenght - 1; i>=0; i--){
//                 let reverseLetter = friendTwo[i];
//                 addLetter = addLetter + reverseLetter;
//         }
//         return addLetter
//     }else{
//         return 'Two name that you entered as input are equal length. You Should entered different length...';
        
//     }
// }
// }
// let name1 ="Mehedi Hasan";
// let name2 ="Safwan Ahmed Sizan"
// let result = friendsName(name1,name2);
// console.log(result);







//একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা।
// অব্জজেক্টটি/Input দেখতে এমনঃ

// [

//     {name:'sakib', age:30},

//     {name:'samiul', age:20},

//     {name:'sahid', age:50},

//     {name:'samin', age:10}

// ]


