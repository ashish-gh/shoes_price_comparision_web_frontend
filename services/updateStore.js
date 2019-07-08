// to add listner to button element
const btnUpdateShop = document.getElementById("updateShopModel");
btnUpdateShop.addEventListener('click', updateShopDetail);

// to display data in model
function loadShopModel(shopId){
    fetch('http://localhost:3800/shop/'+shopId, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
    },
    })
    .then(data => {
        return data.json();
    })
    .then(json => {
        
        if (json.status === 'success') {
            console.log("data retreived");

            for (var i=0; i< json.dataResult.length; i++){
                console.log(json.dataResult[i].shopDescription);

                document.getElementById("shopNameModel").value = json.dataResult[i].shopName;
                document.getElementById("shopLocationModel").value = json.dataResult[i].shopLocation;            
                document.getElementById("shopDescriptionModel").value = json.dataResult[i].shopDescription;
                document.getElementById("updateShopModel").value = json.dataResult[i].shopId;

            }        
        } else {
            console.log("Not retreived");
        }
    })
    .catch(error => {
        console.log(error)
    })
}

// function to check details for update
function updateShopDetail(){
    // to get values from model
    const shopId = document.getElementById("updateShopModel").value;   
    const shopNameNode = document.getElementById("shopNameModel");
    const shopLocationNode = document.getElementById("shopLocationModel");
    const shopDescriptionNode = document.getElementById("shopDescriptionModel");
   
    // to validate if text is empty or not
    if(textValidatation(shopNameNode, shopLocationNode, shopDescriptionNode)){
        // function to update validated details
        updateShop(shopId, shopNameNode, shopLocationNode, shopDescriptionNode);        
    }    
}

// function for text validation
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


//   funcation to update detail in database
function updateShop(shopId, shopName, shopLocation, shopDescription){
    fetch('http://localhost:3800/shop/'+shopId, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        shopName: shopName.value,
        shopLocation: shopLocation.value,
        shopDescription: shopDescription.value,
      })
      })
      .then(data => {
        return data.json();
      })
      .then(json => {
        if (json.status === 'success') {
          alert("Store Updated");
          window.location.href = 'store.html';                    
        } else {
          alert('Not updated');
        }
      })
      .catch(error => {
        console.log(error)
    })
}

