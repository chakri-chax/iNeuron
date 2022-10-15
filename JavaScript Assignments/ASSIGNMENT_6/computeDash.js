/*
    COMPUTING DASHES 
        

    Input = 1234256477829
    output = 1234-256-4778-29 =>append dash between for every consecutive even numbers
*/


function computeDash(initNum)
{
    var str = initNum.toString();//converting num into string for accessing elements
    let i=0
    var myArr = str.split("");//convert into array
    var dashArr = ""            //empty string for appending dashes

        while(i<myArr.length)
        {
            if (myArr[i]%2 == 0 && myArr[i+1]%2 == 0)
            {
                dashArr =  dashArr.concat(myArr[i]+"-")
            }
            else
            {
                dashArr =  dashArr.concat(myArr[i])
            }
            i++
        }
    console.log(`OUTPUT : ${dashArr}`);
}
const prompt = require("prompt-sync")();
var num = prompt("Enter your Number for computing Dashes:");
computeDash(num);
