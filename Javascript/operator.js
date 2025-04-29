// var score = 60;
// var result = score >=60 ? " student pass" : "student fail";
// console.log(result);


// var age = 22;
// var citizen = false;
// var eligible = true;

// if(age>=18){
//     if(citizen){
//         if(eligible){
//             console.log("you are eligible to vote");
//         }
//         else{
//             console.log("you are not eligible due to registration");
//         }
//     }
//     else{
//         console.log("you are not eligible due to  citizenship");
//     }
// }
// else{
//     console.log("you are not eligible due to age");
// }


// function calc(a,b,o)
// {
//     let result;
//     switch(o){
//         case '+':
//            return result=a+b;
//             break;
//         case'-':
//        return result=a-b;
//         break;
//         case'*':
//        return result=a*b;
//         break;

//         default:
//             return("invalid operator");

//     }
// }

// console.log(calc(2,3,"*"));


const palendrome = (str) => {
let reverse = "";
for(let i = str.length-1; i>=0; i--){
 reverse = reverse + str[i];   
}
// return reverse;

 return str == reverse ? true : false;
};

console.log(palendrome("madam"));