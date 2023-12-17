let container=document.getElementById("productContainer");

let myData=[];

async function myProducts(){

    try {
        
        let res =await fetch(`https://fakestoreapi.com/products`);
        let data=await res.json();
        
        myData=data;
        let bag="";

        myData.forEach(ele => {
            
           bag+=`<div id="productCard">
           <img src="${ele.image}" alt="">
           <h3>${ele.title}</h3>
           <h2>Price : ${ele.price} $</h2>
           <h4> Rate : ${ele.rating.rate}⭐</h4>
           <button>Add To Cart --></button>
       </div>`

        });
        
        container.innerHTML=bag;

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

myProducts()




let select=document.getElementById("sortSelect");


select.addEventListener("change", ()=>{

  
        
        let bag="";

            myData.forEach(ele => {
            
                if(ele.category==select.value){
                bag+=`<div id="productCard">
                <img src="${ele.image}" alt="">
                <h3>${ele.title}</h3>
                <h2>Price : ${ele.price} $</h2>
                <h4> Rate : ${ele.rating.rate}⭐</h4>
                <button>Add To Cart --></button>
            </div>`
        
                }
                else{
            console.log("err")
                }
              });
      
        container.innerHTML=bag;

    
    
})

let select1=document.getElementById("sortSelect1");

select1.addEventListener("change",()=>{
        
        let bag="";


        if(select1.value=="lowTohigh"){
            myData.sort((a,b)=> a.price-b.price)
        }
        else if(select1.value=="highTolow"){
            myData.sort((a,b)=> b.price-a.price)
        }
        

        myData.forEach(ele => {
            
           bag+=`<div id="productCard">
           <img src="${ele.image}" alt="">
           <h3>${ele.title}</h3>
           <h2>Price : ${ele.price} $</h2>
           <h4> Rate : ${ele.rating.rate}⭐</h4>
           <button>Add To Cart --></button>
       </div>`

        });
        
        container.innerHTML=bag;

        console.log(myData)
   
})





