function findLargest(index)
{

    var list = [3,45,6,7,23,5,7,8]
    var sortedList = list.sort((a,b) => b - a);// For single lined functions we use arrow fn's 
                                                // reverse order of sorting
    console.log(sortedList[index-1]);

}
findLargest(3)


/*

************************SORTING***************************
********************** Bubble Sort *********************

var list = [3,45,6,7,23,5,7,8]
var compare = function (a,b) // comparing and swapping of two consecutive elements 
    {                          
        if (a<b)
            {
                return -1; 
            }
        else if(a<b) 
            {
                return 1;
            }
        else 
            {
                return 0;
            }
    }
var sortedList = list.sort(compare);
console.log(sortedList);
*/