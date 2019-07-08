
// function to assign value to model
function deleteShopModel(shopId){

    document.getElementById("shopId").value = shopId;
  // to delete shop when delete button is clicked
    const btnDeleteShop = document.getElementById("deleteShop");
    btnDeleteShop.addEventListener('click', deleteShop);
}


function deleteShop(){
 // to assign value to button
 const shopId = document.getElementById("shopId").value;

//  fetch request to delete shop
    fetch('http://localhost:3800/shop/'+shopId, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
      },
      })
      .then(data => {
        return data.json();
      })
      .then(json => {
        if (json.status === 'success') {
          window.location.href = 'store.html';                    
          //   after user has been deleted reload the page
        } else {
          alert('Shop Not Deleted');
        }
      })
      .catch(error => {
        console.log(error)
    });

}