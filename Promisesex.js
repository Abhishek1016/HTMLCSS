///promises
/*greeting=()=>{
    return new Promise((resolve,reject)=>{
      // setTimeout(()=>{console.log("hello");},1000);       
      console.log("hello");  
      resolve();
        })
    }

learning=()=>{
    return new Promise((resolve,reject)=>{
        let errorHere=true;
        if(!errorHere)
        {
        setTimeout(()=>{console.log("Iam learning Js");},1000);
        resolve();
        }
        else
        reject("Error occured here");

       // setTimeout(()=>{console.log("Iam learning Javascript");},1000);
        //resolve();
    });
}

ending=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{console.log("Enjoying learning");},1000);
        //console.log("Enjoying learning");
        resolve();
    })
}
greeting()
.then(learning)
.then(ending).catch((err)=>{console.log("Exception : "+err)});
//learning().then(greeting).then(ending);
*/


add=(a , b)=>{ let c=a+b; return new Promise((resolve,reject)=> {
    setTimeout(()=>{console.log(c);},1000);
resolve();
})
}

div=(c,d)=>{ 
return new Promise((resolve,reject)=>{
if(d!=0)
{
    setTimeout(()=>{console.log(c/d);},1000)
    resolve();

}
else{
    reject("Error occured here");
    }
}
)
}


mul=(f,g)=>{ let h=f*g; return new Promise((resolve,reject)=> {
    setTimeout(()=>{console.log(f);},1000);
resolve();
})}

div(10,0).catch((err)=>{console.log("Exception : "+err)}).then(mul(2,2)).then(add(10,10));