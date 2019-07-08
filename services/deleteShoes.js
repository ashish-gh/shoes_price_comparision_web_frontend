
// function to assign value to model
function deleteShoesModel(shoesId){

    console.log(shoesId);
    

    document.getElementById("shoesId").value = shoesId;
  // to delete shoes when delete button is clicked
    const btnDeleteShoes = document.getElementById("deleteShoes");
    btnDeleteShoes.addEventListener('click', deleteShoes);
}


function deleteShoes(){
 // to assign value to button
 const shoesId = document.getElementById("shoesId").value;

//  fetch request to delete shop
    fetch('http://localhost:3800/shoes/'+shoesId, {
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
          window.location.href = 'shoes.html';                    
          //   after user has been deleted reload the page
        } else {
          alert('Shop Not Deleted');
        }
      })
      .catch(error => {
        console.log(error)
    });

}