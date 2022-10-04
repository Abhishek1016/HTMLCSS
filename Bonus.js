function Bonuspossible(a,b)
{
    let firstplayer=a
    let secondplayer=b
    
    if(firstplayer>secondplayer)
    {
        return false
    }
    else if(secondplayer-firstplayer<=6 && secondplayer-firstplayer>=1 )
    {
        return true
    }
    else{
        return false
    }
}
let a=5
let b=3
console.log(Bonuspossible(a,b))
let a1=3
let b1=7
console.log(Bonuspossible(a1,b1))
let a2=1
let b2=9
console.log(Bonuspossible(a2,b2))
let a3=2
let b3=13
console.log(Bonuspossible(a3,b3))// function addName({},S,V)
// {
//    myMap.set(S,V)
//    console.log(myMap)
// }
// const myMap=new Map()
// myMap.set("Piano","500")
// addName(myMap,"Brutus","300")