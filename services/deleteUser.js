
// function to assign value to model
function deleteUserModel(userId){

    console.log("userid" + userId);
    
    document.getElementById("userId").value = userId;
  // to delete shop when delete button is clicked
    const btnDeleteUser = document.getElementById("deleteUser");
    btnDeleteUser.addEventListener('click', deleteUser);
  }
  
  
  function deleteUser(){
  // to assign value to button
  const userId = document.getElementById("userId").value;
  
  //  fetch request to delete shop
    fetch('http://localhost:3800/users/'+userId, {
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
          window.location.href = 'users.html';                    
          //   after user has been deleted reload the page
        } else {
          alert('Shop Not Deleted');
        }
      })
      .catch(error => {
        console.log(error)
    });
  
  }