
add=(a , b)=>{ let c=a+b; setTimeout(()=>{console.log(c);},2000);}

div=(callback,c,d)=>{   let e=c/d; setTimeout(()=>{console.log(e);},1000); callback() }

mul=(f,g)=>{ let h=f*g; setTimeout(()=>{console.log(h);},3000); }

div( function(){
    mul(10,2);
    add(5,5);
},2,2)