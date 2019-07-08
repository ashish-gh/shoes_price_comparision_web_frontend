
// function to assign value to model
function deleteReviewModel(reviewId){

  document.getElementById("reviewId").value = reviewId;
// to delete shop when delete button is clicked
  const btnDeleteReview = document.getElementById("deleteReview");
  btnDeleteReview.addEventListener('click', deleteReview);
}


function deleteReview(){
// to assign value to button
const reviewId = document.getElementById("reviewId").value;

//  fetch request to delete shop
  fetch('http://localhost:3800/review/'+reviewId, {
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
        window.location.href = 'review.html';                    
        //   after user has been deleted reload the page
      } else {
        alert('Shop Not Deleted');
      }
    })
    .catch(error => {
      console.log(error)
  });

}