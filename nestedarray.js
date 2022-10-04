/*Create a function that returns true if the first array can be nested inside the second and false otherwise.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.
*/
function compare(...args)
{
    let min=arr1[0]
    let max=arr1[0]
    for(let i=0;i<arr1.length;i++)
    {
        if(arr1[i]<min)
        {
            min=arr1[i]
        }
        if(arr1[i]>max)
        {
            max=arr1[i]
        }
    }
    let min1=arr2[0]
    let max1=arr2[0]
    for(let i=0;i<arr2.length;i++)
    {
        if(arr2[i]<min1)
        {
            min1=arr2[i]
        }
        if(arr2[i]>max1)
        {
            max1=arr2[i]
        }
    }
    console.log(min,min1,max,max1)
    if(min>min1 && max<max1)
    {
        return true;
    }
    return false;
   

}
let arr1=[4,1,2]
let arr2=[3,4,5]
console.log(compare(arr1,arr2))