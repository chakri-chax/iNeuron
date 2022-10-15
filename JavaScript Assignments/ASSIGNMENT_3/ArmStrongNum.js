
//Check Only 3 digit ArmStrongNumber
function IsArmStrong(num)

    {  
        tempNum = num
        let sum=0
        while (tempNum > 0)
            {
               last_digit = (tempNum % 10);
               sum = sum + (last_digit * last_digit * last_digit)
               
               tempNum = parseInt(tempNum/10)
               

            }
            
        
        if (sum == num)
            {
                console.log(`${num} a ArmStrong Number`);
            }
        else
            {
                console.log(`${num} a not ArmStrong Number`);
            }
    }
IsArmStrong(153);



