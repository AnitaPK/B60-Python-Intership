const products = [
{ id: 1, name: "Imagination", image: "https://i.pinimg.com/736x/f0/0f/a4/f00fa4b2cf6902a7e0f52a39866c60c6.jpg", description: "Lorem ipsum, dolor sit amet consectetur adipisicing.", price: 2345, quantity: 20, rating: 3 },
{ id: 2, name: "Tom Ford Ombre Leather Parfum", image: "https://i.pinimg.com/736x/f0/0f/a4/f00fa4b2cf6902a7e0f52a39866c60c6.jpg",description: "Lorem ipsum, dolor sit amet consectetur adipisicing.", price: 445, quantity: 10, rating: 5 },
{ id: 3, name: "Chance Chanel", image: "https://i.pinimg.com/736x/63/43/cd/6343cd47b821b9632a87782712fc047a.jpg", description: "Lorem ipsum, dolor sit amet consectetur adipisicing.", price: 26345, quantity: 15, rating: 2 },
{ id: 4, name: "Chance Chanel", image: "https://i.pinimg.com/736x/63/43/cd/6343cd47b821b9632a87782712fc047a.jpg", description: "Lorem ipsum, dolor sit amet consectetur adipisicing.", price: 1145, quantity: 7, rating: 1 },
{ id: 5, name: "Chance Chanel", image: "https://i.pinimg.com/736x/63/43/cd/6343cd47b821b9632a87782712fc047a.jpg", description: "Lorem ipsum, dolor sit amet consectetur adipisicing.", price: 3445, quantity: 9, rating: 4 },
{ id: 6, name: "coco Noir chanel", image: "https://i.pinimg.com/736x/ea/84/70/ea8470e34eb69a23e640e7e901e83e95.jpg", description: "Lorem ipsum, dolor sit amet consectetur adipisicing.", price: 2005, quantity: 10, rating: 3 }
]

const ROW_PRODUCT = document.getElementById('rowProducts')

const cartArray = []
//  localStorage.setItem('cartArray',JSON.stringify(cartArray))

function gotoCartPage(event){
     event.preventDefault();
    location.href = './cart.html'
}

function AddToCart(id){
    const cartArray1 = JSON.parse(localStorage.getItem('cartArray'))

    prodIndex = products.findIndex((e,i)=> e.id == id)
    
    cartArray1.push(products[prodIndex]);
    localStorage.setItem('cartArray',JSON.stringify(cartArray1))
    console.log(cartArray1);
}

function fetchProducts(){

ROW_PRODUCT.innerHTML = products.map((elmt, index) => 
    `
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card" style="width: 18rem;">
                    <img src=${elmt.image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${elmt.name}</h5>
                        <p class="card-text">${elmt.description}</p>
                        <p>Price : ₹ ${elmt.price}</p>
                        <p>Rating: ${elmt.rating}</p>
                        <button class="btn btn-primary" onclick="AddToCart(${elmt.id})">Add To Cart</button>
  </div>
</div>
</div>
    
    `).join('')
}

if(ROW_PRODUCT){
 fetchProducts();   
}

totalprice = 0

function fetchCart(){
const cartProd = document.getElementById('cartProd')

const cartFromBrowser = JSON.parse(localStorage.getItem('cartArray'))

for(i=0;i<cartFromBrowser.length;i++){
    totalprice = totalprice + cartFromBrowser[i].price
    console.log(totalprice);
}


cartProd.innerHTML = cartFromBrowser.map((elemt, i)=>`
                                    <div>
                                        <div>${elemt.name}
                                        <span class="pl-5">${elemt.price}</span>
                                        </div>
                                    </div>
`).join('');


document.getElementById('tPrice').innerHTML = totalprice;
}
if (document.getElementById('cartProd')) {
fetchCart();
}
// CRUD 

// create Read Update Delete 

// restfull api 
// post  get   

