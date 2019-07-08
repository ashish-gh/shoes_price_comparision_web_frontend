// to add listner to button element
const btnUpdateShoes = document.getElementById("updateShoesModel");
btnUpdateShoes.addEventListener('click', updateShoesDetail);

// to display data in model
function loadShoesModel(shoesId){
    // to assign value
    document.getElementById("shoesId").value = shoesId;

    // fetch request to get data 
    fetch('http://localhost:3800/shoes/'+shoesId, {
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
            for (var i=0; i< json.dataResult.length; i++){              
                document.getElementById("shoesBrandModel").value = json.dataResult[i].shoesBrand;
                document.getElementById("shoesNameModel").value = json.dataResult[i].shoesName;
                document.getElementById("shoesPriceModel").value = json.dataResult[i].shoesPrice;            
                document.getElementById("shopNameModel").value = json.dataResult[i].shopId;            
                document.getElementById("shoesDescriptionModel").value = json.dataResult[i].shoesDescription;
                document.getElementById("shoesImageNameModel").value = json.dataResult[i].shoesImageName;
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
function updateShoesDetail(){
    // to get values from model
    const shoesId = document.getElementById("shoesId").value;   
    const shoesBrandNode = document.getElementById("shoesBrandModel");
    const shoesNameNode = document.getElementById("shoesNameModel");
    const shoesPriceNode = document.getElementById("shoesPriceModel");
    const shopIdNode = document.getElementById("shoesNameModel");
    const shoesDescriptionNode = document.getElementById("shoesDescriptionModel");
    const shoesImageNameNode = document.getElementById("shoesImageNameModel");

  
    // to validate if text is empty or not
    if(textValidatation(shoesBrandNode, shoesNameNode, shoesPriceNode, shopIdNode, shoesDescriptionNode, shoesImageNameNode)){
        // function to update validated details

        updateShoes(shoesId, shoesBrandNode, shoesNameNode, shoesPriceNode, shopIdNode, shoesDescriptionNode, shoesImageNameNode);        
    }    
}

// function for text validation
function textValidatation(shoesBrand,shoesName, shoesPrice, shopId, shoesDescription, shoesImageName){
    // to check if shoes brand is empty
    if(shoesBrand.value.trim() == ''){
      alert("Please enter brand name");
      shoesBrand.focus();
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
      // to check if shop  is empty
     if(shopId.value.trim() == ''){
        alert("Please enter shop ");
        shopId.focus();
        return false;
      }
      // to check if shoes description is empty
     if(shoesDescription.value.trim() == ''){
        alert("Please enter shoes description");
        shoesDescription.focus();
        return false;
      }
    // to check if shoes image is empty
    if(shoesImageName.value.trim() == ''){
        alert("Please select image");
        shoesImageName.focus();
        return false;
    }
    return true;
  }


//   funcation to update detail in database
function updateShoes(shoesId,shoesBrand,shoesName, shoesPrice, shopId, shoesDescription, shoesImgName){
  
    fetch('http://localhost:3800/shoes/'+shoesId, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        shoesBrand: shoesBrand.value,
        shoesName: shoesName.value,
        shoesPrice: shoesPrice.value,
        shoesDescription: shoesDescription.value,
        shoesImageName: shoesImgName.value,
        shopId: shopId.value
      })
      })
      .then(data => {
        return data.json();
      })
      .then(json => {
        if (json.status === 'success') {
          alert("Shoes updated");
          window.location.href = 'shoes.html';                    
        } else {
          alert('Not updated');
        }
      })
      .catch(error => {
        console.log(error)
    })
}

