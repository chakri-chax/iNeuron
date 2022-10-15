/*
step(1) or Creating No.of Houses 1

/_\    
|_|    =>6 sticks are used

step(2) or Creating No.of Houses 2

/_\/_\
|_| _|  =>11 sticks are used

step(3) or Creating No.of Houses 3

/_\/_\/_\
|_| _| _|   =>16 sticks are used

Ques:
    total No.of MatchSticks are requred for each step?
Logic:
    => For 1st step requrement of 6 sticks for 1 house by the Picture
    => For 2st step requrement of 11 sticks for 2 house by the Picture

    algebraic Expression like this
        let no.of steps or houses = x
        let no.of sticks req for house = 5
            Eq = x*5
                example:
                    { 
                    for 1 step 
                    x =1
                    total no.of sticks = {x * 5} => {1*5 } => 5
                    }
        but 
        we observe that shortage of 1 stick in every step
        so we add 1 stick for every step

        Equation be like this
                    {
                        Eq = (step*5) + 1
                    }

    for every step of construction increment of 5 sticks... as
    step(1) =     {1*5 +1}  =>6
    step(2) =     {2*5 +1}  =>11
    step(3) =     {3*5 +1}  =>16
    step(4) =     {4*5 +1}  =>21 ............

*/

function matchHouse(num)
    {
        let sticks = (num*5)+1
        console.log(`No.of Stickes were used : ${sticks}`);
    }
matchHouse(4)