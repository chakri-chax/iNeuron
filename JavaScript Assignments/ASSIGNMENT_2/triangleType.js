function triangleType(side1,side2,side3)
    {
        if (side1 == side2 && side2 == side3 && side3 == side1)//All sides are Equal
            {
                console.log("This is a EQUILATERAL Triangle..");
            }
        else if (side1 != side2 && side2 != side3 && side3!= side1)// No sides are Equal
            {
                console.log("This is a SCALANE Triangle..");
            }
        else
            {
                console.log("This is an ISOSCELES Triangle");//else part ... any two sides are Equal
            }
    }
triangleType(5,1,4);