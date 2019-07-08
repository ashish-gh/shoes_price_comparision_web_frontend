// to add functionality to addShoes button
const btnAddShoes = document.getElementById("addShoes");
btnAddShoes.addEventListener('click', addShoesDetails);

// function to add shoes
function addShoesDetails(){

  console.log("to add shoes");
  

// to get value from edit text
  const brandNameNode = document.getElementById("shoesBrand");
  const shoesNameNode = document.getElementById("shoesName")
  const shoesPriceNode = document.getElementById("shoesPrice");
  const shopNameNode = document.getElementById("shopName");
  const shoesDescriptionNode = document.getElementById("shoesDescription");
  const shoesImageName = document.getElementById("shoesImageName");

  

// to validate if text is empty or not
  if(textValidatation(brandNameNode, shoesNameNode,shoesPriceNode,shopNameNode, shoesDescriptionNode, shoesImageName)){
    // to add shoes details to database
      addShoes(brandNameNode, shoesNameNode,shoesPriceNode,shopNameNode, shoesDescriptionNode, shoesImageName);
  }  
}


// function for text validation
function textValidatation(brandName, shoesName, shoesPrice, shopName, shoesDescription ,shoesImageName){
  // to check if shoes brand is empty
  if(brandName.value.trim() == ''){
    alert("Please enter brand name");
    brandName.focus();
    return false;
  } 
  // to check if shoes name is empty
  if(shoesName.value.trim() == ''){
    alert("Please enter shoes name");
    shoesName.focus();
    return false;
  }
   // to check if shoes price is empty
   if(shoesPrice.value.trim() == ''){
    alert("Please enter shoes price");
    shoesPrice.focus();
    return false;
  }
   // to check if shop name is empty
   if(shopName.value.trim() == ''){
    alert("Please enter shop name");
    shopName.focus();
    return false;
  }
   // to check if shoes price is empty
   if(shoesDescription.value.trim() == ''){
    alert("Please enter shoes description");
    shoesDescription.focus();
    return false;
  }
   // to check if shoes price is empty
   if(shoesImageName.value.trim() == ''){
    alert("Please enter shoes image");
    shoesImageName.focus();
    return false;
  }
  return true;
}


// function to add shoes
function addShoes(brandName, shoesName, shoesPrice, shopName, shoesDescription ,shoesImageName){
    // fetch request to add shoes
    fetch('http://localhost:3800/shoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        shoesBrand: brandName.value,
        shoesName: shoesName.value,
        shoesPrice: shoesPrice.value,
        shoesDescription: shoesDescription.value,
        shoesImageName:shoesImageName.value,
        shopId:shopName.value
      })
    })
    .then(response=>{
      return response.json();
    })
      .then(data => {        
          if (data.status === 'success') {
            alert("Shoes added ")
            window.location.href = 'shoes.html';                     
          } else {
          alert('Shoes not added');
          }
    })
    .catch(error => {
      console.log(error)
    });
}


