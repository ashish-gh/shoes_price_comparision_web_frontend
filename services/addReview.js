const button = document.getElementById("addReview");
button.addEventListener('click', addReview);

function addReview(){
    
    const reviewNode = document.getElementById("review");
    const shoeId = localStorage.getItem("itemId");
    const userId = localStorage.getItem("userId");

// to validate text field if they are empty or not

    if(textValidatation(reviewNode)){
        // check users is logged or not
        if(localStorage.getItem("userId") == null){
            alert("Please login first");
            return;
        }
        addReviews(reviewNode.value, userId, shoeId)
    }  
}


function textValidatation(review){
    if(review.value.trim() == ''){
      alert("Please enter your review");
      review.focus();
      return false;
    }
    return true;
}



function addReviews(review, userId, shoeId){

    var today = new Date().toISOString().slice(0, 10)
    fetch('http://localhost:3800/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({
          review: review,
          userId: userId,
          shoesId: shoeId,
          reviewDate:today
        })
      })
      .then(response=>{
        return response.json();
      })
        .then(data => {        
            if (data.status === 'success') {
                alert('review added successfully');
            } else {
            alert('review not added');
            }
      })
      .catch(error => {
        console.log(error)
      })
      



}