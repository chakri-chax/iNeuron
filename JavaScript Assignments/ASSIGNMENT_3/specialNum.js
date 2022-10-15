function factorial(num)
	{
		let fact = 1;
		let i = 1;
		
		while (i<=num)
		  {
		    fact = fact*i;
		    i++;
		  }
		  return fact;
	}	

function IsSpecialNum(num)
    {   
        tempNum = num
        let sum = 0;
        while (tempNum>0)
            {
                let last_digit = tempNum % 10;
                sum += factorial(last_digit)
                tempNum = parseInt(tempNum/10)
                
            }
        if (num == sum)
            {
                console.log(`${num} is SpecialNumber`);
            }
        else
            {
                console.log(`${num} is Not SpecialNumber`);
            }
    }
IsSpecialNum(145);