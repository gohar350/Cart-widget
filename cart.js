let carts= document.querySelectorAll('.add-cart');
console.log('running');
let pro=[
    {
        name:'Apple Airpods',
        tag:'P1',
        price: 5,
        inCart:0
    },
    {
        name:'Basus Airdots',
        tag:'P2',
        price: 5,
        inCart:0
    },
    {
        name:'Mi Airdots',
        tag:'P3',
        price: 5,
        inCart:0
    },
    {
        name:'Samsung Buds',
        tag:'P4',
        price: 5,
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
 let procont=document.querySelector(".products");
 let cartcost=localStorage.getItem("TotalCost");
 if(cartItem && procont){
    procont.innerHTML='';
    Object.values(cartItem).map(item =>{
        procont.innerHTML += `
        <div class="product">
            <img src="./${item.tag}.jpg" >	&nbsp	&nbsp	&nbsp
            <span>${item.name}</span>	&nbsp	&nbsp	&nbsp
            <button onclick="Remove()">-</button>
        </div>   
        <div class="price">
        $${item.price},00
    </div>
    <div class="quantity">
        <span>${item.inCart}</span>
    </div>    

    <div class="total">
    <span>$${item.inCart * item.price},00</span>
</div>     

        `
    });
    
    procont.innerHTML += `
    <div class="basketTC">
<h4 class="basketT">
    Basket Total
</h4>
<h4 class="BTT">
    $${cartcost},00
</h4>
</div>

    `
    
 }
}
Displaycart();
onloadcartnumbers();



function totalcost1(pro){
    let cartcost=localStorage.getItem("TotalCost");

    if(cartcost>0){
        cartcost=parseInt(cartcost);
        localStorage.setItem("TotalCost", cartcost -pro.price);

    }
    else{
    localStorage.setItem("TotalCost" , 0);
    }
}

function cartnumber1(pro){
    console.log("Product =",pro)
    let pnumber =localStorage.getItem('cartnumber');
    pnumber=parseInt(pnumber);
    if (pnumber>0){
        localStorage.setItem('cartnumber',pnumber-1);
        document.querySelector('.cart span').textContent =pnumber-1;
    }
    else{
    localStorage.setItem('cartnumber',0);
    document.querySelector('.cart span').textContent =0;
    }
 setItem1(pro);
}

function setItem1(pro){
    console.log("setItem is Running");
    let cartItem = localStorage.getItem("ProductsInCart"); 
    cartItem= JSON.parse(cartItem); //For making Json Object
    if(cartItem !=null){
        if(cartItem[pro.tag] == undefined){
            cartItem={
                ...cartItem,
                    [pro.tag]: pro
                
            }
        }
        if(cartItem[pro.tag].inCart>0){
        cartItem[pro.tag].inCart -= 1;
        }
    }
    else{
    pro.inCart =0;
    cartItem={
        [pro.tag]: pro
    }
    }

    localStorage.setItem("ProductsInCart", JSON.stringify (cartItem));

}
function Remove(){
    console.log("We Here");
    cartnumber1(pro[1]);
    totalcost1(pro[1]);
    Displaycart();
}