const addproduct = () => {
  const productFild = document.getElementById("product-inp");
  const quantitytFild = document.getElementById("quatity-inp");
  const product = productFild.value;
  const quatity = quantitytFild.value;
  productFild.value = "";
  quantitytFild.value = "";
  console.log(product, quatity);
  displayProduct(product, quatity);
  saveProductToLocal(product,quatity)
};
const displayProduct = (product, quatity) => {
  const ul = document.getElementById("product-conatainer");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quatity}`;
  ul.appendChild(li);
};
const getStorecard =()=>{
const storecart =localStorage.getItem('cart');
let cart ={};
if(storecart){
    cart=JSON.parse(storecart);
}
return cart;
}
const saveProductToLocal=(product, quatity)=>{
  const cart=getStorecard();
  cart[product]=quatity;
  const cartSringfy =JSON.stringify(cart)
  localStorage.setItem('cart', cartSringfy)


}
const displayProductFromLocal =()=>{
  const saveCard =getStorecard();
  console.log(saveCard);
  for(const product in saveCard){
    const quatity =saveCard[product];
   
    console.log(product,quatity)
    displayProduct(product,quatity)
  }
}
displayProductFromLocal();