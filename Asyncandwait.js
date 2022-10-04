/*Async and await
greeting=()=>{
    setTimeout(()=>{console.log("Hello");},2000);}
    
learning=()=>{
    setTimeout(()=>{console.log("learning Javascript"); },1000);} 


ending=()=>{
    setTimeout(()=>{console.log("Enjoying learning");},1000);}



async function menu()
{
    await learning();
    await greeting();
   // await learning();
    await ending();
}
//menu();

menu().then(()=>{
    setTimeout(()=>{console.log("Everything working fine");},1000);
});
*/
add=(a , b)=>{ let c=a+b; setTimeout(()=>{console.log(c);},2000);}

div=(c,d)=>{   let e=c/d; setTimeout(()=>{console.log(e);},500) ; }

mul=(f,g)=>{ let h=f*g; setTimeout(()=>{console.log(h);}); }

async function menu()
{
    await mul(2,2);
    await div(10,5);
    await add(10,10);
}
menu();