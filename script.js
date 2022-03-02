const bar = document.getElementById('bar');
const close=document.getElementById('close');
const nav =document.getElementById('navbar');
let carts=document.querySelectorAll('cartadding');
let products=[
    {
        name:''
    }

]


for (let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',() =>{
        cartNumbers();
    })
}

function cartNumbers(){
    let productNumbers=localStorage.getItems('cartNumbers');

    productNumbers=praseInt(productNumbers);

    localStorage.setItems('cartNumbers',1);
}

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}
