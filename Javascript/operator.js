// var score = 60;
// var result = score >=60 ? " student pass" : "student fail";
// console.log(result);


var age = 22;
var citizen = false;
var eligible = true;

if(age>=18){
    if(citizen){
        if(eligible){
            console.log("you are eligible to vote");
        }
        else{
            console.log("you are not eligible due to registration");
        }
    }
    else{
        console.log("you are not eligible due to  citizenship");
    }
}
else{
    console.log("you are not eligible due to age");
}
