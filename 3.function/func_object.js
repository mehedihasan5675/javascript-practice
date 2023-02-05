//Object ber korar niyom
let humanHas = {
    head:1,
    eyes:2,
    teeth:32,
    bones:206,
    fingure:10,
    hand:2,
    leg:2,
    noise:1
}
// console.log(humanHas.head);
// console.log(humanHas['eyes']);
// let propertyName='teeth';
// console.log(humanHas[propertyName]);



//sob property name ak sathe array te dekhar niyon
let showAllPropertyName= Object.keys(humanHas);
// console.log("showAllPropertyName", showAllPropertyName);


//sob property value ak sathe dekhar niyon
let showAllValue = Object.values(humanHas);
// console.log( showAllValue );


//set property new value
// console.log(humanHas.bones=44);
// console.log(humanHas['teeth']=34);

let changeFingureValue = 'fingure';
// console.log(humanHas[changeFingureValue]=12);





//Object a friend er name and age ase .otake ber kore dekhate hbe 

let AllFriends={
    'Mehedi Hasan':22,
    Sizan:20,
    Miraj:24,
    Shamin:21,
    Zihad:18,
    Hasan:22,
    Golam:26

}

// let AllFriendsNameOfArray = Object.keys(AllFriends);
// let AllFriendsAgeOfArray = Object.values(AllFriends);
// // console.log("AllFriendsName", AllFriendsNameOfArray);
// for(i=0;i< AllFriendsNameOfArray.length;i++){
//     let friendName= AllFriendsNameOfArray[i];
//     let friendAge=AllFriendsAgeOfArray[i];
//     console.log(friendName,'is',friendAge,'years old');  

// }


// another way to for in loop 
// for(var propertyName in AllFriends){
//     let friendName = propertyName;
//     let friendAge  =AllFriends[friendName];
    // console.log(friendName,'is',friendAge,'years Old')
// }




//function call

// 13 ghorer namtar function  console log diye
// function namta13(num){
// for(i=1;i<11;i++){
//     let numberValue =num*i;
//     console.log(num,'*',i,'=',numberValue);
// }
// }
// let namtaResult = namta13(13);




// abar korbo return diye
// function namta13(num){
//     let numberArray=[];
//     for (i=1;i<11;i++){
//        let  numberValue =num*i;
//         numberArray.push(numberValue);    
//     }
//     return numberArray; 
// }
// let namtaResult = namta13(13);
// console.log(namtaResult);







// take a name upperCase but give them lowerCase
// let getName='mehedi hasan';
// let getNameUpper = getName.toUpperCase();
// console.log('when name has inputed by our client then the name:',getNameUpper);
// function getnameASupper(getNameUpper){
//     let makeNameLower = getNameUpper.toLowerCase();
//     return makeNameLower;
// }
// let resultTOlower= getnameASupper(getNameUpper);
// console.log('when function has called then the name:',resultTOlower);








 












