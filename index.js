const message = document.getElementById("#message")
const collections = document.getElementsByClassName('aa')
let btnPLUS=Array.from(document.getElementsByClassName("btne"))
let btnMinus=Array.from(document.getElementsByClassName("btns"))
let qtes=Array.from(document.getElementsByClassName("qte"))

let trash=document.querySelectorAll(".supp")
let jaimeM=document.querySelectorAll(".jii")
let jaimeP=document.querySelectorAll(".jaa")



collections[0].style.backgroundColor= "pink"
collections[1].style.backgroundColor='purple'
collections[2].style.backgroundColor='Red '
collections[3].style.backgroundColor='Blue'
collections[4].style.backgroundColor=' orange'
collections[5].style.backgroundColor='Silver'
collections[6].style.backgroundColor='Beige '
collections[7].style.backgroundColor='Turquoise '
var sum=0

for(let i=0;i<=btnPLUS.length ;i++)
{
    btnPLUS[i].addEventListener("click", function (){
             qtes[i].innerHTML++;   
             sum=qtes[i].innerHTML*Number(document.getElementById("message").innerText)
             document.getElementById("total").innerText=sum  

    });

         
    btnMinus[i].addEventListener("click", function (){
        if( qtes[i].innerHTML>0)
        qtes[i].innerHTML--;  
        sum=qtes[i].innerHTML*Number(document.getElementById("message").innerText) 
        //affichage total
        document.getElementById("total").innerText=sum
    })



    trash[i].addEventListener("click",function (){
        trash[i].parentElement.remove()
        qtes[i].innerHTML=0
    })


    jaimeM[i].addEventListener("click",function()
    {
        if(jaimeM[i].style.fill!="red")
        {
            jaimeM[i].style.fill="red"
        }
        else
        {
            jaimeM[i].style.fill="black" 
        }
        
    })
    jaimeP[i].addEventListener("click",function()
    {
        if(jaimeP[i].style.fill!="yellow")
        {
            jaimeP[i].style.fill="yellow"
        }
        else
        {
            jaimeP[i].style.fill="black" 
        }
        
    })

}













