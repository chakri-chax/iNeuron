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

function isPrime(num)
	{
	    let i = 2;

	    while(i<=(num/2))
	      {
	        if (num%i==0)
	        {
	            return false;
                
	        }
	      	
        i++;        
	  }
    }

function primeFactorial(from,to)    
    {
        let i = from;
        while(i<=to)
            {                             
                if (isPrime(i) !=false)
                {
                    fact = factorial(i);
                    console.log("factorial of prime",i ,"is",fact);
                }
               
               i++;
            }
    }

primeFactorial(2,20)