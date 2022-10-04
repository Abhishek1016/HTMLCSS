function find(arr1)
{
    let count=0;
    for(let i=0;i<arr1.length-2;i++)
    {
        let j=i+1
        let k=i+2
        if(arr1[i]==arr1[k] && arr1[i]!=arr1[j])
        {
            count=count+1
        }
    }
    return count
}
const arr=[9, 5, 9, 5, 1, 1, 1]
console.log(find(arr))
const arr1=[5, 6, 6, 7, 6, 3, 9]
console.log(find(arr1))
const arr2=[4, 4, 4, 9, 9, 9, 9]
console.log(find(arr2))