
/*---------- INTERMEDIATE JS ----------*/ 

function becomeAMember()
{
    console.log("Welcome to the club! Happy Shoppping!")
}



function hideNav(){
    document.querySelector(".mainNavigation").style.display ="none";
}

var homeVid = document.querySelector(".homeVid")
homeVid.addEventListener("ended",printOnEnded)


/*---------- SHOW RATING WHEN MOUSE HOVERS OVER PICTURE ----------*/ 
function printOnEnded(){
    console.log("video ended!")
}

/*---------- SHOW RATING WHEN MOUSE HOVERS OVER PICTURE ----------*/ 
function showRating(){
    document.querySelector(".reviewCard").style.opacity = "100%";
    document.querySelector(".product-image").style.filter = "brightness(0.4)";
}

/*---------- SHOW RATING WHEN MOUSE HOVERS AWAY FROM PICTURE ----------*/ 
function hideRating(){
    document.querySelector(".reviewCard").style.opacity = "0%";
    document.querySelector(".product-image").style.filter = "brightness(1)";
}


/* ALL EVEN NUMBERS
var arr = [13, 23, 12, 45, 22, 48, 66, 100, 111, 222, 84, 2, 94, 2000, 50000, 30000000]
var arrIndex = 0
var holderArr = []; 
function evenNumbers(){
    for(var counter = 1;counter<=arr.length; counter++)
    {
        if((arr[arrIndex]%2) == 0)
        {
            holderArr.push(arr[arrIndex]);
        }
        arrIndex++;
    } 

    console.log(holderArr)
}/*


/* POMODORO - TIME MANAGEMENT CODE PART 1
var pomodoroBreak = [];
var round = 1;
function pomodoro()
{
    if((round %4) == 0)
    {
        pomodoroBreak.push("15");
    }
    else
    {
        pomodoroBreak.push("5");
    }

    round++;
}

for(var counter = 1;counter<=8;counter++)
{
    pomodoro();
}

console.log(pomodoroBreak)*/

/** OR call it using for

var counter = 1;
while(counter<=8)
{
    pomodoro();
    counter++
}

console.log(pomodoroBreak)*/

/*function PART 1

var pomodoroBreak = [];

var round = 1;

functionpomodoro()
{
    while(round<=8 ){
        if((round %4) == 0)
        {
            pomodoroBreak.push("15");
        }
        else
        {
            pomodoroBreak.push("5");
        }

        round++;
        console.log(pomodoroBreak)
    }
    
}*/




/* WORKING WITH ARRAYS

var friends = [ "Teboho", "Pouya", "Lerato", "Nombi", "Mosa"];

var x = prompt("Enter your name");

if(x = friends.includes(x))
{
    alert("You can view the document")
}
else
{
    alert("ACCESS DENIED!")
}*/


/*function multiplyNumbers()
{
    var x = prompt("Enter a Value 1", "0");
    var y = prompt("Enter a Value 2", "0");

    var num1 = parseInt(x);
    var num2 = parseInt(y);

    var calcRes = num1 * num2;

    return alert(calcRes);

}*/

/*var randomNumber = (Math.random()) * 6;
var rounded = Math.floor(randomNumber);                 OR var rounded = Math.ceil(randomNumber); Then just print the rounded var

if(rounded >= 1 && rounded <= 6)
{

    console.log("You have rolled: " + (rounded + 1))
}
else
{
    console.log("You have rolled: " + (rounded+ 1))
}*/



/*
var randomNumber = (Math.random()) * 100
console.log(randomNumber.toFixed() + "%")+/

/*  BATTLE OF THE DAY funtion() with JS

var dailyProfit = 16;
var dailyLoss = 16;
var totalMoney;
var isWinning = true;

function dailyBattle(){
    console.log("Today I made : $" + dailyProfit);
    console.log("Today I spent : $" + dailyLoss);

    totalMoney = dailyProfit - dailyLoss;

    if(totalMoney > 0){
        console.log("Total money for today is : $" + totalMoney);
        console.log("I won today's battle -= " + isWinning);
    }
    else if(totalMoney <0)
    {
        console.log("Total money for today is : -$" + totalMoney * -1 +" in losses or negatives");
        console.log("I have lost today's battle");
    }
    else if(totalMoney === 0)
    {
        console.log("Total money for today is : $" + totalMoney);
        console.log("I broke even today, I'll try again tomorrow");
    }

}

dailyBattle();*/



/*---------- ADVANCED JAVASCRIPT WITH CALCULATOR PROJECT----------*/ 
var number1Holder = "";
var number2Holder = "";
var isNumber1Ready = false;
var equalSign = document.getElementById("equal")

function createNumber(n)
{
    if(!isNumber1Ready)
    {
        number1Holder += n; //Add the strings up to make a bigger number

        //Show the numbers on the number holder... calculator screen
        document.getElementById("displayHolder").textContent = number1Holder;

    }
    else
    {
        number2Holder += n; //Add the strings up to make a bigger number

        //Show the numbers on the number holder... calculator screen
        document.getElementById("displayHolder").textContent = number2Holder;

    }
}


function add(n1, n2){
    return n1+n2
}
function subtract(n1, n2){
    return n1-n2
}
function multiply(n1, n2){
     return n1*n2
}
function divide(n1, n2){
    return n1/n2
}

function cal(p1, p2, operation){
    p2 = Number(number2Holder)
    result = operation(p1, p2)
    document.getElementById("displayHolder").textContent = result
    
}

function opAdd(){
    //converts the string to a number
    number1Holder = Number(number1Holder)
    isNumber1Ready = true;
    equalSign.setAttribute("onclick","cal(number1Holder, number2Holder, add)")
}

function opSubtract(){
    //converts the string to a number
    number1Holder = Number(number1Holder)
    isNumber1Ready = true;
    equalSign.setAttribute("onclick","cal(number1Holder, number2Holder, subtract)")
}

function opMultiply(){
    //converts the string to a number
    number1Holder = Number(number1Holder)
    isNumber1Ready = true;
    equalSign.setAttribute("onclick","cal(number1Holder, number2Holder, multiply)")
}

function opDivide(){
    //converts the string to a number
    number1Holder = Number(number1Holder)
    isNumber1Ready = true;
    equalSign.setAttribute("onclick","cal(number1Holder, number2Holder, divide)")
}

//operator can be used to replace any OPERATION function
function calculate(p1, p2, operator){
    operator(p1,p2)
}
