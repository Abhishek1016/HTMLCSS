function addName(myMap,S,V)
{
   myMap.set(S,V)
   for( let [k,v] of myMap)
   {
    console.log(k,":",v)
   }
}
const myMap=new Map()
myMap.set("Piano","500")
addName(myMap,"Brutus","300")