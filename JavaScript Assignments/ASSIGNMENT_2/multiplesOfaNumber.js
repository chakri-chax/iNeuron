//Multiples of a Number under 1000....!!

function multpleOfNum(num)
{
    let i = 0;
    let sum = 0;
    while(sum <= 1000) //range 
        {
            if (i%num==0)
                {
                    sum = sum+i;                
                }
            
                i++;       
        }
        console.log(sum);
}
multpleOfNum(5);
