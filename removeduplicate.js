// 2.
// Write a function that takes two arrays as arguments
//  Merge both arrays and remove duplicate values
//  Sort the merge result in ascending order
//  Return the resulting array
function Function(arr1,arr2)
{
    const arr3=arr1.concat(arr2)
    const arr4=new Array( ...new Set(arr3))
    arr4.sort();
    return arr4;
}
const arr1=[1,2,3,4]
const arr2=[8,7,6,5,4]
console.log(Function(arr1,arr2))