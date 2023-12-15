let shop = document.getElementById("shop");

let shopItemsdata = [{
    id:"1234",
    name: "t shart ",
    price : 45
    , diteis : "jfjisjgpd djopos jspofkf" ,
    img : " ./image/men-s-fancy-t-shirt.jpg"

},{
    id:"1334",
    name: "fancy t shrt  ",
    price : 80
    , diteis : "jfjisjgpd djopos jspofkf" ,
    img : "./image/custom_t-shirt_men_base_26_4_2022_700x933.jpg"

},{
    id:"1284",
    name: " mens t shrt",
    price : 90
    , diteis : "jfjisjgpd djopos jspofkf" ,
    img : " ./image/pri_175_p-1687937094.webp"

},{
    id:"125",
    name: " polo t shrt ",
    price : 100 
    , diteis : "jfjisjgpd djopos jspofkf" ,
    img : " ./image/1_day_02_mufti_shot_01_005.jpg"

}]

let basket = []

let genshop =()=>  {


    return ( shop.innerHTML = shopItemsdata.map( (x)=>{
        return `
        <div  id = product-id-${x.id} class="item">
         <img  width="220"  height="330" src="${x.img}"">
         <div class="ditails">
             <h1>${x.name}</h1>
             <p>${x.diteis}</p>
             <div  class="price-quntaty">
                 <h2> $ ${x.price}</h2>
                 <div class="buttons">
                     <i  onclick ="decrement( ${x.id})" class="bi bi-dash-lg"></i>
                     <div  id = ${x.id} class="quntity">0</div>
                     <i  onclick = "
                     increment( ${x.id})" class="bi bi-plus-lg"></i>
 
                 </div>
      
                
                 </div>
                
       </div>
       </div>      
     `
 
    }).join("")


    
    )
}
genshop ()
 let increment =(id) =>{
    let search = basket.find((x )=> x.id === id ) 
 if (search=== undefined){
    basket.push ({
        id: id,
        item: 1



    })
    
 }
 else{
    search.item += 1;
 }

 
  
    console.log (basket)
    update(id)
 }
 let decrement =(id) => {
    let search = basket.find((x )=> x.id === id ) 
    if (search.item === 0){
      return
       
    }
    else{
       search.item -= 1;
    }
   
    
     
       console.log (basket)
       update(id)
 }

 let update=( id)=> {
    let search = basket.find ((x )=> x.id === id )
    
    console.log (search)
    document.getElementById(id).innerHTML= search.item
    calsi()
 }

 let calsi = ()=>{
    let icons = document.getElementById("cartvalue")
    icons.innerHTML = 100
 }










