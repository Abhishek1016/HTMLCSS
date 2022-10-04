buttons=document.querySelectorAll('button');
let display=document.getElementById('display');
let screenValue='';
for(button of buttons)
{
    button.addEventListener('click',(B)=>{
        buttoncontent=B.target.innerText;
        if(buttoncontent == '=')
        {
           display.value=eval(screenValue) 
        }
        else if(buttoncontent == 'C')
        {
            screenValue="";
            display.value=screenValue;
        }
        else
        {
            screenValue=screenValue+buttoncontent;
            display.value=screenValue;
        }
    })
}
// buttoncontent=()=>
// {
//     buttontextcontent=button.target.innerText;
//     console.log(buttontextcontent);
// }