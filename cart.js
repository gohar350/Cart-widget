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
        cartnumber();
    })
}

function cartnumber(){
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
}
function onloadcartnumbers(){
    let pnumber =localStorage.getItem('cartnumber');
    if(pnumber){
        document.querySelector('.cart span').textContent =pnumber;
    }
}
onloadcartnumbers();
