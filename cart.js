let carts= document.querySelectorAll('.add-cart');
console.log('running');
let pro=[
    {
        name:'Apple Airpods',
        tag:"Apple",
        price: 35,
        inCart:0
    },
    {
        name:'Basus Airdots',
        tag:"Basus",
        price: 22,
        inCart:0
    },
    {
        name:'Mi Airdots',
        tag:"Mi",
        price: 15,
        inCart:0
    },
    {
        name:'Samsung Buds',
        tag:"Samsung",
        price: 30,
        inCart:0
    }
    
]
for(let i=0; i<carts.length; i++){

    carts[i].addEventListener('click',() => {
        console.log('Added');
        cartnumber(pro[i]);
        totalcost(pro[i]);
    })
}

function cartnumber(pro){
    console.log("Product =",pro)
    let pnumber =localStorage.getItem('cartnumber');
    pnumber=parseInt(pnumber);
    if (pnumber){
        localStorage.setItem('cartnumber',pnumber+1);
        document.querySelector('.cart span').textContent =pnumber+1;
    }
    else{
    localStorage.setItem('cartnumber',1);
    document.querySelector('.cart span').textContent =1;
    }
    setItem(pro);
}
function onloadcartnumbers(){
    let pnumber =localStorage.getItem('cartnumber');
    if(pnumber){
        document.querySelector('.cart span').textContent =pnumber;
    }
}


function setItem(pro){
    console.log("setItem is Running");
    let cartItem = localStorage.getItem("ProductsInCart"); 
    cartItem= JSON.parse(cartItem); //For making Json Object
    if(cartItem != null){
        if(cartItem[pro.tag] == undefined){
            cartItem={
                ...cartItem,
                    [pro.tag]: pro
                
            }
        }
        cartItem[pro.tag].inCart += 1;
    }
    else{
    pro.inCart =1;
    cartItem={
        [pro.tag]: pro
    }
    }

    localStorage.setItem("ProductsInCart", JSON.stringify (cartItem));

}

function totalcost(pro){
    let cartcost=localStorage.getItem("TotalCost");

    if(cartcost !=null){
        cartcost=parseInt(cartcost);
        localStorage.setItem("TotalCost", cartcost +pro.price);

    }
    else{
    localStorage.setItem("TotalCost" , pro.price);
    }
}
function Displaycart(){
 let cartItem=localStorage.getItem("ProductsInCart");
 cartItem=JSON.parse(cartItem);
 let procont=document.querySelector(".products-container");
 if(cartItem && procont){
    procont.innerHTML="";
    Object.values(cartItem).map(item =>{

        procont.innerHTML += `
        <div class="products">
            <img src="./$(item.tag).jpg" >
            <span>$(item.name)</span>
        </div>        
        `
    })
 }
}
Displaycart();
onloadcartnumbers();
