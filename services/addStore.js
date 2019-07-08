// to add functionality to addShop button
const button = document.getElementById("addShop");
button.addEventListener('click', addShopDetail);

// function to add shop
function addShopDetail(){

// to get value from edit text
  const shopNameNode= document.getElementById("shopName");
  const shopLocationNode = document.getElementById("shopLocation")
  const shopDescriptionNode = document.getElementById("shopDescription");

// to validate if text is empty or not
  if(textValidatation(shopNameNode, shopLocationNode, shopDescriptionNode)){

    // to add shop details to database
      addShop(shopNameNode, shopLocationNode, shopDescriptionNode);
  }  
}

// funcation for text validation

function textValidatation(shopName, shopLocation, shopDescription){
  // to check if shop name is empty
  if(shopName.value.trim() == ''){
    alert("Please enter shop name");
    shopName.focus();
    return false;
  } 
  // to check if shop location is empty
  if(shopLocation.value.trim() == ''){
    alert("Please enter shop location");
    shopLocation.focus();
    return false;
  }
   // to check if shop description is empty
   if(shopDescription.value.trim() == ''){
    alert("Please enter shop description");
    shopDescription.focus();
    return false;
  }
  return true;
}

function addShop (shopName, shopLocation, shopDescription){
  // fetch request to add shop
  
  fetch('http://localhost:3800/shop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        shopName: shopName.value,
        shopLocation: shopLocation.value,
        shopDescription: shopDescription.value
      })
    })
    .then(response=>{
      return response.json();
    })
      .then(data => {     

          if (data.status == 200 ) {
            window.location.href = 'store.html';                     
          } else {
          alert('Shop not added');
          }
    })
    .catch(error => {
      console.log(error)
    });
}

